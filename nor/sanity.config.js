import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  projectId: 'etjm03yk',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [],
  },
})