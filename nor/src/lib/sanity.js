import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'etjm03yk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})