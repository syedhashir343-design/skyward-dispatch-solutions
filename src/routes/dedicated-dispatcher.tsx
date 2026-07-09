import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/components/service-page-layout";

const faqs = [
  { q: "What is a dedicated dispatcher?", a: "A dedicated dispatcher is one person assigned to your truck — not a rotating call center pool. They learn your equipment, home time, fuel network and target rate per mile, and they own your dispatch outcome week after week. That relationship is what separates real dispatch from just load booking." },
  { q: "How is a dedicated dispatcher different from a call center?", a: "Call centers rotate calls through whoever is available, and you re-explain your situation every time you call. A dedicated dispatcher already knows your truck, your preferences and your history. They plan your week proactively instead of reacting to whatever load happens to be on the board when you call." },
  { q: "Will my dispatcher be reachable when I need them?", a: "Yes. Your dedicated dispatcher is your primary contact during business hours, with 24/7 backup from our dispatch team for nights, weekends and emergencies. Your dispatcher's cell phone is on your rate confirmations so you're never routed through a menu." },
  { q: "What if my dispatcher doesn't work out?", a: "We'll match you with a different dispatcher, no questions asked. The dedicated dispatcher relationship only works if the fit is right, so we take reassignment seriously and don't lock you into a bad match." },
  { q: "Do dedicated dispatchers cost more?", a: "No. Dedicated dispatch is our standard model, not an upsell. Our transparent percentage of gross load already includes dedicated dispatcher assignment — there's no premium tier or hidden dedicated fee." },
  { q: "Can I talk to my dispatcher before signing up?", a: "Yes. During onboarding we introduce you to your assigned dispatcher before you commit. You get to talk through your operation, ask questions and confirm the fit is right before we activate dispatch." },
];

export const Route = createFileRoute("/dedicated-dispatcher")({
  head: () =>
    buildServiceHead({
      slug: "dedicated-dispatcher",
      title: "Dedicated Dispatcher Service — Skywards Solution Truck Dispatch",
      description:
        "Get a dedicated dispatcher for your truck — not a rotating call center. Aggressive rate negotiation, weekly planning, 24/7 support and no forced dispatch.",
      serviceName: "Dedicated Dispatcher Service",
      breadcrumbLabel: "Dedicated Dispatcher",
      faqs,
    }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Dedicated Dispatcher",
        h1: "Get a Dedicated Dispatcher",
        h1Highlight: "One Person Who Owns Your Success.",
        intro:
          "Skywards Solution assigns every carrier a dedicated dispatcher — one point of contact who learns your truck, your lanes, your home time and your rate goals. No call centers, no rotating agents, no re-explaining your operation every time you call. Just one dispatcher accountable for keeping your truck loaded and profitable.",
        sections: [
          {
            h2: "Why Dedicated Dispatch Matters",
            body: [
              "Trucking is a relationship business. Brokers pay more to carriers they trust. Shippers give better lanes to carriers they know. And drivers work harder with dispatchers who remember what they said last week. All three of those relationships require continuity — the same dispatcher, working with the same driver, week after week.",
              "Call center dispatch models break every one of those relationships. When a driver calls in and gets whoever is available, that new agent has no memory of last week's freight, no context on the driver's home time, and no relationship with the brokers the driver has been running with. The result is transactional dispatch that maximizes short-term load booking and minimizes long-term earning power. Skywards Solution runs the opposite model.",
            ],
          },
          {
            h2: "What Your Dedicated Dispatcher Actually Does",
            body: [
              "A dedicated dispatcher is not just a load booker. They're the operator of your revenue side of the business. Here's what they own week to week.",
            ],
            h3s: [
              { h3: "Weekly Load Planning", body: "Your dispatcher builds a plan for your entire week — not one load at a time. Loads two and three moves ahead are scoped so your reload is booked before you drop your current freight." },
              { h3: "Rate Negotiation on Every Load", body: "Every rate confirmation is negotiated using live market data, historical broker rates and lane benchmarks. Your dispatcher pushes rates up before signing, not after." },
              { h3: "Broker Relationship Building", body: "Your dispatcher builds direct relationships with brokers on your behalf. Over time, that relationship translates into better loads offered before they hit the board." },
              { h3: "Home Time Management", body: "Tell your dispatcher when you want to be home. They plan the entire week around delivering you within reasonable range of home on the day you asked for." },
              { h3: "Detention, Layover and Claim Support", body: "When something goes wrong, your dispatcher handles the broker conversation, documents the delay and pursues every dollar you're owed." },
              { h3: "Paperwork and Factoring", body: "BOLs, rate cons, invoicing, factoring submissions, W-9s, COIs — your dispatcher manages the paperwork trail so you don't have to." },
            ],
          },
          {
            h2: "How We Match Dispatchers to Carriers",
            body: [
              "Not every dispatcher is right for every carrier. Some dispatchers specialize in dry van, others in reefer or flatbed. Some are best with new authorities, others with veteran operators who want minimal hand-holding. Skywards Solution matches dispatchers to carriers deliberately based on equipment, experience level, personality fit and preferred communication style.",
              "During onboarding we introduce you to your assigned dispatcher and give you a chance to confirm the fit is right before we activate dispatch. If the fit isn't right — either at the start or later — we reassign you, no penalty and no argument. Dedicated dispatch only works when both sides are committed to the relationship.",
            ],
          },
          {
            h2: "24/7 Backup Behind Your Dedicated Dispatcher",
            body: [
              "Your dedicated dispatcher is your primary contact during business hours, but dispatch problems don't stop at 5 PM. Behind your dedicated dispatcher is a 24/7 dispatch team that covers nights, weekends and emergencies. When a load goes sideways at 2 AM Sunday, someone from our team answers the phone and resolves it — then your dedicated dispatcher is briefed first thing Monday morning.",
              "That structure gives you the relationship advantages of a dedicated dispatcher with the operational advantages of round-the-clock coverage. You're never left without support, and your dedicated dispatcher is never asked to work an unsustainable schedule that would burn out the relationship over time.",
            ],
          },
        ],
        benefits: [
          "One dedicated dispatcher, not a rotating call center",
          "Weekly load planning, not one-load-at-a-time",
          "Broker relationships built on your behalf",
          "Home time honored in every dispatch plan",
          "24/7 backup team behind your dedicated dispatcher",
          "Dispatcher matched to your equipment and experience",
          "Reassignment available anytime, no penalty",
          "Transparent percentage pricing, no dedicated upcharge",
        ],
        faqs,
        ctaTitle: "Get matched with your dedicated dispatcher.",
        ctaBody:
          "Submit your carrier packet and we'll introduce you to your assigned dispatcher within one business day.",
      }}
    />
  ),
});