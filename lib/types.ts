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
  /** Short primary location for meta titles e.g. "RSPB Haweswater", "Grizedale Forest" */
  shortLocation?: string;

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

/** Species page title, e.g. "Osprey at RSPB Haweswater", "Black Grouse in the Pennines". */
export function speciesTitle(s: Pick<Species, 'commonName' | 'shortLocation'>): string {
  return `${s.commonName} ${placePhrase(s.shortLocation)}`;
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
