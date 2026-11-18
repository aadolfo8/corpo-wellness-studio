import type { APIRoute } from "astro";

/** Solo la portada: las propuestas alternativas llevan noindex. */
export const GET: APIRoute = ({ site }) => {
  const today = new Date().toISOString().slice(0, 10);
  const home = new URL("/", site);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${home}</loc>
    <lastmod>${today}</lastmod>
    <image:image><image:loc>${new URL("/og-image.jpg", site)}</image:loc></image:image>
  </url>
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
