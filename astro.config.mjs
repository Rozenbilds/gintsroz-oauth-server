import { defineConfig } from "astro/config";
import decapCmsOauth from "astro-decap-cms-oauth";

export default defineConfig({
  integrations: [decapCmsOauth()],
  output: "server"
});
