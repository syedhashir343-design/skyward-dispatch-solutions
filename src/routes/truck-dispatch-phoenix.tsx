import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Phoenix-area carriers?", a: "Yes. We dispatch owner-operators and small fleets across the Phoenix metro — Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert and Glendale — on freight leaving and returning to the Valley." },
  { q: "What Phoenix lanes pay best?", a: "Phoenix to LA, Phoenix to Texas, Phoenix to Chicago and Midwest, and Phoenix produce freight from Nogales all move consistently. TSMC and semiconductor construction has added heavy flatbed volume." },
  { q: "Do you dispatch Nogales produce reefer freight?", a: "Yes. Winter produce imports through Nogales, Arizona are one of the largest reefer freight sources in North America. Peak volumes November through April with strong outbound rates to Eastern markets." },
  { q: "What about semiconductor manufacturing freight?", a: "TSMC's Phoenix expansion and Intel's Chandler operations have created heavy flatbed and specialty freight demand. Construction, equipment and materials moves all pay premium rates during active build phases." },
  { q: "Do you handle Phoenix intermodal drayage?", a: "Yes. BNSF and UP intermodal facilities in Phoenix pair with OTR freight for balanced weekly gross. We coordinate ramp timing carefully to avoid dwell." },
  { q: "Can new Arizona MC authorities work with you?", a: "Yes. Phoenix is a growing freight market with deep broker relationships. Our 90-day fast-start program is designed to get new authorities on premium freight quickly." },
];

export const Route = createFileRoute("/truck-dispatch-phoenix")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-phoenix",
      city: "Phoenix",
      state: "Arizona",
      stateAbbr: "AZ",
      title: "Truck Dispatch Services Phoenix AZ — Skywards Solution",
      description:
        "Phoenix truck dispatch for dry van, reefer, flatbed and power only carriers. Nogales produce, TSMC semiconductor freight and Southwest lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Phoenix",
        state: "Arizona",
        stateAbbr: "AZ",
        intro:
          "Phoenix is the fastest-growing freight market in the Southwest, combining Nogales produce imports, semiconductor manufacturing construction, and growing distribution demand. Skywards Solution dispatches Phoenix-based carriers across every equipment type on the lanes that pay best out of Arizona.",
        whyThisCity: [
          "Phoenix has transformed from a regional distribution point into a national freight hub over the past decade. TSMC's massive semiconductor fab under construction in north Phoenix, combined with Intel's expansion in Chandler, has created sustained heavy flatbed and specialty freight demand. Nogales, Arizona remains the primary US winter produce gateway, generating reefer volume equivalent to a major California produce region during peak season. And Phoenix's central Southwest location makes it a natural transit point for freight moving between LA, Dallas, Denver and Chicago.",
          "That growth means Phoenix carriers see freight opportunities year-round — but the mix shifts significantly by season. Skywards Solution dispatchers track semiconductor construction schedules, produce cycles at Nogales, and regional retail distribution volumes to build weekly plans that capture the best-paying freight in each season.",
        ],
        laneSections: [
          { h3: "Phoenix to Los Angeles", body: "Short-haul dry van and reefer lane that runs constantly. Great fill-in freight and reliable weekly volume." },
          { h3: "Nogales Produce (Reefer)", body: "Winter produce imports peaking November through April. Outbound to Chicago, Dallas, Atlanta and Northeast markets at premium rates during peak season." },
          { h3: "Phoenix to Chicago Corridor", body: "I-40 and I-44 through Albuquerque and Oklahoma City. Consistent long-haul dry van freight with retail restock and manufacturing return options." },
          { h3: "TSMC & Semiconductor Freight", body: "Construction materials, specialty equipment and machinery to TSMC north Phoenix and Intel Chandler. Premium flatbed and step-deck rates on active build phases." },
          { h3: "Phoenix to Texas Corridor", body: "I-10 east through Tucson and El Paso into DFW and Houston. Steady dry van and reefer freight both directions." },
        ],
        equipmentBlurb:
          "Phoenix's mix of produce, semiconductor construction and distribution rewards carriers who can flex across equipment types. Our dispatchers match your truck to the strongest freight each week.",
        localAdvantages: [
          "Nogales produce reefer lane expertise",
          "TSMC and semiconductor construction freight knowledge",
          "Phoenix intermodal drayage coordination",
          "Southwest retail distribution scheduling",
          "LA short-haul fill-in freight optimization",
          "New Arizona MC 90-day fast-start onboarding",
          "24/7 dispatch across Mountain and all US time zones",
          "Transparent percentage pricing",
        ],
        faqs,
      }}
    />
  ),
});