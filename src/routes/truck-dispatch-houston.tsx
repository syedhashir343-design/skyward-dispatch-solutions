import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Houston-based carriers?", a: "Yes. We dispatch owner-operators and small fleets across the Houston metro — Houston, Sugar Land, Pasadena, Baytown, Katy, The Woodlands and surrounding areas — on freight leaving the region and returning to it." },
  { q: "What Houston freight lanes pay best?", a: "Houston to Southeast (Atlanta, Jacksonville) on dry van, Houston-Dallas triangle on shorter runs, Houston to Los Angeles long-haul, and Gulf Coast produce lanes for reefer. Port of Houston drayage adds container volume." },
  { q: "Can you dispatch petrochemical and hazmat freight?", a: "We dispatch non-hazmat freight in and out of the Houston petrochemical corridor. Hazmat freight requires specific endorsements and insurance — we verify carrier qualifications before booking any hazmat load." },
  { q: "Do you support Port of Houston drayage carriers?", a: "Yes. Container drayage from Port of Houston pairs well with over-the-road dry van freight to build a balanced weekly plan. We match drayage moves with OTR loads to keep the truck fully productive." },
  { q: "What about oilfield freight out of Houston?", a: "Houston is the corporate hub for US oilfield and pairs with Permian Basin and South Texas drilling operations. Hotshot, flatbed and step-deck carriers see premium rates on urgent oilfield equipment moves." },
  { q: "Do you work with new Houston MC authorities?", a: "Yes. New Texas authorities receive our specialized 90-day fast-start program to build broker credit and get on premium freight quickly." },
];

export const Route = createFileRoute("/truck-dispatch-houston")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-houston",
      city: "Houston",
      state: "Texas",
      stateAbbr: "TX",
      title: "Truck Dispatch Services Houston TX — Skywards Solution",
      description:
        "Houston truck dispatch for dry van, reefer, flatbed, power only and hotshot carriers. Gulf Coast, Port of Houston drayage, oilfield and Southeast lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Houston",
        state: "Texas",
        stateAbbr: "TX",
        intro:
          "Houston is the busiest freight market on the Gulf Coast — a massive metro combining port container drayage, petrochemical freight, oilfield equipment, and retail distribution. Skywards Solution dispatches Houston-based carriers across every equipment type on the lanes that actually pay in this market.",
        whyThisCity: [
          "Houston freight is layered in a way few other US metros are. The Port of Houston generates constant container drayage. The petrochemical corridor along the Houston Ship Channel produces heavy industrial and specialty freight. The oilfield services industry headquartered here creates hotshot and flatbed demand across the Permian and Eagle Ford basins. And the metro's five million residents anchor retail distribution volumes that rival much larger regions.",
          "That layering means Houston-based carriers have unusual flexibility — but only if their dispatcher understands each layer. Skywards Solution builds Houston dispatch plans that combine port drayage, OTR freight, oilfield equipment moves and retail restock loads based on where the strongest rates are that week.",
        ],
        laneSections: [
          { h3: "Houston to Southeast Corridor", body: "I-10 East through Louisiana, Mississippi and Alabama into Atlanta and Jacksonville. Consistent dry van, reefer and flatbed freight with strong Southeast return options." },
          { h3: "Port of Houston Drayage", body: "Container moves from Barbours Cut and Bayport terminals to distribution centers throughout east and northwest Houston. Pairs well with OTR freight for balanced weekly gross." },
          { h3: "Gulf Coast Produce (Reefer)", body: "Fresh produce from South Texas and Mexico transiting Houston to Southeast and Northeast markets. Peak volumes November through May." },
          { h3: "Permian & Eagle Ford Oilfield", body: "Hotshot, flatbed and step-deck freight to and from West Texas and South Texas drilling operations. Premium rates on urgent equipment moves." },
          { h3: "Houston to California", body: "Long-haul dry van and reefer through El Paso and Phoenix into LA. Return freight from California produce or manufacturing keeps the weekly loop profitable." },
        ],
        equipmentBlurb:
          "Houston's diverse freight mix rewards carriers who can flex across freight types. We match your truck to the strongest-paying lanes each week.",
        localAdvantages: [
          "Port of Houston drayage and OTR combination dispatch",
          "Petrochemical corridor freight knowledge",
          "Gulf Coast produce reefer lane expertise",
          "Oilfield equipment dispatch to Permian and Eagle Ford",
          "Southeast return-freight coordination",
          "New Texas MC 90-day fast-start onboarding",
          "24/7 dispatch coverage across all time zones",
          "Transparent percentage pricing",
        ],
        faqs,
      }}
    />
  ),
});