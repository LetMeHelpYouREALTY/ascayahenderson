import {
  h2PhotoForPath,
  h3PhotoForPath,
  photoForPath,
  photos,
  type SitePhoto,
} from "@/lib/media";

/**
 * Picks a still from the section heading. Alt text is the heading itself.
 * Place names win over generic words such as "question" or "Suite 100".
 */

function generated(file: string): SitePhoto {
  return {
    src: `/images/headings/${file}`,
    alt: "",
    width: 1920,
    height: 1080,
  };
}

const gate = generated("ascaya-hillside-gate.jpg");
const canyon = generated("canyon-terrace-condos.jpg");
const homesite = generated("desert-homesite-view.jpg");
const clubhouse = generated("clubhouse-lap-pool.jpg");
const desertModern = generated("desert-modern-house.jpg");
const keys = generated("front-door-keys.jpg");
const staged = generated("staged-living-room.jpg");
const valuationDesk = generated("valuation-desk.jpg");
const boxes = generated("moving-boxes-room.jpg");
const quietDining = generated("quiet-dining-room.jpg");
const singleLevel = generated("single-level-patio.jpg");
const modest = generated("modest-starter-home.jpg");
const road = generated("desert-commute-road.jpg");
const recreation = generated("recreation-terrace.jpg");
const officeSeating = generated("office-seating.jpg");

const pools = {
  ascaya: [gate],
  canyon: [canyon, clubhouse],
  homesite: [homesite, gate],
  desertDesign: [desertModern, homesite],
  amenities: [clubhouse, recreation],
  summerlin: [photos.summerlin, photos.summerlinTrail],
  ridges: [photos.ridges, photos.luxuryPool, desertModern],
  highlands: [photos.southernHighlands, photos.sunCityAnthemGolf],
  skye: [photos.skyeCanyon, photos.newConstruction],
  centennial: [photos.centennial, photos.skyeCanyon],
  mountains: [photos.mountainsEdge, photos.newConstruction],
  greenValley: [photos.greenValley, photos.henderson],
  inspirada: [photos.inspirada, photos.henderson],
  henderson: [photos.henderson, photos.greenValley, gate],
  aliante: [photos.aliante, photos.alianteRec],
  lake: [photos.lakeLasVegas, photos.fiftyFiveClubhouse],
  fiftyFive: [
    recreation,
    photos.fiftyFive,
    photos.fiftyFiveClubhouse,
    photos.fiftyFiveFitness,
    photos.sunCityAnthemGolf,
  ],
  office: [officeSeating, valuationDesk, photos.office, photos.consultation],
  buyer: [keys, photos.buyers],
  seller: [staged, photos.sellers],
  valuation: [valuationDesk, officeSeating],
  downsize: [singleLevel, staged],
  sensitive: [quietDining, officeSeating],
  relocation: [boxes, road],
  investment: [photos.investment, photos.market],
  construction: [photos.newConstruction, photos.skyeCanyon],
  firstHome: [modest, keys],
  market: [photos.market, photos.homeHero],
  commute: [road, photos.summerlinTrail, photos.mountainsEdge],
  park: [photos.henderson, photos.inspirada, photos.centennial],
  agent: [photos.agent, officeSeating],
  listings: [photos.homeHero, keys, photos.henderson, desertModern],
} as const;

type PoolName = keyof typeof pools;

const SPECIFIC_PLACE_POOLS = new Set<PoolName>([
  "canyon",
  "homesite",
  "desertDesign",
  "amenities",
]);

const PLACE_POOLS = new Set<PoolName>([
  "ascaya",
  "canyon",
  "homesite",
  "desertDesign",
  "amenities",
  "summerlin",
  "ridges",
  "highlands",
  "skye",
  "centennial",
  "mountains",
  "greenValley",
  "inspirada",
  "henderson",
  "aliante",
  "lake",
  "fiftyFive",
  "park",
]);

const TOKENS: readonly { token: string; pool: PoolName }[] = [
  { token: "canyon residence", pool: "canyon" },
  { token: "the canyon", pool: "canyon" },
  { token: "cloud rock", pool: "homesite" },
  { token: "homesite", pool: "homesite" },
  { token: "desert design", pool: "desertDesign" },
  { token: "desert modern", pool: "desertDesign" },
  { token: "clubhouse", pool: "amenities" },
  { token: "pickleball", pool: "amenities" },
  { token: "50-meter", pool: "amenities" },
  { token: "50 meter", pool: "amenities" },
  { token: "ascaya", pool: "ascaya" },
  { token: "mccullough", pool: "ascaya" },
  { token: "sun city summerlin", pool: "fiftyFive" },
  { token: "sun city anthem", pool: "fiftyFive" },
  { token: "sun city aliante", pool: "fiftyFive" },
  { token: "sun city", pool: "fiftyFive" },
  { token: "solera", pool: "fiftyFive" },
  { token: "stonebridge", pool: "fiftyFive" },
  { token: "trilogy", pool: "fiftyFive" },
  { token: "del webb", pool: "fiftyFive" },
  { token: "55+", pool: "fiftyFive" },
  { token: "55-plus", pool: "fiftyFive" },
  { token: "the ridges", pool: "ridges" },
  { token: "ridges", pool: "ridges" },
  { token: "southern highlands", pool: "highlands" },
  { token: "skye canyon", pool: "skye" },
  { token: "centennial", pool: "centennial" },
  { token: "mountains edge", pool: "mountains" },
  { token: "mountain's edge", pool: "mountains" },
  { token: "exploration peak", pool: "mountains" },
  { token: "green valley", pool: "greenValley" },
  { token: "inspirada", pool: "inspirada" },
  { token: "red rock", pool: "summerlin" },
  { token: "summerlin", pool: "summerlin" },
  { token: "henderson", pool: "henderson" },
  { token: "aliante", pool: "aliante" },
  { token: "north las vegas", pool: "aliante" },
  { token: "lake las vegas", pool: "lake" },
  { token: "floyd lamb", pool: "park" },
  { token: "park", pool: "park" },
  { token: "downsiz", pool: "downsize" },
  { token: "divorce", pool: "sensitive" },
  { token: "probate", pool: "sensitive" },
  { token: "testamentary", pool: "sensitive" },
  { token: "reloc", pool: "relocation" },
  { token: "california", pool: "relocation" },
  { token: "moving", pool: "relocation" },
  { token: "invest", pool: "investment" },
  { token: "rental", pool: "investment" },
  { token: "1031", pool: "investment" },
  { token: "new construction", pool: "construction" },
  { token: "builder", pool: "construction" },
  { token: "first-time", pool: "firstHome" },
  { token: "first home", pool: "firstHome" },
  { token: "pre-approval", pool: "buyer" },
  { token: "home worth", pool: "valuation" },
  { token: "valuation", pool: "valuation" },
  { token: "cma", pool: "valuation" },
  { token: "luxury", pool: "ridges" },
  { token: "golf", pool: "highlands" },
  { token: "market", pool: "market" },
  { token: "median", pool: "market" },
  { token: "snapshot", pool: "market" },
  { token: "trail", pool: "commute" },
  { token: "commute", pool: "commute" },
  { token: "minutes", pool: "commute" },
  { token: "campus", pool: "commute" },
  { token: "elementary", pool: "commute" },
  { token: "high school", pool: "commute" },
  { token: "i-15", pool: "commute" },
  { token: "us-95", pool: "commute" },
  { token: "i-215", pool: "commute" },
  { token: "beltway", pool: "commute" },
  { token: "lockbox", pool: "seller" },
  { token: "staging", pool: "seller" },
  { token: "sell", pool: "seller" },
  { token: "showing", pool: "buyer" },
  { token: "tour", pool: "buyer" },
  { token: "buy", pool: "buyer" },
  { token: "suite 100", pool: "office" },
  { token: "lake mead", pool: "office" },
  { token: "9406", pool: "office" },
  { token: "contact", pool: "office" },
  { token: "calendly", pool: "office" },
  { token: "dr. jan", pool: "agent" },
  { token: "duffy", pool: "agent" },
  { token: "berkshire", pool: "office" },
  { token: "bhhs", pool: "office" },
  { token: "faq", pool: "office" },
  { token: "question", pool: "office" },
  { token: "security", pool: "office" },
  { token: "homes for sale", pool: "listings" },
  { token: "listing", pool: "listings" },
];

function hashHeading(heading: string): number {
  let hash = 2166136261;
  for (let i = 0; i < heading.length; i++) {
    hash ^= heading.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function pick(heading: string, pool: readonly SitePhoto[]): SitePhoto {
  const index = hashHeading(heading) % pool.length;
  const chosen = pool[index] ?? pool[0];
  return { ...chosen, alt: heading.trim() };
}

function fallbackPool(path: string): SitePhoto[] {
  const seen = new Set<string>();
  const pool: SitePhoto[] = [];
  for (const photo of [
    photoForPath(path),
    h2PhotoForPath(path),
    h3PhotoForPath(path),
    desertModern,
    officeSeating,
    photos.homeHero,
  ]) {
    if (seen.has(photo.src)) continue;
    seen.add(photo.src);
    pool.push(photo);
  }
  return pool;
}

export function photoForHeading(heading: string, path = ""): SitePhoto {
  const text = heading.toLowerCase();
  let earliestPlace: { index: number; pool: PoolName } | null = null;
  let earliestSpecific: { index: number; pool: PoolName } | null = null;
  let earliestAny: { index: number; pool: PoolName } | null = null;

  for (const entry of TOKENS) {
    const index = text.indexOf(entry.token);
    if (index < 0) continue;
    if (!earliestAny || index < earliestAny.index) {
      earliestAny = { index, pool: entry.pool };
    }
    if (
      PLACE_POOLS.has(entry.pool) &&
      (!earliestPlace || index < earliestPlace.index)
    ) {
      earliestPlace = { index, pool: entry.pool };
    }
    if (
      SPECIFIC_PLACE_POOLS.has(entry.pool) &&
      (!earliestSpecific || index < earliestSpecific.index)
    ) {
      earliestSpecific = { index, pool: entry.pool };
    }
  }

  const poolName =
    earliestSpecific?.pool ?? earliestPlace?.pool ?? earliestAny?.pool;
  if (/\bagent\b/.test(text) && !earliestPlace) {
    return pick(heading, pools.agent);
  }
  if (poolName) {
    return pick(heading, pools[poolName]);
  }
  return pick(heading, fallbackPool(path));
}
