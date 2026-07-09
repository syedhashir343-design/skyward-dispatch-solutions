import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Nashville-area carriers?", a: "Yes. We dispatch owner-operators and small fleets across the Nashville metro — Nashville, Franklin, Brentwood, Murfreesboro, Hendersonville and surrounding counties — on freight leaving and returning to Middle Tennessee." },
  { q: "What Nashville lanes pay best?", a: "Nashville to Chicago, Nashville to Northeast, Nashville to Southeast (Atlanta, Charlotte), and Nashville to Dallas all move consistently. Automotive, healthcare and distribution anchor volume." },
  { q: "Do you dispatch automotive freight from GM and Nissan?", a: "Yes. GM Spring Hill, Nissan Smyrna and the surrounding tier-1 supplier network generate steady dry van and specialty freight. Volkswagen Chattanooga adds more automotive volume within reach." },
  { q: "What about healthcare and pharmaceutical freight?", a: "Nashville is a major healthcare hub — HCA, Community Health Systems and hundreds of healthcare companies are headquartered here. Cold-chain and specialty pharmaceutical freight demand is strong." },
  { q: "Do you dispatch construction freight to Nashville building projects?", a: "Yes. Middle Tennessee is one of the fastest-growing regions in the US, with massive residential and commercial construction. Flatbed and building materials freight demand is consistent." },
  { q: "Can new Tennessee MC authorities work with you?", a: "Yes. Nashville has solid broker depth and diverse freight. Our 90-day fast-start program helps new authorities build broker credit quickly in this market." },
];

export const Route = createFileRoute("/truck-dispatch-nashville")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-nashville",
      city: "Nashville",
      state: "Tennessee",
      stateAbbr: "TN",
      title: "Truck Dispatch Services Nashville TN — Skywards Solution",
      description:
        "Nashville truck dispatch for dry van, reefer, flatbed and power only carriers. GM Spring Hill, Nissan Smyrna, healthcare and Southeast crossroads lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Nashville",
        state: "Tennessee",
        stateAbbr: "TN",
        intro:
          "Nashville is the fastest-growing freight market in the Southeast — anchored by GM and Nissan automotive operations, a massive healthcare industry, and construction demand that keeps flatbed carriers loaded year-round. Skywards Solution dispatches Nashville-based carriers across every equipment type on the lanes that make Middle Tennessee profitable.",
        whyThisCity: [
          "Nashville sits at the intersection of three interstates — I-40, I-65 and I-24 — that give carriers direct access to every major freight market in the Eastern half of the country. GM Spring Hill and Nissan Smyrna anchor a dense automotive supply chain that generates constant JIT and specialty freight. Nashville's healthcare industry — HCA, Community Health Systems, hundreds of hospital operators and pharmaceutical companies — creates cold-chain and specialty freight demand. And Middle Tennessee's explosive population growth has made construction and building materials freight a year-round anchor.",
          "Skywards Solution dispatchers know Nashville's freight mix well. We understand automotive JIT windows, healthcare cold-chain requirements, and the construction cycles driving flatbed demand. That specificity means our Nashville-based carriers see consistent weekly volume across every equipment type.",
        ],
        laneSections: [
          { h3: "Nashville to Chicago Corridor", body: "I-65 north through Louisville and Indianapolis into Chicago. Steady long-haul dry van and reefer freight with reliable return options." },
          { h3: "Nashville to Northeast", body: "I-40 east through Knoxville into Virginia and the Northeast. Higher-paying dry van freight with reasonable return options." },
          { h3: "GM and Nissan Automotive", body: "JIT and semi-JIT freight to and from GM Spring Hill and Nissan Smyrna plus tier-1 suppliers. Consistent weekly moves for experienced carriers." },
          { h3: "Nashville Healthcare & Pharmaceutical", body: "Cold-chain and specialty pharmaceutical freight from Nashville's dense healthcare industry. Premium reefer rates for qualified carriers." },
          { h3: "Middle Tennessee Construction (Flatbed)", body: "Building materials, structural steel and construction equipment freight anchored by Nashville's continuous growth. Reliable flatbed demand year-round." },
        ],
        equipmentBlurb:
          "Nashville's automotive, healthcare and construction mix rewards every equipment type. Our dispatchers match your truck to the strongest freight each week.",
        localAdvantages: [
          "GM Spring Hill and Nissan Smyrna JIT expertise",
          "Healthcare and pharmaceutical cold-chain knowledge",
          "Middle Tennessee construction flatbed specialization",
          "Volkswagen Chattanooga automotive freight coordination",
          "Southeast crossroads short-haul optimization",
          "New Tennessee MC 90-day fast-start onboarding",
          "24/7 dispatch across Central time and all US zones",
          "Transparent percentage pricing",
        ],
        faqs,
      }}
    />
  ),
});