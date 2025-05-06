import { GLOBAL } from "../lib/variables";
import type { APIRoute } from "astro";
import { projects } from "../lib/list";

const validURLs = [
  "/",
  "/skills",
  "/experience",
  "/projects",
  ...projects.map(project => project.filename)
];

const renderSitemapXml = (urls: string[]) => {
  const urlElements = urls
    .map(url => {
      const fullUrl = `${GLOBAL.rootUrl}${url}`;
      return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};

export const GET: APIRoute = async () => {
  return new Response(renderSitemapXml(validURLs), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};