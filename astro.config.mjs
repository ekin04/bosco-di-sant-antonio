// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), sitemap({
    filter: (page) =>
      page !== "https://boscodisantantonio.it/cookie_policy/" && page !== "https://boscodisantantonio.it/privacy_policy/",
  }), partytown(), react()],
  site: "https://boscodisantantonio.it",
  output: "hybrid",
  adapter: vercel(),
});