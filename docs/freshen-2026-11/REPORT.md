# The Lakes Wildlife: November 2026 report

Internal report. Work done 11 Nov 2026 on `main` (after the stage 1 contact commit `a83b0c5`). Screenshots are in `docs/freshen-2026-11/screens/` (JPEG, quality 70); the text of every source used is in `docs/freshen-2026-11/sources/`, all fetched on 11 Nov 2026. Playbook: `C:\Projects\lakes-guide\docs\GUIDE-SITES-PLAYBOOK-2026-11.md` (section 9 for the Lakes sites).

## Stage 1: contact form, no email address

Live since 11 Nov 2026, commit `a83b0c5`.

**What was wrong.** The route sent mail from noreply@thelakeswildlife.co.uk, a domain with no MX record and no Resend records. It answered success without checking Resend's result, so messages were lost silently. Nothing in the message was escaped.

**What changed.**
- `lib/contact.ts` holds the delivery address (damian@churchtownmedia.co.uk) and the sender, "The Lakes Wildlife <noreply@southportguide.co.uk>", a verified domain.
- `/contact` posts to `POST /api/contact` with these fields:
  - `name`: required, max 200
  - `email`: required, validated, used as reply-to
  - `message`: required, max 5000
  - `subject`: optional, max 200
  - `website`: a hidden honeypot field
- Every typed value is escaped.
- If the key is missing or Resend refuses the message, the route answers 502 and logs only the error's name and message.
- The footer partner line, the privacy page (two places) and the terms page now point to the contact form and the registered office instead of an email address: Churchtown Media Ltd, Suite RA01, 195-197 Wood Street, London, E17 3NU.

**Proven live** by the coordinating session: a marked test message arrived. The test file is `tests/contact.test.mjs` (`npm run test:contact`), 9 checks.

## Commits after stage 1, in order

The dependency upgrade `6bb2686` was pushed on its own on 11 Nov. Then, on `main`:

| Commit | What it does |
|---|---|
| `8c485cc` | Wikimedia image widths fixed and images served through the site; `/api/p` removed |
| `8d42d48` | Fixes from the first review |
| `fa7974d` | Accessibility and layout |
| `b6fdde1` | Search and sharing |
| `9fe48f8` | Screenshots |
| `b27a281` | Whinlatter and Grizedale claims, alt text, share images, post dates |
| `e2498f0` | Dropdown buttons and contrast |
| `a66fe04` | Gallery rows |
| `665cd7b` | Screenshots |
| `3bb2a1e` | Stat strip |
| `b34126a` | Home screenshots |
| `66c130d` | Gallery title and hero line break |
| `c5aef2c` | `AGENTS.md` |

This report comes next. The privacy and terms commits come last and are held for Damian.

The stage 2 commits made before the review, including the two new posts and the visit counts, sit earlier in the same history.

## 1. What was found (ranked)

1. **A false premise repeated across the site: an RSPB osprey hide, nest and breeding pair at Haweswater.**
   - **Where it appeared:**
     - the home page;
     - `/nature/haweswater-rspb`: title, hero, stats, FAQs and an "Ospreys" section. The nav button "Visit Haweswater" leads to this page;
     - the birdwatching, woodland and seasonal guides, and `/seasonal/osprey-season`;
     - the species database (Osprey, Pied Flycatcher);
     - four blog posts.
   - **What the site said:** ospreys breed at RSPB Haweswater and are watched from a hide. You reach it from "Burnbanks car park (CA10 2LX)", staff are on hand, and non-members pay to park.
   - **What the RSPB and Wild Haweswater pages say:**
     - there are no public hides, viewpoints, RSPB trails, visitor centre, toilets or café;
     - the visitor car park is at Mardale Head and is free, with a £2 cash donation cairn;
     - ospreys are not in their wildlife lists;
     - the RSPB's first osprey chicks on an English reserve since Victorian times hatched at Campfield Marsh in June 2026.
   - The blog post `ospreys-haweswater-rspb` was built entirely on this premise.
2. **Other wrong visitor facts.** An official page contradicts each of these.
   - **Foulshaw Moss:** the postcode was LA11 6QZ; it should be LA11 6SN. The site said there is "no public transport", but the X6 stops nearby.
   - **Dodd Wood:**
     - the site described an osprey viewpoint with "telescopes and rangers April to August". The LDNPA says the nest can no longer be seen from it and the project was disbanded in 2022;
     - the site named an "Osprey Cafe". Forestry England names the Old Sawmill Tearoom.
   - **Leighton Moss:**
     - the site named a non-existent "Alan Turing hide" and said "six hides". The RSPB lists seven plus the Skytower;
     - the postcode was LA5 9TZ; it should be LA5 0SW.
   - **Grizedale:** the site said "pay and display"; it is pay on exit. It also named a "Courthouse Trail" that Forestry England's trail map does not have.
   - **Martindale road:** the site said the road runs "east through Dacre" and that there is "no road along the eastern shore". The LDNPA describes a dead-end road south from Pooley Bridge to Howtown, with a clearway; parking is only at The Hause and laybys.
   - **Deer photography:** the site advised closing in on deer at 50 to 80 m. The Dalemain Estate asks visitors to keep away from the deer, and its sanctuary may close from September to February.
   - **Haweswater golden eagle:** the site said a lone female, one chick in 1969, the male gone in 1977, last seen in 2016. The RSPB says two females and three males over 46 years, young reared in 16 years, and the last male died in 2015 after 12 years alone.
   - **Species facts:**
     - pine martens "reintroduced" to Grizedale and Whinlatter; the Vincent Wildlife Trust says natural recolonisation;
     - mountain hares on Skiddaw; the Mammal Society says only the Peak District introduction survived;
     - red kites "reintroduced in the 1990s" in Cumbria; Natural England says Grizedale, from 2010;
     - water voles "present"; the Eden Rivers Trust says they had vanished and were reintroduced from 2023;
     - the High Brown Fritillary's Morecambe Bay sites called "Lake District sites", and its decline dated to the 1970s; Butterfly Conservation says since the 1950s;
     - bittern booming season and numbers, ring ouzel arrival, vendace, dotterel plumage and otter cub season.
   - **Fishing:** the site said Windermere, Ullswater and Coniston need permits; the LDNPA says they are free with a rod licence.
   - **Geography:** Cross Fell was placed in the Lake District.
3. **Wrong dates.** Two posts were dated in the future: `winter-wildfowl-ullswater` (20 Nov 2026) and `haweswater-in-winter` (5 Dec 2026). The home "latest posts" block took the last three entries in the array, not the newest by date.
4. **Claims that could not be shown true:**
   - "Written by a fisherman who actually goes", and a first-person paragraph, "I have been fishing the Lakes for years";
   - "Real shots. No stock, no AI." The gallery photos are Wikipedia lead images downloaded by `scripts/download-wiki-images.mjs`;
   - "The Complete Guide" (Martindale), "England's Most Remote Reservoir" and "the most visited RSPB site in the Lake District";
   - many unsourced rankings: "the flagship Lake District wildlife site", "one of the best places in England", "among the finest in England", "guaranteed sightings".
5. **Judgements of named businesses and organisations:**
   - "the entry charge is worth it" (Leighton Moss) and "decent coffee";
   - "the visitor centre cafe at Whinlatter is better than you might expect";
   - the Ullswater Steamers as "the best way to see the full lake";
   - binocular brands with "under £150".
6. **The privacy page was untrue about analytics.** It named Plausible. The site loads Ahrefs Web Analytics (`app/layout.tsx`) and also loaded Vercel Analytics (`<Analytics />`). The page mentioned neither.
7. **Dev-console errors:**
   - the home page and the red deer post returned 500 in dev. Wikipedia now serves thumbnails from `thumb.wikimedia.org`, which `next.config.ts` did not allow. The live site still works from cache but would break on revalidation;
   - `/icon` returned 404: the metadata pointed at a PNG route, but the file is `app/icon.svg`;
   - a duplicate React key in the home photo gallery, where one photo was listed twice;
   - four deleted Unsplash photos returned 404 on the Haweswater, Grizedale and Ullswater pages.
8. **Typos:**
   - "Part of the The Lakes Network" (footer, contact, privacy, terms);
   - "The The Lakes Wildlife name" and "The The Lakes Network brand" (terms);
   - "Churchtown Media , part of" (contact sidebar).
9. **Em dashes in customer-facing strings:** 34 in `content/blog/posts.ts`, about 45 in `app/seasonal/[slug]/page.tsx`, and more in the fishing, upland, woodland and mammal guides and the nature pages.

**Affiliate links: none found.** I searched for:
- link parameters: `aid=`, `awin`, `affiliate`, `tag=`, `?ref=`, `pid=`, and `utm_` on booking sites;
- `rel="sponsored"`;
- Booking.com, Viator, GetYourGuide, Amazon, OS Maps and Skimlinks.

The only hit was an internal field name, `affiliateThisMonth: 0`, in the key-protected `app/api/command-centre/stats/route.ts`, which no visitor sees.

**The nav button "Visit Haweswater"** links to the site's own `/nature/haweswater-rspb` page. It is not an affiliate or paid link, and I left it as it is.

## 2. What changed

| Change | Files | Screenshots |
|---|---|---|
| Haweswater page rebuilt from the RSPB and Wild Haweswater pages: Mardale Head parking (open at all times, what3words, NY 469 107), free entry and the £2 cash cairn, no hides, toilets or café, the pre-booked badger hide (April to October) and partner woodland hide (November to June), seasons from Wild Haweswater, and the golden eagle history as the RSPB tells it. The osprey section, stats and FAQs are removed. The hero is now the repo's red squirrel photo | `app/nature/haweswater-rspb/page.tsx` | `before-nature-haweswater-rspb-*`, `after-nature-haweswater-rspb-*` |
| Leighton Moss, Foulshaw Moss, Grizedale, Ullswater and nature index pages corrected (section 1, item 2) | `app/nature/*` | `before-/after-nature-*` |
| Home, birdwatching, mammal, fishing, upland, woodland and seasonal guides corrected. The osprey season page now points to Foulshaw Moss, Esthwaite Water and Bassenthwaite as the sources describe them | `app/page.tsx`, `app/*-guide/page.tsx`, `app/*-habitats/page.tsx`, `app/seasonal/*` | `before-/after-home-*`, `-birdwatching-guide-*`, `-seasonal-osprey-season-*` |
| Blog: `ospreys-haweswater-rspb` reframed as "Where to See Ospreys in the Lake District" (URL kept, with a line saying the earlier version was wrong). Bassenthwaite osprey, golden eagle and Haweswater in winter posts rewritten from sources. Martindale retitled "A Guide to..." with road, parking and Dalemain access fixed. Corrections to the red deer, photography, bittern, ring ouzel, Blea Tarn licence, High Brown Fritillary and spring migrant posts. Future dates and rewritten posts dated 11 Nov 2026 | `content/blog/posts.ts` | `before-/after-blog-ospreys-haweswater-rspb-*`, `-haweswater-golden-eagle-*`, `-red-deer-rut-martindale-*` |
| Species data: Osprey, Red Kite, Pied Flycatcher, Red Squirrel and Pine Marten entries corrected | `content/species/birds.json`, `mammals.json` | `before-/after-birds-osprey-*` |
| Species page links: "RSPB Haweswater guide" and "Grizedale Forest guide" pointed at the birdwatching guide; they now point at the reserve pages. Bird list descriptions no longer say "Ospreys at RSPB Haweswater" | `components/SpeciesDetail.tsx`, `components/SpeciesList.tsx`, `app/birds/page.tsx` | |
| Home "latest posts" now shows the three newest by date, never a future date | `app/page.tsx` | `after-home-*` |
| Unsourced rankings, business judgements and author-experience claims (section 1, items 4 and 5) reworded or removed. "Real shots. No stock, no AI." now reads "Species photos from Wikipedia." | various | |
| Vercel Analytics removed (`<Analytics />`). Ahrefs Web Analytics kept as the only analytics. Plain visit counts added (section 7) | `app/layout.tsx` and new files | |
| Dev fixes: `thumb.wikimedia.org` allowed in `next.config.ts`; broken `icons` metadata removed so Next serves `app/icon.svg`; duplicate gallery photo replaced by the repo's red deer photo; deleted Unsplash photos replaced by repo species photos | `next.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/nature/*` | |
| Typos: "Part of The Lakes Network" (footer, contact, privacy, terms), contact sidebar stray space, terms "The The" | `components/Footer.tsx`, `app/contact/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx` | `before-/after-contact-*`, `-privacy-*`, `-terms-*` |
| Layout meta description and OG image alt no longer tie ospreys to Haweswater | `app/layout.tsx` | |
| Sitemap `lastModified` set to 2026-11-11 for every changed page | `app/sitemap.ts` | |
| Em dashes removed from every customer-facing string in every changed file. Only three remain, all in JSX code comments | all changed files | |

**Claims left unchanged.** No official page confirmed or contradicted these; they are listed for a later check:
- **Red squirrels:**
  - Grizedale feeders "at the visitor centre" (several pages);
  - Whinlatter camera feeds and a squirrel trail;
  - "largest red squirrel population in England";
  - grey squirrel control by the Red Squirrel Survival Trust.
- **Places and parking:**
  - Leighton Moss "since 1964" and its parking charges;
  - Pooley Bridge CA10 2NQ and Fell Foot LA12 8NN;
  - Blea Tarn car park LA22 9PJ, its National Trust ownership, and the "Lake District Angling Improvement Association";
  - the size of the Foulshaw car park.
- **Other:**
  - National Trust badger events;
  - Martindale church dates;
  - goldeneye numbers and timing on Ullswater;
  - a "reduced" winter steamer timetable;
  - the list of charr lakes.

## 3. The two new posts

### Wildlife Hides in and Around the Lake District
- **Slug:** `wildlife-hides-lake-district`
- **Live URL:** https://www.thelakeswildlife.co.uk/blog/wildlife-hides-lake-district
- **Search term:** "wildlife hides Lake District" (also "Leighton Moss hides", "badger hide Haweswater").
- **Why chosen:** no page on the site covers hides as such. The Haweswater osprey hide the site used to describe does not exist. Two of the hides (Leighton Moss, and the Wild Haweswater woodland hide from November) are at their most useful in winter.
- **Image:** `/images/species/mammals/badger.jpg` (already in the repo), alt "A badger in long grass".
- **Internal links:** `/nature/leighton-moss-rspb`, `/nature/haweswater-rspb`, `/nature/foulshaw-moss`, `/mammals/badger`.
- **Screenshots:** `post-blog-wildlife-hides-lake-district-1440`, `-390`.
- **Sources** (all fetched 11 Nov 2026):
  - **RSPB Leighton Moss:**
    - https://www.rspb.org.uk/days-out/reserves/leighton-moss: largest reedbed in north-west England. Sightings updated in early November: bitterns from Lower and Causeway, otters from Causeway, Lower and Lilian's, marsh harriers from most hides.
    - `/facilities`: seven hides and one viewpoint, open dawn to dusk; the hide names; the Allen and Eric Morecambe hides reached from a car park a mile away with a 2m height limit; the 9m Skytower; step-free, wheelchair accessible hides with lower windows; trails accessible except the path to Lower Hide.
    - `/charges`: members free; adult £10, student £7; 16 to 24 year olds, the first child and under-5s free; £5 if arriving by public transport or bike.
    - `/opening-times`.
  - **Wild Haweswater, visit page:** https://wildhaweswater.co.uk/visit-wild-haweswater/. No public hides or viewpoints; pre-booked hides run by the RSPB or partners; Wild Intrigue's Woodland Wildlife Hide November to June; badger hide April to October; Mardale Head.
  - **Wild Haweswater blog, new badger hide:** https://wildhaweswater.co.uk/2024/04/02/new-badger-watching-hide-at-wild-haweswater/. New hide in 2024 over an area badgers use; badgers within a metre; ramps and a parking space; booking via events.rspb.org.uk/haweswater.
  - **Forestry England:**
    - Wow Trail, https://www.forestryengland.uk/whinlatter-forest/wow-trail: nature hide; red squirrels, deer, badgers, foxes; 4.5 miles from the visitor centre (CA12 5TW); surfaced paths with no stiles, steps or gates; Bassenthwaite home to ospreys for over 20 years.
    - Whinlatter, https://www.forestryengland.uk/whinlatter: main car park 8.30am to 8.30pm.
  - **Cumbria Wildlife Trust:**
    - Foulshaw Moss, https://www.cumbriawildlifetrust.org.uk/nature-reserves/foulshaw-moss: LA11 6SN; platform 1.5 km along the boardwalk; boardwalks closed as slippery; winter harriers, snipe, teal, and red deer from the raised platform; free; small car park.
    - Osprey webcam page, https://www.cumbriawildlifetrust.org.uk/osprey-webcam: ospreys arrive at the end of March and leave by early September.
  - **RSPB news, 10 Aug 2026:** https://www.rspb.org.uk/whats-happening/news/first-ospreys-to-hatch-on-an-rspb-nature-reserve-in-england-since-victorian-times. Three chicks at Campfield Marsh in June; the platform is visible from a nearby hide.

### Temperate Rainforest in the Lake District: Where to Find It
- **Slug:** `temperate-rainforest-lake-district`
- **Live URL:** https://www.thelakeswildlife.co.uk/blog/temperate-rainforest-lake-district
- **Search term:** "temperate rainforest Lake District" (also "Borrowdale rainforest", "Naddle Forest").
- **Why chosen:** the site has no page on the subject. It is evergreen and has been searched for since Borrowdale became a National Nature Reserve. Winter is tree-planting and guided-walk season at Naddle Forest.
- **Image:** `/images/species/plants/wood-anemone.jpg` (already in the repo), alt "Wood anemones in flower among their leaves".
- **Internal links:** `/woodland-habitats`, `/nature/haweswater-rspb`, `/birds/redstart`, `/mammals/red-squirrel`.
- **Screenshots:** `post-blog-temperate-rainforest-lake-district-1440`, `-390`.
- **Sources** (all fetched 11 Nov 2026):
  - **Natural England and Defra press release,** "England's largest temperate rainforest a National Nature Reserve" (May 2024): https://www.gov.uk/government/news/englands-largest-temperate-rainforest-a-national-nature-reserve. Facts used:
    - the definition, and that rainforest covers less than 1% of England;
    - once abundant because of the oceanic climate;
    - Borrowdale: 721 ha, National Trust, the wettest inhabited place in England, with twice the rainfall in the upper valley;
    - lichens, mosses, liverworts, ancient oaks, birches and ferns;
    - redstarts, pied flycatchers and tree pipits, and a red squirrel stronghold;
    - better path access, without encouraging more visitors;
    - the temperate rainforest strategy: £750,000, covering Cornwall, Devon and Cumbria.
  - **Wild Haweswater, trees blog:** https://wildhaweswater.co.uk/2024/12/01/trees-at-wild-haweswater/. Facts used:
    - Naddle Forest is one of the last fragments in the Lake District;
    - rainforest once covered 20% of these islands, now less than 1%;
    - trees were cleared for shipbuilding, mining and grazing;
    - overgrazing, deer stalkers, grazing in low numbers, natural regeneration and the tree nursery;
    - the aim to extend Naddle Forest.
  - **Wild Haweswater, visit page** (as above):
    - Naddle Forest tours for 10 to 20 people, for a suggested donation;
    - the Meet Cumbria's Rainforest guided walk and Celebration Wood in winter;
    - autumn fungi;
    - redstarts, pied flycatchers and cuckoos in Naddle and Swindale in spring;
    - no public parking at Naddle Farm, and the Mardale Head car park.
  - The National Trust's own Borrowdale press page returned its bot check on one request and was not retried.

**Where the posts are registered:** both are in `content/blog/posts.ts`, at the head of the list. That file feeds the blog index, the post route, the RSS feed and the sitemap.

**Template change:** posts now have an optional `links` field. It is rendered as a "More on this site" box on the post page (`app/blog/[slug]/page.tsx`).

## 4. Independent review and what was done

### First pass (a83b0c5..f9d26f0)

Reviewer changed nothing, no dev server; read diffs and committed screenshots, checked each new-post fact against saved sources, re-fetched 21 source pages (all match). test:contact 9/9.

MUST
1. content/species/birds.json:38,42: osprey FAQ still says "RSPB Haweswater and Foulshaw Moss are the main sites" and "Haweswater has a hide with good views of the nest" (shown on /birds/osprey, FAQPage JSON-LD, after-birds-osprey-1440.jpg).
2. lib/wikipedia.ts:37,96 asks Wikimedia for 200/800 px widths, now rejected with HTTP 400 (200/640/800/1024 fail; 250/330/500/960/1280 work): red deer post hero, 5 /blog cards and species cards broken (after-blog-1440.jpg, after-blog-red-deer-rut-martindale-*).
3. Stock photos with false alt: skier as "Osprey returning to nest at Foulshaw Moss" (foulshaw-moss:191, and the "RSPB Haweswater" card on 4 pages); leaf as Foulshaw hero (:92); woman at sunset as Leighton Moss hero (:94); man with camera as Ullswater hero (:91) and Ullswater card (haweswater :321); kingfisher labelled "Goosander" (ullswater:230).
4. app/privacy/page.tsx:56 "No personal data is sent to Wikipedia by this site": banned phrasing, and false (blog cards BlogListClient.tsx:162 and species lightbox load from Wikimedia in the browser).
5. app/feed/route.ts:19,21: two em dashes and "Marshside RSPB" (a Southport reserve) in the RSS feed.
SHOULD
6. Hides post (posts.ts:94) "an open viewing platform rather than a hide" (CWT says "a viewing platform"; a review mentions 2 other hides); app/nature/page.tsx:70 "Nest visible from the hide".
7. Osprey post (posts.ts:187-188): egg-laying sentence is the National Park Authority's, not CWT's; "From September to March there are none to see" contradicts the Trust.
8. Leighton Moss: posts.ts:71 omits £5 for non-member children 5 to 17; FAQ (leighton-moss-rspb:30) "on the southern edge of the Lake District national park" (it is outside, in Lancashire); :311 "Parking charges apply" (RSPB lists entry charges only).
9. Grizedale squirrel feeders claimed in ~10 places (grizedale-forest:204 "Forestry England maintains them year-round"; mammals.json:127 "Grizedale and Whinlatter are grey-free"); no source; the work's own note says Forestry England does not mention them.
10. fishing-guide:148 Esthwaite "the place to go for a reliable day's trout fishing" ranks a named business.
11. app/blog/page.tsx:50 "Written by Ed" vs Damian author box; Damian bio ("Ex-army... Still gets up at five") under source-compiled posts.
12. Haweswater page at 390: copper subtitle (:98) unreadable over the new photo; info box (:159) labels run into values ("HidesBadger hide"); same row on the other 4 reserve pages.
NOTES
13. Haweswater :30/:205 nearest food "in Shap" (RSPB) vs Wild Haweswater (food within 10 minutes, Bampton, hotel); unsourced wood warbler, "redstart along the lakeshore", "genuinely wild".
14. Rainforest post posts.ts:143 Naddle tours: 10 to 20 places for people interested in the work, not for children or dogs, 2027 dates; "for groups of 10 to 20" not quite right.
15. Visit counting meets every rule, but app/api/p still accepts writes to the old table; command-centre stats reads the old table; confirm PageCount exists in production before deploy; @vercel/analytics unused.
16. foulshaw-moss:283 "holds around 15 vehicles" unsourced; saved nt-borrowdale-rainforest-nnr.txt is a bot-check page (no post relies on it).
Rules: freshen-up facts not met (1-3, 6-9, 12); claims not met (11); affiliates met; named businesses not met (10); em dashes not met (5); address met; analytics met; privacy not met (4); visit counts met; posts met except 6, 8, 14; untouched areas met. Haweswater page and osprey post: every access, parking, hide and species claim matches RSPB/Wild Haweswater/LDNPA apart from 13. Dodd Wood: every mention says the viewpoint no longer shows the nest. "More on this site" box safe. next.config thumb.wikimedia.org rule safe (https, /wikipedia/**).

### What was done about the first pass
Commits: 6398e82 Wikimedia widths, images through the site, /api/p deleted, bot-check source deleted; 6431904 content fixes; 4e0fe46 accessibility and layout; 432f1da titles, share images, sitemap dates, links to Hike The Lakes; ebcbbbe screenshots (120 JPEGs, 9.8 MB); dd48cf7 privacy and terms (cherry-picked from f9d26f0); 5b30224 privacy fixes (last).
1 osprey FAQ names Foulshaw Moss, Esthwaite Water, Bassenthwaite. 2 thumbnails 330 px, heroes 960 px (250/330/500/960/1280 work; 200/800 give 400). 3 all 7 stock photos (17 uses) replaced by repo species photos with describing alt. 4 blog cards next/image, lightbox via /_next/image, unused ImageLightbox deleted; no browser requests to Wikimedia. 5-8, 10, 14, 16 done as specified. 9 ~a dozen Grizedale feeder mentions and "grey-free" removed (no Forestry England page mentions feeders). 11 "Written by Ed" gone; Damian's bios left for him (post author box; fishing guide; seasonal pages). 12 stronger scrim, lighter kicker; gap-3/shrink-0 on 5 reserve info rows. 13 food per Wild Haweswater (Haweswater Hotel, Mardale Inn, Bampton Valley Stores, within 10 minutes' drive); unsourced lines removed. 15 app/api/p deleted. PageCount created in the DB named by lakes-wildlife/.env.local (ep-autumn-unit), which holds Hike The Lakes' 2,165 production PageView rows: the local env files of the two repos are swapped (see the database note in the report).
Privacy this round: "Wikipedia / Wikimedia Commons: species images are loaded from Wikipedia's REST API. No personal data is sent to Wikipedia by this site." -> "Wikipedia and Wikimedia Commons: our species photos come from Wikimedia Commons. They are stored on this site or served through it, so your browser does not request them from Wikimedia." Titles "Privacy Policy | The Lakes Wildlife" -> "Privacy Policy" (and Terms) since the layout adds the site name.
Improvements ranked: 1 DONE 30 min header wrapped and pushed "Visit Haweswater" off screen 768-1279 px: menu from 1024, button from 1280. 2 DONE 15 min doubled "| The Lakes Wildlife" titles. 3 DONE 30 min share images on posts, reserves, nature index, guides. 4 DONE 20 min keyboard dropdowns, aria-expanded, skip link, footer h2s. 5 DONE 15 min small grey text 2.4-3.4:1 -> ~4.9:1. 6 DONE 10 min invented sitemap species dates -> real data date. 7 DONE 20 min Haweswater page links six fells to Hike The Lakes (all 200). 8 CHECKED no broken links (45 internal, 12 external over 18 pages). 9 LEFT 30 min 13 meta descriptions over 160 chars. 10 PROPOSAL days: rewrite machine-written species copy, drop Sefton coast species (idea-birds-blue-tit-*, idea-mammals-*). 11 PROPOSAL licensed Lake District landscape photos for reserve heroes (600 px species photos stretched) (idea-nature-ullswater-*). 12 PROPOSAL half a day: Wikimedia photo credits (terms claim attribution no page shows) (idea-birds-osprey-*). 13 PROPOSAL 1 hour design call: copper 3.7:1 on light, 3.8:1 on dark (idea-home-*). 14 PROPOSAL half a day: /birds is 392 KB HTML with 160 cards; paginate or lazy render (idea-birds-*).
Checks: tsc 0; eslint 9 errors 2 warnings, none new (23/4 start, 9/3 after stage 2); test:contact 9/9; console clean on 25 pages; no em dashes.

### Second pass (a1ca79c..5b30224)
14 of 16 earlier findings fixed as asked, 2 partly. No must-fix. test:contact 9/9, tsc clean, no em dashes or addresses. Osprey FAQ and JSON-LD fixed; widths 960/330 work; browser loads only from the site and Ahrefs on /blog and a post with the lightbox; all nine replaced photos match their alt; Leighton Moss, osprey and hides wording matches sources; Haweswater food matches Wild Haweswater; Wikimedia privacy sentence exactly true; feed, "Written by Ed", Esthwaite ranking fixed; /api/p and bot-check file deleted; header hamburger to 1023 px, full menu from 1024; titles not doubled; six Hike links 200 and right fells ("Harter Fell (Mardale)" correct).
SHOULD: 1 one Grizedale feeder line left (seasonal/[slug]:141). 2 Wikimedia returns 403 to Facebook's crawler for osprey, red deer, Haweswater post og:images (blog/[slug]:19-24). 3 no og:image on home, /birds, /insects, /plants, /mammals, /blog, /fishing-guide, /seasonal and both seasonal pages; /contact Twitter only. 4 "In the Lakes" dropdown ~100 px off screen at 1024-1279 (NavMenu.tsx:74). 5 hero alts: Blea Tarn post shows a trout (posts.ts:456); Martindale guide shows a stag in woodland (:673); rut posts "at Martindale" (:225).
NOTES: 6 90% grey is 4.1:1 inside grey boxes; "Last updated" 60%; white 50% on 28 hero breadcrumbs/labels. 7 Wikimedia 429s on /blog (3 of 13), full-size originals up to 1.3 MB. 8 dropdown triggers are focusable spans with aria-haspopup, no aria-expanded; mobile aria-controls points at an element present only when open. 9 "Damian's notes" heading and bio for Damian. 10 fishing-guide:148 repeated stocking sentence; Whinlatter squirrel cameras and trail unsourced (seasonal :162, :185; posts.ts 562-579); command-centre stats reads the unwritten PageView. 11 sitemap: edited posts keep publish dates; /insects, /plants, /mammals keep February dates. 12 first blog card image 16 px taller at >=1024 (BlogListClient.tsx:161); at 768 "214 Wainwright fells" alone on the stat strip and the third latest post alone in its row; 600 px hero photos soft at 1440.

### What was done about the second pass, and the third pass

All five should-fix items and notes 6 to 12 were fixed:
- Whinlatter squirrel cameras and trail: removed after a fresh fetch of the Forestry England page.
- Blog share images: now served through the site.
- Share images: added to every main page.
- Dropdowns: now buttons, with correct aria attributes.
- Alt texts: now describe what each photo shows.
- Contrast: raised.
- Thumbnails: 960 and 330 px only.
- A repeated sentence: removed.
- Sitemap: uses each post's revised date.
- Rows at 768 and 1024: level.

A third pass (`9fe48f8..f05ad28`) found no must-fix or should-fix items. Its two notes were fixed in `66c130d`:
- The gallery was titled as Lake District photos. Screenshot: `final-home-gallery-768.jpg`.
- In the hero, "the" sat alone on a line at 1024. Screenshot: `final-home-hero-1024.jpg`.

Left for Damian: the "Damian's notes" heading and his author bio.

## 5. Suggestions for Damian (not done)

- **The species data reads as machine-made.** About 250 entries read like "That blue. Yellow. Common. Don't ignore them." The data also includes Sefton coast dune species and photos that are not Lake District subjects (sand lizard, sea holly, and Ainsdale jellyfish images under `public/images/blog/beachcombing`). A rewrite from official species pages is a bigger job. Screenshot: `before-birds-osprey-*`.
- **Image credits.**
  - The species and gallery photos are Wikipedia/Wikimedia Commons images saved into the repo, but no page shows a credit.
  - The terms page says "Attribution is provided on each species page". Either add credits or change that sentence.
  - `public/images/species/insects/emperor-moth.jpg` does not look like an emperor moth.
- **Author box on every post:** "Damian has been walking the Lake District fells for decades. Ex-army, outdoor enthusiast. Keeps a yearly bird tally. Still gets up at five." Two similar bios are on the fishing guide and the seasonal pages. All are left unchanged for you to confirm or edit.
- **Unsplash photos** remain on several nature-page cards, and some of their alt texts name places the photos may not show. Replacing them with repo photos would be a small follow-up.
- **The command centre API** (`app/api/command-centre/stats/route.ts`) still reads the old `PageView` table. It could read `PageCount` instead.
- **`PageView` still receives rows,** the latest at 17:04 UTC on 11 Nov 2026, all with path "/". They do not come from this site: no caller of `/api/p` exists in the repo or on the live home page. Possibly another project or tool uses this database URL. Left untouched, as instructed.
- **The contact page** offers "listing enquiries", but this site has no listings.
- **Winter wildfowl dates disagree:** the seasonal index says "November to February"; the wildfowl page says "October to March".

## 6. Checks run

- `npx tsc --noEmit`: 0 errors before, 0 after.
- `npx eslint .`: 23 errors and 4 warnings before, 9 errors and 3 warnings after. Nothing new. The remaining problems are old `react/no-unescaped-entities` errors, an unused variable in `scripts/clear-local-images.mjs`, and the layout's existing script rule.
- `npm run test:contact`: 9 passed, 0 failed.
- Console check (`console.mjs`) on 23 changed pages: no errors after the fixes. Before: 500s on the home page and the red deer post, the `/icon` 404, the duplicate key, and the Unsplash 404s.
- Em dash scan of every changed file: none in customer-facing strings. Three remain in JSX comments.
- Screenshots at 1440 and 390 of each changed page and both posts, checked for orphans, wraps and overflow. The two post titles were shortened after the first shots wrapped to four lines at 390.
- No email sent and no form submitted. The only database write was the `PageCount` table (section 7).

## 7. Visit counts

- **The table.**
  - Columns: `"PageCount"` has `path` (text), `day` (date) and `count` (integer, default 0), with primary key (`path`, `day`).
  - Created by the committed file `prisma/sql/2026-11-page-count.sql`, applied with `npx prisma db execute --file prisma/sql/2026-11-page-count.sql`. No `db push`, no `migrate`.
  - The model is in `prisma/schema.prisma`, and `npx prisma generate` was run.
  - Database host: `ep-autumn-unit-abzxyj9l-pooler.eu-west-2.aws.neon.tech`, which turned out to be Hike The Lakes' database (see the database note below); this site's own database also has the table.
- **Read-back.** `information_schema.columns` shows `path` text NOT NULL, `day` date NOT NULL and `count` integer NOT NULL default 0. The constraint `PageCount_pkey` is the primary key. `SELECT count(*)` returned 0 rows.
- **The beacon.** `components/VisitCount.tsx` sends the pathname (no query string) to `/api/count` with `navigator.sendBeacon` on each route change. It is rendered in the root layout only when `VERCEL_ENV === "production"`.
- **The route.** `app/api/count/route.ts` writes only in production. It drops:
  - cross-site requests (`Sec-Fetch-Site` present and not `same-origin`);
  - bots: the old `/api/p` list, plus common crawlers and tools, and empty user agents;
  - any path that is not a known page. `lib/count.ts` lists the static pages, species, posts and seasonal pages. `/api`, `/admin`, `/dashboard` and `/_next` are never counted, and paths are capped at 300 characters.

  Otherwise it runs `INSERT ... ON CONFLICT ("path","day") DO UPDATE SET "count" = "PageCount"."count" + 1` with `CURRENT_DATE`. Nothing else is stored: no cookies, no browser storage.
- **Left alone.** `PageView` and `app/api/p` are untouched.


**Database note (found and corrected on 11 Nov 2026).**

Until 19:04 UTC that day, this repo's `.env.local` named Hike The Lakes' production database (`ep-autumn-unit`), and Hike's named this site's (`ep-rapid-flower`). The coordinating session swapped them back. As a result:
- The `PageCount` table above was created in Hike's database.
- Hike's agent created the same table in this site's database (`ep-rapid-flower`). It was read back there: the tables are `PageCount` and `PageView`, and `PageCount` is empty.
- So both production databases hold the table, and counting works on both sites.

This site's `PageView` table on `ep-rapid-flower` holds 22 rows:
- 13 from 10 to 11 Mar 2026, written by the page-view middleware the site had then. It was removed on 12 Mar in `02a140e`.
- 9 test rows written on 11 Nov 2026, from 17:02:53 to 17:03:18 UTC, by a local screenshot run of Hike The Lakes that used the swapped setting. Paths: `/contact` (5) and `/privacy` (4).

The 9 test rows were left in place by decision. The key-protected `app/api/command-centre/stats` route reads `PageView`, so it shows 9 too many for November. `app/api/p` is deleted, and nothing writes to `PageView` now.

## 8. Analytics and privacy

**What loads now.** One analytics tool: Ahrefs Web Analytics (script in `app/layout.tsx`).
- Vercel Analytics (`@vercel/analytics/next`, `<Analytics />`) was removed. The package stays in `package.json` and is now unused.
- None of these were found: Google Analytics, Tag Manager, Clarity, Speed Insights, Plausible, pixels, heatmaps, chat widgets, or embeds that set cookies.
- The site sets no cookies: there is no `cookies()` or `document.cookie` in the code.

**Privacy page sentences changed** (in the last commit, on their own):

| Part | Before | After |
|---|---|---|
| Analytics | "Analytics: we use Plausible Analytics, a privacy-focused, cookieless analytics tool. Plausible does not use cookies, does not collect personal data, and is fully GDPR compliant. No data is shared with third parties." | "Ahrefs Web Analytics: page view statistics without cookies. It records the page, referrer, browser, device, language, screen size and approximate location (city level), and counts visitors with a daily pseudonymous identifier that is not kept across days." |
| Visit counts (new line) | none | "Visit counts: our own server keeps a count of views for each page: the page, the day and a number. Nothing about you is stored with it." |
| Cookies | "This site does not use cookies. Plausible Analytics is cookieless by design. No consent banner is required." | "This site does not set any cookies, and Ahrefs Web Analytics works without them. No consent banner is required." |
| Third-party services | "Plausible Analytics: cookieless, privacy-first web analytics. Plausible data policy" | "Ahrefs Web Analytics: page view statistics without cookies. Ahrefs privacy policy" (links https://ahrefs.com/legal/privacy-policy) |
| Who we are | "Part of the The Lakes Network." | "Part of The Lakes Network." |
| Date | "Last updated: February 2026" | "Last updated: November 2026" |

**Terms page sentences changed** (same commit):

| Before | After |
|---|---|
| "Part of the The Lakes Network." | "Part of The Lakes Network." |
| "The The Lakes Wildlife name, design and editorial content are the property of Churchtown Media." | "The Lakes Wildlife name, design and editorial content are the property of Churchtown Media." |
| "The The Lakes Network brand and associated trademarks belong to Churchtown Media." | "The Lakes Network brand and associated trademarks belong to Churchtown Media." |
| "Last updated: February 2026" | "Last updated: November 2026" |

## 9. Advertising today (for stage 3)

- There is no advertise page, no advert slot, no "featured" or "sponsored" card, and no paid placement anywhere on the site.
- The only commercial prompt is the footer line "Conservation group or local business? Partner with The Lakes Network", which links to the contact form (`components/Footer.tsx`).
- The contact page invites "listing enquiries".
- No prices are shown anywhere.
- The key-protected `app/api/command-centre/stats/route.ts` returns placeholder revenue fields (hub members, featured listings, affiliate), all set to 0.

## 10. Keeping it fresh

**Posting rhythm.** A realistic rhythm for this site is two posts a month, each published four to six weeks before its season.

**Each post should:**
- target one search term the site does not yet rank for;
- link to two to four of the site's own pages;
- use a photo already in the repo.

**Quarterly check.** Every quarter, check the reserve pages (parking, prices, hides) against the RSPB, Forestry England and Cumbria Wildlife Trust pages. That is where the site went most wrong.

**Next six subjects.** None duplicates an existing post, guide or species page.

| When to publish | Subject | Search term |
|---|---|---|
| Late Nov 2026 | Where to see Atlantic salmon running and spawning in Cumbria's rivers (Swindale Beck's restored channel, the Eden), and how to watch without disturbing redds | "salmon spawning Cumbria" |
| Jan 2027 | Wild Ennerdale: the long-running rewilding valley and what lives there | "Wild Ennerdale wildlife" |
| Feb 2027 | Thirlmere for wildlife: red squirrel stronghold, woods and reservoir | "Thirlmere red squirrels" |
| Mar 2027 | Bluebell woods in the Lake District: where and when (late April to May) | "bluebell woods Lake District" |
| May 2027 | The mountain ringlet: England's only mountain butterfly and where it flies in June | "mountain ringlet Lake District" |
| Summer 2027 | Beavers in Cumbria: where licensed releases and enclosures are, and what they change | "beavers Cumbria" |

## 11. Improvements, ranked

Damian, 11 Nov: "anything extra that's needed".

| # | Item | Effort | State |
|---|---|---|---|
| 1 | The header wrapped and pushed "Visit Haweswater" off screen at 768 to 1279 px. The menu now shows from 1024 and the button from 1280 | 30 min | Done |
| 2 | Titles repeated the site name: "| The Lakes Wildlife | The Lakes Wildlife" | 15 min | Done |
| 3 | No share image on posts, reserves, the nature index, guides, home, species lists, blog, fishing, seasonal and contact pages | 30 min | Done |
| 4 | Dropdowns made keyboard-usable buttons with aria-expanded; skip link; footer h2s | 20 min | Done |
| 5 | Small grey text was 2.4 to 3.4:1 and hero labels were white at 50%. Raised to about 4.9:1, with full slate inside grey boxes | 15 min | Done |
| 6 | Sitemap dates for species pages were invented, and edited posts kept their old dates | 10 min | Done |
| 7 | The Haweswater page links six fells to Hike The Lakes (all return 200) | 20 min | Done |
| 8 | Broken links | | Checked: none (45 internal, 12 external, across 18 pages) |
| 9 | 13 meta descriptions are over 160 characters | 30 min | Left |
| 10 | Rewrite the machine-written species copy and drop the Sefton coast species | days | Proposal (`idea-birds-blue-tit-*`, `idea-mammals-*`) |
| 11 | Licensed Lake District landscape photos for the reserve heroes (now 600 px species photos, stretched) | needs photos | Proposal (`idea-nature-ullswater-*`) |
| 12 | Credit the Wikimedia photos (the terms page claims attribution that no page shows) | half a day | Proposal (`idea-birds-osprey-*`) |
| 13 | The copper accent is 3.7:1 on light backgrounds and 3.8:1 on dark | 1 hour, design call | Proposal (`idea-home-*`) |
| 14 | `/birds` is 392 KB of HTML with 160 cards: paginate it or render lazily | half a day | Proposal (`idea-birds-*`) |

Screenshots: `improve-*`, `after-review-*` and `final-*`, at 1440, 1024, 768 and 390.

## 12. Dependency upgrade (`6bb2686`, live 11 Nov 2026)

`npm audit --omit=dev` showed 1 critical, 19 high and 5 moderate before the upgrade, and 0 after.

**What moved:**
- `next` and `eslint-config-next`: 16.1.6 to 16.4.6 (exact pins).
- `prisma`, `@prisma/client` and `@prisma/adapter-neon`: 7.4.2 to 7.10.1.
- `resend`: 6.9.2 to 6.38.0.
- Transitive packages, including sharp (0.34.5 to 0.35.5) and postcss (8.5.6 to 8.5.23).

No direct dependency moved a major version.

**`next.config.ts`:** the custom Cache-Control rule for `/_next/static` was removed. `next build` warned that it can break development, and Next already serves those files as immutable.

**Checked on a clean build:**
- `tsc`: 0 errors.
- `next build`: 209 pages.
- `test:contact`: 9/9.
- GitHub's NPM audit run: green.

## 13. Privacy and terms: the final wording held for Damian

Section 8 lists the stage 2 changes. Later rounds changed three more things:
- **Wikimedia sentence.** Before: "Wikipedia / Wikimedia Commons: species images are loaded from Wikipedia's REST API. No personal data is sent to Wikipedia by this site." After: "Wikipedia and Wikimedia Commons: our species photos come from Wikimedia Commons. They are stored on this site or served through it, so your browser does not request them from Wikimedia."
- **Page titles.** Now "Privacy Policy" and "Terms of Use", because the layout adds the site name.
- **"Last updated" line.** Now at full contrast.

The rest of the wording is as in section 8.
