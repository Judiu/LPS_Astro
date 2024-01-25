import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import three from "three";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), three()],
  i18n:{
    defaultLocale: 'es',
    locales: ['es','en','pt'],
    routing:{
      prefixDefaultLocale: false
    },
    fallback:{
      'en':'es'
    }
  }
});