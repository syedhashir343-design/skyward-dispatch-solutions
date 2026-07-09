import { createFileRoute } from "@tanstack/react-router";
import { LocationPageLayout, buildLocationHead } from "@/components/location-page-layout";

const faqs = [
  { q: "Do you dispatch Denver-based carriers?", a: "Yes. We dispatch owner-operators and small fleets across the Denver metro — Denver, Aurora, Lakewood, Thornton, Arvada, Centennial and Boulder — on freight leaving and returning to the Front Range." },
  { q: "What Denver lanes pay best?", a: "Denver to Chicago and Midwest, Denver to Dallas and Texas, Denver to LA and Pacific, and regional Rocky Mountain freight all move consistently. Construction and energy freight add specialty demand." },
  { q: "How do you handle winter mountain routing?", a: "Front Range winter weather affects I-70, I-80 and I-25 unpredictably. Our dispatchers track weather closely and adjust load acceptance and routing based on chain laws, closures and delivery windows." },
  { q: "Do you dispatch energy sector freight?", a: "Yes. Wyoming and northern Colorado oil and gas operations create hotshot, flatbed and step-deck demand. Bakken freight from North Dakota also transits through Denver on the way east." },
  { q: "What about agricultural freight from Colorado and Nebraska?", a: "Reefer and dry van agriculture freight from the High Plains region moves consistently through Denver. Beef, dairy and grain freight all cycle strongly." },
  { q: "Can new Colorado MC authorities work with you?", a: "Yes. Denver is a good market for new authorities with steady freight and moderate broker diversity. Our 90-day fast-start program helps you build credit quickly." },
];

export const Route = createFileRoute("/truck-dispatch-denver")({
  head: () =>
    buildLocationHead({
      slug: "truck-dispatch-denver",
      city: "Denver",
      state: "Colorado",
      stateAbbr: "CO",
      title: "Truck Dispatch Services Denver CO — Skywards Solution",
      description:
        "Denver truck dispatch for dry van, reefer, flatbed and power only carriers. Rocky Mountain freight, energy sector, and Front Range distribution lane expertise.",
      faqs,
    }),
  component: () => (
    <LocationPageLayout
      content={{
        city: "Denver",
        state: "Colorado",
        stateAbbr: "CO",
        intro:
          "Denver anchors the Rocky Mountain freight market — the gateway between the Central Plains and the West Coast. Skywards Solution dispatches Front Range carriers on distribution, energy, agriculture and construction freight across every equipment type.",
        whyThisCity: [
          "Denver's freight market is smaller than Chicago or LA but denser than most people realize. The Front Range corridor from Fort Collins through Colorado Springs concentrates distribution centers, food processing, energy services and construction supply operations. Add Wyoming oil and gas activity to the north, high-plains agriculture to the east, and Rocky Mountain construction demand year-round, and Denver-based carriers have solid weekly freight options in every direction.",
          "The complication is winter routing. I-70 west and I-80 through Wyoming close regularly. I-25 north through the Front Range has serious weather delays several months per year. Skywards Solution dispatchers factor mountain weather into every rate calculation and load acceptance decision, which matters enormously for schedule-sensitive freight.",
        ],
        laneSections: [
          { h3: "Denver to Chicago Corridor", body: "I-76 east through Nebraska and Iowa into Chicago. Consistent long-haul dry van and reefer freight. Retail and manufacturing volume both directions." },
          { h3: "Denver to Dallas/Texas", body: "I-25 south through Colorado Springs and Albuquerque into Texas. Reliable freight in both directions." },
          { h3: "Denver to LA and Pacific", body: "I-70 west through Grand Junction and Utah. Weather-dependent but strong-paying when conditions cooperate." },
          { h3: "Wyoming & North Dakota Energy", body: "Hotshot, flatbed and step-deck demand tied to oil and gas cycles. Premium rates when drilling activity is elevated." },
          { h3: "High Plains Agriculture (Reefer)", body: "Colorado, Nebraska and Kansas dairy, beef and produce. Consistent reefer freight to Southeast, Midwest and West Coast markets." },
        ],
        equipmentBlurb:
          "Denver's diverse freight mix rewards carriers who can flex between distribution and specialty freight. Our dispatchers match your truck to the strongest lanes each week.",
        localAdvantages: [
          "Front Range distribution scheduling expertise",
          "Wyoming and North Dakota energy freight knowledge",
          "Winter mountain routing and weather awareness",
          "High-plains agriculture lane specialization",
          "Denver intermodal drayage coordination",
          "New Colorado MC 90-day fast-start onboarding",
          "24/7 dispatch across Mountain time and all US zones",
          "Transparent percentage pricing",
        ],
        faqs,
      }}
    />
  ),
});