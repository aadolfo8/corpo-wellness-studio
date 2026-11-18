import { defineConfig } from "astro/config";
import react from "@astrojs/react";

/**
 * URL pública de la web, sin barra final. En Netlify se toma sola de `URL` (el dominio principal del sitio);
 * para forzar otra, define SITE_URL en las variables de entorno.
 */
const site = (process.env.SITE_URL || process.env.URL || "https://corpo-wellness-studio.netlify.app").replace(/\/+$/, "");

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site,
  integrations: [react()],
  server: { port: 8080, host: true },
});
