import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/components/service-page-layout";

const faqs = [
  { q: "What is power only trucking?", a: "Power only means you provide the tractor and the shipper or broker provides the loaded trailer. You hook up, pull the trailer to its destination, drop it and pick up the next preloaded trailer. No loading, no unloading, no waiting at the dock." },
  { q: "Who provides the trailer on power only loads?", a: "The trailer is provided by the shipper, broker or a trailer pool program like Amazon Relay, XPO drop and hook, or J.B. Hunt 360box. Your only responsibility is safe transport with a legal, insured tractor." },
  { q: "What is Amazon Relay and can you dispatch me on it?", a: "Amazon Relay is Amazon's freight platform for owner-operators and carriers, primarily power only trailer pool freight. Once you're onboarded with Amazon we can build a dispatch plan around Relay loads combined with other power only freight to maximize weekly gross." },
  { q: "How much does a power only tractor gross weekly?", a: "Power only carriers on strong dispatch typically gross $5,500 to $8,500 per week. Because you skip loading and unloading, your drive time per week is higher, which translates directly into more revenue miles." },
  { q: "Do I need special equipment for power only?", a: "You need a Class 8 tractor, current insurance including trailer interchange coverage, and DOT/MC in good standing. Some shipper programs require additional equipment like ELDs compatible with their systems." },
  { q: "Can new authorities do power only?", a: "Yes, though the biggest power only programs (Amazon Relay, some brokerage trailer pools) have minimum authority age requirements. Our dispatchers know which programs accept new MCs and which require 6-12 months of authority age." },
];

export const Route = createFileRoute("/power-only-dispatch")({
  head: () =>
    buildServiceHead({
      slug: "power-only-dispatch",
      title: "Power Only Dispatch Services USA — Amazon Relay & Trailer Pools",
      description:
        "Power only dispatch for tractor owner-operators. Amazon Relay, XPO, JB Hunt and broker trailer pools. Higher weekly gross, no dock time, 24/7 support.",
      serviceName: "Power Only Dispatch",
      breadcrumbLabel: "Power Only Dispatch",
      faqs,
    }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Power Only Dispatch",
        h1: "Power Only Dispatch Services",
        h1Highlight: "Drop, Hook and Go.",
        intro:
          "Skywards Solution dispatches power only tractors on trailer pool freight nationwide — including Amazon Relay, XPO drop-and-hook, J.B. Hunt 360, and broker trailer programs. Power only lets you skip loading, unloading and dock time entirely, converting more hours per week into paid drive time.",
        sections: [
          {
            h2: "Why Power Only Pays More Per Hour",
            body: [
              "The math on power only is different from every other equipment type. A traditional dry van or reefer carrier spends significant hours per week loading, unloading and waiting at docks. Power only strips all of that out. You arrive, drop your empty, hook a preloaded trailer, and drive. That efficiency alone can lift weekly revenue by 20-30% for carriers who structure their week around trailer pool freight.",
              "The trade-off is that power only requires access to trailer pool programs and brokers who consistently offer drop-and-hook freight. Not every dispatcher has those relationships. Skywards Solution has spent years building direct broker relationships and power only program access so our carriers stay loaded on drop-and-hook lanes.",
            ],
          },
          {
            h2: "Power Only Programs and Broker Freight We Book",
            body: [
              "Our power only dispatchers combine multiple sources of drop-and-hook freight to keep your tractor moving with minimal downtime.",
            ],
            h3s: [
              { h3: "Amazon Relay", body: "Once you're onboarded with Amazon Relay, we build weekly dispatch plans around Relay tenders combined with backhaul freight so your tractor never sits waiting for the next Relay load." },
              { h3: "Broker Trailer Pools", body: "Major brokers like XPO, RXO, J.B. Hunt, C.H. Robinson and Coyote all run drop-and-hook trailer pool programs. We dispatch across all of them based on which pays best on your lane." },
              { h3: "Shipper Direct Drop-and-Hook", body: "Direct shipper programs that provide preloaded trailers at their facility. Longer-term freight relationships with more predictable weekly volume." },
              { h3: "Standard Power Only Loads", body: "Non-pool power only freight where the shipper or broker provides a specific trailer for a single move. Fills in gaps and often pays a premium." },
            ],
          },
          {
            h2: "Maximizing Power Only Weekly Gross",
            body: [
              "The biggest mistake power only carriers make is treating one program as their only source of freight. Amazon Relay alone, XPO alone or one broker alone leaves gaps in the week when trailers aren't available. Skywards Solution builds power only dispatch across multiple sources so gaps are filled with backhaul freight from other pools or brokers.",
              "We also negotiate rate. Power only linehaul on trailer pool programs is often a posted rate, but layover, detention and repositioning pay are negotiable. Our dispatchers push for every accessorial and every mile of paid deadhead to make sure your tractor is generating revenue during every hour of the week you're available to drive.",
            ],
          },
          {
            h2: "Insurance, Compliance and Trailer Interchange",
            body: [
              "Power only has specific compliance requirements that regular flatbed or dry van doesn't. Trailer interchange coverage, non-owned trailer physical damage, and program-specific insurance minimums all need to be in place before you can pull a preloaded trailer. Our dispatchers walk you through what's required, verify your COI meets each program's minimums, and coordinate with your agent when adjustments are needed.",
              "We also handle the ongoing paperwork — Relay onboarding, XPO drop-and-hook program applications, broker packet completion, EDI updates and factoring submissions. The goal is to keep your tractor moving while we manage everything behind it.",
            ],
          },
        ],
        benefits: [
          "Amazon Relay, XPO, JB Hunt and major broker pool access",
          "Dedicated power only dispatcher who mixes programs for max miles",
          "No dock time — drop, hook and drive",
          "Higher weekly gross through more drive time per week",
          "Trailer interchange and COI compliance guidance",
          "Layover, detention and reposition pay negotiated",
          "Transparent percentage pricing, no setup fees",
          "24/7 dispatch support",
        ],
        faqs,
        ctaTitle: "Turn your tractor into a power only revenue machine.",
        ctaBody:
          "Submit your carrier packet and a power only dispatcher will contact you within one business day.",
      }}
    />
  ),
});