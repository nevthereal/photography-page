import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: "static",
  adapter: vercel({
    imagesConfig: {
      formats: ["image/webp"],
      sizes: [640, 750, 828, 1080, 1200],
      domains: [],
    },
    imageService: true,
    devImageService: "sharp",
    webAnalytics: {
      enabled: true,
    },
  }),
});
