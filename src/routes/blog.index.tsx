import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/data/blog-posts";

const URL = "https://www.skywardssolution.com/blog";
const TITLE = "Truck Dispatch Blog — Insights for Owner Operators & Carriers";
const DESC = "Practical guides, rate benchmarks, and dispatch playbooks from the Skywards Solution team — built for owner operators and small fleets.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Skywards Solution Blog",
          url: URL,
          publisher: { "@type": "Organization", name: "Skywards Solution" },
          blogPost: BLOG_POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${URL}/${p.slug}`,
            datePublished: p.publishedDate,
            author: { "@type": "Organization", name: p.author },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skywardssolution.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: URL },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="bg-gradient-brand text-brand-foreground pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">Insights</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
            Truck dispatch <span className="block text-brand-light">insights & playbooks</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            Guides, rate benchmarks, and hard-earned lessons from dispatching thousands of loads across
            the United States.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {p.category}
                </p>
                <h2 className="mt-3 text-xl font-bold text-foreground group-hover:text-brand">
                  {p.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{new Date(p.publishedDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span>{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}