export type BlogCategory =
  | "conservation"
  | "species-spotlight"
  | "seasonal-watching"
  | "habitat-guides"
  | "photography";

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  categoryLabel: string;
  title: string;
  date: string; // ISO date string
  metaDescription: string;
  heroWikipediaTitle?: string;
  heroLocalSrc?: string; // overrides Wikipedia fetch when set
  heroAlt: string;
  intro: string;
  sections: {
    heading: string;
    body: string[];
    imageAfter?: { src: string; alt: string; caption: string; objectPosition?: string };
  }[];
  tags: string[];
}

export const BLOG_CATEGORIES: Record<BlogCategory, { label: string; description: string }> = {
  conservation: {
    label: "Conservation",
    description: "The issues, the work and the numbers. What's being done to protect Lake District wildlife.",
  },
  "species-spotlight": {
    label: "Species Spotlights",
    description: "A closer look at individual species. Their ecology, behaviour and where to find them.",
  },
  "seasonal-watching": {
    label: "Seasonal Watching",
    description: "What to look for each month. Migration, breeding, winter arrivals.",
  },
  "habitat-guides": {
    label: "Habitat Guides",
    description: "The fells, lakes, woodland and moorland. Understanding what each habitat holds.",
  },
  photography: {
    label: "Wildlife Photography",
    description: "Practical tips for photographing birds and wildlife in the Lake District.",
  },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ospreys-haweswater-rspb",
    category: "species-spotlight",
    categoryLabel: "Species Spotlights",
    title: "Ospreys at Haweswater RSPB: Britain's Reintroduction Success Story",
    date: "2026-02-15",
    metaDescription:
      "Ospreys at Haweswater RSPB in the Lake District. When to visit, where to watch, and the story of how ospreys returned to England after 150 years.",
    heroWikipediaTitle: "Osprey",
    heroAlt: "Osprey in flight, the raptor that returned to Haweswater after 150 years",
    intro:
      "Haweswater RSPB is the place to see ospreys in England. The birds returned to breed here in 2016 after a 150-year absence, and the reserve now provides a dedicated viewpoint for watching them. Here's what you need to know.",
    sections: [
      {
        heading: "When they're present",
        body: [
          "Ospreys arrive in late March or early April and stay until September. The best viewing is from April through August when birds are nesting and feeding. The viewpoint is open daily during the breeding season.",
          "Mornings are often quieter. The birds fish the reservoir and the tarns. If you're lucky, you'll see a bird dive and catch a fish.",
        ],
      },
      {
        heading: "Where to watch",
        body: [
          "The RSPB runs a dedicated osprey viewpoint at Haweswater. It's a short walk from the car park. Bring binoculars and a scope if you have one. The nest is visible from the hide.",
          "Haweswater is in the eastern Lake District, near Shap. The road from Mardale Head is narrow. Allow time for the drive.",
        ],
      },
      {
        heading: "The reintroduction story",
        body: [
          "Ospreys were wiped out in England by persecution in the 1800s. They returned to Scotland in the 1950s and slowly spread south. The Lake District Osprey Project, a partnership between the RSPB and United Utilities, helped establish the first breeding pair at Haweswater in 2016.",
          "The site is now one of the most reliable places to see ospreys in England. The birds have raised young every year since their return.",
        ],
      },
    ],
    tags: ["Osprey", "Haweswater", "RSPB", "raptors", "conservation"],
  },
  {
    slug: "red-deer-rut-martindale",
    category: "seasonal-watching",
    categoryLabel: "Seasonal Watching",
    title: "The Red Deer Rut at Martindale: When and Where to Watch",
    date: "2026-09-20",
    metaDescription:
      "Red deer rut in the Lake District. Martindale is the place. Dawn or dusk in October. What to expect and how to watch responsibly.",
    heroWikipediaTitle: "Red deer",
    heroAlt: "Red deer stag during the rut, Martindale, Lake District",
    intro:
      "The red deer rut is one of the wildlife spectacles of the Lake District. Martindale, in the eastern fells, holds one of the largest free-ranging herds in England. October is the month. Dawn or dusk.",
    sections: [
      {
        heading: "When to go",
        body: [
          "The rut runs from late September through October. Peak activity is usually mid-October. The stags are at their most vocal and visible then.",
          "Dawn and dusk are the best times. The deer move into the open at first light and last light. Midday they tend to disappear into the bracken.",
        ],
      },
      {
        heading: "Where to watch",
        body: [
          "Martindale is the key area. The valley is accessible from the road between Pooley Bridge and Haweswater. Park considerately and walk from there.",
          "Keep your distance. The stags are aggressive during the rut. Use binoculars or a scope. Do not approach.",
        ],
      },
      {
        heading: "What you'll see",
        body: [
          "Stags roaring. The sound carries across the valley. You'll hear them before you see them. The larger stags hold harems of hinds and defend them from rivals.",
          "Sometimes you'll see stags locking antlers. It's dramatic but rare. Most of the time it's roaring, posturing, and the occasional chase.",
        ],
      },
    ],
    tags: ["Red deer", "rut", "Martindale", "October", "seasonal"],
  },
  {
    slug: "red-squirrels-grizedale",
    category: "species-spotlight",
    categoryLabel: "Species Spotlights",
    title: "Red Squirrels at Grizedale Forest: Where to See Them",
    date: "2026-03-10",
    metaDescription:
      "Red squirrels in the Lake District. Grizedale Forest is one of the best places. When to go, what to look for, and how to avoid disturbing them.",
    heroWikipediaTitle: "Red squirrel",
    heroAlt: "Red squirrel in Grizedale Forest, one of the Lake District's strongholds",
    intro:
      "Grizedale Forest holds one of the healthiest red squirrel populations in the Lake District. The Forestry England woodland, mixed with the right habitat, gives them a chance against the grey squirrel. Here's where and when to look.",
    sections: [
      {
        heading: "When to go",
        body: [
          "Red squirrels are active year-round. Autumn and winter are often the best times: they're more visible when the trees have lost their leaves, and they're busy caching food.",
          "Early morning is best. They're most active in the first few hours after dawn. Quiet, patient watching usually pays off.",
        ],
      },
      {
        heading: "Where to look",
        body: [
          "The mixed conifer and broadleaf areas of Grizedale are the key. Red squirrels prefer Scots pine and Norway spruce. They need the right tree species to thrive.",
          "The forest trails are well signposted. Walk quietly. Stop often. Look up. They're often higher in the canopy than you expect.",
        ],
      },
      {
        heading: "The grey squirrel problem",
        body: [
          "Grey squirrels outcompete reds for food and carry squirrelpox, which is fatal to reds. The Lake District is one of the last strongholds in England because the habitat is less suitable for greys.",
          "Grizedale and the surrounding areas are managed to favour red squirrels. If you see a grey squirrel, you can report it to the Red Squirrel Survival Trust.",
        ],
      },
    ],
    tags: ["Red squirrel", "Grizedale", "Forestry England", "conservation"],
  },
  {
    slug: "ospreys-bassenthwaite-lake",
    category: "species-spotlight",
    categoryLabel: "Species Spotlights",
    title: "Ospreys at Bassenthwaite Lake: The Birds Above Keswick",
    date: "2026-04-10",
    metaDescription:
      "Ospreys at Bassenthwaite Lake. The only public-access osprey nest with a viewing point above Keswick. When to visit, where to watch, and the story of the birds.",
    heroWikipediaTitle: "Osprey",
    heroAlt: "Osprey flying over a lake in the Lake District",
    intro:
      "Bassenthwaite Lake is the only natural lake in the Lake District — all the others are 'meres' or 'waters'. It is also home to ospreys that can be watched from Dodd Wood above the lake. The viewing site has been running since 2001. Get there before 10am. Take binoculars.",
    sections: [
      {
        heading: "The Bassenthwaite ospreys",
        body: [
          "Ospreys first bred at Bassenthwaite Lake in 2001, the first confirmed breeding in England in over 150 years outside Scotland. The Lake District Osprey Project, a partnership involving the RSPB and the Forestry England Dodd Wood site, has supported the birds and provided a viewing facility that has run every breeding season since. The pair raises young most years.",
          "The nest is in a tall conifer above the lake. The viewing site at Dodd Wood car park (CA12 4QE) gives line-of-sight to the nest with telescopes provided during the season. RSPB and Forestry England rangers staff the site from April to August and can explain what is happening at the nest.",
          "The osprey pair is monitored throughout the season. Ring data allows individual birds to be identified and their movements tracked. Adults from this pair have been recorded on the coast of West Africa during their winter migration.",
        ],
      },
      {
        heading: "What to see and when",
        body: [
          "The season runs from late March when the adults return to early September when the young birds disperse. The most productive viewing period is May to August. Nest activity peaks during chick-rearing in June and July — the male makes fishing trips and returns to the nest with prey, and the female or chicks call loudly on each return.",
          "The Bassenthwaite osprey webcam is available online throughout the season. If you cannot visit in person, the webcam gives real-time views of nest activity. Webcam access is via the Lake District Wildlife website.",
          "The Dodd Wood trails extend well beyond the osprey viewpoint. The red squirrel trail through the conifer woodland is excellent, and Dodd summit above the wood gives views across the whole of Bassenthwaite and north to Skiddaw.",
        ],
      },
      {
        heading: "Getting there",
        body: [
          "Dodd Wood car park (CA12 4QE) is on the A591 between Keswick and Carlisle, 5 miles north of Keswick. The car park is managed by Forestry England with a parking charge. The walk from the car park to the osprey viewpoint is around 15 minutes on a good path.",
          "The Osprey Cafe at the base of Dodd Wood provides food and drink during the season. Worth planning around for a post-walk coffee. The main osprey viewing hide is free to use once you have parked.",
        ],
      },
    ],
    tags: ["osprey", "Bassenthwaite", "Dodd Wood", "raptors", "spring", "conservation"],
  },

  {
    slug: "red-deer-rut-photography",
    category: "photography",
    categoryLabel: "Wildlife Photography",
    title: "Photographing the Red Deer Rut: Martindale in October",
    date: "2026-09-15",
    metaDescription:
      "How to photograph the red deer rut in Martindale, Lake District. Timing, kit, approach, and the locations that give the best results in October.",
    heroWikipediaTitle: "Red deer",
    heroAlt: "Red deer stag roaring during the October rut at Martindale",
    intro:
      "The red deer rut is one of the most photographed wildlife events in England. Martindale in October is the place. A 400mm lens, low light, and patience. This is what actually works.",
    sections: [
      {
        heading: "Timing and light",
        body: [
          "The second and third weeks of October are peak rut. Dawn is the best light — low, warm, directional light from the east that illuminates the stags on the hillside and puts them against a sky or fell backdrop. Arrive at the valley before the sun is up. This means a 6am start from Pooley Bridge in mid-October.",
          "Dusk gives a second window. The light is similar quality but the animals have been active all day and can be less predictable in their movements. Dawn has the additional advantage that mist sometimes fills the lower valley, putting stags on the edge of visibility for atmospheric shots. This is not reliable but when it happens it is exceptional.",
          "Flat overcast days are not useless — the soft light reduces harsh shadows on the animals and makes the eye detail more visible. Avoid shooting in direct overhead sun on a bright day if you have a choice. The brown-red colouring of the stags bleaches out badly in high-contrast light.",
        ],
      },
      {
        heading: "Kit",
        body: [
          "A 400mm lens is the minimum focal length for usable rut shots at the distance you will typically be working. 500mm or 600mm is better. A full-frame camera gives the best low-light performance for dawn shooting. A monopod or tripod steadies the long lens for the waits between action.",
          "Camouflage or dull earth colours for clothing. The deer will see you regardless but there is no reason to draw their attention. Move slowly and avoid sudden movements when you are repositioning.",
          "Bring more memory cards than you think you need. A 20-minute rut encounter with multiple stags can fill a 64GB card if you shoot continuously. Battery performance drops in cold October morning air — carry a spare.",
        ],
      },
      {
        heading: "Approach and composition",
        body: [
          "Stay on the valley floor initially. Let the deer settle and identify you before you try to close any distance. Stags during the rut are tracking rivals and hinds, not humans, and if you give them time they will often ignore you at 50 to 80 metres.",
          "Composition: put the stag against open sky or fell if you can choose your angle. A roaring stag against the valley hillside, with the Martindale crags behind, is the classic Martindale shot. Get low. A low angle puts the animal against sky rather than ground and removes distracting background detail.",
          "The parallel walk — when two stags walk side by side assessing each other before fighting — is fleeting and difficult to anticipate. If you see two stags moving toward each other, lock focus on the closer one and wait. The parallel walk can last seconds or minutes. A fight, if it happens, is over very quickly.",
        ],
      },
    ],
    tags: ["red deer", "rut", "photography", "Martindale", "October", "wildlife photography"],
  },

  {
    slug: "winter-wildfowl-ullswater",
    category: "seasonal-watching",
    categoryLabel: "Seasonal Watching",
    title: "Winter Wildfowl on Ullswater: Goldeneye, Goosander and What to Look For",
    date: "2026-11-20",
    metaDescription:
      "Winter wildfowl guide for Ullswater. Goldeneye arrive in October. Goosander year-round. What to expect, where to watch from, and the best times for each species.",
    heroWikipediaTitle: "Common goldeneye",
    heroAlt: "Goldeneye drake on Ullswater in winter, Lake District",
    intro:
      "Goldeneye arrive on Ullswater in October from their Scandinavian breeding grounds. By December there are usually 30 to 50 birds on the lake. The males are bold black-and-white ducks with a yellow eye. They dive constantly. Watch from the northern end of the lake near Pooley Bridge.",
    sections: [
      {
        heading: "Goldeneye",
        body: [
          "Goldeneye are the winter duck that birders specifically travel to Ullswater to see. They arrive from Scandinavia and northern Russia in October, peak in December and January, and begin moving north again in March. The males in winter plumage are striking: black-and-white body, rounded dark green head (which can appear black), and the bright yellow eye that gives the species its name.",
          "They feed by diving, typically to depths of 2 to 4 metres. On a calm day you can count the seconds between each dive — usually 10 to 20 seconds — and start to predict roughly where the bird will resurface. Watch a group of diving goldeneye and the collective rhythm of their feeding becomes almost hypnotic.",
          "The male courtship display begins in late January and continues through February and March. The male throws his head back in an extreme backwards movement, exposing the white cheek patches, then snaps his head forward. Multiple males displaying simultaneously around a single female is one of the more spectacular duck displays in Britain.",
        ],
      },
      {
        heading: "Goosander",
        body: [
          "Goosander are resident on Ullswater year-round. They are long, streamlined fish-eating ducks with serrated bills and a low profile on the water. The male in winter is white with a pink flush and a dark green head; the female is grey-bodied with a chestnut-brown head and a prominent ragged crest. Both sexes are often seen resting on exposed rocks along the water's edge.",
          "Goosander breed in tree holes beside the lake and rivers. In late winter the females begin prospecting nest sites in the valley woodland. Courtship is in January and February. By May the female is incubating eggs in a tree cavity and the male has largely abandoned her. The female brings the ducklings down from the nest — sometimes a considerable distance if the tree is far from water — within 24 hours of hatching.",
        ],
      },
      {
        heading: "Where to watch",
        body: [
          "The northern end of Ullswater near Pooley Bridge (CA10 2NQ) is the most productive winter wildfowl area. The village car park gives access to the lakeshore. Walk south along the west bank for a kilometre and scan the open water. Goldeneye tend to congregate in small groups at 50 to 200 metres from the shore.",
          "The Ullswater Steamers run on a reduced winter timetable but the boats give excellent views of birds on the water. The 35-minute journey from Glenridding to Howtown passes through the main wintering wildfowl areas. In winter the steamers are quiet and you can scan the water from the deck without other passengers blocking the view.",
        ],
      },
    ],
    tags: ["goldeneye", "goosander", "wildfowl", "Ullswater", "winter", "seasonal-watching"],
  },

  {
    slug: "upland-birds-beginners",
    category: "habitat-guides",
    categoryLabel: "Habitat Guides",
    title: "Upland Birds for Beginners: What to Expect on the Lake District Fells",
    date: "2026-05-01",
    metaDescription:
      "Guide to the birds of the Lake District uplands for beginners. Red grouse, ring ouzel, golden plover, peregrine, raven. What to look for and where to find each species.",
    heroWikipediaTitle: "Red grouse",
    heroAlt: "Red grouse on Lake District heather moorland",
    intro:
      "The Lake District fells above 400 metres are a different birdwatching world from the valley woodlands and lake shores. Red grouse calling from the heather, ring ouzel singing from a boulder above the scree, peregrine hammering through a small flock of waders at speed. This is what you come for on the high ground.",
    sections: [
      {
        heading: "Red grouse",
        body: [
          "Red grouse are the signature bird of the Lake District heather moorland. Medium-sized, reddish-brown game birds that flush explosively when disturbed, calling loudly as they go. The call — a rapid, slightly indignant 'go-back go-back gobak-gobak-gobak' — is one of the characteristic sounds of the high fells. Once you know it you hear it everywhere on the Skiddaw massif, the eastern fells, and anywhere heather moorland persists.",
          "Red grouse breed in the heather from April to June, nesting in the deep heather stems. In August the family groups are visible working through the heather, the young birds not much smaller than adults but noticeably softer in plumage. Best seen on still, clear mornings in April to August when they are calling from prominent rocks or fence posts.",
        ],
      },
      {
        heading: "Ring ouzel",
        body: [
          "The ring ouzel is the mountain blackbird — a blackbird-sized thrush with a broad white crescent on the breast (the male), breeding in rocky gullies, scree slopes, and mountain stream gorges above roughly 400 metres. It arrives from North Africa in April and departs in August or September. The song is wild and fluting, delivered from a prominent boulder.",
          "Ring ouzels are worth a specific effort in late April and May when they are freshly arrived and singing. The crags of Helvellyn's eastern face, the rocky gullies of Blencathra's south face, and the head of the Langdale valley all hold birds. Walk early and scan the boulders on the fell sides from below.",
        ],
      },
      {
        heading: "Golden plover and peregrine",
        body: [
          "Golden plover breed on the higher blanket bog areas above 500 metres from April to July. Their call is a melancholy, liquid two-note whistle that carries across the bog in clear weather. The birds in summer plumage are handsome — black face and belly, golden-spangled back. The Skiddaw Forest plateau and the high areas of the central fells hold golden plover in summer.",
          "Peregrines are present year-round on the crags throughout the Lake District. The fastest animal on earth in a stoop, they are most visible in the breeding season from March to July. Watch from the valley floor for a compact raptor with long pointed wings soaring above the crags or stooping at speed on prey. The stoop produces a distinctive high tearing sound.",
        ],
      },
    ],
    tags: ["upland birds", "red grouse", "ring ouzel", "peregrine", "golden plover", "beginners", "fell birds"],
  },

  {
    slug: "fishing-blea-tarn",
    category: "habitat-guides",
    categoryLabel: "Habitat Guides",
    title: "Fishing Blea Tarn: Wild Trout Above Langdale",
    date: "2026-06-15",
    metaDescription:
      "Fishing guide for Blea Tarn in Langdale. Wild brown trout in a fell tarn below the Langdale Pikes. Access, approach, tackle, and what to expect.",
    heroWikipediaTitle: "Brown trout",
    heroAlt: "Blea Tarn, Langdale, Lake District with the Langdale Pikes in the background",
    intro:
      "Blea Tarn in Little Langdale sits at around 200 metres above sea level below the Langdale Pikes. It holds wild brown trout. The tarn is accessible via a short walk from the Blea Tarn car park. The fishing is not stocked. These are genuinely wild fish in an outstanding setting.",
    sections: [
      {
        heading: "The tarn",
        body: [
          "Blea Tarn is owned by the National Trust. It is a natural tarn fed by rainfall and surface run-off from the surrounding fell slopes. The water is slightly peaty and coloured, which gives the wild trout a dark, well-marked appearance. The tarn is approximately 300 metres long and 150 metres wide at its widest point.",
          "The setting is one of the best in the Lake District. The Langdale Pikes are visible directly north. Wrynose Fell and the Crinkles fill the west. On a clear summer morning with low cloud on the surrounding fells and rising trout on a calm surface, this is exactly what fell fishing is supposed to be.",
        ],
      },
      {
        heading: "Fishing the tarn",
        body: [
          "Fly fishing is the most appropriate method. A 9-foot, 5-weight or 6-weight rod works well. The wild trout are mostly small — 6 to 9 inches is typical — but they are beautiful fish. Dry fly in June, July, and August when sedges and midges hatch in the evening. Wet fly earlier in the season, fished through the deeper water off the rocky outcrops on the eastern shore.",
          "The fish are not naive. Blea Tarn sees enough fly fishers through the season that the trout have been educated. A careful approach — low profile, casting from distance before moving closer, changing fly pattern if fish refuse — gives better results than working over the tarn quickly. This is the fishing you come to think in, not to fill a bag.",
          "The east shore is sheltered and warms early, producing the first surface activity of the day. The outfall stream at the northern end holds trout in the deeper pool. An early morning visit in late June or July, arriving at dawn, fishing the calm surface before the wind picks up, is the tarn at its best.",
        ],
      },
      {
        heading: "Access and permit",
        body: [
          "The Blea Tarn car park (LA22 9PJ) is off the road between Langdale and Little Langdale. The walk to the tarn from the car park is less than 5 minutes. An Environment Agency rod licence is required. The fishing rights are managed by the Lake District Angling Improvement Association — a day ticket or season permit is available. Check their website for current fees and conditions.",
        ],
      },
    ],
    tags: ["fishing", "Blea Tarn", "brown trout", "Langdale", "fly fishing", "fell tarn"],
  },

  {
    slug: "high-brown-fritillary-lake-district",
    category: "species-spotlight",
    categoryLabel: "Species Spotlights",
    title: "The High Brown Fritillary: England's Most Threatened Butterfly",
    date: "2026-07-01",
    metaDescription:
      "The High Brown Fritillary in the Lake District. One of England's most threatened butterflies. Where it is found, when it flies, and why the Lake District is critical to its survival.",
    heroWikipediaTitle: "High Brown Fritillary",
    heroAlt: "High Brown Fritillary butterfly on bracken in the Lake District",
    intro:
      "The High Brown Fritillary is one of England's most threatened butterflies. It has been lost from most of its former range in southern England. The Lake District — particularly the bracken-covered limestone hills of the Morecambe Bay area — is now one of its last strongholds.",
    sections: [
      {
        heading: "About the High Brown Fritillary",
        body: [
          "The High Brown Fritillary is a large, fast-flying butterfly with a bright orange upperwing patterned with black markings. The underwing shows distinctive silver spots with brown cell borders that separate it from the similar Silver-washed Fritillary. It is on the wing in June and July, flying in warm sunshine over bracken-covered slopes.",
          "The species has declined catastrophically since the 1970s. It has been lost from over 95% of its former sites. The cause is habitat change: the loss of open, warm woodland and scrubby grassland where its larval foodplant, common dog-violet, grows in the right microclimate. Active conservation management is now essential to maintain the remaining populations.",
        ],
      },
      {
        heading: "Where to find them in the Lake District",
        body: [
          "The Morecambe Bay limestone hills — Arnside Knott and Warton Crag — are the main Lake District sites. The butterfly requires south-facing bracken slopes with abundant dog-violets in the litter beneath the bracken. Butterfly Conservation manages these sites with targeted scrub clearance and bracken management to maintain the open conditions the butterfly needs.",
          "Arnside Knott (LA5 0AD) National Trust reserve is the more accessible site. The south-facing slopes above the woodland edge hold the main population. Visit on a warm, sunny day in late June or early July. Early afternoon, when the air temperature peaks, is when the butterflies are most active and visible.",
        ],
      },
      {
        heading: "Conservation",
        body: [
          "Butterfly Conservation runs targeted conservation work for the High Brown Fritillary at the Morecambe Bay sites. This involves scrub clearance to maintain open, warm habitat, bracken management to allow the dog-violet to establish, and annual population monitoring by transect survey.",
          "The species is listed as a priority species under the UK Biodiversity Action Plan. If you visit Arnside Knott in July and see these butterflies, you are seeing a conservation success in action — a threatened species that still exists because people are managing specifically for it.",
        ],
      },
    ],
    tags: ["High Brown Fritillary", "butterflies", "Arnside", "Morecambe Bay", "conservation", "endangered species"],
  },

  {
    slug: "haweswater-golden-eagle",
    category: "conservation",
    categoryLabel: "Conservation",
    title: "The Haweswater Golden Eagle: England's Last Wild Breeding Attempt",
    date: "2026-02-01",
    metaDescription:
      "The story of the last golden eagle at Haweswater in the English Lake District. Its history, why it failed to breed, and what the future holds for golden eagle recovery in England.",
    heroWikipediaTitle: "Golden eagle",
    heroAlt: "Golden eagle in flight over mountains",
    intro:
      "For many years a single female golden eagle lived on the fells above Haweswater. The lone eagle. She was the last wild golden eagle in England, and she waited for a mate that never came. She was last seen in 2016. The story of the Haweswater eagle is one of the most important wildlife stories in England.",
    sections: [
      {
        heading: "The history",
        body: [
          "Golden eagles bred in the Lake District until the 19th century, when they were eliminated by persecution — gamekeepers, egg collectors, and the general attitude of the Victorian era that birds of prey were vermin. By 1900 they were gone from England.",
          "In the 1960s a pair began summering above Haweswater in the eastern Lake District. They attempted to breed several times over the following decades but were consistently disturbed or failed due to weather and food shortage. The female raised only one chick to fledging, in 1969. The male disappeared in 1977. The female survived alone for decades, a solitary bird in a habitat that could support a pair.",
          "The RSPB monitored the bird throughout her life at Haweswater. She became a celebrated resident. Thousands of people made the journey to Haweswater hoping to see her soaring over the reservoir. She was last recorded alive in December 2016. No confirmed sightings have been made since. She is presumed to have died of old age.",
        ],
      },
      {
        heading: "The future",
        body: [
          "Golden eagle reintroduction to England is being discussed by conservation organisations. The natural stepping-stone route would be from Scotland, where the population is healthy and expanding southward, through northern England and into the Lake District. The prey base — red grouse, mountain hare, rabbits — exists in the Lake District uplands to support a small population.",
          "The main obstacles are human attitudes, particularly from the grouse shooting community, and the lack of suitable unoccupied territory in northern England. Any serious reintroduction programme would require stakeholder engagement across the whole of northern England.",
          "For now, there are no golden eagles breeding in England. An occasional wandering bird from Scotland is reported every few years. The Haweswater reserve still bears the memory of what was lost and what might return.",
        ],
      },
    ],
    tags: ["golden eagle", "Haweswater", "England", "conservation", "extinction", "reintroduction"],
  },

  {
    slug: "whinlatter-red-squirrel",
    category: "species-spotlight",
    categoryLabel: "Species Spotlights",
    title: "Red Squirrels at Whinlatter Forest: England's Only Mountain Forest",
    date: "2026-03-20",
    metaDescription:
      "Red squirrels at Whinlatter Forest above Braithwaite. The practical guide to visiting the red squirrel trail, the visitor centre cameras, and the best times for sightings.",
    heroWikipediaTitle: "Red squirrel",
    heroAlt: "Red squirrel at Whinlatter Forest, Lake District",
    intro:
      "Whinlatter Forest Park above Braithwaite is England's only mountain forest. It sits on the northern fells above Bassenthwaite Lake and runs up to over 500 metres. The red squirrel population here is well-established and the Forestry England visitor centre has live camera feeds from the feeder areas.",
    sections: [
      {
        heading: "Why Whinlatter?",
        body: [
          "Whinlatter is a mixed conifer and broadleaf forest on the fellside above Braithwaite, planted from the 1920s and now managed by Forestry England. The red squirrel population is maintained by active grey squirrel control across the forest and the wider north-western fells landscape. Without this control the reds would have been displaced within years.",
          "The visitor centre (CA12 5TW) has live CCTV feeds from feeder areas in the forest. These give close-up, reliable views of red squirrels without the uncertainty of looking for them in the trees. For families or for a first sighting, the cameras are a near-guarantee. The outdoor feeders near the visitor centre are visible from the terrace and usually have squirrels in the morning.",
        ],
      },
      {
        heading: "The red squirrel trail",
        body: [
          "Forestry England has marked a red squirrel trail through Whinlatter with interpretation boards explaining the conservation work and the species. The trail passes through the best squirrel habitat — mature Norway spruce and Sitka spruce where cone seeds are the primary food source.",
          "Morning is the most productive time. The squirrels are active from first light through to late morning, caching food and feeding at the feeders. In autumn they are particularly visible as they work intensively to gather food before winter. A 90-minute circuit of the red squirrel trail in the first two hours after dawn in October gives an excellent chance of multiple squirrel sightings.",
        ],
      },
      {
        heading: "Beyond the squirrels",
        body: [
          "Whinlatter also holds crossbills in irruption years, siskins and redpolls in the birch and alder at the forest edge, coal tits throughout the conifers, and occasional goshawk over the forest canopy. The fell above the forest — Grisedale Pike and the Coledale round — is one of the best hill walks in the north-western Lake District. Combining a morning squirrel walk in the forest with an afternoon on the Coledale fells is a full day's wildlife and walking.",
        ],
      },
    ],
    tags: ["red squirrel", "Whinlatter", "Braithwaite", "conservation", "conifer woodland", "Forestry England"],
  },

  {
    slug: "leighton-moss-bitterns",
    category: "species-spotlight",
    categoryLabel: "Species Spotlights",
    title: "Bitterns at Leighton Moss: Boom, Hide, and Wait",
    date: "2026-02-25",
    metaDescription:
      "Bitterns at Leighton Moss RSPB near Silverdale. When to hear the boom, where to watch from, and how the species has recovered from near-extinction in Britain.",
    heroWikipediaTitle: "Eurasian bittern",
    heroAlt: "Bittern at reedbed edge, Leighton Moss RSPB",
    intro:
      "Leighton Moss RSPB is one of Britain's most important bittern sites. The booming call of the male bittern — one of the most extraordinary sounds in British wildlife — carries across the reedbed from February to June. This is how to hear it, and with patience, see it.",
    sections: [
      {
        heading: "The bittern's boom",
        body: [
          "The bittern's booming call is produced by the male from February to June to advertise territory and attract females. The call is a deep, resonating 'oom' repeated several times, almost like a foghorn. It can carry for up to two kilometres in still conditions. The sound is so distinctive that once you have heard it you will never mistake it.",
          "Peak booming activity is at dawn and dusk in February and March. On still mornings the boom seems to come from everywhere and nowhere — the sound disperses through the reed as much as it travels through the air. Stand quietly at the edge of the reedbed at dawn in early March and wait. You will hear it.",
          "Britain had fewer than 30 booming males in the 1990s after decades of habitat loss and water quality decline. Active conservation work — reedbed restoration, water management, and the creation of new reedbed habitat — has brought the population back to over 200 booming males. Leighton Moss was one of the sites that maintained breeding bitterns through the worst period.",
        ],
      },
      {
        heading: "Seeing a bittern",
        body: [
          "Seeing a bittern is harder than hearing one. They spend most of their time concealed in the reed, moving through the stems on foot rather than flying. They are extraordinarily well camouflaged — the vertical streaking of the plumage matches the reed stems and a standing bittern simply disappears.",
          "The most reliable sighting opportunity is a flying bittern. In the breeding season, males fly between reedbed patches at dawn and dusk, moving low over the reed tops. From the main hides at Leighton Moss, these flight views are the standard sighting. The Grisedale Hide and the Lower Hide overlook reedbed edges where bitterns sometimes hunt or stand in the open.",
          "In cold winter weather bitterns become more visible as they are forced to hunt more actively to maintain body condition. On frosty mornings in December or January, bitterns sometimes stand at the reedbed edge for extended periods. This is the best chance of prolonged close views.",
        ],
      },
    ],
    tags: ["bittern", "Leighton Moss", "RSPB", "reedbed", "conservation", "birdwatching"],
  },

  {
    slug: "spring-migrants-grizedale",
    category: "seasonal-watching",
    categoryLabel: "Seasonal Watching",
    title: "Spring Migrants at Grizedale: Pied Flycatchers in May",
    date: "2026-04-25",
    metaDescription:
      "Spring migrants at Grizedale Forest in May. Pied flycatcher, redstart, and wood warbler. When they arrive, where to find them, and what to look and listen for.",
    heroWikipediaTitle: "European pied flycatcher",
    heroAlt: "Male pied flycatcher at nest box entrance in Lake District oak woodland",
    intro:
      "In late April, small birds that have spent the winter in sub-Saharan Africa arrive in the Lake District. Pied flycatchers, redstarts, and wood warblers fill the oak woodland with sound. Grizedale in early May is as good a place as any in England to find all three in a morning. Go early.",
    sections: [
      {
        heading: "Pied flycatcher",
        body: [
          "The pied flycatcher arrives in late April. The male comes first, establishes a territory around a nest hole or nest box, and sings continuously from the tree tops for two to three weeks before the female arrives. The song is a rapid, varied warbling delivered from high in the oak canopy. The male is unmistakeable: clean black-and-white, with a white forehead patch.",
          "Grizedale's nest box scheme has provided nest sites throughout the woodland for decades. The RSPB nest box trail at Haweswater (CA10 2LX) is specifically designed for pied flycatcher watching, but Grizedale's oak woodland edge holds birds too, particularly in the mature sessile oak areas of the forest edges.",
          "Female pied flycatchers arrive a week to two weeks after the males. Watch for the more discreet brown-and-white female investigating nest boxes in early May.",
        ],
      },
      {
        heading: "Redstart and wood warbler",
        body: [
          "Redstarts arrive slightly earlier than pied flycatchers — the first males can appear in late April in a good year. The male is one of the most beautiful British birds: slate-grey back, black face, russet-orange breast and tail. The tail shivers constantly. They sing from high, open perches in the woodland canopy.",
          "The wood warbler arrives last of the three, often in the first week of May. Its habitat requirements are more specific — open-canopied sessile oak woodland with a clear woodland floor. The song is one of the great bird sounds of the British uplands: a vibrating, accelerating trill that drops into a descending liquid call. Once you know it you hear it everywhere in the right woodland in May.",
        ],
      },
      {
        heading: "How to find them",
        body: [
          "Walk early. The period from dawn to 9am in early May is when the migrants are at their most vocal. The woodland floor is still relatively open before the bracken comes up fully, giving better visibility. Stand quietly at the edge of an open woodland area and listen. If you hear a fast, varied warbling from the canopy, it is likely a pied flycatcher. A liquid, descending call repeated with a vibrating trill is a wood warbler.",
          "The Grizedale Ridding Wood Trail passes through good migrant habitat. The transition zone between the conifer plantation and the remnant broadleaf woodland on the valley sides holds pied flycatchers and redstarts regularly in May.",
        ],
      },
    ],
    tags: ["pied flycatcher", "redstart", "wood warbler", "spring migrants", "Grizedale", "May", "oak woodland"],
  },

  {
    slug: "martindale-complete-guide",
    category: "habitat-guides",
    categoryLabel: "Habitat Guides",
    title: "Martindale: The Complete Guide to the Lake District's Red Deer Valley",
    date: "2026-09-01",
    metaDescription:
      "Complete guide to Martindale in the Lake District. Red deer, the valley's history, how to get there, where to park, and the best approaches for wildlife watching throughout the year.",
    heroWikipediaTitle: "Red deer",
    heroAlt: "Red deer hinds in Martindale valley with the fells behind",
    intro:
      "Martindale is one of the quietest, most beautiful valleys in the eastern Lake District. A narrow road runs south from Howtown on Ullswater into two valleys — Martindale proper and Ramps Gill — that between them hold one of England's most significant red deer herds. The place is largely unchanged from the medieval deer forest it has been for centuries.",
    sections: [
      {
        heading: "About Martindale",
        body: [
          "Martindale is an estate valley owned by the Dalemain Estate, managed as a deer forest since at least the 16th century. The red deer herd is one of the oldest managed herds in England. The valley is enclosed by the fells of Place Fell, Beda Fell, and Steel Knotts, giving it a contained, cathedral quality — you feel cut off from the wider world in a way that few Lake District valleys achieve.",
          "The village of Martindale has a church — St Peter's at the dale head — that dates from 1882, though there has been a place of worship in the valley for much longer. The older chapel (St Martin's) near the dale entrance is medieval. A very small community lives in the valley year-round.",
        ],
      },
      {
        heading: "Getting there and parking",
        body: [
          "The approach is from Pooley Bridge at the northern end of Ullswater. Take the road east from Pooley Bridge through Dacre and south through the villages of Martindale. Alternatively, take the Ullswater Steamers to Howtown and walk or take the minor road south into the valley.",
          "Parking is severely limited. There are a handful of spaces at the dale head and a small parking area near the dale entrance. Arrive before 8am on peak October mornings to be sure of parking. Overloading the valley with vehicles damages both the experience and the ground. Consider the Ullswater Steamer approach from Glenridding if possible.",
        ],
      },
      {
        heading: "Wildlife through the year",
        body: [
          "October is the rut. Come early, move quietly, stay at distance. The stags are visible on the open fellside from first light. November and December: hinds and last year's calves in valley groups. Good lighting conditions on clear winter days. January to March: the valley is quiet but the deer are there. Spring: calves are born in May and June and kept hidden in deep vegetation.",
          "Year-round, Martindale is good for buzzard, raven, red kite, and peregrine. The raptors use the valley thermals and hunt along the fell edges. Red kites — unmistakeable large raptors with forked tails — are increasingly common above the valley after the Cumbrian reintroduction.",
        ],
      },
    ],
    tags: ["Martindale", "red deer", "Ullswater", "valley guide", "deer watching", "eastern fells"],
  },

  {
    slug: "haweswater-in-winter",
    category: "seasonal-watching",
    categoryLabel: "Seasonal Watching",
    title: "Haweswater in Winter: The Quiet Season at England's Most Remote Reservoir",
    date: "2026-12-05",
    metaDescription:
      "Haweswater in winter. Red deer on the fell sides, red squirrels at the feeders, wildfowl on the reservoir. The most visited RSPB site in the Lake District in its quietest season.",
    heroWikipediaTitle: "Haweswater Reservoir",
    heroAlt: "Haweswater reservoir and the surrounding fells in winter light",
    intro:
      "In winter, Haweswater is a different place. The summer crowds are gone. The reservoir sits dark and still under the fells. Red deer move down from the high ground onto the lower slopes. Goosander fish the reservoir. The red squirrels are at the feeders every morning. The weather can be brutal, but it is worth it.",
    sections: [
      {
        heading: "Why Haweswater in winter",
        body: [
          "Most people visit Haweswater in summer for the ospreys. The ospreys leave in September. But the valley in winter has a quality that the summer season does not — the absence of crowds, the stark simplicity of the fell landscape in short light, and the wildlife that winter brings down from the high fell.",
          "Red deer are more visible in winter. With the bracken down and the vegetation minimal, deer on the lower fell slopes are easy to spot from the reservoir road. A herd of hinds on the fell above the waterline on a still December morning is a reliable winter sight.",
        ],
      },
      {
        heading: "Wildfowl and red squirrels",
        body: [
          "Goosander are present on the reservoir year-round but more visible in winter when lower water levels concentrate them. Watch for these long, streamlined ducks fishing on the reservoir surface. The male in winter plumage is white with a dark head; the female grey-brown with a rusty head crest.",
          "The red squirrel feeders at the RSPB Haweswater site (CA10 2LX) are maintained year-round. In winter, when the oak woodland is bare, squirrels at the feeders are more visible against the background. The morning visit is still the best approach — the squirrels are most active in the first hours after dawn.",
        ],
      },
      {
        heading: "Practical notes",
        body: [
          "The road to Haweswater from Shap is narrow and can be icy in winter. Check road conditions before visiting. The car park at the reservoir head is sometimes inaccessible in heavy snow. Carry winter kit — boots, waterproofs, warm layers — even for short reservoir-side walks. The wind off the fell can be sharp.",
          "The RSPB volunteer presence at Haweswater is seasonal, ending with the osprey season in September. In winter you are on your own. The reserve is open all year but unstaffed. The birds and mammals are there regardless of whether there is someone to interpret them for you.",
        ],
      },
    ],
    tags: ["Haweswater", "winter wildlife", "red deer", "red squirrel", "goosander", "RSPB", "eastern fells"],
  },

];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}
