import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

/* ─── per-page content ────────────────────────────────────── */

interface SeasonalPageData {
  title: string;
  period: string;
  metaDescription: string;
  heroWikipediaTitle: string;
  heroAlt: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  practicalTips: string[];
  relatedLinks: { href: string; label: string; external?: boolean }[];
}

const seasonalPages: Record<string, SeasonalPageData> = {
  "osprey-season": {
    title: "Osprey Season in the Lake District",
    period: "April – August",
    metaDescription: "When and where to see ospreys in the Lake District. RSPB Haweswater, Foulshaw Moss, Bassenthwaite. Practical guide to timing, sites, and what to bring.",
    heroWikipediaTitle: "Osprey",
    heroAlt: "Osprey in flight over water",
    intro: "Ospreys return to the Lake District from West Africa in March. The males arrive first, check out the nest, and wait. The females follow a week or two later. By April the pair is on the nest and by June there are chicks. This is one of the great wildlife recoveries in England and the Lake District is at the centre of it.",
    sections: [
      {
        heading: "When ospreys arrive and leave",
        body: [
          "The first males arrive in the Lake District in mid to late March, though early arrivals in the first week of March have been recorded in warm years. The female typically follows 7 to 14 days after the male. Egg laying happens in April, with three eggs being the typical clutch. Incubation lasts around 37 days.",
          "Chicks hatch in late May or early June. The young birds are flying by mid to late July, though they remain in the area and are fed by the adults until August. The juveniles migrate south before the adults — young birds often leave in August, adults in September. By October the nests are empty.",
          "April to July is the peak viewing period. The nest is most active from egg hatching through to fledging — roughly late May to late July. During this period the male makes regular fishing trips and brings prey to the nest. The arrival and departure of the male with a fish, and the female mantling over it to feed chicks, is the standard show from the hides.",
        ],
      },
      {
        heading: "RSPB Haweswater",
        body: [
          "RSPB Haweswater in the eastern Lakes is the flagship site. The pair here has bred successfully for several consecutive years. The hide overlooks the nest at a comfortable distance and is operated by RSPB volunteers during the season who can answer questions and help with identification. Entry to the reserve and the hide is free. Non-members pay for parking (CA10 2LX).",
          "Get there before 10am if you want a good position at the hide. Summer weekends can see a queue. The surrounding woodland holds pied flycatchers and redstarts in May and June — the nest box trail is worth walking regardless of whether you see ospreys. Red squirrels are often seen around the feeders near the hide car park.",
          "The fishing activity at Haweswater means ospreys are regularly seen over the reservoir itself. The male takes fish to the nest from the water — watch for a large raptor with white underparts and brown wings carrying a fish aligned headfirst in its talons. This aerodynamic carrying position is distinctive and reliably identifies an osprey.",
        ],
      },
      {
        heading: "Foulshaw Moss and Bassenthwaite",
        body: [
          "Foulshaw Moss near Grange-over-Sands (LA11 6QZ) has a nest platform that the ospreys use reliably. The viewing platform overlooks the nest. Free entry and free parking. The bog itself has its own interest — Large Heath butterflies in June and July, bog plants throughout summer. The ospreys at Foulshaw fish the Kent estuary, about 10 minutes' flight from the nest.",
          "Bassenthwaite Lake in the northern Lakes has a nest with a live webcam operated through the Lake District Wildlife project, viewable online throughout the season. The physical viewing site at Dodd Wood car park (CA12 4QE) is open from April to August and gives views of the nest. Ranger-led events run throughout the season.",
          "Other osprey sightings are reported throughout the Lake District during migration in spring and autumn. Any large lake — Ullswater, Windermere, Coniston — can produce a fishing osprey in April and May as birds move through on passage. These are non-breeding birds and are not predictable, but they are worth watching for from the shore.",
        ],
      },
      {
        heading: "What to bring and identification tips",
        body: [
          "Binoculars are essential. A telescope on a tripod gives the best views at the hide but binoculars are enough to see the key behaviour clearly. Ospreys in flight are distinctive: large bird, roughly the size of a buzzard but more attenuated, pale underparts, dark brown above, with a distinctive kink in the wing giving a gull-like silhouette at distance.",
          "The fishing dive is spectacular when you see it. The osprey hovers briefly over the water surface, then plunges feet-first with wings back, sometimes fully submerging. Success rate is around one in three dives. A successful bird emerges with a fish gripped in both feet and immediately orients the fish headfirst before flying off. This headfirst orientation reduces wind resistance.",
          "Photography from the hide is rewarding but requires a long telephoto lens for frame-filling images — at least 400mm equivalent, 600mm or more for quality shots. The light at Haweswater is best in the morning when the sun is behind the viewer from the hide. Bring spare batteries: the anticipation and waiting means you keep the camera ready for long periods.",
        ],
      },
    ],
    practicalTips: [
      "RSPB Haweswater postcode: CA10 2LX — arrive before 10am for the hide",
      "Foulshaw Moss postcode: LA11 6QZ — viewing platform, free entry and parking",
      "Bassenthwaite viewing site: Dodd Wood car park CA12 4QE, open April to August",
      "Peak season: May to July when chicks are being raised",
      "Bring binoculars — telescope useful but not essential",
      "The male carries fish headfirst — look for this in flight",
      "Stay on the paths and respect the hide distances",
    ],
    relatedLinks: [
      { href: "/nature/haweswater-rspb", label: "RSPB Haweswater guide" },
      { href: "/nature/foulshaw-moss", label: "Foulshaw Moss guide" },
      { href: "/birds/osprey", label: "Osprey species page" },
      { href: "/birdwatching-guide", label: "Birdwatching guide" },
    ],
  },

  "red-deer-rut": {
    title: "Red Deer Rut in the Lake District",
    period: "October",
    metaDescription: "When and where to see the red deer rut in the Lake District. Martindale valley, Grizedale Forest. Dawn and dusk in October. Practical guide.",
    heroWikipediaTitle: "Red deer",
    heroAlt: "Red deer stag roaring during rut",
    intro: "October. That is when you come for the red deer rut. Martindale is the valley. Dawn or dusk. You will hear the stags roaring before you see them — a deep, bellowing sound that echoes between the valley walls and carries further than you expect. Keep your distance. They are wild animals and a rut stag is not predictable.",
    sections: [
      {
        heading: "Understanding the rut",
        body: [
          "The red deer rut is the period of breeding activity that peaks in October. Stags spend the summer in bachelor groups, growing and hardening their antlers. In September the antlers shed their velvet and the stags begin to move toward the areas where the hinds range. By early October the roaring has started.",
          "A rutting stag is competing with other males for access to hinds. The roaring is an advertisement of size and condition — it tells rivals how large and energetic the caller is. Rival stags assess each other primarily by roar before committing to a parallel walk and, if neither backs down, a fight. Fights are rare and brief; most confrontations are resolved by one stag withdrawing.",
          "The peak of the rut is roughly the second and third weeks of October. Before this the stags are establishing themselves; after it they are exhausted and the hinds are largely in calf. A large dominant stag may lose 20% of his body weight during the rut from constant activity and reduced feeding. By November the stags are quiet and feeding hard to rebuild condition before winter.",
        ],
      },
      {
        heading: "Martindale — the best place in the Lake District",
        body: [
          "Martindale is the Dalemain Estate deer forest on the east side of Ullswater. The herd has been managed here for centuries and numbers in the hundreds. The valley has a sheltered, intimate quality that concentrates the deer in view and amplifies the sound of roaring. This is the first place to go.",
          "The approach is from Howtown on the east shore of Ullswater. The road climbs south from Howtown through the village of Martindale into Ramps Gill. There are limited parking spots at the head of the valley — arrive before 7am on peak October mornings to be sure of a place. From the parking area, walk quietly up the valley sides. The deer will be on the open hillside above the intake walls from first light.",
          "A dawn start in the second week of October is the reliable approach. The roaring begins before it is fully light and continues through the morning. By midday the activity decreases. A second burst occurs at dusk. Both are worth attending — the dawn session in particular, with the light coming up over the eastern fells and the sound filling the valley, is extraordinary.",
        ],
      },
      {
        heading: "Grizedale Forest",
        body: [
          "Grizedale Forest holds a substantial red deer population throughout the year. The rut is visible here too, though the forest cover makes sightings less reliable than in the open valley of Martindale. The Courthouse Trail and the Bogle Crag area are the best places to look.",
          "Grizedale deer are forest deer and behave differently from the open-hill Martindale animals. They move more in the early morning and evening and spend the middle of the day in cover. Dawn walks on the forest trails in October regularly produce stag encounters. The roaring carries through the trees.",
          "The advantage of Grizedale over Martindale is accessibility — a much longer season of reliable deer sightings (year-round), better car parking, facilities, and no dependence on a single narrow valley road. For a first deer experience, Grizedale is an easier introduction. For the authentic October rut in open country, Martindale is the destination.",
        ],
      },
      {
        heading: "Behaviour and photography",
        body: [
          "The key behaviours to watch for: roaring (constant during peak rut), parallel walk (two stags walking side by side assessing each other), tending (a stag staying close to a hind group and seeing off rivals), and fighting (rare, brief, dramatic when it happens). The fight involves the stags locking antlers and pushing — most are resolved in under a minute with one stag retreating.",
          "Photography in Martindale requires a long telephoto lens. The deer are approachable to around 100 metres before they become alert; at 200 metres they will usually continue normal behaviour. A 400mm to 600mm lens is suitable for reasonable images. Morning light in October is low and warm, which suits the brown-red colouring of the stags. Shoot from a low angle to put the animal against sky or hillside.",
          "Do not approach deer during the rut. A large stag is heavy — adult males can reach 200kg or more — and a rut-driven stag is not reliably predictable around humans. Maintain a distance of at least 50 to 100 metres and use binoculars or a telephoto. If a stag turns toward you and holds eye contact, back away slowly.",
        ],
      },
    ],
    practicalTips: [
      "Peak timing: second and third weeks of October",
      "Martindale: take the road south from Howtown on the east shore of Ullswater",
      "Arrive before 7am to be sure of parking at the valley head",
      "Dawn and dusk are most active — dawn session is the best",
      "You will hear roaring before you see anything — stop and scan",
      "Keep 50 to 100 metres distance from rut stags at minimum",
      "Grizedale Forest: Courthouse Trail for year-round deer sightings",
    ],
    relatedLinks: [
      { href: "/nature/ullswater", label: "Ullswater wildlife guide" },
      { href: "/nature/grizedale-forest", label: "Grizedale Forest guide" },
      { href: "/mammals/red-deer", label: "Red Deer species page" },
    ],
  },

  "red-squirrel-watching": {
    title: "Red Squirrel Watching in the Lake District",
    period: "Year-round",
    metaDescription: "Where to see red squirrels in the Lake District. Grizedale Forest, Whinlatter, Haweswater. Morning is best. Practical guide to the best sites and what to look for.",
    heroWikipediaTitle: "Red squirrel",
    heroAlt: "Red squirrel in woodland",
    intro: "Red squirrels are present year-round in the Lake District. They were largely gone from England south of a line from the Humber to the Mersey but the Lake District has held a significant population for decades. Grizedale Forest and Whinlatter are the two places to go. The feeders at both visitor centres give reliable close-range sightings. Go in the morning.",
    sections: [
      {
        heading: "About the Lake District red squirrel population",
        body: [
          "The red squirrel population in the Lake District is one of the largest in England. The combination of continuous conifer woodland across the central fells, active grey squirrel control programmes, and the geographical semi-isolation of Cumbria has allowed the red squirrel to persist here while disappearing from almost everywhere else in England.",
          "Grey squirrels carry squirrelpox virus, which is lethal to red squirrels. Greys were introduced to Britain in the 1870s and have displaced reds across most of England and Wales. In the Lake District, Forestry England and the Red Squirrel Survival Trust carry out targeted grey squirrel control, which is why the red squirrels are still here. Without this work the reds would have gone within a decade.",
          "The Lake District red squirrel population is therefore a managed population, not a purely wild one. Understanding this is part of understanding what you are watching. The conservation effort is real, ongoing, and consequential. The squirrels at the Grizedale feeders are alive because people are working to keep them alive.",
        ],
      },
      {
        heading: "Grizedale Forest",
        body: [
          "Grizedale visitor centre (LA22 0QJ) is the most reliable red squirrel site in the southern Lakes. Forestry England maintains feeders adjacent to the visitor centre and the squirrels are habituated to human presence. Early morning visits, particularly between 8am and 11am, give the best chance of squirrel activity at the feeders. Car park charges apply.",
          "Away from the feeders, red squirrels range throughout the forest. The Ridding Wood Trail and the Courthouse Trail both pass through squirrel habitat. Quiet movement and occasional stops give the best chance of squirrel sightings in the woodland proper. Listen for the sound of squirrels moving through branches — a rustling and occasional dropped cone fragments are often the first indication of a squirrel above you.",
          "Autumn is particularly good. The squirrels are actively caching food for winter, carrying large mouthfuls of cones and nuts with surprising speed. They are often seen on the forest floor at this time, digging small holes to bury food. Winter, when the canopy is bare, makes aerial movement through the trees easier to see.",
        ],
      },
      {
        heading: "Whinlatter Forest",
        body: [
          "Whinlatter Forest Park above Braithwaite (CA12 5TW) is the northern Lakes' main red squirrel site. The visitor centre maintains a red squirrel camera system — live feeds from the feeder areas allow viewing without disturbing the animals. There is also a red squirrel trail through the woodland with marked viewing spots and information boards.",
          "The Whinlatter area is England's only mountain forest — the fells above the visitor centre reach over 500 metres and the forest has a different character from the lower-lying Grizedale. The trails through the spruce and larch give good red squirrel habitat, and the combination of fell walking and wildlife watching makes Whinlatter a full-day destination.",
          "The visitor centre cafe at Whinlatter is better than you might expect. Worth planning around, particularly on a cold morning before a wildlife walk.",
        ],
      },
      {
        heading: "RSPB Haweswater and other sites",
        body: [
          "RSPB Haweswater (CA10 2LX) has red squirrels around the feeders near the hide car park. This gives the unusual combination of squirrel watching and osprey watching in the same visit from April to August. The Woodland Trust and National Trust properties across the Lake District also hold red squirrel populations — any mature conifer woodland on higher ground is worth checking.",
          "The key habitat indicator is mature conifer woodland, particularly spruce and Scots pine. Red squirrels feed heavily on conifer seeds, extracting them from cones with the characteristic rapid rotation of the cone against the lower teeth. A scatter of stripped cones below a tree is reliable evidence of squirrel activity.",
          "Urban and garden sightings are unusual in the Lake District — the squirrels here are woodland animals and not habituated to garden feeders in the way the familiar grey squirrel is. If you are staying in the villages near Grizedale or Whinlatter, sightings at the edge of the woodland near accommodation are possible but not reliable. Go to the sites with maintained feeders for guaranteed sightings.",
        ],
      },
      {
        heading: "Identification and behaviour",
        body: [
          "Red squirrels are smaller than grey squirrels and more slender. The ear tufts are the most immediately distinctive feature in winter — long, prominent, and clearly visible. In summer the ear tufts are reduced and the animals can appear more similar to grey squirrels. The colour is variable: in winter the back is a rich chestnut-red; in summer many individuals appear brownish or even grey-brown on the back, which confuses people. The key features are the ear tufts, the smaller size, and the white underparts with a sharp demarcation from the back colour.",
          "Behaviour is similar to grey squirrels — rapid movement, cache-burying in autumn, territorial chasing between individuals. Red squirrels are generally more nervous than habituated grey squirrels and will move away if approached too closely. At the feeder sites they are relatively tolerant of quiet observers but will retreat if disturbed.",
        ],
      },
    ],
    practicalTips: [
      "Grizedale visitor centre feeders: LA22 0QJ — most reliable southern Lakes site",
      "Whinlatter Forest Park: CA12 5TW — red squirrel trail and camera feeds",
      "RSPB Haweswater: CA10 2LX — squirrels and ospreys (April to August)",
      "Best time: early morning, 8am to 11am, particularly in autumn and winter",
      "Look for stripped cones below trees — a reliable sign of squirrel activity",
      "Ear tufts are the key identification feature in winter",
      "Move quietly and stop often — squirrels are detected by sound before sight",
    ],
    relatedLinks: [
      { href: "/nature/grizedale-forest", label: "Grizedale Forest guide" },
      { href: "/nature/haweswater-rspb", label: "RSPB Haweswater guide" },
      { href: "/mammals/red-squirrel", label: "Red Squirrel species page" },
      { href: "/birdwatching-guide", label: "Birdwatching guide" },
    ],
  },

  "winter-wildfowl": {
    title: "Winter Wildfowl on the Lake District Lakes",
    period: "October – March",
    metaDescription: "Winter wildfowl guide for the Lake District. Goldeneye, goosander, tufted duck on Ullswater, Windermere, and Coniston. When to go, what to look for, and which lakes hold the best birds.",
    heroWikipediaTitle: "Common goldeneye",
    heroAlt: "Goldeneye drake on lake in winter",
    intro: "From October the big lakes fill up with ducks from Scandinavia and Russia. Goldeneye are the star — the males are striking black-and-white diving ducks with a yellow eye that gives the species its name. Ullswater is the most reliable lake. Windermere and Coniston are worth checking. Binoculars and a scan of the open water from the shore is all it takes.",
    sections: [
      {
        heading: "When the wildfowl arrive",
        body: [
          "The first goldeneye typically arrive in October. Numbers build through November and peak in December and January. By March the birds are moving north again, back to the breeding grounds in Scandinavia and northern Russia. Some linger into April. A few non-breeding birds occasionally stay through the summer.",
          "The coldest winters bring the most birds. A cold snap on the Continent drives wildfowl west and north, pushing birds onto the mild, ice-free lakes of Cumbria. Exceptional winters can produce unusual species — smew, scaup, long-tailed duck — on the larger lakes. Check local birding reports in January and February during cold spells.",
          "Goosander are resident year-round. They are large, streamlined fish-eating ducks that you can expect to see on any visit, any time of year. Tufted duck are present year-round but numbers increase significantly in winter as birds from elsewhere join the resident population.",
        ],
      },
      {
        heading: "Goldeneye",
        body: [
          "The goldeneye is one of the most striking winter ducks in Britain. The male is bold black and white with a rounded dark green head (which can appear black in poor light) and a round white cheek patch. The eye is the bright yellow that gives the species its English name. The female is grey-brown with a chocolate-brown head and the same yellow eye. Both sexes are compact and buoyant on the water.",
          "Goldeneye feed by diving — they go under frequently and spend 10 to 20 seconds below the surface on each dive. Watch a group and count the seconds underwater. They feed on invertebrates, molluscs, and small fish taken from the lake bed. The diving rhythm is regular once you get your eye in — anticipate the resurface point and you will see the birds closer.",
          "The courtship display of the male goldeneye is spectacular and can be seen from late winter onwards, sometimes as early as February. The male throws his head back in an extreme backward neck-stretch, showing the white cheek patches. This is repeated several times in quick succession. Groups of males competing for a single female perform the display simultaneously, which is worth watching for at close range from the steamer jetties.",
        ],
      },
      {
        heading: "Ullswater",
        body: [
          "Ullswater is the most productive lake for winter wildfowl in the eastern Lakes. The northern end near Pooley Bridge regularly holds goldeneye, goosander, and tufted duck through winter. The lake's clear water and depth give excellent feeding conditions for diving ducks.",
          "The Pooley Bridge shore gives the best view without boat transport. Walk south from the village along the west shore for a kilometre and scan the water carefully. Goldeneye tend to congregate in small groups, often in the 50 to 200-metre band from the shore. Goosander are usually seen in pairs or small groups, often on exposed rocks along the water's edge.",
          "The Ullswater Steamers run through winter on a reduced timetable. The boat gives close views of birds on the water and a different perspective on the lake's wildlife. The 35-minute journey from Glenridding to Howtown passes through the main wintering wildfowl areas. In winter the steamers are quiet and you may have the deck largely to yourself.",
        ],
      },
      {
        heading: "Windermere and Coniston",
        body: [
          "Windermere — England's largest lake — holds a reliable winter wildfowl population despite the heavy tourist and boating activity. The southern end near Fell Foot Park (LA12 8NN, National Trust) gives good views without the congestion of Bowness. Tufted duck are common here, and goldeneye are regularly present through winter. Great crested grebes are resident and visible throughout the year.",
          "Coniston Water is the least-visited of the three large lakes for wildfowl and can give more rewarding birding as a result. The northern end near Coniston village and the southern end at Water Yeat both give open water views. Goldeneye, goosander, and tufted duck are reliable. The John Ruskin Museum car park at Coniston (LA21 8DT) is a convenient starting point.",
          "Other lakes worth checking include Bassenthwaite (north of Keswick), Esthwaite Water (between Grizedale and Hawkshead), and the tarns on the higher fells — Tarn Hows is accessible year-round and holds goosander regularly in winter.",
        ],
      },
      {
        heading: "Other winter species",
        body: [
          "Goosander are the year-round fish-eating ducks of the Lake District rivers and lakes. The male in winter plumage is white with a pink flush and a dark green head; the female is grey with a rusty-brown head and a distinctive ragged crest. They fly fast and low over the water. Pairs and small groups are typical throughout winter.",
          "Tufted duck are the small black and white diving ducks with a drooping tuft of feathers at the back of the head. The male is clean black and white; the female is brown. They are common on all the larger lakes through winter and often mix with goldeneye in the same feeding areas. Pochard — red-headed ducks with a grey body — are regular but less numerous.",
          "Great crested grebes are resident on most of the larger lakes. In winter they are in their winter plumage, lacking the dramatic facial ornaments of the breeding season, but still elegant birds. Cormorants roost in trees along the lake shores and are easily seen throughout winter. Keep an eye on the open water for anything that does not fit the usual diving duck pattern — unusual species turn up during cold weather movements.",
        ],
      },
    ],
    practicalTips: [
      "Peak timing: December to February for maximum wildfowl numbers",
      "Ullswater northern end (Pooley Bridge, CA10 2NQ) is the most reliable site",
      "Windermere: Fell Foot Park (LA12 8NN) gives good views of the southern lake",
      "Coniston: park at LA21 8DT near Coniston village for the northern lake",
      "Binoculars essential — a telescope on a tripod gives the best views",
      "Goldeneye dive frequently — count the seconds to anticipate where they resurface",
      "Watch for male goldeneye courtship display from February onwards",
      "Cold weather on the Continent drives unusual species westward — check in January",
    ],
    relatedLinks: [
      { href: "/nature/ullswater", label: "Ullswater wildlife guide" },
      { href: "/birds/goldeneye", label: "Goldeneye species page" },
      { href: "/birds/goosander", label: "Goosander species page" },
      { href: "/birdwatching-guide", label: "Birdwatching guide" },
    ],
  },
};

/* ─── page component ─────────────────────────────────────── */

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(seasonalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seasonalPages[slug];
  if (!page) return {};
  const url = `https://www.thelakeswildlife.co.uk/seasonal/${slug}`;
  return {
    title: `${page.title} | The Lakes Wildlife`,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.title} | The Lakes Wildlife`,
      description: page.metaDescription,
      url,
      siteName: "The Lakes Wildlife",
      type: "article",
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.metaDescription },
  };
}

export default async function SeasonalSlugPage({ params }: Props) {
  // params is still a Promise in Next.js 16 so async is required
  const { slug } = await params;
  const page = seasonalPages[slug];
  if (!page) notFound();

  const url = `https://www.thelakeswildlife.co.uk/seasonal/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.metaDescription,
    url,
    author: {
      "@type": "Person",
      name: "Damian Roche",
      description: "Damian walks the Lake District fells, watches the wildlife, and writes about what he finds. Ex-army, hiker, fisherman.",
      url: "https://www.thelakeswildlife.co.uk",
    },
    publisher: { "@type": "Organization", name: "The Lakes Wildlife", url: "https://www.thelakeswildlife.co.uk" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Page header band */}
      <div className="bg-[var(--fell)] text-white">
    <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/seasonal" className="hover:text-white/80 transition">Seasonal guides</Link>
            <span>/</span>
            <span className="text-white/80">{page.title}</span>
      </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Seasonal guide · {page.period}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">{page.title}</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">{page.intro}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">

        {page.sections.map((section) => (
          <div key={section.heading} className="mb-10">
            <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">{section.heading}</h2>
            {section.body.map((para, i) => (
              <p key={i} className="text-[var(--slate)] text-sm leading-relaxed mb-3">{para}</p>
            ))}
          </div>
        ))}

        <div className="bg-[var(--fog)] rounded-xl p-5 mb-10">
          <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-3">Quick reference</p>
          <h2 className="font-semibold text-[var(--fell)] mb-3">Practical tips</h2>
          <ul className="space-y-1.5">
            {page.practicalTips.map((tip) => (
              <li key={tip} className="flex gap-2 text-sm text-[var(--slate)]">
                <span className="text-[var(--lichen)] flex-shrink-0">▸</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Author bio */}
        <div className="p-5 rounded-xl bg-[var(--fog)] border border-[var(--reed)] mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--lichen)] mb-1">About the author</p>
          <p className="text-sm font-semibold text-[var(--fell)]">Damian Roche</p>
          <p className="text-sm text-[var(--slate)] mt-1 leading-relaxed">
            Damian walks the Lake District fells, watches the wildlife, and writes about what he finds. Ex-army, hiker, fisherman. Regular Lakes visitor for decades.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--fog)]">
          {page.relatedLinks.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener" className="text-[var(--lichen)] font-medium hover:underline text-sm">
                {link.label} →
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="text-[var(--lichen)] font-medium hover:underline text-sm">
                {link.label} →
              </Link>
            )
          )}
        </div>
    </div>
    </>
  );
}
