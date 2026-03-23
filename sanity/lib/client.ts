import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// Only create a real client if projectId is configured
export const client = projectId
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

// Safe fetch wrapper — returns null if Sanity is not configured
export async function sanityFetch<T>(query: string, params?: Record<string, string>): Promise<T | null> {
  if (!client) return null;
  try {
    if (params) {
      return await client.fetch<T>(query, params);
    }
    return await client.fetch<T>(query);
  } catch {
    return null;
  }
}

const builder = client ? imageUrlBuilder(client) : null;

// Chainable no-op for when Sanity is not configured
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const noopBuilder: any = new Proxy({}, {
  get: (_target, prop) => {
    if (prop === "url") return () => "";
    return () => noopBuilder;
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder) return noopBuilder;
  return builder.image(source);
}
