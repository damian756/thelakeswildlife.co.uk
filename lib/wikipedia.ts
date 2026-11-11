export interface WikiImage {
  /** 960px display version, used for the page hero (Wikimedia rejects some widths, such as 200 and 800) */
  src: string;
  /** 1280px version for a larger view (never the full-size original) */
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

/**
 * A thumbnail URL at the given width. Wikimedia serves only some widths
 * (250, 330, 500, 960 and 1280 work; 200 and 800 return HTTP 400). Built from
 * the summary's thumbnail, or from the original file when there is no
 * thumbnail, so the full-size original (often over 1 MB) is never fetched.
 */
function thumbAt(data: { thumbnail?: { source?: string }; originalimage?: { source?: string } }, width: number): string | null {
  const thumb = data.thumbnail?.source?.split("?")[0];
  if (thumb && /\/\d+px-[^/]+$/.test(thumb)) return thumb.replace(/\/\d+px-([^/]+)$/, `/${width}px-$1`);
  const original = data.originalimage?.source?.split("?")[0];
  if (!original) return thumb ?? null;
  if (/\/\d+px-[^/]+$/.test(original)) return original.replace(/\/\d+px-([^/]+)$/, `/${width}px-$1`);
  const m = original.match(/^(https:\/\/[^/]+\/wikipedia\/commons)\/([0-9a-f])\/([0-9a-f]{2})\/([^/]+)$/);
  return m ? `${m[1]}/thumb/${m[2]}/${m[3]}/${m[4]}/${width}px-${m[4]}` : original;
}

/** Lightweight thumbnail (330px) for use on species listing cards */
export async function getCardThumbnail(title: string): Promise<string | null> {
  const res = await fetchWithRetry(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
  );
  if (!res) return null;
  try {
    const data = await res.json();
    return thumbAt(data, 330);
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

    const src = thumbAt(data, 960);
    if (!src) return null;
    const fullSrc = thumbAt(data, 1280) ?? src;
    const pageUrl =
      data.content_urls?.desktop?.page ??
      `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;

    return { src, fullSrc, pageUrl };
  } catch {
    return null;
  }
}
