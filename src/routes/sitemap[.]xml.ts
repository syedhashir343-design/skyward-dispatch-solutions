import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG_POSTS } from "@/data/blog-posts";

const BASE_URL = "https://www.skywardssolution.com";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/dry-van-dispatch", changefreq: "monthly", priority: "0.9" },
          { path: "/reefer-dispatch", changefreq: "monthly", priority: "0.9" },
          { path: "/flatbed-dispatch", changefreq: "monthly", priority: "0.9" },
          { path: "/step-deck-dispatch", changefreq: "monthly", priority: "0.9" },
          { path: "/power-only-dispatch", changefreq: "monthly", priority: "0.9" },
          { path: "/hotshot-dispatch", changefreq: "monthly", priority: "0.9" },
          { path: "/box-truck-dispatch", changefreq: "monthly", priority: "0.9" },
          { path: "/owner-operator-dispatch", changefreq: "monthly", priority: "0.9" },
          { path: "/small-fleet-dispatch", changefreq: "monthly", priority: "0.9" },
          { path: "/dedicated-dispatcher", changefreq: "monthly", priority: "0.9" },
          { path: "/carrier-setup", changefreq: "monthly", priority: "0.9" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" },
          { path: "/locations", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-dallas", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-houston", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-chicago", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-atlanta", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-los-angeles", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-phoenix", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-denver", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-miami", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-charlotte", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-memphis", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-indianapolis", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-columbus", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-kansas-city", changefreq: "monthly", priority: "0.8" },
          { path: "/truck-dispatch-nashville", changefreq: "monthly", priority: "0.8" },
          { path: "/sitemap", changefreq: "monthly", priority: "0.3" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/cookies", changefreq: "yearly", priority: "0.3" },
        ];

        entries.push({ path: "/blog", changefreq: "weekly", priority: "0.8" });
        for (const p of BLOG_POSTS) {
          entries.push({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.7" });
        }

        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});