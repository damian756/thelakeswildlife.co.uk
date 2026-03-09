# Species JSON schema for Composer

Each file (`birds.json`, `insects.json`, `plants.json`, `mammals.json`) is an array of objects. Each object:

```json
{
  "commonName": "Osprey",
  "scientificName": "Pandion haliaetus",
  "category": "birds",
  "conservationStatus": "amber",
  "seasonalPresence": "April–September. Breeds at RSPB Haweswater.",
  "whereToSee": "RSPB Haweswater viewpoint hide; occasionally over larger tarns.",
  "description": "One or two paragraphs of plain-English description. Focus on the Lake District specifically, not generic UK text.",
  "identification": "Large raptor, white underparts, dark wings. Often seen carrying fish.",
  "tips": "Get to the Haweswater hide before 10am in peak season. Bring binoculars.",
  "relatedSpecies": ["peregrine-falcon", "buzzard"]
}
```

- **id** — Optional. If omitted, slug is generated from `commonName` (e.g. "Osprey" → `osprey`).
- **conservationStatus** — One of: `red`, `amber`, `green`, `unknown`. Use UK lists (e.g. Birds of Conservation Concern).
- **relatedSpecies** — Optional array of slugs for internal linking.
- **category** — Must match the file: `birds` in birds.json, etc.

Be specific to the Lake District. Include real seasonal timing and locations (Haweswater, Grizedale, Leighton Moss, Martindale, etc.).
