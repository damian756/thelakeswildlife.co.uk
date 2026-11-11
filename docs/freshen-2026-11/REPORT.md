# The Lakes Wildlife: November 2026 report

**Standing rule** (Damian, 11 Nov 2026): "their only goal is to drive traffic, we dont need to focus much on conversion, but just raw numbers. Having high traffic is what will sell the advert space locally". Every choice is judged by visits from search; see "Traffic: what to do next" (added by the SEO pass).

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

This report's first version, `9e31ba2`, was pushed with those.

**Later on 11 Nov (Damian's decisions through the coordinating chat):**

| Commit | What it does |
|---|---|
| `fd1b011` | Species list pages lighter: `/birds` HTML 357.5 KB to 164.5 KB; cards render as you scroll; every species linked A to Z |
| `ce5fa8b` | Every Wikimedia Commons photo credited from Commons metadata (`scripts/build-photo-credits.mjs`, `content/species/photo-credits.json`, the `/photo-credits` page); the emperor moth photo replaced with a real emperor moth (Saturnia pavonia, jean-pierre Hamon, CC BY-SA 3.0) |
| `8d7fc89` | Copper accent at 4.5:1 or better: `#7F4D1D` on light, `#C8884A` on dark |
| `e4ba028` | Screenshots, hero photo candidates, range sources |
| `5e6c110` | 19 photos replaced with identified Commons files at the same paths (each Commons description names the species); 7 of 8 missing authors read from the file pages; round-leaved wintergreen is an 1885 plate |
| `756f6b7` | Four species pages say plainly where each is and is not found (mountain hare, black grouse, Scotch argus, high brown fritillary) |
| `079b609` | 177 unused Sefton coast species images deleted (nothing referenced them) |
| `d3e7e31` | Real, credited Geograph photographs (CC BY-SA 2.0) as the Haweswater, Leighton Moss and Foulshaw Moss heroes |
| `b75bf3e` | Generated illustrations as the home, Grizedale, Ullswater and five section heroes |
| `df39674` | Screenshots `heroes-*` |
| `c07be24`, `3a024de`, `f71e2d9`, `f72d6cb` | Advertising, stage B (section 9) |
| `398e8cb` to `9e46ead` | Final review fixes (section 4), the London region line and `fix-*` screenshots |
| this report | |
| four privacy and terms commits, then one terms commit | last (section 13) |
| `278c5cc` to `bdcdbaf`, then the SEO report, then one privacy and terms link commit | SEO pass on top of the live tip `1bed7b9` (section 18) |

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

### Final review (`9e31ba2..2edead8`) and what was done
An independent reviewer read the range, checked 31 Commons file pages (all 19 replaced photos show the named species; authors and licences match), scrolled every species list at 390 and 1440, fetched every image path in the sitemap (all exist; the 11 remote heroes return 200) and counted adverts on every sitemap page. tsc clean, `test:contact` 9/9, tests 23/23.

| # | Severity | Finding | Done |
|---|---|---|---|
| 1 | Must | High brown fritillary said "not found in the Lake District"; Cumbria Wildlife Trust lists it breeding on Whitbarrow, a Lake District fell | `398e8cb`: breeds on Whitbarrow (the Lake District's southern edge) and flies at Arnside Knott; one flight period (June to August, mostly July) on the page and the post; unsupported details removed; sources saved |
| 2 | Must | Species boilerplate ("Its presence in the Lake District is important") contradicted the four corrected pages; Scotch argus marked green though GB Red List Vulnerable; titles like "Black Grouse at the Pennines" | `748e745`: no Lake District line for species not found here; Scotch argus amber; titles take the right preposition ("Black Grouse in the Pennines", "Osprey at Foulshaw Moss") |
| 3 | Must | Dark copper on the dark advertise header and bundle card, 2.36:1 | `fa24946`: copper-light, 5.59:1 |
| 4 | Must | Terms: "Illustrations on this site are computer-generated" was untrue of three 19th-century botanical plates; the terms restricted all images in ways the CC licences forbid | `66d3bf0` credits the plates as illustrations with book and year; the terms commit says "The scene illustrations at the top of some pages are computer-generated. Species photographs and botanical plates are credited to their makers on each page and on the Photo credits page." and that Commons and Geograph images keep their own licences |
| 5 | Must | End-of-post advert on posts that name businesses | `db9cd3e`: off five posts (ospreys at Bassenthwaite and Haweswater, winter wildfowl at Ullswater, the Martindale red deer rut, Haweswater in winter); the ads test fails if a post with the space names a business; the winter wildfowl guide's space is never to be sold to the Ullswater Steamers |
| 6 | Should | Goldeneye credited to a Flickr URL | `66d3bf0`: "Photo: Stefan Berndtsson, CC BY 2.0, via Wikimedia Commons"; the credits script flags any author that is only a link |
| 7 | Should | Grizedale and Ullswater illustrated heroes: kicker 2.2 to 2.8:1 | `dfa68ca`: darker overlay; the weakest text is 5.30:1 at 390 and 1440 |
| 8 | Should | Flight periods unsourced and inconsistent | Fixed with item 1 (read from Butterfly Conservation's lifecycle chart; note in `sources/`) |
| 9 | Should | Winter wildfowl space under a named boat company | Code note added (item 5) |
| 10 | Note | Black grouse "not found" is an inference from the RSPB range list | Left: the wording is the safe one |
| 11 | Note | `/advertise` not counted | `7975e54` |
| 12 | Note | Stage B's own departures (winter wildfowl space, one shared post sponsor, section spaces on list pages only, daily rebuild) | Sound, kept |

Also: `4104452` adds `vercel.json` with `{ "regions": ["lhr1"] }`. Live responses showed `lhr1::iad1` (the server code ran in Washington while the database is in London); after the deploy `/api/count` should answer `lhr1::lhr1`, or the line is reverted.

## 5. Suggestions for Damian

Done since this list was written: image credits on every photo and the `/photo-credits` page (the terms' attribution claim is now true); the emperor moth photo; the Unsplash cards (replaced earlier with repo photos); the copper contrast; the "listing enquiries" wording. Still open: the species copy rewrite (section 17), the author bios, the command centre reading `PageView`, and the winter wildfowl dates.

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

## 9. Advertising (stage B, approved by Damian: "Yes, go with it")

**Before:** no advertise page, no spaces, no prices; the footer's "Partner with The Lakes Network" went to the contact form.

**Now, https://www.thelakeswildlife.co.uk/advertise**, every price plus VAT:

| Option | Price |
|---|---|
| Section sponsor (Birds, Mammals, Insects, Plants, Seasonal or the Fishing guide) | £35 a month, 3 months minimum |
| Birdwatching guide sponsor | £35 a month, 3 months minimum |
| Home page card | £39 a month, 3 months minimum |
| Sponsored article | £99, one-off, live for 12 months |
| Winter birds package (Birds section plus the winter wildfowl guide) | £79, November to February, one payment |
| Lakes network bundle | £99 a month, 3 months minimum |

The page also carries the founding offer word for word ("For the first ten advertisers across the Lakes network sites: half price for your first three months, and your monthly price held for twelve months."), How it works and Where adverts never appear. No email address, no traffic or audience claims; every button goes to /contact (the form has no enquiry type).

**Spaces** (at most one per page, all empty today):
- home, after the latest posts;
- /birds, /mammals, /insects and /plants, after the species list; /seasonal after the guides;
- /fishing-guide and /birdwatching-guide, after the FAQs;
- /seasonal/winter-wildfowl, before the author box (sold as the winter package; never to a business the page names);
- species and seasonal posts that name no business, before the author box (one shared sponsor at the section price).

**No adverts on:** the `/nature/*` reserve pages, contact, privacy, terms, advertise, the 404, and the five posts that name businesses.

**To put an advert live** (after the invoice is paid): set `sponsor` on the slot in `lib/ad-slots.ts` and deploy. Pages with a space rebuild daily, so a lapsed sponsor drops off within a day. Sponsored posts are labelled on home and blog cards and their feed title starts "Sponsored:". `tests/ads.test.mjs` (npm run test:ads) fails if a sponsor is committed, a price lacks "plus VAT", a space lands on a no-advert page or a post with the space names a business.

**Footer:** "Partner with The Lakes Network" now goes to /advertise.

**Price recheck:** look at the prices again in three months (mid-February 2027), against what has sold and how much of the founding offer has been used.

**Screenshots:** `ads-*` (the advertise page, a named space, each space type empty, the home card with a temporary example sponsor set back to null before commit), `fix-*`.

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
| 11 | Licensed Lake District landscape photos for the reserve heroes (now 600 px species photos, stretched) | needs photos | Done: Geograph photos for Haweswater, Leighton Moss and Foulshaw Moss (`d3e7e31`); illustrations for Grizedale, Ullswater, home and the sections (`b75bf3e`, section 15) |
| 12 | Credit the Wikimedia photos (the terms page claims attribution that no page shows) | half a day | Done (`ce5fa8b`, `5e6c110`, `66d3bf0`; section 14) |
| 13 | The copper accent is 3.7:1 on light backgrounds and 3.8:1 on dark | 1 hour, design call | Done (`8d7fc89`, `fa24946`) |
| 14 | `/birds` is 392 KB of HTML with 160 cards: paginate it or render lazily | half a day | Done (`fd1b011`) |

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

**Final wording, approved by Damian ("go with your suggestions"), in the last commits:**
- Ahrefs: "Ahrefs Web Analytics: page view statistics without cookies. It records the page address (including any query string), the referring page, your browser, operating system and device, screen size and language, and when a link is clicked or a form is sent. It uses your IP address to work out your approximate location (city level) and a daily visitor ID that cannot be linked across days; the IP address itself is discarded, not stored." (checked against Ahrefs' help page; a short Ahrefs line with its privacy policy link stays in the third-party list).
- Terms: "The scene illustrations at the top of some pages are computer-generated. Species photographs and botanical plates are credited to their makers on each page and on the Photo credits page.", and Commons and Geograph photographs and plates keep their own licences, shown with each credit.

## 14. Photo credits

- Every Wikimedia Commons photo on the site carries a credit built from Commons metadata (`scripts/build-photo-credits.mjs` writes `content/species/photo-credits.json`): author, licence (linked) and "via Wikimedia Commons" (linked to the file page). `/photo-credits` lists them all; the footer links to it.
- 19 photos whose Commons file did not show or name the species were replaced, at the same path and width, by the species' current Wikipedia lead image. For 7 of 8 files with no author in the metadata, the author came from the file page's own text. The three 19th-century botanical plates (bilberry, tormentil, round-leaved wintergreen) are credited "Illustration:" with author, book and year.
- The three Geograph reserve heroes carry title, author, licence (CC BY-SA 2.0) and file link on the image and on `/photo-credits`.
- Left: a few credits show Commons user handles (for example "Aconcagua ( talk )"), which is how those authors sign; they are not links.

## 15. Illustrations (Damian: generated images allowed where the site has no adequate real picture)

Eight generated images in one style (Recraft, the site's palette): the home hero, the Grizedale and Ullswater reserve heroes, and the Birds, Mammals, Insects, Plants and Seasonal section heroes. Alt text begins "Illustration of". None is used as a species picture or presented as a photograph of a named place. The generated Haweswater, Leighton Moss and Foulshaw Moss images were not used: those pages have real, credited Geograph photographs. The terms say which images are computer-generated. **For Damian:** Grizedale and Ullswater also have CC BY-SA Geograph photos available, the same route as the other three reserves, if he prefers real photos there.

## 16. Visit counts tonight

The database note in section 7 stands. `/advertise` is counted from `7975e54`.

## 17. Planned work: the species rewrite (the largest set of pages)

About 250 species entries read as machine-made, and some are Sefton coast species that do not belong on a Lake District site (sand lizard, sea holly, beachcombing images). Plan: rewrite each entry from official pages (RSPB, Butterfly Conservation, Plantlife, the Mammal Society, Cumbria Wildlife Trust, the National Park), with where and when to see it in the Lake District, and drop or redirect the coast species. Do it in batches of about 20 a fortnight, birds first, ordered by what people search (the SEO pass's traffic section ranks it). Never invent a site or a date: if no source places a species in the Lake District, say so, as the four corrected pages now do.

## 18. SEO pass

Done on the night of 11 Nov 2026 by an agent that did not write the pages (brief: `lakes-seo-pass-brief.md` in the coordinating notes), on top of the live tip `1bed7b9`. Checked on a production build served on port 3112 with `DATABASE_URL` empty: every URL in the sitemap was fetched before and after, recording status, redirect, robots, canonical, og:url, title, description, H1 and JSON-LD.

**Commits** (none needs to go before the privacy and terms commits of section 13):

| Commit | What it does |
|---|---|
| `278c5cc` | Canonicals and share tags |
| `f12d3a0` | Schema |
| `8cfba09` | Titles and descriptions |
| `c0efaee` | Sister-site links to their www addresses |
| `906c6ae` | Scotch argus flight period (review fix 1) |
| `14fdea7` | Butterfly Red List status (review fix 2) |
| `7947d57` | `tests/ads.test.mjs` business-word check (review fix 3) |
| `978d24a` | Closing box on species not found here (review fix 4) |
| `f2309d7` | Species pages link to the guide for their main site |
| `cfb8cb5`, `bdcdbaf` | Screenshots `seo-*` |
| this report | |
| last | Privacy and terms: the "The Lakes Network" link goes to https://www.thelakes.network/ (link only; wording unchanged) |

### What was found and what changed

**1. The advertising page.** `/advertise` was "Advertise | The Lakes Wildlife", with a 164-character description. It is now "Lake District Advertising on The Lakes Wildlife": the site named once (the template is not added), the word advertising, no claims. The description (158 characters) says what the page offers today: section and guide sponsors, a home page card, sponsored articles and the Lakes network bundle, prices plus VAT, and how to ask. The page is new tonight, so no ranked title was given up. `/advertise?space=...` keeps the clean canonical.

**2. Canonicals.**
- The layout gave every page the home page as a default canonical and og:url. The 404 page therefore had canonical = home, and `/photo-credits` (and the noindex `/privacy` and `/terms`) had og:url = home. The default is gone; each page sets its own.
- The 404 carried two robots tags, "noindex" and "index, follow". It now carries only Next's noindex.
- After: all 202 sitemap URLs have exactly one canonical, absolute, on www, pointing at the page itself, with og:url equal to it. `/contact?type=...` and `/advertise?space=...` point at the clean URL. No hreflang (one language, none needed).
- Share images no longer claim sizes they are not (the osprey is 600 x 400, not 1200 x 630).

**3. Schema (JSON-LD).**
- **Organization.** Its sameAs listed The Lakes Guide, Hike The Lakes, the bare https://thelakes.network (a 307), LinkedIn and churchtownmedia.co.uk, which says they are the same organisation. They are not. Churchtown Media Ltd is now its parentOrganization, with the Companies House record. The logo was `og-default.png`, which does not exist (404); it is now the site icon. WebSite and Organization are described once, on the home page, and referred to by @id elsewhere. The home page's Person node (no byline there) is gone. Same pattern as The Lakes Guide and Hike The Lakes tonight.
- **Species pages (160).** Each had two JSON-LD blocks with the same @id and different data: invented dates (2024-04-01 and 2025-03-01, before the site existed), an author bio no species page shows, an image URL that was not a file (`Special:FilePath/Osprey`, built from an article title), and a property Taxon does not have. Now one graph per page:
  - the page itself (an FAQPage where it shows questions), dated 9 Mar 2026 (launch) and 11 Nov 2026, with no author, as none is shown;
  - the Taxon, with the family and order the page lists;
  - the breadcrumb as shown ("Mammals & Wildlife", not "Mammals");
  - the photo, whose creator, licence and creditText repeat the credit line printed under it, and are left out where the page shows no author.
- **Guides and seasonal guides.** Dates were 2024-04-01 and 2025-03-01; now 9 Mar 2026 and 11 Nov 2026, from git. Author: Damian Roche on the fishing and seasonal guides, whose author box names him; the site on the birdwatching, mammal-watching, upland and woodland guides, which show no byline. Headline is the page's H1, not the meta title.
- **Posts.** The author was an @id defined only on the home page; now "Damian", as the author box says. The hero image carries the credit printed on it. The breadcrumb ends with the category the page shows.
- **Reserve pages.** GeoCoordinates removed: they were not shown, and Foulshaw Moss's was about 6 km south-west of its grid reference (SD 458 837, Cumbria Wildlife Trust); the others were rounded guesses. Haweswater, Leighton Moss and Foulshaw Moss carry their credited hero photograph. `/nature` had a BreadcrumbList but shows no breadcrumb (removed); `/blog` and `/seasonal` show one and now have it.
- No AggregateRating, Review, LocalBusiness or SearchAction anywhere. Every block parses, and every @id and URL is on the www host.

**4. Titles and descriptions.**
- **Species.** Titles were thin: "Barn Owl in Martindale" (22 characters). They are now "Barn Owl: Where to See Them in the Lake District" ("Where to Find It" for plants); names too long for that take "Great Spotted Woodpecker in the Lake District". The three species not found here say where they are: "Mountain Hare: Where to See Them in the Peak District", the Pennines for black grouse, Scotland for the Scotch argus. The high brown fritillary keeps "on Whitbarrow", as its page puts it on the Lake District's edge. The species name, the main phrase, still leads; the place moved from the title to the description. Descriptions were the first 155 characters of the machine-made copy ("Barn owls are ghosts. That pale flight. Dusk."). They now say where, when and what the page covers, from its own fields: "Osprey in the Lake District: where to see them (at Foulshaw Moss), when (late March to early September), how to identify them and their UK conservation status."
- **Sefton leftovers.** `/mammals` promised grey seals and `/birds` pink-footed geese; neither has a page here. Fixed.
- **Thin and long titles.** `/contact`, `/photo-credits` and `/blog` ("Lake District Wildlife Blog") had 7 to 13 characters. Nine titles of 63 to 73 characters were shortened, each keeping its main phrase; for three posts this is a new `metaTitle`, and the heading on the page is unchanged.
- **Descriptions.** 24 descriptions over 160 characters cut to fit, saying the same things.
- **Script check over the served build:** 202 unique titles and 202 unique descriptions. Titles run 27 to 62 characters before the site name; the home page's own title is 66 and was left alone, as it may rank. Descriptions run 84 to 160. No em dash in any page, head or JSON-LD; no stray "2025"; no Southport or Sefton leftovers.

**5. Sitemaps and robots.**
- https://www.thelakeswildlife.co.uk/sitemap.xml has 202 URLs, live and after these changes (none added or removed). All 202 were fetched from the served build: each answered 200, with no redirect, none noindex, each canonical to itself.
- lastmod is 11 Nov 2026 on every URL, and that is true: every page's source or content changed on 11 Nov (git), and every post carries its own date or its `updated` date, which is 11 Nov for all of them. The dates are fixed in `app/sitemap.ts`, not "now".
- Tonight's new pages are in: `/advertise`, `/photo-credits` and the two new posts.
- robots.txt: "Sitemap: https://www.thelakeswildlife.co.uk/sitemap.xml". It disallows only `/api/` and `/dashboard/`, and blocks no CSS, JS or page.
- `/privacy` and `/terms` stay noindex, as before, and out of the sitemap. The bare host answers 307 to www, so submit the www address.

### The four review fixes, and the photo swap

1. **Scotch argus flight period.** Read from Butterfly Conservation's lifecycle chart, an image on its species page, as the high brown fritillary's was. The reading is in `sources/bc-scotch-argus-lifecycle.txt`: adults from mid-July to early September, strongest in early August. The page now says "It flies from mid-July to early September, mostly in August, in one generation (Butterfly Conservation)." The identification line also lost "Larger than large heath", which Butterfly Conservation's wingspans contradict (35-40 mm against 41 mm).
2. **Scotch argus status.** It is Vulnerable on the GB Red List (2022) but was shown amber, "of moderate conservation concern". The site's scheme for non-birds shows serious concern as red, and it already showed the pearl-bordered fritillary, also Vulnerable, as red. The Scotch argus is now red, and its box says "Butterfly Conservation's GB Red List (2022) lists it as Vulnerable." The same understatement was on three more pages and is fixed with it: small pearl-bordered fritillary and northern brown argus (Vulnerable) and large heath (Endangered) were all amber. All six Red List butterflies now name their category. Sources are in `sources/bc-*.txt`.
3. **`tests/ads.test.mjs`.** Worse than reported. The intended `\b` boundaries had been saved as two backspace characters, so the pattern matched nothing at all: "Ullswater Steamers" passed as easily as "public". It now matches whole words (lookarounds, which also end a word after "café"), takes plurals, and a new test proves it catches each business word and passes "public", "beginning", "workshop", "Cheshire" and "fisherman". All posts that keep the end-of-post space still pass.
4. **"Plan your visit" box.** It is replaced on every species page whose Lake District line or season says not found (today the mountain hare, black grouse and Scotch argus; the same test the conservation box uses). The new box says "This species is not found in the Lake District. Our species pages and seasonal guides cover what is.", with links to the section and the seasonal guides.
5. **Photo swap for Grizedale and Ullswater: not done.** No candidate photos had been chosen. Choosing, downloading, resizing, regenerating the credits (the script re-reads Commons for all of the site's photos), checking contrast and taking four-width screenshots is nearer an hour than ten minutes. It is item 4 under "Traffic: what to do next". The terms' illustrations line stays true either way.

**Also:** 31 species pages whose main site is Foulshaw Moss (25), Ullswater (3) or Martindale (3) now link to that guide, as the Haweswater and Grizedale ones already did.

**Checks.**
- `tsc`: 0 errors.
- eslint on the 34 changed code files: 9 errors and 1 warning, all existing (unescaped apostrophes in four guide pages, and the layout's unused disable comment); none new.
- `next build`: passed.
- `npm run test:contact`: 9 of 9 passed. `node --test tests/*.test.mjs`: 26 of 26 passed.
- Em dash scan of changed files: none in customer-facing text.
- Screenshots `seo-*` at 1440, 1024, 768 and 390.

### URLs for Damian to submit

Every one of the 202 sitemap URLs is new or changed on 11 Nov 2026, so submitting the sitemap covers them all. All are on https://www.thelakeswildlife.co.uk:
- **160 species pages**: `/birds/<slug>` (80), `/insects/<slug>` (25), `/plants/<slug>` (30), `/mammals/<slug>` (25). For example `/birds/osprey`, `/mammals/red-squirrel`, `/insects/scotch-argus`.
- **17 posts**, `/blog/<slug>`. Two are new: `/blog/wildlife-hides-lake-district` and `/blog/temperate-rainforest-lake-district`. For example `/blog/ospreys-haweswater-rspb`.
- **New pages:** `/advertise`, `/photo-credits`.
- **The rest:** `/`, `/birds`, `/insects`, `/plants`, `/mammals`, `/nature`, `/nature/haweswater-rspb`, `/nature/grizedale-forest`, `/nature/foulshaw-moss`, `/nature/leighton-moss-rspb`, `/nature/ullswater`, `/birdwatching-guide`, `/mammal-watching-guide`, `/fishing-guide`, `/upland-habitats`, `/woodland-habitats`, `/seasonal`, `/seasonal/osprey-season`, `/seasonal/red-deer-rut`, `/seasonal/red-squirrel-watching`, `/seasonal/winter-wildfowl`, `/blog`, `/contact`.

### For Damian to decide

- **Post dates.** The posts' dates were set when they were written on 9 Mar 2026. One is earlier than the site's launch (`leighton-moss-bitterns`, 25 Feb 2026), and several were future dates then, although the pages were already live. The schema uses the date each page shows, so they were left as they are. Changing them would be a visible change for you to make.
- **Overlapping pages.** Three pages answer "where to see ospreys in the Lake District" (`/birds/osprey`, `/seasonal/osprey-season`, `/blog/ospreys-haweswater-rspb`), four answer the red squirrel question and five the red deer rut. See item 2 below.
- **No ranking data.** The Ahrefs API (`C:\Projects\ahref`) answered 403 for this domain.

## 19. Traffic: what to do next

**How this is ranked.** No measured evidence was available. The Ahrefs API answered 403 for this domain, the old PageView log holds 13 rows from March, and the visit counts (`PageCount`) start tonight. So the ranking is by reasoning, from the size of each set of pages and how widely its subjects are searched. No visit numbers are given, because none could be measured.

1. **The species rewrite (section 17): about 250 entries, 160 live pages.** This is the largest set and the biggest opportunity. Tonight's titles and descriptions now say what each page answers, but the pages still read "That blue. Yellow. Common.", and pages rank on what they say.
   - Rewrite from official pages, about 20 a fortnight.
   - Start with the species people search with "Lake District": red squirrel, osprey, red deer, otter, pine marten, badger, red kite, peregrine, dipper, ring ouzel, hen harrier, barn owl, kingfisher, adder and curlew. Then do the rest.
   - Each page needs named sites, months from a source, how to watch without disturbing, and links to its reserve guide, seasonal guide and posts.
   - Drop or redirect the Sefton coast leftovers as section 17 says.
2. **Pages one edit away: link the pages that answer the same question.** This costs little and may be the quickest gain. The osprey (3 pages), red squirrel (4) and red deer (5) pages mostly do not link to each other, so they compete for the same searches.
   - Add a "More on this species" box to species pages, listing the seasonal guide and the posts.
   - Link the posts back to the species page.
   - That tells Google which page leads and passes readers along.
   - Tonight's links from 31 species pages to the Foulshaw Moss, Ullswater and Martindale guides are the first step.
3. **Search terms the site does not cover yet** (by reasoning; each is a large seasonal or regional search):
   - bluebells, Rannerdale in particular: late April to May. The wood anemone page names Rannerdale, but no page is about the bluebells.
   - salmon spawning in Cumbria: now.
   - Wild Ennerdale.
   - Thirlmere red squirrels.
   - the mountain ringlet.
   - beavers in Cumbria.
   - a "Lake District birds of prey" page linking the raptor species pages.

   Section 10 has dates and search terms for most of these.
4. **Real photographs on the Grizedale and Ullswater reserve pages** (about an hour, by the d3e7e31 route). CC BY-SA Geograph photos of both exist. Real photos of the named place help image search and share previews more than the generated illustrations do.
5. **Two posts a month**, as in section 10. Publish each four to six weeks before its season, aim it at one search term the site does not cover, and link it to two to four species or reserve pages. More posts than that would be thinner; until the rewrite is done, an hour on species pages is worth more than an extra post.
6. **Measure next time.** Add the site to Google Search Console and submit the sitemap, and add it to the Ahrefs account, so the next ranking comes from data.
