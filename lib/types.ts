export type SpeciesCategory = 'birds' | 'insects' | 'plants' | 'mammals';

export type ConservationStatus = 'red' | 'amber' | 'green' | 'unknown';

export type ViewingDifficulty = 'easy' | 'moderate' | 'specialist';

export interface SpeciesFaq {
  question: string;
  answer: string;
}

export interface SpeciesExternalLinks {
  bto?: string;
  rspb?: string;
  iucn?: string;
  nbnatlas?: string;
  wikipedia?: string;
}

export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  category: SpeciesCategory;
  conservationStatus?: ConservationStatus;

  // Taxonomy
  order?: string;
  family?: string;

  // Presence & location
  seasonalPresence: string;
  bestTimeOfDay?: string;
  whereToSee: string;
  /** Short primary location, shown as a pill and in the meta description, e.g. "RSPB Haweswater", "Grizedale Forest" */
  shortLocation?: string;
  /**
   * Place phrase for the title and description when "in the Lake District" would overstate
   * where the species is found, e.g. "on Whitbarrow" for the high brown fritillary.
   */
  titlePlace?: string;

  // Population
  ukPopulation?: string;
  lakesPopulation?: string;

  // Ecology
  habitat?: string[];
  diet?: string;

  // Content
  description: string;
  identification?: string;
  tips?: string;

  // Viewing
  difficulty?: ViewingDifficulty;

  // Rich content
  faq?: SpeciesFaq[];

  // Related & links
  relatedSpecies?: string[];
  externalLinks?: SpeciesExternalLinks;

  /** Wikipedia article title for image fetching e.g. "Pink-footed goose" */
  wikipediaTitle?: string;

  /** Local image path served from /public, e.g. "/images/species/birds/osprey.jpg" */
  localImage?: string;

  /** Sub-group within a category e.g. "mammal" | "reptile" | "amphibian" */
  group?: string;
}

export const SPECIES_CATEGORIES: SpeciesCategory[] = ['birds', 'insects', 'plants', 'mammals'];

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * True when the species does not live in the Lake District: its page says
 * "Not found" or "None" for the Lake District, or its season starts
 * "Not found in the Lake District". Pages then leave out any line that
 * presents the species as part of the Lake District's wildlife.
 */
export function notInLakeDistrict(s: Pick<Species, 'lakesPopulation' | 'seasonalPresence'>): boolean {
  return (
    /^(not found|none)\b/i.test((s.lakesPopulation ?? '').trim()) ||
    /^not found in the lake district/i.test((s.seasonalPresence ?? '').trim())
  );
}

/**
 * The place part of a species page title, with the right preposition:
 * "in the Lake District", "on the high fells", "at Foulshaw Moss",
 * "in the Pennines". Anything not listed here takes "in".
 */
const PLACE_PHRASES: Record<string, string> = {
  'Lake District': 'in the Lake District',
  'Lakeland fells': 'on the Lakeland fells',
  'High fells': 'on the high fells',
  'Eastern fells': 'on the eastern fells',
  'Eastern Lakes': 'in the eastern Lakes',
  'Helvellyn': 'on Helvellyn',
  'Langdale Pikes': 'on the Langdale Pikes',
  'Derwent': 'on the Derwent',
  'Honister Pass': 'at Honister Pass',
  'Foulshaw Moss': 'at Foulshaw Moss',
  'RSPB Haweswater': 'at RSPB Haweswater',
  'Whitbarrow': 'on Whitbarrow',
  'Windermere': 'on Windermere',
  'Ullswater': 'on Ullswater',
  'Bassenthwaite': 'on Bassenthwaite',
  'Lakeland moorland': 'on Lakeland moorland',
  'Ambleside streams': 'on Ambleside streams',
};

export function placePhrase(shortLocation?: string): string {
  const place = shortLocation?.trim();
  if (!place) return 'in the Lake District';
  return PLACE_PHRASES[place] ?? `in ${place}`;
}

const LAKE_DISTRICT = new Set(["Lake District", ""]);

/** "See Them" for animals, "Find It" for plants, as titles and descriptions use them. */
function verbs(s: Pick<Species, "category">) {
  return s.category === "plants"
    ? { title: "Find It", see: "find it", them: "it", their: "its" }
    : { title: "See Them", see: "see them", them: "them", their: "their" };
}

/**
 * Species page title: the species and what the page answers, e.g. "Red Squirrel: Where
 * to See Them in the Lake District", "Bog Asphodel: Where to Find It in the Lake District".
 * A species not found in the Lake District names where it is ("Mountain Hare: Where to
 * See Them in the Peak District"); `titlePlace` replaces "in the Lake District" where
 * that would overstate (the high brown fritillary, on Whitbarrow at the edge). Names too
 * long for the full form keep "in the Lake District", up to about 60 characters.
 */
export function speciesTitle(
  s: Pick<Species, "commonName" | "shortLocation" | "category" | "lakesPopulation" | "seasonalPresence" | "titlePlace">
): string {
  const v = verbs(s);
  if (notInLakeDistrict(s)) return `${s.commonName}: Where to ${v.title} ${placePhrase(s.shortLocation)}`;
  if (s.titlePlace) return `${s.commonName}: Where to ${v.title} ${s.titlePlace}`;
  const full = `${s.commonName}: Where to ${v.title} in the Lake District`;
  return full.length <= 60 ? full : `${s.commonName} in the Lake District`;
}

const MONTHS = /^(January|February|March|April|May|June|July|August|September|October|November|December)\b/;

const MONTH_NAME = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/;
const runningText = (t: string) => (MONTHS.test(t) ? t : t.charAt(0).toLowerCase() + t.slice(1));

/**
 * The season line in running text, without sources in brackets: its first sentence, and the
 * second when the first is only "Year-round" and the second names months ("year-round,
 * flowers July to September").
 */
function seasonPhrase(seasonalPresence: string): string {
  const [first, second] = seasonalPresence
    .split(/\.(?:\s|$)/)
    .map((t) => t.replace(/\s*\([^)]*\)/g, "").trim())
    .filter(Boolean);
  if (/^year-round$/i.test(first) && second && second.length <= 35 && MONTH_NAME.test(second)) {
    return `year-round, ${runningText(second)}`;
  }
  return runningText(first);
}

/**
 * Species page meta description (also the WebPage description in its JSON-LD): where and
 * when, in plain words, from the page's own place, season, identification and status.
 * Parts are dropped from the end until it fits in 160 characters.
 */
export function speciesDescription(s: Species): string {
  const v = verbs(s);
  const status = s.conservationStatus && s.conservationStatus !== "unknown";
  const extras = [
    s.identification ? `how to identify ${v.them}` : null,
    status ? `${v.their} UK conservation status` : null,
  ].filter(Boolean) as string[];
  const place = s.shortLocation?.trim() ?? "";
  let build: (extra: string[]) => string;
  if (notInLakeDistrict(s)) {
    build = (extra) =>
      `${s.commonName}: not found in the Lake District. Where to ${v.see} instead (${placePhrase(place)})${extra.length ? ", " + extra.join(" and ") : ""}.`;
  } else {
    const where = s.titlePlace ? ` (${s.titlePlace})` : LAKE_DISTRICT.has(place) ? "" : ` (${placePhrase(place)})`;
    const head = s.titlePlace ? s.commonName : `${s.commonName} in the Lake District`;
    const when = s.seasonalPresence ? `, when (${seasonPhrase(s.seasonalPresence)})` : "";
    build = (extra) =>
      `${head}: where to ${v.see}${where}${when}${extra.length ? (extra.length > 1 ? ", " : " and ") + extra.join(" and ") : ""}.`;
  }
  for (let n = extras.length; n >= 0; n--) {
    const d = build(extras.slice(0, n));
    if (d.length <= 160 || n === 0) return d;
  }
  return build([]);
}

/** The fields a species list card needs (keeps list pages light). */
export type SpeciesCard = Pick<
  Species,
  "id" | "commonName" | "scientificName" | "category" | "conservationStatus" | "seasonalPresence" | "habitat" | "group" | "localImage"
>;

export function toSpeciesCard(s: Species): SpeciesCard {
  return {
    id: s.id,
    commonName: s.commonName,
    scientificName: s.scientificName,
    category: s.category,
    conservationStatus: s.conservationStatus,
    seasonalPresence: s.seasonalPresence,
    habitat: s.habitat,
    group: s.group,
    localImage: s.localImage,
  };
}
