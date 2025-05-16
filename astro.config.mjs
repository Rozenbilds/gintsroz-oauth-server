import { defineConfig } from "astro/config";
import oauth from "astro-decap-cms-oauth";

export default defineConfig({
  integrations: [oauth()]
});
