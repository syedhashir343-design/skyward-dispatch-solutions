import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Columbus-area carriers?", a: "Yes. Columbus is close to home for us — Skywards Solution is Ohio-headquartered. We dispatch owner-operators and small fleets across the Columbus metro on freight leaving and returning to Central Ohio." },
  { q: "What Columbus lanes pay best?", a: "Columbus to Chicago, Columbus to Northeast, Columbus to Southeast, and short-haul to Cincinnati, Cleveland and Pittsburgh all move consistently. Honda, Intel construction, Amazon and Rickenbacker air freight anchor volume." },
  { q: "Do you dispatch Rickenbacker cargo freight?", a: "Yes. Rickenbacker International Airport is one of the largest cargo-focused airports in North America. It generates air-to-ground drayage and time-critical freight consistently — great for carriers with the right reliability profile." },
  { q: "What about Intel Ohio construction and semiconductor freight?", a: "Absolutely. Intel's massive semiconductor fab under construction in Licking County has created heavy flatbed, step-deck and specialty equipment demand. Premium rates on active build phases." },
  { q: "Do you dispatch Honda Ohio automotive freight?", a: "Yes. Honda's Marysville, East Liberty and Anna, OH operations plus their tier-1 supply chain generate steady dry van and specialty freight. We know the plants and the schedules." },
  { q: "Can new Ohio MC authorities work with you?", a: "Absolutely. Ohio authorities are our home market. We know the brokers, we know the lanes, and our 90-day fast-start program is tuned exactly for this state." },
];

export const Route = createFileRoute("/truck-dispatch-columbus")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-columbus",
      city: "Columbus",
      state: "Ohio",
      stateAbbr: "OH",
      title: "Truck Dispatch Services Columbus OH — Skywards Solution",
      description:
        "Columbus, Ohio truck dispatch for dry van, reefer, flatbed and power only carriers. Rickenbacker cargo, Intel Ohio, Honda automotive and Midwest lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Columbus",
        state: "Ohio",
        stateAbbr: "OH",
        intro:
          "Columbus is the fastest-growing freight market in the Midwest — anchored by Rickenbacker cargo operations, Intel's massive semiconductor build, Honda's Ohio automotive footprint, and rapidly expanding Amazon distribution. Skywards Solution is Ohio-headquartered, and Columbus is one of our strongest local markets.",
        whyThisCity: [
          "Columbus's freight market has transformed over the past decade. Rickenbacker International Airport has emerged as one of the largest cargo airports in North America, driving air-to-ground drayage demand. Intel's semiconductor fab under construction in Licking County has generated heavy flatbed and specialty freight volume that will continue for years. Honda's Ohio operations — Marysville, East Liberty and Anna — plus the state's dense automotive supply chain produce constant dry van and specialty demand. And Amazon has built one of its largest US fulfillment concentrations across the Columbus metro.",
          "Skywards Solution is headquartered in Toledo, Ohio, and Central Ohio is our home turf. We know the brokers, we know the plants, and we know the lanes that consistently pay premium out of Columbus. That local knowledge shows up in weekly gross for our Columbus-based carriers.",
        ],
        laneSections: [
          { h3: "Columbus to Chicago", body: "I-70 west through Indianapolis into Chicago. Steady long-haul dry van and reefer freight with reliable return options." },
          { h3: "Rickenbacker Air Cargo Drayage", body: "Air-to-ground moves from Rickenbacker to distribution centers throughout the Midwest and beyond. Premium rates for reliable carriers." },
          { h3: "Intel Ohio Semiconductor Build", body: "Construction materials, specialty equipment and machinery to the Licking County fab site. Premium flatbed and step-deck rates during active build phases." },
          { h3: "Honda Ohio Automotive", body: "JIT and semi-JIT freight to and from Honda Marysville, East Liberty and Anna plus tier-1 suppliers. Consistent weekly moves." },
          { h3: "Columbus to Northeast", body: "I-70 east into Pennsylvania, New Jersey and New York. Higher-paying dry van freight with reasonable return options." },
        ],
        equipmentBlurb:
          "Columbus's expanding freight base rewards every equipment type. As Ohio's home dispatch team, we place your truck on the strongest freight in our home market.",
        localAdvantages: [
          "Ohio-based dispatch team with local broker relationships",
          "Rickenbacker air cargo drayage expertise",
          "Intel Ohio semiconductor build freight knowledge",
          "Honda Ohio automotive JIT scheduling familiarity",
          "Amazon Columbus fulfillment freight coordination",
          "New Ohio MC 90-day fast-start onboarding",
          "24/7 dispatch across Eastern time and all US zones",
          "Transparent percentage pricing, no forced dispatch",
        ],
        faqs,
      }}
    />
  ),
});