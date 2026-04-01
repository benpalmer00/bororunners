import { sanityFetch, urlFor } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SiteSettings = Record<string, any> | null;

let cached: SiteSettings | undefined;

export async function getSiteSettings(): Promise<SiteSettings> {
  if (cached !== undefined) return cached;
  cached = await sanityFetch<SiteSettings>(siteSettingsQuery);
  return cached;
}

export async function getPageImage(
  field: string,
  fallback: string,
  width = 1920,
  height = 1080
): Promise<string> {
  const settings = await getSiteSettings();
  if (settings && settings[field]) {
    return urlFor(settings[field]).width(width).height(height).url() || fallback;
  }
  return fallback;
}
