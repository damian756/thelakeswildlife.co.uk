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
  updated?: string; // ISO date the post was last revised, when later than date
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
  /** Optional internal links shown after the sections ("More on this site"). */
  links?: { href: string; label: string }[];
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
    slug: "wildlife-hides-lake-district",
    category: "habitat-guides",
    categoryLabel: "Habitat Guides",
    title: "Wildlife Hides in and Around the Lake District",
    date: "2026-11-11",
    metaDescription:
      "Wildlife hides in and around the Lake District: Leighton Moss, the Wild Haweswater badger and woodland hides, the Whinlatter nature hide and the Foulshaw Moss platform. Times, booking and prices.",
    heroLocalSrc: "/images/species/mammals/badger.jpg",
    heroAlt: "A badger standing at the edge of a pool, with its reflection",
    intro:
      "Much of the Lake District's wildlife is watched from public footpaths, and some well-known places, such as Wild Haweswater, have no public hides at all. These are the hides and viewing platforms in and around the National Park, what each one is for, and which ones you have to book.",
    sections: [
      {
        heading: "Leighton Moss RSPB, Silverdale",
        body: [
          "Leighton Moss, near Silverdale in Lancashire, just south of the Lake District, has the largest reedbed in north-west England. The RSPB says it has seven hides and one viewpoint, all open from dawn to dusk.",
          "Lilian's, Tim Jackson, Grisedale, Causeway and Lower hides overlook the reedbed. The Allen and Eric Morecambe hides look over the saltmarsh and Morecambe Bay from a separate car park, a mile from the visitor centre, with a 2m height limit. The 9m Skytower gives a view over the reserve and the bay beyond.",
          "All the hides have step-free access and are wheelchair accessible, and most have lower windows. The trails are mostly flat, and all of them except the path to Lower Hide are fully accessible. RSPB members go in free. Non-members pay £10 for an adult, £7 for a student and £5 for a child aged 5 to 17; 16 to 24 year olds, the first child and under-5s are free, and non-members who arrive by public transport or bike pay £5.",
          "In early November 2026 the RSPB's sightings page reported bitterns from the Lower and Causeway hides most days, otters from the Causeway, Lower and Lilian's hides, and marsh harriers from most hides.",
        ],
      },
      {
        heading: "Wild Haweswater: two hides you book",
        body: [
          "Wild Haweswater, the RSPB's restoration partnership with United Utilities in the eastern fells, has no public hides or designated viewpoints. It does have two hides you book in advance.",
          "The RSPB's Badger Watching Hide is a new hide, opened in 2024 over an area badgers already use. It is open from April to October, and you book a session through the Wild Haweswater events pages. The RSPB says badgers can come within a metre of the hide, which has ramps for wheelchair users and a parking space beside it.",
          "Wild Intrigue's Woodland Wildlife Hide, run by one of the RSPB's partners at Wild Haweswater, is open from November to June and is also booked in advance.",
          "Everything else at Haweswater is done on foot, on the public footpaths and bridleways from Mardale Head car park.",
        ],
      },
      {
        heading: "Whinlatter Forest: the Wow Trail nature hide",
        body: [
          "Forestry England's Wow Trail at Whinlatter Forest has a nature hide for spotting the forest's wildlife. Forestry England names red squirrels, deer, badgers and foxes among the animals in the forest.",
          "The trail is 4.5 miles long and starts at the visitor centre (CA12 5TW). It follows surfaced paths with no stiles, steps or gates, though some slopes are steep. It also looks across Bassenthwaite Lake, which Forestry England says has been home to ospreys for over 20 years. The main car park is open from 8.30am to 8.30pm.",
        ],
      },
      {
        heading: "Viewing platforms for ospreys",
        body: [
          "Foulshaw Moss, Cumbria Wildlife Trust's reserve near Witherslack (LA11 6SN), has an open viewing platform, 1.5 km (1 mile) along a boardwalk. Ospreys nest there from around the end of March to early September. In winter the Trust lists marsh and hen harriers, snipe and teal, and red deer that can be seen from the raised platform. Entry is free and the car park is small.",
          "In November 2026 the Foulshaw boardwalks were closed because they were slippery, so check the Trust's page before you go.",
          "Elsewhere in Cumbria, RSPB Campfield Marsh has an osprey nesting platform that can be seen from a nearby hide. The RSPB says three chicks hatched there in June 2026, the first ospreys to breed on an RSPB reserve in England since the Victorian period.",
        ],
      },
    ],
    tags: ["wildlife hides", "Leighton Moss", "Haweswater", "badger", "Whinlatter", "Foulshaw Moss"],
    links: [
      { href: "/nature/leighton-moss-rspb", label: "Leighton Moss RSPB: bitterns, otters and marsh harriers" },
      { href: "/nature/haweswater-rspb", label: "RSPB Haweswater: parking and what to see" },
      { href: "/nature/foulshaw-moss", label: "Foulshaw Moss: ospreys and the raised bog" },
      { href: "/mammals/badger", label: "Badger: species guide" },
    ],
  },

  {
    slug: "temperate-rainforest-lake-district",
    category: "habitat-guides",
    categoryLabel: "Habitat Guides",
    title: "Temperate Rainforest in the Lake District: Where to Find It",
    date: "2026-11-11",
    metaDescription:
      "What temperate rainforest is, why so little is left, and where to find it in the Lake District: Borrowdale National Nature Reserve and Naddle Forest at Wild Haweswater.",
    heroLocalSrc: "/images/species/plants/wood-anemone.jpg",
    heroAlt: "Wood anemones in flower among their leaves",
    intro:
      "The Lake District has temperate rainforest: steep, wet woodland of old oaks, birches and ferns, where lichens, mosses and liverworts grow over the trees and rocks. Natural England says this globally rare habitat now covers less than 1% of England. Two places to find it are Borrowdale and Naddle Forest at Haweswater.",
    sections: [
      {
        heading: "What makes it a rainforest",
        body: [
          "Temperate rainforest grows where rainfall and humidity are high and the temperature changes little through the year, Natural England says. That damp, even climate suits lichens and mosses. The habitat was once widespread in the UK because of its oceanic climate.",
          "The RSPB's Wild Haweswater team says rainforest once covered 20% of these islands and now covers less than 1%. Around Haweswater, as across much of the Lake District, trees were cleared for shipbuilding, mining and other uses, and later to make more room for grazing sheep.",
          "The government's temperate rainforest strategy covers the rainforests of Cornwall, Devon and Cumbria, backed by £750,000 of research and development funding.",
        ],
      },
      {
        heading: "Borrowdale National Nature Reserve",
        body: [
          "In May 2024 Natural England declared Borrowdale a National Nature Reserve, describing it as England's largest temperate rainforest. It is a 721-hectare National Trust site.",
          "Borrowdale is the wettest inhabited place in England, and the upper end of the valley gets twice the rainfall of the lower end. Its upland woods are full of rare lichens, mosses and liverworts among ancient oaks, birches and ferns. They support redstarts, pied flycatchers, tree pipits and red squirrels, and Natural England calls the woods a stronghold for the squirrels.",
          "The National Trust plans to make some paths more accessible. Natural England says the focus is on local people and existing visitors, without encouraging more people to come to the valley, so keep to the paths and leave the place as you find it.",
        ],
      },
      {
        heading: "Naddle Forest, Wild Haweswater",
        body: [
          "Naddle Forest, part of Wild Haweswater in the eastern Lake District, is one of the last fragments of temperate rainforest left in the Lake District, the Wild Haweswater team says. The RSPB and the landowner United Utilities are working to extend it, by planting trees and by letting them regenerate on their own.",
          "That second part means easing the grazing pressure. Wild Haweswater says the land was overgrazed for decades by livestock and wild deer, so it keeps cattle and ponies in low numbers and uses professional deer stalkers to bring deer numbers down. Young trees are raised in the reserve's own nursery.",
          "Winter is tree-planting season. The RSPB runs guided walks such as Meet Cumbria's Rainforest, where you can plant a tree in Celebration Wood, and tours of Naddle Forest for 10 to 20 people who want to learn about the work for professional or practical reasons, for a suggested donation. The tours are not suitable for children or dogs. In autumn, look for fungi in Naddle Forest.",
          "There is no visitor parking at the Naddle Farm office except for pre-booked visits. The main car park is at Mardale Head, at the southern end of the reservoir.",
        ],
      },
      {
        heading: "What to look for",
        body: [
          "Look at the trees as much as for the animals: the lichens, mosses and liverworts are what make these woods rare.",
          "In spring, redstarts, pied flycatchers and cuckoos return to the woods of the Naddle and Swindale valleys, Wild Haweswater says. Red squirrels live in both woods.",
        ],
      },
    ],
    tags: ["temperate rainforest", "Borrowdale", "Naddle Forest", "Haweswater", "woodland", "lichens"],
    links: [
      { href: "/woodland-habitats", label: "Lake District woodland habitats" },
      { href: "/nature/haweswater-rspb", label: "RSPB Haweswater: parking and what to see" },
      { href: "/birds/redstart", label: "Redstart: species guide" },
      { href: "/mammals/red-squirrel", label: "Red squirrel: species guide" },
    ],
  },

  {
    slug: "ospreys-haweswater-rspb",
    category: "species-spotlight",
    categoryLabel: "Species Spotlights",
    title: "Where to See Ospreys in the Lake District",
    date: "2026-11-11",
    metaDescription:
      "Where to see ospreys in and around the Lake District: Foulshaw Moss, Esthwaite Water and Bassenthwaite. When they arrive and leave, and why Haweswater is not on the list.",
    heroWikipediaTitle: "Osprey",
    heroAlt: "Osprey perched on a branch",
    intro:
      "Ospreys nest in and around the Lake District from late March to early September. The easiest place to watch them is Foulshaw Moss, a Cumbria Wildlife Trust reserve near Witherslack with a viewing platform and a webcam. An earlier version of this page described an RSPB osprey hide at Haweswater. There is no such hide, so the page has been rewritten.",
    sections: [
      {
        heading: "How ospreys came back",
        body: [
          "Ospreys had died out as a breeding bird in the UK by the early 20th century. They returned to nest in Scotland in the 1950s, and the RSPB says as many as 400 pairs now nest across the UK each year. Scotland is still their stronghold.",
          "In the Lake District a pair arrived in 2001 and bred near Bassenthwaite Lake. The Lake District National Park Authority describes this as natural colonisation, helped by nest platforms that the Forestry Commission and the RSPB put up at Dodd Wood. The Lake District Osprey Project that looked after the birds was disbanded in 2022, because ospreys were by then breeding at sites around the Lake District.",
        ],
      },
      {
        heading: "When to look",
        body: [
          "Cumbria Wildlife Trust says its Foulshaw Moss ospreys arrive around the end of March and usually leave by the start of September. The National Park Authority says eggs are laid towards the end of April and chicks usually hatch in early June.",
          "The National Park Authority says June to August is the best time to look, when the adults have to hunt more to feed their chicks. Most UK ospreys spend the winter in West Africa, so from October to mid-March there are none to see.",
        ],
      },
      {
        heading: "Foulshaw Moss",
        body: [
          "Foulshaw Moss (LA11 6SN) is a Cumbria Wildlife Trust reserve near Witherslack, reached by a track off the A590. Ospreys have nested there since at least 2014, and in 2025 a second pair nested on a man-made platform. A boardwalk leads 1.5 km (1 mile) to a viewing platform. Entry is free and the car park is small.",
          "You can also watch the nest on the Trust's osprey webcam, which streams from March to September. Stay on the boardwalks: the ground off them is very soft, with deep water in places, and ticks and adders are common. In November 2026 the boardwalks were closed because they were slippery, so check the Trust's page before you go.",
        ],
      },
      {
        heading: "Esthwaite Water, Bassenthwaite and Campfield Marsh",
        body: [
          "Esthwaite Water, south of Hawkshead, is a private fishery with resident ospreys. It runs self-drive and guided osprey boat trips in season.",
          "Ospreys have nested around Bassenthwaite Lake since 2001. The National Park Authority says the nest can no longer be seen from the old Dodd Wood viewpoint, because the birds moved to a less visible spot. Forestry England's Wow Trail at Whinlatter looks across Bassenthwaite Lake towards Dodd Wood.",
          "Further north, on the Cumbrian coast, the RSPB announced in August 2026 that three osprey chicks had hatched at RSPB Campfield Marsh, the first ospreys to breed on an RSPB reserve in England since the Victorian period. The nest platform there can be seen from a nearby hide.",
        ],
      },
      {
        heading: "What about Haweswater?",
        body: [
          "Wild Haweswater, the RSPB's partnership with the landowner United Utilities, has no public hides or designated viewpoints, and ospreys are not among the wildlife it lists. Its famous birds were golden eagles, which lived in the valley from 1969 until the last male died in 2015.",
          "Go to Haweswater for red squirrels, ring ouzels, red deer and the fells, and go to Foulshaw Moss for ospreys.",
        ],
      },
    ],
    tags: ["Osprey", "Foulshaw Moss", "Esthwaite Water", "Bassenthwaite", "raptors", "conservation"],
  },
  {
    slug: "red-deer-rut-martindale",
    category: "seasonal-watching",
    categoryLabel: "Seasonal Watching",
    title: "The Red Deer Rut at Martindale: When and Where to Watch",
    date: "2026-09-20",
    updated: "2026-11-11",
    metaDescription:
      "Red deer rut in the Lake District. Martindale is the place. Dawn or dusk in October. What to expect and how to watch responsibly.",
    heroWikipediaTitle: "Red deer",
    heroAlt: "Red deer stag with large antlers standing in woodland",
    intro:
      "The red deer rut happens every autumn. The fells above Martindale, in the eastern Lake District, are home to England's oldest native herd of red deer, the National Park Authority says. October is the month. Dawn or dusk.",
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
          "Martindale is the key area. Reach it by the narrow dead-end road that runs south from Pooley Bridge to Howtown. Public parking around Howtown is limited to The Hause and a few small laybys, and part of the road is a clearway where you must not stop.",
          "Keep your distance. The stags are aggressive during the rut. Use binoculars or a scope. Do not approach. The Dalemain Estate asks visitors to keep away from the deer at all times, and its sanctuary at The Nab and Rampsgill may be closed between September and February, so check access with the Estate Office before you go.",
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
    updated: "2026-11-11",
    metaDescription:
      "Red squirrels in Grizedale Forest, Lake District. When to go, what to look for, and how to avoid disturbing them.",
    heroWikipediaTitle: "Red squirrel",
    heroAlt: "Red squirrel eating on a mossy tree stump",
    intro:
      "Red squirrels live in Grizedale Forest, and Forestry England's plan for the forest includes keeping suitable habitat for them and supporting grey squirrel control. Here is where and when to look.",
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
    title: "Ospreys at Bassenthwaite Lake: The Birds North of Keswick",
    date: "2026-11-11",
    metaDescription:
      "Ospreys at Bassenthwaite Lake, north of Keswick. How they returned in 2001, why the Dodd Wood viewpoint no longer shows the nest, and where to look across the lake today.",
    heroWikipediaTitle: "Osprey",
    heroAlt: "Osprey perched on a branch",
    intro:
      "Ospreys have nested around Bassenthwaite Lake since 2001, the first to breed in the Lake District for more than 150 years. Forestry England calls Bassenthwaite the only 'true' lake in the National Park. The old viewpoint in Dodd Wood no longer looks at the nest, so here is what you can still do.",
    sections: [
      {
        heading: "The Bassenthwaite ospreys",
        body: [
          "In 2001 a pair of ospreys took to a nest platform in Wythop Woods above the lake and raised one chick, the Lake District Osprey Project says. It was the first successful nesting in the Lake District for over 150 years, and it came about by natural recolonisation. The birds later moved to a nest site in Dodd Wood.",
          "The project was a partnership of the Forestry Commission, the Lake District National Park and the RSPB, with help from volunteers. The National Park Authority says it was disbanded in 2022, because ospreys were by then breeding at several places around the Lake District.",
        ],
      },
      {
        heading: "Can you still see the nest?",
        body: [
          "For years you could watch the nest from a viewpoint in Dodd Wood, run by Forestry England with the RSPB and the National Park Authority. The National Park Authority says that ended when the birds chose a nest site that is less visible.",
          "Ospreys still return in summer. Cumbria Wildlife Trust's Foulshaw ospreys arrive around the end of March and usually leave by the start of September, and the National Park Authority says June to August is the best time to look, when the adults hunt more to feed their chicks.",
          "Forestry England's Wow Trail at Whinlatter Forest looks across Bassenthwaite Lake, which it says has been home to ospreys for over 20 years, towards Dodd Wood and Skiddaw. The 4.5-mile trail starts at the visitor centre (CA12 5TW) and follows surfaced paths, and it has a nature hide for the forest's own wildlife.",
        ],
      },
      {
        heading: "Dodd Wood today",
        body: [
          "Dodd Wood is still worth a visit for its trails and views. Forestry England says red squirrels live in the wood all year, and the trails climb to the top of Dodd for views across the fells.",
          "The car park (sat nav CA12 4QE) is on the A591 from Keswick towards Bothel, opposite Mirehouse. It is open 24 hours and is pay on exit: up to 20 minutes free, then £0.55 per 15 minutes, up to £13 for the day. Blue Badge holders pay too. Toilets are in the car park, and the Old Sawmill Tearoom is next to it.",
        ],
      },
    ],
    tags: ["osprey", "Bassenthwaite", "Dodd Wood", "Whinlatter", "raptors", "conservation"],
  },

  {
    slug: "red-deer-rut-photography",
    category: "photography",
    categoryLabel: "Wildlife Photography",
    title: "Photographing the Red Deer Rut: Martindale in October",
    date: "2026-09-15",
    updated: "2026-11-11",
    metaDescription:
      "How to photograph the red deer rut in Martindale, Lake District. Timing, kit, approach, and the locations that give the best results in October.",
    heroWikipediaTitle: "Red deer",
    heroAlt: "Red deer stag with large antlers standing in woodland",
    intro:
      "The red deer rut draws photographers to Martindale every October. You need a long lens, low light and patience. Here is how to go about it.",
    sections: [
      {
        heading: "Timing and light",
        body: [
          "The second and third weeks of October are peak rut. Dawn is the best light: low, warm, directional light from the east that illuminates the stags on the hillside and puts them against a sky or fell backdrop. Arrive at the valley before the sun is up. This means a 6am start from Pooley Bridge in mid-October.",
          "Dusk gives a second window. The light is similar quality but the animals have been active all day and can be less predictable in their movements. Dawn has the additional advantage that mist sometimes fills the lower valley, putting stags on the edge of visibility for atmospheric shots. This is not reliable but when it happens it is exceptional.",
          "Flat overcast days are not useless. The soft light reduces harsh shadows on the animals and makes the eye detail more visible. Avoid shooting in direct overhead sun on a bright day if you have a choice. The brown-red colouring of the stags bleaches out badly in high-contrast light.",
        ],
      },
      {
        heading: "Kit",
        body: [
          "A 400mm lens is the minimum focal length for usable rut shots at the distance you will typically be working. 500mm or 600mm is better. A full-frame camera gives the best low-light performance for dawn shooting. A monopod or tripod steadies the long lens for the waits between action.",
          "Camouflage or dull earth colours for clothing. The deer will see you regardless but there is no reason to draw their attention. Move slowly and avoid sudden movements when you are repositioning.",
          "Bring more memory cards than you think you need. A 20-minute rut encounter with multiple stags can fill a 64GB card if you shoot continuously. Battery performance drops in cold October morning air, so carry a spare.",
        ],
      },
      {
        heading: "Approach and composition",
        body: [
          "Stay on the paths and let the lens close the distance. The Dalemain Estate asks visitors to keep away from the red deer at all times, and its sanctuary at The Nab and Rampsgill may be closed between September and February, so check access with the Estate Office before you go.",
          "Composition: put the stag against open sky or fell if you can choose your angle. A roaring stag against the valley hillside, with the Martindale crags behind, is the classic Martindale shot. Get low. A low angle puts the animal against sky rather than ground and removes distracting background detail.",
          "The parallel walk, when two stags walk side by side assessing each other before fighting, is fleeting and difficult to anticipate. If you see two stags moving toward each other, lock focus on the closer one and wait. The parallel walk can last seconds or minutes. A fight, if it happens, is over very quickly.",
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
    date: "2026-11-11",
    metaDescription:
      "Winter wildfowl guide for Ullswater. Goldeneye arrive in October. Goosander year-round. What to expect, where to watch from, and the best times for each species.",
    heroWikipediaTitle: "Common goldeneye",
    heroAlt: "Goldeneye drake swimming on open water",
    intro:
      "Goldeneye arrive on Ullswater in October from their Scandinavian breeding grounds. By December there are usually 30 to 50 birds on the lake. The males are bold black-and-white ducks with a yellow eye. They dive constantly. Watch from the northern end of the lake near Pooley Bridge.",
    sections: [
      {
        heading: "Goldeneye",
        body: [
          "Goldeneye are the winter duck to look for on Ullswater. They arrive from Scandinavia and northern Russia in October, peak in December and January, and begin moving north again in March. The males in winter plumage are striking: black-and-white body, rounded dark green head (which can appear black), and the bright yellow eye that gives the species its name.",
          "They feed by diving, typically to depths of 2 to 4 metres. On a calm day you can count the seconds between each dive (usually 10 to 20 seconds) and start to predict roughly where the bird will resurface. Watch a group of diving goldeneye and the collective rhythm of their feeding becomes almost hypnotic.",
          "The male courtship display begins in late January and continues through February and March. The male throws his head back in an extreme backwards movement, exposing the white cheek patches, then snaps his head forward. Several males often display around a single female at once.",
        ],
      },
      {
        heading: "Goosander",
        body: [
          "Goosander are resident on Ullswater year-round. They are long, streamlined fish-eating ducks with serrated bills and a low profile on the water. The male in winter is white with a pink flush and a dark green head; the female is grey-bodied with a chestnut-brown head and a prominent ragged crest. Both sexes are often seen resting on exposed rocks along the water's edge.",
          "Goosander breed in tree holes beside the lake and rivers. In late winter the females begin prospecting nest sites in the valley woodland. Courtship is in January and February. By May the female is incubating eggs in a tree cavity and the male has largely abandoned her. The female brings the ducklings down from the nest within 24 hours of hatching, sometimes a considerable distance if the tree is far from water.",
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
    updated: "2026-11-11",
    metaDescription:
      "Guide to the birds of the Lake District uplands for beginners. Red grouse, ring ouzel, golden plover, peregrine, raven. What to look for and where to find each species.",
    heroWikipediaTitle: "Red grouse",
    heroAlt: "Red grouse standing in rough grass",
    intro:
      "The Lake District fells above 400 metres are a different birdwatching world from the valley woodlands and lake shores. Red grouse calling from the heather, ring ouzel singing from a boulder above the scree, peregrine hammering through a small flock of waders at speed. This is what you come for on the high ground.",
    sections: [
      {
        heading: "Red grouse",
        body: [
          "Red grouse are the signature bird of the Lake District heather moorland. Medium-sized, reddish-brown game birds that flush explosively when disturbed, calling loudly as they go. The call, a rapid, slightly indignant 'go-back go-back gobak-gobak-gobak', is one of the characteristic sounds of the high fells. Once you know it you hear it everywhere on the Skiddaw massif, the eastern fells, and anywhere heather moorland persists.",
          "Red grouse breed in the heather from April to June, nesting in the deep heather stems. In August the family groups are visible working through the heather, the young birds not much smaller than adults but noticeably softer in plumage. Best seen on still, clear mornings in April to August when they are calling from prominent rocks or fence posts.",
        ],
      },
      {
        heading: "Ring ouzel",
        body: [
          "The ring ouzel is the mountain blackbird: a blackbird-sized thrush with a broad white crescent on the breast (the male), breeding in rocky gullies, scree slopes, and mountain stream gorges above roughly 400 metres. It arrives from late March and flies back to Africa in September, the RSPB says. The song is wild and fluting, delivered from a prominent boulder.",
          "Ring ouzels are worth a specific effort in late April and May when they are freshly arrived and singing. The crags of Helvellyn's eastern face, the rocky gullies of Blencathra's south face, and the head of the Langdale valley all hold birds. Walk early and scan the boulders on the fell sides from below.",
        ],
      },
      {
        heading: "Golden plover and peregrine",
        body: [
          "Golden plover breed on the higher blanket bog areas above 500 metres from April to July. Their call is a melancholy, liquid two-note whistle that carries across the bog in clear weather. The birds in summer plumage are handsome, with a black face and belly, golden-spangled back. The Skiddaw Forest plateau and the high areas of the central fells hold golden plover in summer.",
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
    updated: "2026-11-11",
    metaDescription:
      "Fishing guide for Blea Tarn in Langdale. Wild brown trout in a fell tarn below the Langdale Pikes. Access, approach, tackle, and what to expect.",
    heroWikipediaTitle: "Brown trout",
    heroAlt: "A brown trout on a black background",
    intro:
      "Blea Tarn in Little Langdale sits at around 200 metres above sea level below the Langdale Pikes. It holds wild brown trout. The tarn is accessible via a short walk from the Blea Tarn car park. The fishing is not stocked. These are wild fish.",
    sections: [
      {
        heading: "The tarn",
        body: [
          "Blea Tarn is owned by the National Trust. It is a natural tarn fed by rainfall and surface run-off from the surrounding fell slopes. The water is slightly peaty and coloured, which gives the wild trout a dark, well-marked appearance. The tarn is approximately 300 metres long and 150 metres wide at its widest point.",
          "The Langdale Pikes are visible directly north. Wrynose Fell and the Crinkles fill the west. On a clear summer morning with low cloud on the surrounding fells and rising trout on a calm surface, this is exactly what fell fishing is supposed to be.",
        ],
      },
      {
        heading: "Fishing the tarn",
        body: [
          "Fly fishing is the most appropriate method. A 9-foot, 5-weight or 6-weight rod works well. The wild trout are mostly small (6 to 9 inches is typical), but they are beautiful fish. Dry fly in June, July, and August when sedges and midges hatch in the evening. Wet fly earlier in the season, fished through the deeper water off the rocky outcrops on the eastern shore.",
          "The fish are not naive. Blea Tarn sees enough fly fishers through the season that the trout have been educated. A careful approach (low profile, casting from distance before moving closer, changing fly pattern if fish refuse) gives better results than working over the tarn quickly. This is the fishing you come to think in, not to fill a bag.",
          "The east shore is sheltered and warms early, producing the first surface activity of the day. The outfall stream at the northern end holds trout in the deeper pool. An early morning visit in late June or July, arriving at dawn, fishing the calm surface before the wind picks up, is the tarn at its best.",
        ],
      },
      {
        heading: "Access and permit",
        body: [
          "The Blea Tarn car park (LA22 9PJ) is off the road between Langdale and Little Langdale. The walk to the tarn from the car park is less than 5 minutes. Anyone aged 13 or over needs a rod fishing licence, and gov.uk says you also need permission from the land or fishery owner, usually a fishing permit. The fishing rights are managed by the Lake District Angling Improvement Association. A day ticket or season permit is available. Check their website for current fees and conditions.",
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
    updated: "2026-11-11",
    metaDescription:
      "The High Brown Fritillary, which Butterfly Conservation calls Britain's most endangered butterfly. Where it is found near the Lake District, when it flies, and why the Morecambe Bay limestone hills matter to it.",
    heroWikipediaTitle: "High Brown Fritillary",
    heroAlt: "High brown fritillary butterfly resting on a leaf",
    intro:
      "Butterfly Conservation calls the High Brown Fritillary Britain's most endangered butterfly. Once widespread in England and Wales, it has declined dramatically since the 1950s. Its remaining strongholds are the Morecambe Bay Limestones, just south of the Lake District, Dartmoor and Exmoor, with a single colony left in Wales.",
    sections: [
      {
        heading: "About the High Brown Fritillary",
        body: [
          "The High Brown Fritillary is a large, fast-flying butterfly with a bright orange upperwing patterned with black markings. The underwing shows distinctive silver spots with brown cell borders that separate it from the similar Silver-washed Fritillary. It is on the wing in June and July, flying in warm sunshine over bracken-covered slopes.",
          "The species has declined dramatically since the 1950s. The cause is habitat change: the loss of open, warm woodland and scrubby grassland where its larval foodplant, common dog-violet, grows in the right microclimate. Active conservation management is now essential to maintain the remaining populations.",
        ],
      },
      {
        heading: "Where to find them near the Lake District",
        body: [
          "The Morecambe Bay limestone hills, including Arnside Knott and Warton Crag, lie just south of the Lake District. The butterfly requires south-facing bracken slopes with abundant dog-violets in the litter beneath the bracken. Butterfly Conservation manages these sites with targeted scrub clearance and bracken management to maintain the open conditions the butterfly needs.",
          "Arnside Knott (LA5 0AD) National Trust reserve is the more accessible site. The south-facing slopes above the woodland edge hold the main population. Visit on a warm, sunny day in late June or early July. Early afternoon, when the air temperature peaks, is when the butterflies are most active and visible.",
        ],
      },
      {
        heading: "Conservation",
        body: [
          "Butterfly Conservation runs targeted conservation work for the High Brown Fritillary at the Morecambe Bay sites. This involves scrub clearance to maintain open, warm habitat, bracken management to allow the dog-violet to establish, and annual population monitoring by transect survey.",
          "The species is listed as a priority species under the UK Biodiversity Action Plan. If you visit Arnside Knott in July and see these butterflies, you are seeing a conservation success in action: a threatened species that still exists because people are managing specifically for it.",
        ],
      },
    ],
    tags: ["High Brown Fritillary", "butterflies", "Arnside", "Morecambe Bay", "conservation", "endangered species"],
  },

  {
    slug: "haweswater-golden-eagle",
    category: "conservation",
    categoryLabel: "Conservation",
    title: "The Haweswater Golden Eagles: England's Last Pair",
    date: "2026-11-11",
    metaDescription:
      "The golden eagles of Haweswater in the Lake District, from their return in 1969 to the death of the last male in 2015, and what has happened to golden eagles since.",
    heroWikipediaTitle: "Golden eagle",
    heroAlt: "Golden eagle in flight against a blue sky",
    intro:
      "From 1969 to 2015, Haweswater was the only place in England where golden eagles lived. The RSPB came to the valley to guard them and has stayed ever since. The last bird, a male, died in 2015 after twelve years alone.",
    sections: [
      {
        heading: "The history",
        body: [
          "Lakeland had been without breeding eagles for at least 150 years when golden eagles returned in 1969, from a healthy and expanding population in southern Scotland, the RSPB's Wild Haweswater team writes. The pair nested first on Harter Fell, above the southern end of the reservoir, then moved into neighbouring Riggindale.",
          "The RSPB was invited to Haweswater in 1969 to monitor and protect England's last remaining pair. Over 46 years, two female and three male eagles made their home in the valley, with new birds arriving to keep the pair together as one or other died. They reared young in 16 of those years.",
          "The last male spent his final 12 years alone, with no female for company. He died in 2015, and no golden eagles have lived at Haweswater since.",
        ],
      },
      {
        heading: "What came next",
        body: [
          "The RSPB stayed. It now runs Wild Haweswater with the landowner, United Utilities, as a landscape restoration partnership across the Mardale, Naddle and Swindale valleys. Visitors come for red squirrels, ring ouzels, red deer and the fells.",
          "Golden eagles have done better in Scotland, where numbers passed 500 pairs in 2015, almost all north of the central belt, with a few pairs in the Borders. A project to strengthen that small southern population moved young golden eagles there in 2018 and 2019. Young golden eagles can roam hundreds of miles looking for a territory of their own.",
        ],
      },
    ],
    tags: ["golden eagle", "Haweswater", "Riggindale", "England", "conservation", "RSPB"],
  },

  {
    slug: "whinlatter-red-squirrel",
    category: "species-spotlight",
    categoryLabel: "Species Spotlights",
    title: "Red Squirrels at Whinlatter Forest: England's Only Mountain Forest",
    date: "2026-03-20",
    updated: "2026-11-11",
    metaDescription:
      "Red squirrels at Whinlatter Forest above Braithwaite: where to look, the Wow Trail nature hide, and the best times for sightings.",
    heroWikipediaTitle: "Red squirrel",
    heroAlt: "Red squirrel eating on a mossy tree stump",
    intro:
      "Forestry England calls Whinlatter Forest Park, above Braithwaite, England's only true mountain forest. Red Squirrels Northern England lists Whinlatter among Cumbria's red squirrel strongholds, and the visitor centre has a red squirrel experience.",
    sections: [
      {
        heading: "Why Whinlatter?",
        body: [
          "Whinlatter is a mixed conifer and broadleaf forest on the fellside above Braithwaite, planted from the 1920s and now managed by Forestry England. The red squirrel population is maintained by active grey squirrel control across the forest and the wider north-western fells landscape. Without this control the reds would have been displaced within years.",
          "Red Squirrels Northern England says the visitor centre (CA12 5TW) has a red squirrel experience, and that red squirrels can be seen in the forest on any of the forest walks.",
        ],
      },
      {
        heading: "Where to look",
        body: [
          "Forestry England's Wow Trail is 4.5 miles long, starts at the visitor centre and follows surfaced paths. It has a nature hide for spotting the forest's wildlife, which Forestry England says includes red squirrels, deer, badgers and foxes.",
          "Morning is the most productive time. The squirrels are active from first light through to late morning, caching food. In autumn they are particularly visible as they work to gather food before winter.",
        ],
      },
      {
        heading: "Beyond the squirrels",
        body: [
          "Whinlatter also holds crossbills in irruption years, siskins and redpolls in the birch and alder at the forest edge, coal tits throughout the conifers, and occasional goshawk over the forest canopy. Above the forest are Grisedale Pike and the Coledale round. Combining a morning squirrel walk in the forest with an afternoon on the Coledale fells is a full day's wildlife and walking.",
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
    updated: "2026-11-11",
    metaDescription:
      "Bitterns at Leighton Moss RSPB near Silverdale. When to hear the boom, where to watch from, and how the species has recovered from near-extinction in Britain.",
    heroWikipediaTitle: "Eurasian bittern",
    heroAlt: "Bittern standing upright on short grass",
    intro:
      "Leighton Moss RSPB, near Silverdale in Lancashire, has the largest reedbed in north-west England, and bitterns live there. The booming call of the male carries across the reedbed in spring: mainly from March to May, with early birds from February. This is how to hear it, and with patience, see it.",
    sections: [
      {
        heading: "The bittern's boom",
        body: [
          "The male bittern booms mainly from March to May, with early birds from February, to mark his territory and attract females. The call is a deep, resonating 'oom' repeated several times, almost like a foghorn. The RSPB says it can be heard up to three miles away. The sound is so distinctive that once you have heard it you will never mistake it.",
          "Booming peaks from March to May. On still mornings the boom seems to come from everywhere and nowhere. The sound disperses through the reed as much as it travels through the air. Stand quietly at the edge of the reedbed at dawn in spring and wait.",
          "In 1997 just 11 male bitterns boomed in the UK, the RSPB says. The latest RSPB and Natural England survey recorded 283 booming males. Leighton Moss was one of the sites that maintained breeding bitterns through the worst period.",
        ],
      },
      {
        heading: "Seeing a bittern",
        body: [
          "Seeing a bittern is harder than hearing one. They spend most of their time concealed in the reed, moving through the stems on foot rather than flying. They are extraordinarily well camouflaged. The vertical streaking of the plumage matches the reed stems and a standing bittern simply disappears.",
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
    updated: "2026-11-11",
    metaDescription:
      "Spring migrants at Grizedale Forest in May. Pied flycatcher, redstart, and wood warbler. When they arrive, where to find them, and what to look and listen for.",
    heroWikipediaTitle: "European pied flycatcher",
    heroAlt: "Male pied flycatcher perched on a branch",
    intro:
      "In late April, small birds that have spent the winter in sub-Saharan Africa arrive in the Lake District. Pied flycatchers, redstarts, and wood warblers fill the oak woodland with sound. Grizedale in early May is as good a place as any in England to find all three in a morning. Go early.",
    sections: [
      {
        heading: "Pied flycatcher",
        body: [
          "The pied flycatcher arrives in late April. The male comes first, establishes a territory around a nest hole or nest box, and sings continuously from the tree tops for two to three weeks before the female arrives. The song is a rapid, varied warbling delivered from high in the oak canopy. The male is unmistakeable: clean black-and-white, with a white forehead patch.",
          "Grizedale's nest box scheme has provided nest sites throughout the woodland for decades. Grizedale's oak woodland edge holds birds, particularly in the mature sessile oak areas of the forest edges. At Wild Haweswater, the RSPB says pied flycatchers and redstarts return each spring to the woods of the Naddle and Swindale valleys.",
          "Female pied flycatchers arrive a week to two weeks after the males. Watch for the more discreet brown-and-white female investigating nest boxes in early May.",
        ],
      },
      {
        heading: "Redstart and wood warbler",
        body: [
          "Redstarts arrive slightly earlier than pied flycatchers: the first males can appear in late April in a good year. The male is striking: slate-grey back, black face, russet-orange breast and tail. The tail shivers constantly. They sing from high, open perches in the woodland canopy.",
          "The wood warbler arrives last of the three, often in the first week of May. Its habitat requirements are more specific: open-canopied sessile oak woodland with a clear woodland floor. The song is one of the great bird sounds of the British uplands: a vibrating, accelerating trill that drops into a descending liquid call. Once you know it you hear it everywhere in the right woodland in May.",
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
    title: "Martindale: A Guide to the Lake District's Red Deer Valley",
    date: "2026-09-01",
    updated: "2026-11-11",
    metaDescription:
      "A guide to Martindale in the Lake District: the red deer, the valley's history, how to get there, where to park, and how to watch the deer without disturbing them.",
    heroWikipediaTitle: "Red deer",
    heroAlt: "Red deer stag with large antlers standing in woodland",
    intro:
      "Martindale is a quiet valley in the eastern Lake District. A narrow road runs south from Pooley Bridge along the eastern shore of Ullswater to Howtown and on into the valley. The fells above Martindale are home to England's oldest native herd of red deer, the National Park Authority says.",
    sections: [
      {
        heading: "About Martindale",
        body: [
          "The Dalemain Estate says Martindale is home to the oldest native, pure-breed red deer population in the UK. At its heart, in Rampsgill and the Nab, is the hind forest, a sanctuary where the deer can live undisturbed by people or dogs. The valley is enclosed by the fells of Place Fell, Beda Fell and Steel Knotts.",
          "The village of Martindale has a church, St Peter's at the dale head, that dates from 1882, though there has been a place of worship in the valley for much longer. The older chapel (St Martin's) near the dale entrance is medieval. A very small community lives in the valley year-round.",
        ],
      },
      {
        heading: "Getting there and parking",
        body: [
          "The approach is from Pooley Bridge at the northern end of Ullswater. Take the road south along the eastern shore to Howtown and beyond. It is a dead end and narrow in places, and part of it is a legally defined clearway, where it is an offence to stop and park. Alternatively, take the Ullswater Steamers to Howtown and walk into the valley from there.",
          "Parking is very limited. The National Park Authority says public parking around Howtown is only at The Hause and at several small laybys, and there is no car parking at Howtown pier. If you can, take the Steamer from Glenridding or Pooley Bridge instead of driving.",
        ],
      },
      {
        heading: "Wildlife through the year",
        body: [
          "The Dalemain Estate asks you to keep away from the red deer at all times, especially at calving time, and says the sanctuary at The Nab and Rampsgill may be closed between September and February for deer management. Check access with the Dalemain Estate Office before you go.",
          "October is the rut. Come early, move quietly, stay at distance. The stags are visible on the open fellside from first light. November and December: hinds and last year's calves in valley groups. Good lighting conditions on clear winter days. January to March: the valley is quiet but the deer are there. Spring: calves are born in May and June and kept hidden in deep vegetation.",
          "Year-round, Martindale is good for buzzard, raven, red kite, and peregrine. The raptors use the valley thermals and hunt along the fell edges. Red kites, unmistakeable large raptors with forked tails, are increasingly common above the valley after the Cumbrian reintroduction.",
        ],
      },
    ],
    tags: ["Martindale", "red deer", "Ullswater", "valley guide", "deer watching", "eastern fells"],
  },

  {
    slug: "haweswater-in-winter",
    category: "seasonal-watching",
    categoryLabel: "Seasonal Watching",
    title: "Haweswater in Winter: Wildlife in the Quiet Season",
    date: "2026-11-11",
    metaDescription:
      "Haweswater in winter: salmon in Swindale Beck, red squirrels, redwings and fieldfares. Parking at Mardale Head, no toilets and no phone signal. What to know before you go.",
    heroWikipediaTitle: "Haweswater Reservoir",
    heroAlt: "Haweswater reservoir seen from the fells above",
    intro:
      "Haweswater is a reservoir in the eastern Lake District. Around it, the RSPB and the landowner United Utilities run Wild Haweswater, a landscape restoration partnership across the Mardale, Naddle and Swindale valleys. In winter salmon run up Swindale Beck to spawn, winter thrushes feed on the berries and tree planting gets under way.",
    sections: [
      {
        heading: "What to look for in winter",
        body: [
          "Wild Haweswater's own notes for the season list Atlantic salmon moving from the sea into Swindale Beck to spawn, and redwings and fieldfares feeding on berries before they fly back to Scandinavia to breed.",
          "Red squirrels live in the forest, recently reintroduced water voles live in the becks, dippers plunge into the fast streams and buzzards circle overhead. Herds of fell ponies and Luing and Belted Galloway cattle graze the site for conservation.",
          "Earlier in the autumn you may hear pink-footed geese overhead, and red deer roar on the fells in October.",
        ],
      },
      {
        heading: "Hides and guided walks",
        body: [
          "There are no public hides or designated viewpoints at Wild Haweswater: you walk the public footpaths and bridleways and see what is about. The pre-booked hides are Wild Intrigue's Woodland Wildlife Hide, open from November to June, and the RSPB's Badger Watching Hide, open from April to October.",
          "Winter is tree-planting season, when staff and volunteers plant out trees from the reserve's own nursery. The RSPB runs guided walks such as Meet Cumbria's Rainforest in Naddle Forest; check the Wild Haweswater events page for dates.",
        ],
      },
      {
        heading: "Practical notes",
        body: [
          "Park at Mardale Head, the main visitor car park at the southern end of the reservoir, reached by a winding road along the shore. It is open at all times, but a Public Space Protection Order bans overnight parking. There are no toilets: the nearest are in Shap, about ten miles away. There is no visitor centre or café, and no phone signal across most of the site.",
          "Entry is free. A donation cairn in the car park suggests £2, cash only because there is no signal for card payments. Bring OS map OL5, food, a hot drink and waterproofs, and check the forecast before you head into the hills.",
          "Dogs are welcome on the public rights of way under close control. Keep them on a lead around livestock and around birds resting on the ground.",
        ],
      },
    ],
    tags: ["Haweswater", "winter wildlife", "salmon", "red squirrel", "RSPB", "eastern fells"],
  },

];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}
