/**
 * Ascaya Henderson guide pages.
 * Community facts checked 2026-10-08 against:
 * - https://www.ascaya.com/
 * - https://www.ascaya.com/real-estate/homesites
 * - https://www.ascaya.com/real-estate/the-canyon-residences
 * - https://www.ascaya.com/real-estate/homes
 * - https://www.ascaya.com/amenities
 * Developer prices change. Do not copy individual lot or residence prices.
 */

import type { Metadata } from "next";
import type { FAQItem } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export type AscayaGuideId =
  | "community"
  | "canyon"
  | "homesites"
  | "desert-design"
  | "amenities"
  | "buyers"
  | "sellers"
  | "valuation";

export type AscayaPoint = {
  heading: string;
  body: string;
};

export type AscayaSection = {
  heading: string;
  answer: string;
  points?: AscayaPoint[];
};

export type AscayaGuide = {
  id: AscayaGuideId;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  lede: string;
  sections: AscayaSection[];
  faqs: FAQItem[];
  showListings: boolean;
  includePlace: boolean;
};

const COMMUNITY_ADDRESS = "One Ascaya Blvd, Henderson, NV 89012";

export const ASCAYA_GUIDES: readonly AscayaGuide[] = [
  {
    id: "community",
    path: "/neighborhoods/ascaya",
    title: "Ascaya Henderson Real Estate | Dr. Jan Duffy, REALTOR®",
    description:
      "Ascaya is a guard-gated community at One Ascaya Blvd, Henderson, NV 89012, on the McCullough Mountain Range. Dr. Jan Duffy helps buyers and sellers. Call (702) 222-1964.",
    keywords: [
      "Ascaya Henderson",
      "Ascaya homes for sale",
      "Ascaya real estate agent",
      "Dr. Jan Duffy Ascaya",
    ],
    h1: "Ascaya Henderson real estate with Dr. Jan Duffy",
    lede: "Ascaya is a guard-gated residential community in the McCullough Mountain Range of Henderson, Nevada, about 20 minutes from the Las Vegas Strip. The address is One Ascaya Blvd, Henderson, NV 89012. Dr. Jan Duffy represents buyers and sellers there.",
    includePlace: true,
    showListings: true,
    sections: [
      {
        heading: "Where is Ascaya in Henderson?",
        answer:
          "Ascaya sits in the McCullough Mountain Range in Henderson, Nevada. The community entrance address is One Ascaya Blvd, Henderson, NV 89012. Ascaya's own site places it about 20 minutes from the Las Vegas Strip.",
      },
      {
        heading: "What can you buy at Ascaya?",
        answer:
          "Ascaya publishes three offerings: The Canyon Residences, Desert Design Study homes, and Estate and Cloud Rock homesites. Dr. Jan Duffy compares those choices against the live MLS before you tour.",
        points: [
          {
            heading: "Canyon Residences at Ascaya",
            body: "Lock-and-leave condominiums by Blue Heron, on seven terraces inside the gates.",
          },
          {
            heading: "Desert Design Study homes",
            body: "Built desert-modern houses with clubhouse, pool, court, park, and trail access.",
          },
          {
            heading: "Ascaya homesites",
            body: "Custom lots in the Estate Collection and the 58-lot Cloud Rock Collection.",
          },
        ],
      },
      {
        heading: "Who represents you at Ascaya?",
        answer:
          "Dr. Jan Duffy, REALTOR®, license S.0197614.LLC, with Berkshire Hathaway HomeServices Nevada Properties. Tours start with a call or text to (702) 222-1964. The office is 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      },
    ],
    faqs: [
      {
        question: "Is Ascaya in Henderson or Las Vegas?",
        answer:
          "Ascaya is in Henderson, Nevada, at One Ascaya Blvd, Henderson, NV 89012. It is on the McCullough Mountain Range, about 20 minutes from the Las Vegas Strip.",
      },
      {
        question: "Is Ascaya guard-gated?",
        answer:
          "Yes. Ascaya describes itself as a guard-gated residential community. Schedule the gate appointment with Dr. Jan Duffy at (702) 222-1964.",
      },
      {
        question: "What phone number should I call for an Ascaya showing?",
        answer:
          "Call or text Dr. Jan Duffy at (702) 222-1964. That is the client line for showings, offers, and valuations.",
      },
    ],
  },
  {
    id: "canyon",
    path: "/ascaya/canyon-residences",
    title: "Canyon Residences at Ascaya | Dr. Jan Duffy",
    description:
      "The Canyon Residences are 51 lock-and-leave condominiums at Ascaya in Henderson, built by Blue Heron. Garden, Villa, and Penthouse types. Call Dr. Jan Duffy at (702) 222-1964.",
    keywords: [
      "Canyon Residences Ascaya",
      "Ascaya condominiums Henderson",
      "lock and leave Ascaya",
    ],
    h1: "Canyon Residences at Ascaya in Henderson",
    lede: "The Canyon Residences are 51 lock-and-leave condominiums at Ascaya, designed and built by Blue Heron across seven terraces. The types are Garden, Villa, and Penthouse. Dr. Jan Duffy sets the showing. Call (702) 222-1964.",
    includePlace: false,
    showListings: true,
    sections: [
      {
        heading: "What are the Canyon Residences at Ascaya?",
        answer:
          "They are condominium residences inside Ascaya, sited on seven elevated terraces in Henderson. Blue Heron designed and built them. Ascaya reports that closings and move-ins are underway. Nevada has no state income tax. That is a state rule, not a promise about your return.",
      },
      {
        heading: "Which Canyon residence types can you buy?",
        answer:
          "Ascaya lists three condominium types: Garden, Villa, and Penthouse. Each is a private residence with lock-and-leave care. Ask Dr. Jan which floor plans are actually available before you choose a type.",
        points: [
          {
            heading: "Garden residences",
            body: "Ground-level condominiums in The Canyon, with the same gate and club access as the other types.",
          },
          {
            heading: "Villa residences",
            body: "A separate Canyon plan between the Garden homes and the Penthouses.",
          },
          {
            heading: "Penthouse residences",
            body: "The upper Canyon plan. Views still vary by terrace, and Ascaya does not guarantee a view.",
          },
        ],
      },
      {
        heading: "What amenities are inside The Canyon?",
        answer:
          "Ascaya lists five pool terraces, two wellness parks with saunas and cold plunges, and a trail loop that connects to the community trails. Residents also use the Ascaya clubhouse, dining, fitness center, pool, and Family Park.",
      },
      {
        heading: "How do you buy a Canyon residence?",
        answer:
          "Call Dr. Jan Duffy at (702) 222-1964. She confirms which residences are for sale, books the gate, and writes the offer through Berkshire Hathaway HomeServices Nevada Properties. Current developer prices change, so this page does not print them.",
      },
    ],
    faqs: [
      {
        question: "How many Canyon Residences are at Ascaya?",
        answer:
          "Ascaya states there are 51 Vegas Modern condominium residences, built by Blue Heron across seven terraces.",
      },
      {
        question: "Are the Canyon Residences single-family homes?",
        answer:
          "No. Ascaya describes them as condominium residences with lock-and-leave care, in Garden, Villa, and Penthouse types.",
      },
      {
        question: "Can Canyon owners use the Ascaya clubhouse?",
        answer:
          "Yes. Ascaya says Canyon residents have access to the clubhouse, dining, fitness center, pool, and Family Park.",
      },
    ],
  },
  {
    id: "homesites",
    path: "/ascaya/homesites",
    title: "Ascaya Homesites for Sale | Dr. Jan Duffy",
    description:
      "Ascaya homesites in Henderson include the Estate Collection and 58 Cloud Rock lots. No build-timeline requirement, per Ascaya. Call Dr. Jan Duffy at (702) 222-1964.",
    keywords: [
      "Ascaya homesites",
      "Cloud Rock Collection Ascaya",
      "Estate homesites Henderson",
      "custom lots Ascaya",
    ],
    h1: "Ascaya homesites in Henderson",
    lede: "Ascaya homesites are custom-build lots on the McCullough Mountain Range in Henderson. The Estate Collection runs from about half an acre to more than two acres. Cloud Rock is 58 homesites from 1.6 to 3.34 acres. Call Dr. Jan Duffy at (702) 222-1964 before you rely on a published price.",
    includePlace: false,
    showListings: true,
    sections: [
      {
        heading: "How large are the Estate homesites at Ascaya?",
        answer:
          "Ascaya describes Estate homesites as about half an acre to more than two acres, terraced into the McCullough Mountain Range. Sightlines can face the Strip, the peaks, or Sloan Canyon National Conservation Area. Ascaya does not guarantee a view.",
      },
      {
        heading: "What is the Cloud Rock Collection?",
        answer:
          "Cloud Rock is 58 homesites on Ascaya's upper ridgelines, from 1.6 to 3.34 acres. Ascaya describes 360-degree views across the valley and Sloan Canyon. Confirm the lot's orientation on site with Dr. Jan Duffy.",
      },
      {
        heading: "Is there a deadline to build on an Ascaya homesite?",
        answer:
          "Ascaya states that it imposes no homesite building timeline requirement. Homesite owners also have clubhouse, pool, fitness, tennis, pickleball, Family Park, and trail access during design and construction.",
      },
      {
        heading: "What do Ascaya homesites cost?",
        answer:
          "Ascaya's homesite page lists Estate homesites priced from $1 million and Cloud Rock homesites from $2 million to $8 million. Those are developer figures and they change. Dr. Jan Duffy will confirm the live price before you write an offer. Call (702) 222-1964.",
      },
    ],
    faqs: [
      {
        question: "How many Cloud Rock homesites are at Ascaya?",
        answer:
          "Ascaya lists 58 Cloud Rock homesites, ranging from 1.6 to 3.34 acres.",
      },
      {
        question: "Can I use Ascaya amenities before my home is built?",
        answer:
          "Yes. Ascaya says homesite owners have full amenity access from day one, including during design and construction.",
      },
      {
        question: "Where do I confirm a homesite price?",
        answer:
          "Call Dr. Jan Duffy at (702) 222-1964. Developer starting prices on ascaya.com are not a live offer price.",
      },
    ],
  },
  {
    id: "desert-design",
    path: "/ascaya/desert-design-study",
    title: "Desert Design Study Homes at Ascaya | Dr. Jan Duffy",
    description:
      "Desert Design Study homes are built desert-modern houses at Ascaya in Henderson. Dr. Jan Duffy tours resale and developer inventory. Call (702) 222-1964.",
    keywords: [
      "Desert Design Study Ascaya",
      "Ascaya custom homes Henderson",
      "Ascaya houses for sale",
    ],
    h1: "Desert Design Study homes at Ascaya",
    lede: "Desert Design Study homes are built houses at Ascaya in Henderson, each designed as a desert-modern residence. Owners use the clubhouse, the 50-meter pool, tennis and pickleball, Family Park, and the trails. Dr. Jan Duffy walks the current inventory with you. Call (702) 222-1964.",
    includePlace: false,
    showListings: true,
    sections: [
      {
        heading: "What is a Desert Design Study home?",
        answer:
          "Ascaya describes these as built desert residences, a design series rather than a vacant lot. They are a separate offering from The Canyon Residences and from the homesite collections. Ask which addresses are complete before you compare them to a lot.",
      },
      {
        heading: "Which Ascaya amenities come with these homes?",
        answer:
          "Ascaya includes access to the 23,000-square-foot clubhouse, dining, fitness, a 50-meter zero-edge pool, the tennis and pickleball pavilion, a two-acre Family Park, and more than two miles of private trails.",
      },
      {
        heading: "How do you tour a Desert Design Study home?",
        answer:
          "Call or text Dr. Jan Duffy at (702) 222-1964. She books the guard gate and confirms whether the house is a resale or still with the developer. The community address is One Ascaya Blvd, Henderson, NV 89012.",
      },
    ],
    faqs: [
      {
        question: "Are Desert Design Study homes the same as homesites?",
        answer:
          "No. Homesites are lots for a custom build. Desert Design Study homes are built houses. The Canyon Residences are condominiums.",
      },
      {
        question: "Who shows Desert Design Study homes?",
        answer: "Dr. Jan Duffy shows them by appointment. Call (702) 222-1964.",
      },
      {
        question: "Where is the Desert Design Study collection?",
        answer: `Inside Ascaya, at ${COMMUNITY_ADDRESS}, in the McCullough Mountain Range.`,
      },
    ],
  },
  {
    id: "amenities",
    path: "/ascaya/amenities",
    title: "Ascaya Clubhouse and Amenities | Dr. Jan Duffy",
    description:
      "Ascaya's clubhouse is 23,000 square feet, with dining, fitness, a 50-meter pool, tennis, pickleball, Family Park, and trails. Tours with Dr. Jan Duffy: (702) 222-1964.",
    keywords: [
      "Ascaya clubhouse",
      "Ascaya amenities Henderson",
      "Ascaya pool tennis pickleball",
    ],
    h1: "Ascaya clubhouse and amenities in Henderson",
    lede: "The Ascaya clubhouse is 23,000 square feet and was designed by Swaback Partners. It holds dining, a bar lounge, a fitness center, and event space. Outside are a 50-meter zero-edge pool, tennis and pickleball, a two-acre Family Park, and more than two miles of trails.",
    includePlace: false,
    showListings: false,
    sections: [
      {
        heading: "What is inside the Ascaya clubhouse?",
        answer:
          "Ascaya describes a 23,000-square-foot clubhouse by Swaback Partners, with dining, a bar lounge, a fitness center, and event space. The building opens toward the 50-meter pool and views toward the Strip. Dr. Jan Duffy can include the clubhouse on a home tour.",
      },
      {
        heading: "What outdoor amenities does Ascaya list?",
        answer:
          "Ascaya lists a 50-meter zero-edge pool, a tennis and pickleball pavilion, a two-acre Family Park, and more than two miles of private trails. Canyon residences add their own pool terraces and wellness parks.",
        points: [
          {
            heading: "50-meter pool",
            body: "A zero-edge pool at the clubhouse. Canyon residences also have five pool terraces of their own.",
          },
          {
            heading: "Tennis and pickleball",
            body: "A pavilion for both sports, listed by Ascaya for residents.",
          },
          {
            heading: "Family Park and trails",
            body: "A two-acre Family Park and more than two miles of private trails. Family Park is the park's name.",
          },
        ],
      },
      {
        heading: "Who can use the amenities while building?",
        answer:
          "Ascaya says homesite owners have amenity access from day one, including during design and construction. Canyon residents and Desert Design Study owners are also listed for clubhouse access. Call (702) 222-1964 to see the rooms on a tour.",
      },
    ],
    faqs: [
      {
        question: "How big is the Ascaya clubhouse?",
        answer:
          "Ascaya states the clubhouse is 23,000 square feet and was designed by Swaback Partners.",
      },
      {
        question: "Does Ascaya have pickleball?",
        answer: "Yes. Ascaya lists a tennis and pickleball pavilion.",
      },
      {
        question: "How do I see the clubhouse?",
        answer:
          "Book a tour with Dr. Jan Duffy at (702) 222-1964. The gate appointment has to be in place before you arrive at One Ascaya Blvd.",
      },
    ],
  },
  {
    id: "buyers",
    path: "/buyers/ascaya",
    title: "Buy an Ascaya Henderson Home | Dr. Jan Duffy",
    description:
      "Buy at Ascaya in Henderson with Dr. Jan Duffy. Canyon residences, Desert Design Study homes, and homesites. Gate appointments. Call (702) 222-1964.",
    keywords: [
      "buy home Ascaya Henderson",
      "Ascaya buyer's agent",
      "Dr. Jan Duffy buyer",
    ],
    h1: "Buy an Ascaya Henderson home with Dr. Jan Duffy",
    lede: "Dr. Jan Duffy represents buyers at Ascaya in Henderson. She sets the gate appointment, compares Canyon residences, Desert Design Study homes, and homesites, and writes the offer. Call or text (702) 222-1964.",
    includePlace: false,
    showListings: true,
    sections: [
      {
        heading: "How does buying at Ascaya work?",
        answer:
          "Start with the product type, then the address. A Canyon condominium, a Desert Design Study house, and a homesite are three different purchases. Dr. Jan Duffy narrows that list before you drive to the gate.",
        points: [
          {
            heading: "Book the gate",
            body: "Call (702) 222-1964. Showings at One Ascaya Blvd need an appointment.",
          },
          {
            heading: "Compare the three offerings",
            body: "Condominium, built house, or lot. Pick the one that matches how you want to live.",
          },
          {
            heading: "Write the offer",
            body: "Dr. Jan Duffy prepares it through Berkshire Hathaway HomeServices Nevada Properties, license S.0197614.LLC.",
          },
        ],
      },
      {
        heading: "Which Ascaya home should you tour first?",
        answer:
          "Tour the type you would actually buy. Lock-and-leave buyers start at The Canyon Residences. Buyers who want a completed house start with Desert Design Study homes. Buyers who want to build start with homesites.",
      },
      {
        heading: "Where do you meet Dr. Jan Duffy?",
        answer:
          "The brokerage office is 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Ascaya tours meet at One Ascaya Blvd, Henderson, NV 89012, after the gate is set. Hours are Monday through Friday 9:00 AM to 6:00 PM, Saturday 10:00 AM to 4:00 PM, and Sunday by appointment.",
      },
    ],
    faqs: [
      {
        question: "Do I need my own agent at Ascaya?",
        answer:
          "Yes, if you want representation. Dr. Jan Duffy represents buyers separately from the on-site sales gallery. Call (702) 222-1964.",
      },
      {
        question:
          "Can I buy a homesite and a Canyon residence with the same agent?",
        answer:
          "Yes. Dr. Jan Duffy covers both, plus Desert Design Study homes.",
      },
      {
        question: "What should I bring to the first Ascaya tour?",
        answer:
          "A time window and the product you want to see. Dr. Jan Duffy handles the gate list.",
      },
    ],
  },
  {
    id: "sellers",
    path: "/sellers/ascaya",
    title: "Sell an Ascaya Henderson Home | Dr. Jan Duffy",
    description:
      "Sell your Ascaya home in Henderson with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Pricing from in-gate comps. Call (702) 222-1964.",
    keywords: [
      "sell home Ascaya Henderson",
      "Ascaya listing agent",
      "Dr. Jan Duffy seller",
    ],
    h1: "Sell an Ascaya Henderson home with Dr. Jan Duffy",
    lede: "Dr. Jan Duffy lists Ascaya homes for sellers through Berkshire Hathaway HomeServices Nevada Properties. The price starts from comps inside the gates, not a valley average. Call (702) 222-1964.",
    includePlace: false,
    showListings: false,
    sections: [
      {
        heading: "How do you price an Ascaya listing?",
        answer:
          "Match the property type first. A Canyon condominium does not comp to a Cloud Rock lot. Dr. Jan Duffy pulls recent Ascaya sales and the homes on the market now, then recommends a list price. This page does not publish that number.",
      },
      {
        heading: "What does the listing appointment include?",
        answer:
          "A walkthrough at the property, a pricing recommendation, and a plan for photos, showings, and the guard gate. The office for paperwork is 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
        points: [
          {
            heading: "Property walkthrough",
            body: "Dr. Jan Duffy sees the residence or lot before she recommends a price.",
          },
          {
            heading: "Gate and showing plan",
            body: "Ascaya is guard-gated. The listing plan includes how buyers get in.",
          },
          {
            heading: "Offer review",
            body: "You see the terms before anything is accepted. Call (702) 222-1964 to start.",
          },
        ],
      },
      {
        heading: "Can you sell a homesite that is not built?",
        answer:
          "Yes. Vacant Ascaya homesites sell as lots. Dr. Jan Duffy confirms the collection, acreage, and any build status before it is listed. Ascaya states there is no homesite building deadline, which buyers will ask about.",
      },
    ],
    faqs: [
      {
        question: "Who is the listing agent for Ascaya sellers?",
        answer:
          "Dr. Jan Duffy, REALTOR®, S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964.",
      },
      {
        question: "Do you list Canyon condominiums and houses?",
        answer:
          "Yes. Canyon residences, Desert Design Study homes, and homesites can all be listed. Each one is priced on its own comps.",
      },
      {
        question: "Where do we sign the listing?",
        answer:
          "At the property or at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Sunday is by appointment.",
      },
    ],
  },
  {
    id: "valuation",
    path: "/home-valuation/ascaya",
    title: "Ascaya Henderson Home Value | Dr. Jan Duffy",
    description:
      "What is an Ascaya Henderson home worth? Dr. Jan Duffy prices it from MLS comps inside the community. No published guess on this page. Call (702) 222-1964.",
    keywords: [
      "Ascaya home value",
      "what is my Ascaya home worth",
      "Ascaya Henderson valuation",
    ],
    h1: "What is an Ascaya Henderson home worth?",
    lede: "An Ascaya home's value depends on whether it is a Canyon residence, a Desert Design Study house, or a homesite, plus the view and recent sales inside the gates. Dr. Jan Duffy prepares that figure from MLS comps. This page does not print a price.",
    includePlace: false,
    showListings: false,
    sections: [
      {
        heading: "What does an Ascaya valuation include?",
        answer:
          "The address, the product type, recent Ascaya sales, and homes for sale now. A Henderson city median is not an Ascaya value. Dr. Jan Duffy sends the number after she has the property facts. Call (702) 222-1964.",
      },
      {
        heading: "Why is there no price on this page?",
        answer:
          "Ascaya prices move, and a Canyon condominium is not a Cloud Rock lot. Publishing one number would be wrong for most addresses. Developer starting prices on ascaya.com are not your home's value.",
      },
      {
        heading: "How do you request the valuation?",
        answer:
          "Call or text (702) 222-1964, or send the address through the contact form. Office hours are Monday through Friday 9:00 AM to 6:00 PM and Saturday 10:00 AM to 4:00 PM. Sunday is by appointment. The office is 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      },
    ],
    faqs: [
      {
        question: "Can you value an Ascaya lot with no house?",
        answer:
          "Yes. Homesite value uses lot sales in the Estate or Cloud Rock collections, not house sales.",
      },
      {
        question: "Is the Henderson median the Ascaya value?",
        answer:
          "No. Ascaya is one guard-gated community. Dr. Jan Duffy uses sales inside Ascaya.",
      },
      {
        question: "Who prepares the valuation?",
        answer: "Dr. Jan Duffy, REALTOR®, S.0197614.LLC. Call (702) 222-1964.",
      },
    ],
  },
];

const guidesById = new Map(ASCAYA_GUIDES.map((guide) => [guide.id, guide]));

export function ascayaGuide(id: AscayaGuideId): AscayaGuide {
  switch (id) {
    case "community":
    case "canyon":
    case "homesites":
    case "desert-design":
    case "amenities":
    case "buyers":
    case "sellers":
    case "valuation": {
      const guide = guidesById.get(id);
      if (!guide) {
        throw new Error(`Missing Ascaya guide content: ${id}`);
      }
      return guide;
    }
    default: {
      const missing: never = id;
      throw new Error(`Unknown Ascaya guide: ${String(missing)}`);
    }
  }
}

export function ascayaRelatedLinks(
  id: AscayaGuideId,
): { href: string; label: string }[] {
  return ASCAYA_GUIDES.filter((guide) => guide.id !== id).map((guide) => ({
    href: guide.path,
    label: guide.h1,
  }));
}

export function ascayaMetadata(guide: AscayaGuide): Metadata {
  return pageMetadata({
    path: guide.path,
    title: guide.title,
    description: guide.description,
    keywords: [...guide.keywords],
  });
}
