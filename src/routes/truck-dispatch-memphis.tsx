import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Memphis-area carriers?", a: "Yes. We dispatch owner-operators and small fleets across the Memphis metro — Memphis, Bartlett, Germantown, Collierville, Southaven and West Memphis — on freight leaving and returning to the region." },
  { q: "What Memphis lanes pay best?", a: "Memphis to Chicago, Memphis to Northeast, Memphis to Dallas/Houston, and short-haul to Nashville and Little Rock all move consistently. FedEx Memphis Hub and Amazon fulfillment anchor freight demand." },
  { q: "Do you support FedEx and expedited freight?", a: "Yes. Memphis is home to the FedEx Express superhub, which generates massive expedited and time-critical freight volume. We book carriers with the right equipment and reliability profile on this freight." },
  { q: "What about poultry and food processing reefer freight?", a: "Absolutely. Arkansas and Mississippi poultry, plus Memphis-area food processing, generate consistent reefer volume. We know the plants and the brokers who move this freight." },
  { q: "Do you dispatch Mississippi River port freight?", a: "Yes. Memphis river-adjacent freight — commodities, industrial equipment, agricultural products — pairs with OTR to build weekly volume. Our dispatchers monitor river freight cycles." },
  { q: "Can new Tennessee MC authorities work with you?", a: "Yes. Memphis is a strong market for new authorities because of freight depth and broker diversity. Our 90-day fast-start program is designed for this scenario." },
];

export const Route = createFileRoute("/truck-dispatch-memphis")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-memphis",
      city: "Memphis",
      state: "Tennessee",
      stateAbbr: "TN",
      title: "Truck Dispatch Services Memphis TN — Skywards Solution",
      description:
        "Memphis truck dispatch for dry van, reefer, flatbed and power only carriers. FedEx expedited, Mississippi Delta freight and Southeast distribution lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Memphis",
        state: "Tennessee",
        stateAbbr: "TN",
        intro:
          "Memphis is the logistics capital of the Mid-South — home to the FedEx superhub, Mississippi River commerce, and a dense concentration of distribution and food processing. Skywards Solution dispatches Memphis-based carriers across every equipment type on the lanes that make this market profitable.",
        whyThisCity: [
          "Memphis's freight infrastructure is unmatched for a city its size. FedEx Express operates its world hub here, generating enormous expedited and time-critical freight demand. The Port of Memphis on the Mississippi handles commodity, industrial and agricultural freight. Interstate 40 (east-west) and I-55 (north-south) intersect right at the city, and Memphis International Airport is one of the largest cargo airports in the world. That combination makes Memphis a natural freight hub for any equipment type.",
          "Skywards Solution dispatchers know the Memphis market's unique rhythms — how FedEx tenders shift by day of week, when agricultural and poultry freight peaks, and which distribution brokers pay premium versus commodity rates. That local awareness translates directly into better weekly gross for Memphis-based carriers.",
        ],
        laneSections: [
          { h3: "Memphis to Chicago Corridor", body: "I-55 north through St. Louis into Chicago. Consistent long-haul dry van and reefer freight with retail restock and manufacturing return options." },
          { h3: "Memphis to Northeast", body: "I-40 east through Nashville and Knoxville into Virginia and the Northeast. Reefer freight from Mid-South food processing pays especially well on this lane." },
          { h3: "FedEx & Expedited Freight", body: "Time-critical freight around the FedEx superhub. Premium rates for reliable carriers who can meet tight tender windows." },
          { h3: "Poultry & Food Processing (Reefer)", body: "Arkansas, Mississippi and West Tennessee poultry and food. Steady reefer volume with strong lane demand from the Southeast to Midwest." },
          { h3: "Memphis to Dallas/Houston", body: "I-40 west into Arkansas and I-30 southwest into Texas. Reliable freight both directions with strong Texas manufacturing return options." },
        ],
        equipmentBlurb:
          "Memphis's mix of expedited, reefer and industrial freight rewards versatile carriers. Our dispatchers match your equipment to the strongest freight each week.",
        localAdvantages: [
          "FedEx superhub tender-window expertise",
          "Mid-South poultry and food processing reefer knowledge",
          "Mississippi River freight coordination",
          "Memphis intermodal drayage support",
          "Chicago and Northeast return-freight discipline",
          "New Tennessee MC 90-day fast-start onboarding",
          "24/7 dispatch across Central time and all US zones",
          "Transparent percentage pricing",
        ],
        faqs,
      }}
    />
  ),
});