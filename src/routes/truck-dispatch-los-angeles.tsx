import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Los Angeles-area carriers?", a: "Yes. We dispatch owner-operators and small fleets across greater Los Angeles — LA, Long Beach, San Bernardino, Riverside, Ontario, Anaheim and the Inland Empire — on freight leaving Southern California." },
  { q: "What LA freight lanes pay best?", a: "LA to Chicago, LA to Dallas/Houston, LA to Atlanta and Southeast, and LA to Pacific Northwest all move consistently. Import distribution from LA/Long Beach ports anchors dry van volume year-round." },
  { q: "Do you support Port of LA and Long Beach drayage?", a: "Yes. Container drayage from LA/LB terminals into Inland Empire distribution centers pairs with OTR freight for balanced weekly gross. We coordinate PierPass and chassis dwell times carefully." },
  { q: "How do you handle CARB and CVRP compliance?", a: "California Air Resources Board (CARB) rules on truck emissions and idling apply to every carrier operating in California. We verify your equipment meets current CARB standards before booking loads that require California transit." },
  { q: "What about produce reefer freight from Central Valley?", a: "California produce is one of the largest reefer freight sources in North America. During peak season (spring through fall) LA-based reefer carriers see strong outbound rates on lanes to every US market." },
  { q: "Do you handle Inland Empire warehouse freight?", a: "Yes. The Inland Empire — San Bernardino, Riverside, Fontana, Ontario and Moreno Valley — houses the largest concentration of import distribution warehouses in North America. Constant dry van outbound freight." },
];

export const Route = createFileRoute("/truck-dispatch-los-angeles")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-los-angeles",
      city: "Los Angeles",
      state: "California",
      stateAbbr: "CA",
      title: "Truck Dispatch Services Los Angeles CA — Skywards Solution",
      description:
        "LA truck dispatch for dry van, reefer, flatbed and power only carriers. Port of LA/Long Beach drayage, Inland Empire distribution and California produce lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Los Angeles",
        state: "California",
        stateAbbr: "CA",
        intro:
          "Los Angeles is the largest import gateway in North America and the anchor of the California freight market. Skywards Solution dispatches LA and Inland Empire carriers across every equipment type on the lanes that make Southern California profitable — port drayage, import distribution, California produce and long-haul eastbound freight.",
        whyThisCity: [
          "Los Angeles combines the busiest port complex in the western hemisphere with the largest concentration of import distribution warehouses in the country. Containers flow from LA and Long Beach into the Inland Empire, get repackaged in Fontana, San Bernardino and Moreno Valley warehouses, and then move out on dry van freight to every US market. That gives LA-based carriers extraordinary outbound volume — but California-specific challenges make dispatch expertise critical.",
          "CARB emissions rules, chassis dwell times, dock congestion, and long return legs from the East all shape LA freight economics. Skywards Solution dispatchers factor every one of those variables into rate negotiation. When we book an LA-to-Chicago dry van load, the rate reflects the full round-trip picture — not just the outbound linehaul.",
        ],
        laneSections: [
          { h3: "LA to Chicago Corridor", body: "The largest long-haul lane in America. Import distribution outbound, manufacturing and food return. Weekly loop for teams and solo drivers who want steady long-haul mileage." },
          { h3: "LA to Dallas and Houston", body: "I-10 east through Phoenix and El Paso into Texas. Consistent dry van and reefer volume with return freight from Texas manufacturing and produce." },
          { h3: "Port of LA/Long Beach Drayage", body: "Container moves from LA/LB terminals into Inland Empire warehouses. Pairs with OTR freight to keep drivers earning during PierPass and chassis dwell." },
          { h3: "California Produce (Reefer)", body: "Fresh produce from Central Valley and Salinas to every US market. Peak volumes March through October. Premium reefer rates during peak season." },
          { h3: "LA to Pacific Northwest", body: "I-5 north through Sacramento and Portland into Seattle. Reliable dry van and reefer freight both directions." },
        ],
        equipmentBlurb:
          "Southern California rewards carriers who can flex between drayage and OTR freight. Our dispatchers build weekly plans that combine both for maximum utilization.",
        localAdvantages: [
          "Port of LA/Long Beach drayage expertise",
          "Inland Empire warehouse scheduling knowledge",
          "CARB compliance verification before booking",
          "California produce reefer lane specialization",
          "Long-haul eastbound rate discipline (full round-trip pricing)",
          "New California MC 90-day fast-start onboarding",
          "24/7 dispatch coverage across Pacific and all US time zones",
          "Transparent percentage pricing",
        ],
        faqs,
      }}
    />
  ),
});