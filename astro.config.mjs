import { defineConfig } from "astro/config";
import decapCmsOauth from "astro-decap-cms-oauth";
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [decapCmsOauth()],
  output: "server",
  adapter: vercel(),
});
