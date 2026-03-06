import { NextResponse } from "next/server";
import { getAllInsuranceSlugs } from "@/lib/insurance";

const BASE_URL = "https://standardinsurance.com.au";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlEntry(url: string, lastmod: string, changefreq: string, priority: number): string {
  return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function GET() {
  const lastmod = new Date().toISOString().split("T")[0];

  const staticUrls = [
    { url: BASE_URL, changefreq: "weekly", priority: 1 },
    { url: `${BASE_URL}/about-us`, changefreq: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, changefreq: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/insurance`, changefreq: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/services/insurance-review`, changefreq: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/competitive-quotation`, changefreq: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/claim-service`, changefreq: "monthly", priority: 0.8 },
  ];

  const insuranceUrls = getAllInsuranceSlugs("EN").map(({ slug }) => ({
    url: `${BASE_URL}/insurance/${slug}`,
    changefreq: "weekly" as const,
    priority: 0.8,
  }));

  const urls = [...staticUrls, ...insuranceUrls];
  const urlEntries = urls
    .map((u) => urlEntry(u.url, lastmod, u.changefreq, u.priority))
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
