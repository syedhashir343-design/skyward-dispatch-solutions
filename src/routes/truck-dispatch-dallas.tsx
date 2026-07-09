import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch carriers based in Dallas-Fort Worth?", a: "Yes. We dispatch owner-operators and small fleets across the DFW metro — Dallas, Fort Worth, Arlington, Irving, Garland, Plano and Mesquite — on freight leaving the region and returning to it." },
  { q: "What are the strongest freight lanes out of Dallas?", a: "DFW to Southeast (Atlanta, Nashville, Charlotte), DFW to Southwest (Phoenix, LA), and Texas triangle runs to Houston and San Antonio pay most consistently. Retail DC and manufacturing volume keeps outbound freight strong most of the year." },
  { q: "Do you help Dallas hotshot carriers on Permian oilfield freight?", a: "Absolutely. Permian Basin freight — West Texas and southeast New Mexico — is one of the strongest lanes for DFW-based hotshots and flatbeds. We watch the oilfield rig count and adjust dispatch weekly." },
  { q: "Do Dallas brokers pay well?", a: "The DFW broker community is deep — some of the fastest-pay brokers in the country operate here, alongside slower-pay newcomers. Our dispatchers only book you on brokers we've verified for payment history." },
  { q: "Can new Texas MC authorities work with you?", a: "Yes. New Texas authorities are one of our specialties. We know which DFW brokers work with new MCs and how to structure the first ten loads to build credit fast." },
  { q: "What about intermodal drayage from BNSF Alliance?", a: "We support drayage-capable carriers pulling from BNSF Alliance in Haslet and UP Dallas Intermodal, matching container moves with dry van or reefer over-the-road freight for balanced weekly gross." },
];

export const Route = createFileRoute("/truck-dispatch-dallas")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-dallas",
      city: "Dallas",
      state: "Texas",
      stateAbbr: "TX",
      title: "Truck Dispatch Services Dallas TX — Skywards Solution",
      description:
        "Truck dispatch for Dallas-Fort Worth carriers. Dry van, reefer, flatbed, power only and hotshot dispatch on Texas triangle, Southeast and Permian oilfield lanes.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Dallas",
        state: "Texas",
        stateAbbr: "TX",
        intro:
          "Dallas-Fort Worth is one of the largest freight markets in North America. Skywards Solution dispatches owner-operators and small fleets across DFW on retail distribution, manufacturing, intermodal and oilfield freight — plus everything moving in and out of the Texas triangle.",
        whyThisCity: [
          "DFW sits at the intersection of every major national trucking lane. I-20, I-30, I-35 and I-45 all converge here, and the metro has become the largest inland port in North America thanks to BNSF Alliance and UP Dallas Intermodal. That geography means DFW-based carriers have more freight options than nearly any other city — but only if their dispatcher knows how to navigate the volume.",
          "Skywards Solution dispatchers watch DFW freight markets daily. We know which retail distribution centers in south Dallas are loading heavy this week, which Permian Basin brokers are paying premium rates as rig counts move, and which lanes out of Fort Worth pay best on the Southeast return. That local awareness is what turns Dallas geography from a load-board flood into a coherent weekly plan.",
        ],
        laneSections: [
          { h3: "DFW to Atlanta and the Southeast", body: "A cornerstone lane for DFW dry van and reefer carriers. Retail DC freight, food and beverage, and manufacturing all move steadily east. Return freight through Memphis and Nashville keeps the weekly loop profitable." },
          { h3: "DFW to Los Angeles and the Southwest", body: "Long-haul dry van and reefer moves west through Phoenix. Deadhead risk on the return leg means dispatch matters more than on any other DFW lane — a bad reload wipes out the outbound." },
          { h3: "Texas Triangle (Houston, San Antonio, Austin)", body: "Short-haul multi-stop freight that pays surprisingly well because most long-haul operators skip it. Great fill-in freight for DFW-based carriers between long-haul loops." },
          { h3: "Permian Basin & West Texas", body: "Oilfield-driven freight cycles with rig counts. Hotshot, flatbed and step-deck carriers can earn premium rates when drilling is active, especially on urgent equipment moves." },
          { h3: "DFW to Chicago Corridor", body: "I-35 runs straight from DFW to Chicago through Oklahoma City and Kansas City. Consistent manufacturing and retail freight, with strong return options loaded from the Midwest." },
        ],
        equipmentBlurb:
          "Every equipment type runs profitably out of Dallas. We match your specific truck to the best-paying freight in the DFW market each week.",
        localAdvantages: [
          "Direct knowledge of DFW broker payment history",
          "Permian Basin oilfield freight expertise",
          "BNSF Alliance and UP Dallas intermodal drayage support",
          "Texas triangle short-haul fill-in coordination",
          "Retail DC scheduling familiarity (Wal-Mart, Amazon, Target)",
          "New Texas MC authority onboarding specialists",
          "24/7 dispatch across all US and Central time zones",
          "Transparent percentage pricing, no forced dispatch",
        ],
        faqs,
      }}
    />
  ),
});