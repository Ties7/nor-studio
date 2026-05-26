import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import product from '../studio/schemaTypes/product.js'

export default defineConfig({
  projectId: 'etjm03yk',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [product],
  },
})