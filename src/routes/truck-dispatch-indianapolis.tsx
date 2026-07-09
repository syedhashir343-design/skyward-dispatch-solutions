import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Indianapolis-area carriers?", a: "Yes. We dispatch owner-operators and small fleets across the Indianapolis metro — Indianapolis, Carmel, Fishers, Greenwood, Plainfield and surrounding counties — on freight leaving and returning to the region." },
  { q: "What Indianapolis lanes pay best?", a: "Indianapolis to Chicago, Indianapolis to Southeast, Indianapolis to Northeast, and short-haul Midwest freight all move consistently. Auto parts, pharmaceuticals and Amazon fulfillment anchor volume." },
  { q: "Do you dispatch automotive parts freight?", a: "Yes. Indiana's automotive supply chain — Honda in Greensburg, Subaru in Lafayette, Toyota in Princeton and countless tier-1 suppliers — generates steady dry van and specialty freight. We know the plants and JIT scheduling." },
  { q: "What about pharmaceutical freight from Eli Lilly?", a: "Absolutely. Indianapolis is home to Eli Lilly's global headquarters and a large concentration of pharmaceutical manufacturing. Cold-chain and temperature-controlled freight demand is consistent." },
  { q: "Do you support Indianapolis intermodal drayage?", a: "Yes. CSX and NS intermodal facilities in Indianapolis pair with OTR freight to build balanced weekly gross." },
  { q: "Can new Indiana MC authorities work with you?", a: "Yes. Indianapolis is a solid market for new authorities with strong freight depth and moderate broker diversity. Our 90-day fast-start program applies." },
];

export const Route = createFileRoute("/truck-dispatch-indianapolis")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-indianapolis",
      city: "Indianapolis",
      state: "Indiana",
      stateAbbr: "IN",
      title: "Truck Dispatch Services Indianapolis IN — Skywards Solution",
      description:
        "Indianapolis truck dispatch for dry van, reefer, flatbed and power only carriers. Automotive parts, pharmaceutical and Midwest crossroads lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Indianapolis",
        state: "Indiana",
        stateAbbr: "IN",
        intro:
          "Indianapolis is the Crossroads of America — a Midwest freight hub anchored by automotive manufacturing, pharmaceuticals and a growing e-commerce distribution footprint. Skywards Solution dispatches Indianapolis-based carriers across every equipment type on the lanes that make Central Indiana profitable.",
        whyThisCity: [
          "Indianapolis earns its 'Crossroads of America' nickname from geography — I-65, I-69, I-70 and I-74 all pass through the metro, giving carriers direct access to Chicago, Nashville, Louisville, Cincinnati and beyond. Layer on top of that Indiana's massive automotive supply chain (Honda, Subaru, Toyota, GM, Ford and hundreds of tier-1 suppliers), Eli Lilly's global pharmaceutical operations, and rapidly expanding Amazon and FedEx facilities, and Indianapolis-based carriers have some of the most balanced freight opportunities in the Midwest.",
          "Skywards Solution dispatchers know Central Indiana's freight rhythms. Automotive JIT schedules, pharmaceutical cold-chain requirements, e-commerce peak cycles — all of it factors into weekly dispatch planning. That specificity separates dispatch that maximizes gross from dispatch that just books loads.",
        ],
        laneSections: [
          { h3: "Indianapolis to Chicago", body: "Short-haul I-65 north into Chicago. Constant volume and reliable weekly turns. Great fill-in freight between longer runs." },
          { h3: "Indianapolis to Southeast", body: "I-65 south through Louisville and Nashville into Atlanta. Consistent dry van and reefer freight with strong Southeast return options." },
          { h3: "Automotive Parts Corridor", body: "JIT and semi-JIT freight to and from Honda Greensburg, Subaru Lafayette, Toyota Princeton and hundreds of tier-1 suppliers. Reliable weekly moves for experienced carriers." },
          { h3: "Pharmaceutical Cold-Chain (Reefer)", body: "Eli Lilly and other pharmaceutical operations generate temperature-controlled freight with strict compliance requirements. Premium rates for qualified reefer carriers." },
          { h3: "Indianapolis to Northeast", body: "I-70 east through Ohio and Pennsylvania into the Northeast. Higher-paying dry van freight with reasonable return options." },
        ],
        equipmentBlurb:
          "Indianapolis's balanced freight mix rewards every equipment type. Our dispatchers match your truck to the strongest weekly lanes.",
        localAdvantages: [
          "Indiana automotive JIT schedule expertise",
          "Pharmaceutical cold-chain compliance guidance",
          "Amazon and e-commerce fulfillment freight",
          "Indianapolis intermodal drayage coordination",
          "Chicago short-haul fill-in optimization",
          "New Indiana MC 90-day fast-start onboarding",
          "24/7 dispatch across Eastern time and all US zones",
          "Transparent percentage pricing",
        ],
        faqs,
      }}
    />
  ),
});