export interface WikiImage {
  /** 800px display version — used for the page hero */
  src: string;
  /** Original full-resolution URL — used in the lightbox */
  fullSrc: string;
  /** Link back to the Wikimedia Commons page */
  pageUrl: string;
}

async function fetchWithRetry(url: string, retries = 3, delayMs = 500): Promise<Response | null> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, { next: { revalidate: 604800 } });
      if (res.ok) return res;
      if (res.status === 429 || res.status >= 500) {
        await new Promise((r) => setTimeout(r, delayMs * (attempt + 1)));
        continue;
      }
      return null;
    } catch {
      await new Promise((r) => setTimeout(r, delayMs * (attempt + 1)));
    }
  }
  return null;
}

/** Lightweight thumbnail (200px) for use on species listing cards */
export async function getCardThumbnail(title: string): Promise<string | null> {
  const res = await fetchWithRetry(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
  );
  if (!res) return null;
  try {
    const data = await res.json();
    const base: string | undefined = data.originalimage?.source ?? data.thumbnail?.source;
    if (!base) return null;
    const sized = base.replace(/\/\d+px-([^/]+)$/, "/200px-$1");
    return sized || base;
  } catch {
    return null;
  }
}

/** Try primary title, then fallback to scientific name if no image. Use for species cards. */
export async function getSpeciesCardThumbnail(
  wikipediaTitle: string | undefined,
  scientificName: string | undefined
): Promise<string | null> {
  if (wikipediaTitle) {
    const thumb = await getCardThumbnail(wikipediaTitle);
    if (thumb) return thumb;
  }
  if (scientificName) return getCardThumbnail(scientificName);
  return null;
}

/**
 * Fetch thumbnails for a batch of species with concurrency control.
 * Limits parallel Wikipedia requests to avoid rate-limiting during static builds.
 */
export async function batchFetchThumbnails(
  species: { id: string; wikipediaTitle?: string; scientificName?: string }[],
  concurrency = 5
): Promise<Map<string, string | null>> {
  const results = new Map<string, string | null>();
  const queue = [...species];

  async function worker() {
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) break;
      const src = await getSpeciesCardThumbnail(item.wikipediaTitle, item.scientificName);
      results.set(item.id, src);
      await new Promise((r) => setTimeout(r, 100));
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, species.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

export async function getWikipediaImage(title: string): Promise<WikiImage | null> {
  const res = await fetchWithRetry(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
  );
  if (!res) return null;
  try {
    const data = await res.json();

    const original: string | undefined = data.originalimage?.source;
    const thumb: string | undefined = data.thumbnail?.source;
    const base = original ?? thumb ?? null;
    if (!base) return null;

    const src = base.replace(/\/\d+px-([^/]+)$/, "/800px-$1");
    const fullSrc = original ?? src;
    const pageUrl =
      data.content_urls?.desktop?.page ??
      `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;

    return { src, fullSrc, pageUrl };
  } catch {
    return null;
  }
}
