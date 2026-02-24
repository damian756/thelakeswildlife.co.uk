export type SpeciesCategory = 'birds' | 'insects' | 'plants' | 'mammals';

export type ConservationStatus = 'red' | 'amber' | 'green' | 'unknown';

export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  category: SpeciesCategory;
  conservationStatus?: ConservationStatus;
  /** When you'll see it on the Sefton Coast (e.g. "October–March", "Year-round") */
  seasonalPresence: string;
  /** Where on the reserve / coast (e.g. "Marshside pools", "Saltmarsh") */
  whereToSee: string;
  description: string;
  /** Brief ID / appearance notes */
  identification?: string;
  /** Photography or viewing tips */
  tips?: string;
  /** Related species IDs for internal linking */
  relatedSpecies?: string[];
}

export const SPECIES_CATEGORIES: SpeciesCategory[] = ['birds', 'insects', 'plants', 'mammals'];

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
