import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Atlanta-based carriers?", a: "Yes. We dispatch owner-operators and small fleets across the Atlanta metro — Atlanta, Marietta, Alpharetta, Duluth, Lawrenceville, Stone Mountain and surrounding counties — on freight leaving and returning to the region." },
  { q: "What Atlanta lanes pay best?", a: "Atlanta to Northeast, Atlanta to Chicago and Midwest, Atlanta to Texas, and short-haul Southeast (Nashville, Charlotte, Jacksonville) all move consistently. Retail DC volume from north Atlanta anchors weekly freight." },
  { q: "Do you dispatch floor covering and carpet freight from Dalton?", a: "Yes. The Dalton, Georgia carpet corridor generates massive flatbed and dry van outbound freight. Our dispatchers know the mill schedules and broker relationships for this specialty market." },
  { q: "Can you handle poultry reefer freight from north Georgia?", a: "Absolutely. North Georgia poultry processing generates steady reefer volume. We know the plants, the schedules and the brokers who move this freight consistently." },
  { q: "What about Port of Savannah drayage?", a: "For Atlanta carriers willing to run down to Savannah, container drayage pairs well with OTR freight. We coordinate the timing to make it profitable rather than a break-even round trip." },
  { q: "Do you work with new Georgia MC authorities?", a: "Yes. Atlanta is one of the best US markets for new authorities because freight depth and broker diversity make it easier to build credit fast. Our 90-day fast-start program is designed exactly for this scenario." },
];

export const Route = createFileRoute("/truck-dispatch-atlanta")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-atlanta",
      city: "Atlanta",
      state: "Georgia",
      stateAbbr: "GA",
      title: "Truck Dispatch Services Atlanta GA — Skywards Solution",
      description:
        "Atlanta truck dispatch for dry van, reefer, flatbed, power only and hotshot carriers. Southeast DC hub, Dalton carpet corridor, poultry reefer and Northeast lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Atlanta",
        state: "Georgia",
        stateAbbr: "GA",
        intro:
          "Atlanta is the freight capital of the Southeast — a distribution hub for national retail, food and industrial freight combined with regional specialties like the Dalton carpet corridor and north Georgia poultry. Skywards Solution dispatches Atlanta-based carriers across every equipment type on the lanes that pay best out of the Southeast.",
        whyThisCity: [
          "Atlanta's location at the intersection of I-75, I-85 and I-20 makes it the natural gateway between the Southeast and the rest of the country. Every major retailer operates a Southeast DC in the Atlanta metro. The Dalton, Georgia carpet corridor generates enormous flatbed volume north of the city. North Georgia poultry plants keep reefer freight moving to the East Coast. And Hartsfield-Jackson supports specialty air-freight and expedited operations.",
          "That depth means Atlanta carriers rarely run empty — but rate discipline matters because Southeast lanes are also some of the most bid-down in the country. Skywards Solution dispatchers negotiate every Atlanta rate confirmation against real market data to make sure your outbound isn't priced like a commodity move.",
        ],
        laneSections: [
          { h3: "Atlanta to Northeast Corridor", body: "I-85 north through the Carolinas into Virginia, DC, Philadelphia and New York. Higher-paying dry van and reefer lanes with reliable return freight." },
          { h3: "Atlanta to Chicago and Midwest", body: "Reciprocal to the biggest lane in America. Retail restock, food, manufacturing and pharmaceuticals all move consistently." },
          { h3: "Dalton Carpet Corridor (Flatbed)", body: "Carpet, flooring and specialty building products from north Georgia mills. Consistent flatbed outbound volume with strong lane loyalty from the mills." },
          { h3: "North Georgia Poultry (Reefer)", body: "Chicken processing plants across Gainesville and north Georgia generate weekly reefer freight to Southeast, Northeast and Midwest markets. Our dispatchers know the plant schedules." },
          { h3: "Atlanta to Texas", body: "I-20 west through Alabama, Mississippi and Louisiana into Dallas and Houston. Consistent dry van and reefer freight both directions." },
        ],
        equipmentBlurb:
          "Every equipment type runs profitably from Atlanta. Our dispatchers know which brokers pay premium and which lanes cycle up week to week.",
        localAdvantages: [
          "Southeast retail DC scheduling expertise",
          "Dalton carpet corridor flatbed specialization",
          "North Georgia poultry reefer lane knowledge",
          "Northeast return-freight coordination",
          "Port of Savannah drayage support when profitable",
          "New Georgia MC 90-day fast-start onboarding",
          "24/7 dispatch across Eastern time zone and beyond",
          "Transparent percentage pricing, no forced dispatch",
        ],
        faqs,
      }}
    />
  ),
});