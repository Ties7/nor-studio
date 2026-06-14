import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

export default defineConfig({
  output: 'server',
  integrations: [
    sanity({
      projectId: "etjm03yk",
      dataset: "production",
      studioBasePath: "/studio",
    }),
    react(),
  ],
  adapter: vercel(),
});