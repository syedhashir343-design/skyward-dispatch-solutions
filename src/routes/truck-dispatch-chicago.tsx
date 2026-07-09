import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Chicagoland carriers?", a: "Yes. We dispatch owner-operators and small fleets across the Chicago metro — Chicago, Joliet, Elgin, Naperville, Aurora, Bolingbrook, Gary and Northwest Indiana — on freight leaving and returning to the region." },
  { q: "What are the strongest freight lanes out of Chicago?", a: "Chicago to Southeast (Atlanta, Nashville, Memphis), Chicago to Texas, Chicago intermodal drayage from BNSF Logistics Park and UP Global 4, and Chicago to Northeast markets. Manufacturing and food volume keeps this market strong year-round." },
  { q: "How do you handle Chicago tolls and traffic?", a: "Chicago tolls and I-80 congestion are real costs. Our dispatchers factor tolls, ELP zones and typical delays into every rate calculation, and we push back on brokers who try to underprice loads that require Chicago transit." },
  { q: "Do you dispatch intermodal drayage from Chicago?", a: "Yes. Chicago is the largest rail-intermodal market in North America. Drayage moves from BNSF Logistics Park Chicago (LPC), UP Global 4, CSX Bedford Park and NS 47th Street pair with OTR freight for balanced weekly gross." },
  { q: "What about winter freight from Chicago?", a: "Chicago winters affect scheduling and equipment. Our dispatchers plan around Great Lakes weather patterns and adjust load acceptance based on lake-effect forecasts, especially for reefer freight where breakdown risk in cold is real." },
  { q: "Can new Illinois MC authorities work with you?", a: "Yes. New authorities are one of our specialties. Chicago freight is a great market to build broker credit fast because volume is deep and multiple brokers work with new MCs." },
];

export const Route = createFileRoute("/truck-dispatch-chicago")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-chicago",
      city: "Chicago",
      state: "Illinois",
      stateAbbr: "IL",
      title: "Truck Dispatch Services Chicago IL — Skywards Solution",
      description:
        "Chicago truck dispatch for dry van, reefer, flatbed, power only and hotshot carriers. Intermodal drayage, Midwest manufacturing and Southeast return lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Chicago",
        state: "Illinois",
        stateAbbr: "IL",
        intro:
          "Chicago is the largest freight hub in North America — a rail intermodal capital layered with heavy manufacturing, food processing, and retail distribution. Skywards Solution dispatches Chicagoland carriers across every equipment type on the lanes that make this market profitable.",
        whyThisCity: [
          "Chicago moves more intermodal containers than any other North American market. BNSF Logistics Park Chicago, Union Pacific Global 4, CSX Bedford Park and NS 47th Street combine to create constant drayage demand. Layer on top of that the manufacturing corridor along I-88 and I-355, food processing operations, and Chicago's role as the retail distribution gateway to the Upper Midwest, and you have one of the deepest freight markets in the country.",
          "The challenge in Chicago isn't finding freight — it's picking the right freight. Tolls, ELP zones, dock congestion and winter weather all reduce net margin on the wrong loads. Skywards Solution dispatchers know the difference between a Chicago load that pencils and one that looks good on paper but loses money once tolls and dwell time are factored in.",
        ],
        laneSections: [
          { h3: "Chicago to Southeast (Atlanta, Nashville)", body: "The most-run dry van lane in America. Volume is enormous and rates cycle weekly — dispatch discipline separates carriers grossing $7,500 per week from those grossing $5,500 on the same lane." },
          { h3: "Chicago Intermodal Drayage", body: "Container moves from BNSF LPC, UP Global 4, CSX Bedford Park and NS 47th Street to distribution centers throughout Chicagoland. Pairs with OTR to keep drivers loaded during dock-turn times." },
          { h3: "Chicago to Texas Corridor", body: "I-55 south through St. Louis and Memphis into Dallas and Houston. Steady manufacturing and consumer goods freight both directions." },
          { h3: "Chicago to Northeast (Philadelphia, New York)", body: "Higher-paying short-haul with tolls to negotiate. Great for reefer freight into Northeast grocery distribution." },
          { h3: "Chicago Upper Midwest Regional", body: "Wisconsin, Minnesota, Michigan and Iowa short-haul freight. Frequent moves, moderate rates, ideal fill-in freight for Chicagoland-based carriers." },
        ],
        equipmentBlurb:
          "Chicago's depth of freight rewards every equipment type. Our dispatchers match your truck to the loads that actually pay after tolls and dwell time are factored in.",
        localAdvantages: [
          "BNSF LPC, UP Global 4 and CSX drayage expertise",
          "Toll-aware rate calculations on every load",
          "Chicago dock and receiver dwell-time knowledge",
          "Winter weather routing and equipment considerations",
          "Southeast return-freight coordination from Chicago",
          "New Illinois MC 90-day fast-start onboarding",
          "24/7 dispatch support including overnight coverage",
          "Transparent percentage pricing, no forced dispatch",
        ],
        faqs,
      }}
    />
  ),
});