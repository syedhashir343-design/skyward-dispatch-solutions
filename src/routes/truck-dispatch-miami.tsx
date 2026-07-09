import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Miami and South Florida carriers?", a: "Yes. We dispatch owner-operators and small fleets across South Florida — Miami, Fort Lauderdale, Hialeah, Miramar, Homestead and Broward County — on freight leaving and returning to the region." },
  { q: "What South Florida lanes pay best?", a: "Miami to Northeast, Miami to Atlanta and Southeast, and produce reefer lanes from South Florida to national markets all move consistently. Port of Miami and Port Everglades add container drayage." },
  { q: "Do you dispatch Florida produce reefer freight?", a: "Yes. South Florida produce — winter tomatoes, avocados, tropicals and imported produce — generates massive reefer outbound volume November through May. Premium rates during peak season." },
  { q: "Do you support Port of Miami and Port Everglades drayage?", a: "Yes. Container drayage from South Florida ports pairs with OTR freight for balanced weekly gross. We coordinate ramp timing and chassis availability carefully." },
  { q: "How do you handle deadhead risk from South Florida?", a: "South Florida is a peninsula, which creates natural deadhead risk on inbound legs. Our dispatchers price outbound loads with round-trip realities in mind and use produce reefer freight to balance the geography." },
  { q: "Can new Florida MC authorities work with you?", a: "Yes. Miami is a manageable market for new authorities during produce season when reefer demand is strong. Our 90-day fast-start program helps you build broker credit quickly." },
];

export const Route = createFileRoute("/truck-dispatch-miami")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-miami",
      city: "Miami",
      state: "Florida",
      stateAbbr: "FL",
      title: "Truck Dispatch Services Miami FL — Skywards Solution",
      description:
        "Miami truck dispatch for dry van, reefer, flatbed and power only carriers. Florida produce, Port of Miami drayage and Northeast return lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Miami",
        state: "Florida",
        stateAbbr: "FL",
        intro:
          "Miami is the freight capital of South Florida — a Latin American trade gateway combined with the largest concentration of winter produce in the Eastern United States. Skywards Solution dispatches Miami-based carriers on every equipment type across the lanes that make South Florida profitable.",
        whyThisCity: [
          "South Florida is a peninsula, and that geography defines the freight market. Every load that arrives in Miami has to leave Miami — deadhead risk is real. But when dispatched well, the peninsula becomes an advantage rather than a problem. Winter produce peaks exactly when Northern markets need reefer freight most. Port of Miami and Port Everglades feed constant container drayage. And Latin American trade generates specialty freight that pays premium rates.",
          "Skywards Solution dispatchers plan Miami freight with the peninsula in mind. Every outbound load is priced with the return leg factored in, and every inbound is chosen based on the outbound freight it enables. That round-trip discipline is what separates Miami carriers who gross $6,500 per week from those who struggle at $4,500.",
        ],
        laneSections: [
          { h3: "Miami to Northeast Corridor", body: "I-95 north through Jacksonville, Savannah and the Carolinas into DC, Philadelphia and New York. The strongest reefer lane out of Florida during produce season." },
          { h3: "South Florida Produce (Reefer)", body: "Winter tomatoes, avocados, tropicals and imported produce from Homestead and Central Florida packing houses. Peak volumes November through May." },
          { h3: "Miami to Atlanta and Southeast", body: "I-75 north through central and north Florida into Atlanta and the Southeast. Consistent dry van and reefer freight both directions." },
          { h3: "Port of Miami & Port Everglades Drayage", body: "Container drayage from South Florida ports to distribution centers across the region. Pairs with OTR to keep drivers loaded during chassis dwell." },
          { h3: "Latin American Trade Freight", body: "Specialty freight moving between Miami and Latin American markets generates high-value dry van and reefer volume for carriers with the right compliance profile." },
        ],
        equipmentBlurb:
          "South Florida's peninsula geography rewards disciplined round-trip planning. Our dispatchers price every load with the return leg factored in.",
        localAdvantages: [
          "South Florida produce reefer lane expertise",
          "Port of Miami and Port Everglades drayage coordination",
          "Round-trip pricing discipline for peninsula geography",
          "Northeast return-freight optimization",
          "Latin American trade freight knowledge",
          "New Florida MC 90-day fast-start onboarding",
          "24/7 dispatch across Eastern time and all US zones",
          "Transparent percentage pricing",
        ],
        faqs,
      }}
    />
  ),
});