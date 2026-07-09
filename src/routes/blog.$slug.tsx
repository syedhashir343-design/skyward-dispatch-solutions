import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { BLOG_POSTS, findPost, type BlogPost } from "@/data/blog-posts";

const BASE = "https://www.skywardssolution.com";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    const post = loaderData as BlogPost | undefined;
    if (!post) {
      return {
        meta: [
          { title: "Article not found — Skywards Solution" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const url = `${BASE}/blog/${params.slug}`;
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { name: "keywords", content: post.keywords.join(", ") },
        { property: "og:title", content: post.metaTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: post.publishedDate },
        { property: "article:author", content: post.author },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.metaTitle },
        { name: "twitter:description", content: post.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.publishedDate,
            dateModified: post.updatedDate ?? post.publishedDate,
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "Skywards Solution",
              logo: { "@type": "ImageObject", url: `${BASE}/favicon.ico` },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            keywords: post.keywords.join(", "),
            articleSection: post.category,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
        ...(post.faqs && post.faqs.length > 0
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: post.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              },
            ]
          : []),
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-32 pb-24 text-center">
      <h1 className="text-4xl font-bold text-foreground">Article not found</h1>
      <p className="mt-4 text-muted-foreground">The post you were looking for has moved or doesn't exist.</p>
      <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-brand hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to all articles
      </Link>
    </section>
  );
}

function BlogPostPage() {
  const post = Route.useLoaderData() as BlogPost;
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <>
      <section className="bg-gradient-brand text-brand-foreground pt-32 pb-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-light">
            {post.category}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/75">
            <span>{post.author}</span>
            <span>·</span>
            <span>{new Date(post.publishedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <article className="max-w-3xl">
            <p className="text-xl leading-relaxed text-foreground">{post.intro}</p>

            <div className="mt-10 space-y-10">
              {post.sections.map((s) => (
                <div key={s.h2}>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{s.h2}</h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Frequently Asked Questions</h2>
                <div className="mt-6 space-y-3">
                  {post.faqs.map((f, i) => (
                    <details key={i} className="group rounded-2xl border border-border bg-card p-6">
                      <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                        {f.q}
                      </summary>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-14 rounded-3xl bg-muted p-8">
              <h3 className="text-xl font-bold text-foreground">The bottom line</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{post.conclusion}</p>
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
              <Link to="/blog" className="inline-flex items-center gap-2 text-brand hover:underline">
                <ArrowLeft className="h-4 w-4" /> All articles
              </Link>
              <Link
                to="/carrier-setup"
                className="text-brand-foreground bg-gradient-brand inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold shadow-soft hover:scale-[1.02] transition-transform"
              >
                Start Carrier Setup <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div className="bg-gradient-brand text-brand-foreground rounded-3xl p-7 shadow-soft">
              <h3 className="text-lg font-bold">Need a dispatcher?</h3>
              <p className="mt-3 text-sm text-white/85">
                Skywards Solution dispatches owner operators and small fleets across the U.S. — 24/7
                load booking, rate negotiation, and paperwork handled.
              </p>
              <a
                href="tel:+16142090850"
                className="text-brand mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> (614) 209-0850
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Related articles
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: r.slug }}
                      className="text-brand hover:underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}