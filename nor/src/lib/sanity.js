import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "etjm03yk",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});