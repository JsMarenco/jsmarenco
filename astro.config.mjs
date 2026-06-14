import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const site = process.env.PUBLIC_SITE_URL ?? "https://jsmarenco.dev";
const rootUrl = new URL("/", site).toString();

export default defineConfig({
  site,
  integrations: [sitemap({ filter: (page) => page !== rootUrl })],
  vite: {
    plugins: [tailwindcss()],
  },
});
