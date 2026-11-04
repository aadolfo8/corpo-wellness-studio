import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * URL pública de la web, sin barra final. En Netlify se toma sola de `URL` (el dominio principal del sitio);
 * para forzar otra, define SITE_URL en las variables de entorno.
 */
const siteUrl = (process.env.SITE_URL || process.env.URL || "https://corpo-wellness-studio.netlify.app").replace(/\/+$/, "");

/** Rellena %SITE_URL% en index.html y genera robots.txt y sitemap.xml con la URL correcta. */
const seo = (): Plugin => ({
  name: "corpo-seo",
  transformIndexHtml: { order: "pre", handler: (html) => html.replaceAll("%SITE_URL%", siteUrl) },
  generateBundle() {
    const today = new Date().toISOString().slice(0, 10);
    this.emitFile({
      type: "asset",
      fileName: "robots.txt",
      source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    });
    this.emitFile({
      type: "asset",
      fileName: "sitemap.xml",
      source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <image:image><image:loc>${siteUrl}/og-image.jpg</image:loc></image:image>
  </url>
</urlset>
`,
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), seo(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
