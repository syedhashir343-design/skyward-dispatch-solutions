import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/data/blog-posts";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — Skywards Solution" },
      { name: "description", content: "Full sitemap of Skywards Solution — every public page on our truck dispatch website." },
      { property: "og:title", content: "Sitemap — Skywards Solution" },
      { property: "og:description", content: "Full sitemap of Skywards Solution." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.skywardssolution.com/sitemap" },
    ],
    links: [{ rel: "canonical", href: "https://www.skywardssolution.com/sitemap" }],
  }),
  component: SitemapPage,
});

const sections: { heading: string; links: { to: string; label: string }[] }[] = [
  {
    heading: "Main Pages",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { to: "/services", label: "Services" },
      { to: "/carrier-setup", label: "Carrier Setup" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Dispatch Services",
    links: [
      { to: "/dry-van-dispatch", label: "Dry Van Dispatch" },
      { to: "/reefer-dispatch", label: "Reefer Dispatch" },
      { to: "/flatbed-dispatch", label: "Flatbed Dispatch" },
      { to: "/step-deck-dispatch", label: "Step Deck Dispatch" },
      { to: "/power-only-dispatch", label: "Power Only Dispatch" },
      { to: "/hotshot-dispatch", label: "Hotshot Dispatch" },
      { to: "/box-truck-dispatch", label: "Box Truck Dispatch" },
      { to: "/owner-operator-dispatch", label: "Owner Operator Dispatch" },
      { to: "/small-fleet-dispatch", label: "Small Fleet Dispatch" },
      { to: "/dedicated-dispatcher", label: "Dedicated Dispatcher" },
    ],
  },
  {
    heading: "Locations",
    links: [
      { to: "/locations", label: "All Locations" },
      { to: "/truck-dispatch-dallas", label: "Dallas, TX" },
      { to: "/truck-dispatch-houston", label: "Houston, TX" },
      { to: "/truck-dispatch-chicago", label: "Chicago, IL" },
      { to: "/truck-dispatch-atlanta", label: "Atlanta, GA" },
      { to: "/truck-dispatch-los-angeles", label: "Los Angeles, CA" },
      { to: "/truck-dispatch-phoenix", label: "Phoenix, AZ" },
      { to: "/truck-dispatch-denver", label: "Denver, CO" },
      { to: "/truck-dispatch-miami", label: "Miami, FL" },
      { to: "/truck-dispatch-charlotte", label: "Charlotte, NC" },
      { to: "/truck-dispatch-memphis", label: "Memphis, TN" },
      { to: "/truck-dispatch-indianapolis", label: "Indianapolis, IN" },
      { to: "/truck-dispatch-columbus", label: "Columbus, OH" },
      { to: "/truck-dispatch-kansas-city", label: "Kansas City, MO" },
      { to: "/truck-dispatch-nashville", label: "Nashville, TN" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Service" },
      { to: "/cookies", label: "Cookie Policy" },
    ],
  },
];

function SitemapPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Sitemap</p>
      <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">Site Map</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Every public page on skywardssolution.com — organized so you and search engines can find
        exactly what you need.
      </p>
      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-xl font-semibold text-foreground">{s.heading}</h2>
            <ul className="mt-4 space-y-2">
              {s.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-brand hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="sm:col-span-2">
          <h2 className="text-xl font-semibold text-foreground">Blog Articles</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {BLOG_POSTS.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="text-brand hover:underline"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-12 text-sm text-muted-foreground">
        XML sitemap for search engines:{" "}
        <a href="/sitemap.xml" className="text-brand hover:underline">
          /sitemap.xml
        </a>
      </p>
    </section>
  );
}