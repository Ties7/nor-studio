import { defineConfig } from 'astro/config'
import sanity from '@sanity/astro'

import react from '@astrojs/react';

export default defineConfig({
  integrations: [sanity({
    projectId: 'etjm03yk',
    dataset: 'production',
    studioBasePath: '/studio',
  }), react()],
})