import fs from 'fs';
import path from 'path';
import type { Species, SpeciesCategory } from './types';
import { slugify } from './types';

const categoryToFile: Record<SpeciesCategory, string> = {
  birds: 'birds',
  insects: 'insects',
  plants: 'plants',
  mammals: 'mammals',
};

function loadSpecies(category: SpeciesCategory): Species[] {
  const filePath = path.join(process.cwd(), 'content/species', `${categoryToFile[category]}.json`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const list = JSON.parse(raw) as Omit<Species, 'id'>[];
  return list.map((s) => ({
    ...s,
    id: (s as Species).id ?? slugify(s.commonName),
  })) as Species[];
}

export function getAllSpecies(category: SpeciesCategory): Species[] {
  return loadSpecies(category);
}

export function getSpeciesBySlug(
  category: SpeciesCategory,
  slug: string
): Species | null {
  const all = loadSpecies(category);
  return all.find((s) => s.id === slug) ?? null;
}

export function getAllSlugs(category: SpeciesCategory): string[] {
  return loadSpecies(category).map((s) => s.id);
}
