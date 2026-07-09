import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Charlotte-area carriers?", a: "Yes. We dispatch owner-operators and small fleets across the Charlotte metro — Charlotte, Concord, Gastonia, Rock Hill, Huntersville and surrounding counties — on freight leaving and returning to the region." },
  { q: "What Charlotte lanes pay best?", a: "Charlotte to Northeast (DC, Philadelphia, NY), Charlotte to Atlanta and Southeast, Charlotte to Midwest, and short-haul to Raleigh and the Triangle all move consistently. Financial services and manufacturing anchor volume." },
  { q: "What about textile freight from the Carolinas?", a: "Yes. Legacy textile operations and modern advanced-textile manufacturing across the Carolinas generate steady dry van and flatbed freight. Furniture from High Point also anchors North Carolina outbound volume." },
  { q: "Do you dispatch Piedmont manufacturing freight?", a: "Absolutely. The Charlotte-Greenville-Spartanburg-Winston-Salem corridor is heavy on automotive parts, aerospace and industrial manufacturing. Consistent flatbed and dry van demand." },
  { q: "What about Port of Charleston drayage?", a: "For Charlotte carriers running down to Charleston, port drayage pairs with OTR freight. We coordinate the round-trip to make it profitable." },
  { q: "Can new North Carolina MC authorities work with you?", a: "Yes. Charlotte has solid broker depth for new authorities. Our 90-day fast-start program helps you build credit fast in this market." },
];

export const Route = createFileRoute("/truck-dispatch-charlotte")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-charlotte",
      city: "Charlotte",
      state: "North Carolina",
      stateAbbr: "NC",
      title: "Truck Dispatch Services Charlotte NC — Skywards Solution",
      description:
        "Charlotte truck dispatch for dry van, reefer, flatbed and power only carriers. Piedmont manufacturing, textile, furniture and Northeast lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Charlotte",
        state: "North Carolina",
        stateAbbr: "NC",
        intro:
          "Charlotte anchors the Piedmont freight market — a manufacturing and distribution corridor stretching from northern Georgia through South Carolina into Virginia. Skywards Solution dispatches Charlotte-area carriers on textile, furniture, automotive and distribution freight across every equipment type.",
        whyThisCity: [
          "Charlotte's freight market is deeper than many carriers realize. The Piedmont corridor between Atlanta and northern Virginia includes some of the highest-density manufacturing in the Southeast — automotive plants, textile operations, furniture manufacturers in High Point, aerospace suppliers, and pharmaceutical facilities. Add Charlotte-Douglas airport's growing air freight, Port of Charleston drayage down I-26, and steady retail distribution demand, and Charlotte-based carriers see consistent freight in every direction.",
          "Skywards Solution dispatchers know the Piedmont corridor well. We track manufacturing schedules from major plants, monitor High Point furniture cycles, and maintain broker relationships that give Charlotte carriers access to specialty freight that generic dispatchers miss.",
        ],
        laneSections: [
          { h3: "Charlotte to Northeast Corridor", body: "I-85 and I-95 north through Virginia and DC into Philadelphia and New York. Higher-paying dry van and reefer lanes with reliable return freight." },
          { h3: "Charlotte to Atlanta and Southeast", body: "I-85 south through Greenville and into Atlanta. Steady manufacturing and retail freight. Great short-haul weekly volume." },
          { h3: "Piedmont Manufacturing (Flatbed & Dry Van)", body: "Automotive parts, aerospace components, industrial equipment and textile products. Consistent weekly outbound freight from the Charlotte-Greenville-Winston-Salem corridor." },
          { h3: "High Point Furniture", body: "Furniture manufacturing generates enormous dry van and flatbed freight to distribution centers nationwide. Peak volumes align with retail buying cycles." },
          { h3: "Charlotte to Midwest Corridor", body: "I-77 and I-40 west through Tennessee and Kentucky into Ohio, Indiana and Illinois. Reliable long-haul freight with balanced return options." },
        ],
        equipmentBlurb:
          "The Piedmont manufacturing corridor rewards flatbed and dry van carriers with steady weekly volume. Our dispatchers know the plants and the brokers.",
        localAdvantages: [
          "Piedmont manufacturing schedule expertise",
          "High Point furniture freight specialization",
          "Textile corridor dry van and flatbed knowledge",
          "Port of Charleston drayage coordination when profitable",
          "Northeast return-freight discipline",
          "New North Carolina MC 90-day fast-start onboarding",
          "24/7 dispatch across Eastern time and all US zones",
          "Transparent percentage pricing",
        ],
        faqs,
      }}
    />
  ),
});