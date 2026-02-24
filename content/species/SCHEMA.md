# Species JSON schema for Composer

Each file (`birds.json`, `insects.json`, `plants.json`, `mammals.json`) is an array of objects. Each object:

```json
{
  "commonName": "Pink-footed goose",
  "scientificName": "Anser brachyrhynchus",
  "category": "birds",
  "conservationStatus": "amber",
  "seasonalPresence": "October–March, peak November. Tens of thousands roost at Marshside.",
  "whereToSee": "Marshside RSPB lagoons and fields; Hesketh Out Marsh.",
  "description": "One or two paragraphs of plain-English description. Focus on Sefton Coast / Marshside specifically, not generic UK text.",
  "identification": "Grey-brown with pink bill and legs; smaller than greylag.",
  "tips": "Dawn and dusk for flight views. Bring binoculars.",
  "relatedSpecies": ["greylag-goose", "bean-goose"]
}
```

- **id** — Optional. If omitted, slug is generated from `commonName` (e.g. "Pink-footed goose" → `pink-footed-goose`).
- **conservationStatus** — One of: `red`, `amber`, `green`, `unknown`. Use UK lists (e.g. Birds of Conservation Concern).
- **relatedSpecies** — Optional array of slugs for internal linking.
- **category** — Must match the file: `birds` in birds.json, etc.

Be specific to the Sefton Coast and Marshside. Include real seasonal timing and locations.
