import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/components/service-page-layout";

const faqs = [
  { q: "How many trucks makes a small fleet?", a: "For dispatch purposes, we generally consider 2 to 25 trucks a small fleet. Below that you're an owner-operator; above that you typically have internal dispatch. We specialize in the small fleet segment where dispatch is a critical function but hiring internal dispatchers isn't yet economical." },
  { q: "Can you dispatch mixed equipment fleets?", a: "Yes. Many of our small fleet customers run a mix of dry van, reefer, flatbed and power only. We assign dispatchers with the right specialty to each truck type, coordinated under a single fleet lead who tracks overall fleet performance." },
  { q: "How does pricing work for a fleet?", a: "We quote a transparent percentage of gross load per truck, with volume adjustments for fleets. Multi-truck operations typically pay a lower per-truck percentage than single-truck owner-operators. Exact pricing is quoted during onboarding based on fleet size and equipment mix." },
  { q: "Do you provide fleet reporting?", a: "Yes. Small fleet owners get weekly and monthly reporting on gross revenue per truck, rate per mile, deadhead percentage, detention recovered and lane performance. That data helps you make better decisions on which trucks to keep loaded on which lanes." },
  { q: "Can you help me scale from single truck to fleet?", a: "Yes. Many of our owner-operator customers have grown into fleets with Skywards handling dispatch through every stage. We can also advise on when to add trucks, what equipment mix to add, and how to structure driver compensation to retain quality drivers." },
  { q: "Do you replace an internal dispatcher?", a: "We can supplement or replace internal dispatch. Some small fleets use us as their primary dispatch. Others use us as overflow capacity during peak volume or as backup coverage for nights and weekends. Both models work." },
];

export const Route = createFileRoute("/small-fleet-dispatch")({
  head: () =>
    buildServiceHead({
      slug: "small-fleet-dispatch",
      title: "Small Fleet Dispatch Services USA — 2 to 25 Truck Fleets",
      description:
        "Dispatch services for small trucking fleets. Mixed equipment, dedicated dispatchers per truck, fleet reporting and rate optimization across all 48 states.",
      serviceName: "Small Fleet Dispatch",
      breadcrumbLabel: "Small Fleet Dispatch",
      faqs,
    }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Small Fleet Dispatch",
        h1: "Small Fleet Dispatch Services",
        h1Highlight: "Scale Your Trucks, Not Your Overhead.",
        intro:
          "Skywards Solution dispatches small trucking fleets between 2 and 25 trucks across the United States. Small fleets sit in the toughest spot in trucking — big enough that dispatch matters, small enough that hiring internal dispatchers is uneconomical. Our fleet dispatch service solves that problem.",
        sections: [
          {
            h2: "Dispatch Built for Growing Fleets",
            body: [
              "Small fleets need more than load booking. You need coordinated dispatch across multiple trucks, consistent broker relationships that scale with your capacity, fleet-level reporting to see which trucks and lanes actually perform, and dispatch coverage that doesn't collapse when your one internal dispatcher goes on vacation. Skywards Solution delivers all of that.",
              "Our fleet dispatch model assigns dedicated dispatchers to each truck based on equipment specialty — a dry van specialist for your dry vans, a reefer specialist for your reefers — coordinated under a single fleet lead who tracks overall performance. That structure gives you specialist-level dispatch on every truck without the overhead of hiring three or four internal dispatchers.",
            ],
          },
          {
            h2: "What Fleet Dispatch Covers",
            body: [
              "Small fleet dispatch is broader than single-truck dispatch. Beyond individual load booking, we manage the systems and relationships that make fleets scalable.",
            ],
            h3s: [
              { h3: "Multi-Truck Coordination", body: "Trucks are dispatched as a coordinated fleet — reloads planned across the group, driver home time managed across the roster, and lane strategies executed at fleet scale rather than one truck at a time." },
              { h3: "Fleet-Level Broker Relationships", body: "Larger broker relationships open up when you have consistent multi-truck capacity. We build these relationships on your behalf so your fleet accesses dedicated freight programs one-truck operations can't reach." },
              { h3: "Weekly Fleet Reporting", body: "Revenue per truck, rate per mile, deadhead percentage, detention recovered, top-performing lanes and bottom-performing lanes. Data you can actually use to make fleet decisions." },
              { h3: "Driver Support", body: "We work directly with your drivers on dispatch, not just through the owner. That reduces internal dispatch load on you and keeps drivers happier because they have a real dispatch relationship." },
            ],
          },
          {
            h2: "Mixed Equipment Fleet Dispatch",
            body: [
              "Most small fleets we work with don't run one equipment type. A typical roster might have four dry vans, two reefers and a flatbed. Dispatching that mix well requires specialist knowledge across all three markets — not a generalist dispatcher who's decent at dry van and out of their depth on reefer or flatbed.",
              "Skywards Solution assigns the right specialist to each truck. Your dry vans get a dry van dispatcher who knows Midwest to Southeast lanes cold. Your reefers get a reefer specialist who understands produce cycles and cold chain shippers. Your flatbed gets a flatbed dispatcher who negotiates tarping pay every time. All three are coordinated by your fleet lead so home time, driver preferences and fleet-level goals stay aligned.",
            ],
          },
          {
            h2: "Supplementing or Replacing Internal Dispatch",
            body: [
              "Some small fleets use us as their primary dispatch team. Others already have an internal dispatcher and use us as overflow capacity, night and weekend coverage, or specialty coverage for equipment types their internal team doesn't know well. Both models work.",
              "The economics usually favor external dispatch until you're running around 15 to 25 trucks and can justify a full internal dispatch team. Below that number, our percentage-based pricing typically costs less than salary plus benefits for internal dispatchers who don't yet have enough truck volume to fully utilize their time. When you're ready to bring dispatch in-house, we help you transition — we've supported customers all the way to that milestone.",
            ],
          },
        ],
        benefits: [
          "Dedicated dispatcher per truck, coordinated by a fleet lead",
          "Specialist dispatch by equipment type (van, reefer, flatbed, etc.)",
          "Fleet-level reporting on revenue, RPM and deadhead",
          "Broker relationships that scale with your fleet capacity",
          "Overflow, nights and weekends coverage for internal teams",
          "Volume-adjusted percentage pricing for multi-truck operations",
          "Growth advisory — when and what to add to your fleet",
          "24/7 dispatch across the entire fleet roster",
        ],
        faqs,
        ctaTitle: "Scale your fleet without adding overhead.",
        ctaBody:
          "Submit your carrier packet and a fleet dispatch lead will contact you within one business day.",
      }}
    />
  ),
});