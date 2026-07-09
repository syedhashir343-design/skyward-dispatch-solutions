import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Kansas City-area carriers?", a: "Yes. We dispatch owner-operators and small fleets across the Kansas City metro on both sides of the state line — Kansas City MO, Kansas City KS, Overland Park, Independence, Lee's Summit and Olathe — on freight leaving and returning to the region." },
  { q: "What Kansas City lanes pay best?", a: "Kansas City to Chicago, Kansas City to Dallas/Houston, Kansas City to Denver, and short-haul to St. Louis and Omaha all move consistently. Agriculture, animal health and rail intermodal anchor volume." },
  { q: "Do you dispatch agricultural freight?", a: "Yes. The Kansas City region is a massive agricultural freight hub — beef, cattle feed, grain, dairy and produce all cycle strongly. Reefer and dry van demand is steady." },
  { q: "What about the Animal Health Corridor?", a: "Absolutely. The Kansas City Animal Health Corridor generates specialty pharmaceutical and biotech freight with strict cold-chain requirements. Premium rates for qualified reefer carriers." },
  { q: "Do you support Kansas City intermodal drayage?", a: "Yes. Kansas City is a major rail intermodal hub. BNSF Logistics Park Kansas City, UP and KCS intermodal all generate drayage volume that pairs with OTR freight." },
  { q: "Can new Missouri or Kansas MC authorities work with you?", a: "Yes. Kansas City is a solid market for new authorities with good freight depth and moderate broker diversity. Our 90-day fast-start program applies." },
];

export const Route = createFileRoute("/truck-dispatch-kansas-city")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-kansas-city",
      city: "Kansas City",
      state: "Missouri",
      stateAbbr: "MO",
      title: "Truck Dispatch Services Kansas City MO — Skywards Solution",
      description:
        "Kansas City truck dispatch for dry van, reefer, flatbed and power only carriers. Agricultural freight, Animal Health Corridor and Midwest rail intermodal lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Kansas City",
        state: "Missouri",
        stateAbbr: "MO",
        intro:
          "Kansas City is a hidden heavyweight in the US freight market — anchored by rail intermodal, agricultural commodities, cattle and beef processing, and the Animal Health Corridor. Skywards Solution dispatches Kansas City-area carriers across every equipment type on the lanes that make this market profitable.",
        whyThisCity: [
          "Kansas City's freight economy is bigger than its metro population suggests. The region is the largest rail intermodal hub in the Central US, with BNSF Logistics Park Kansas City in Edgerton, Union Pacific and Kansas City Southern all operating major facilities. Agricultural freight — cattle, beef, grain, dairy and produce — flows through the region constantly. The Animal Health Corridor between KC and Manhattan, Kansas concentrates one of the world's largest clusters of veterinary pharmaceutical and biotech companies. And Kansas City's central geography makes it a natural crossroads for east-west and north-south freight.",
          "Skywards Solution dispatchers know the Kansas City agricultural and animal health markets specifically. We understand cattle cycles, beef processing schedules, grain harvest timing and the cold-chain compliance requirements for animal health freight. That specificity translates into stronger weekly gross for our Kansas City carriers.",
        ],
        laneSections: [
          { h3: "Kansas City to Chicago", body: "I-35 north into Iowa and Illinois. Consistent long-haul dry van and reefer freight with retail and manufacturing return options." },
          { h3: "Kansas City to Dallas/Houston", body: "I-35 south through Oklahoma into Texas. Reliable freight both directions with strong Texas manufacturing return." },
          { h3: "Agricultural & Beef Freight (Reefer)", body: "Cattle, beef, grain, dairy and produce from the Great Plains. Consistent reefer volume to Southeast, West Coast and Northeast markets." },
          { h3: "Animal Health Corridor (Reefer)", body: "Veterinary pharmaceutical and biotech freight from the KC-Manhattan corridor. Cold-chain requirements. Premium rates for qualified carriers." },
          { h3: "Kansas City Intermodal Drayage", body: "BNSF LPKC, UP and KCS intermodal moves paired with OTR freight for balanced weekly gross." },
        ],
        equipmentBlurb:
          "Kansas City's ag, animal health and intermodal mix rewards versatile carriers. Our dispatchers match your truck to the strongest freight each week.",
        localAdvantages: [
          "Agricultural and beef processing freight expertise",
          "Animal Health Corridor cold-chain knowledge",
          "BNSF LPKC and Midwest intermodal drayage support",
          "Great Plains produce reefer lane specialization",
          "Kansas City short-haul to Omaha and St. Louis coordination",
          "New Missouri and Kansas MC 90-day fast-start onboarding",
          "24/7 dispatch across Central time and all US zones",
          "Transparent percentage pricing",
        ],
        faqs,
      }}
    />
  ),
});