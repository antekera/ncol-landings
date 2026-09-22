import type { AdSlotId } from "@/data/advertising";

const DEFAULT_DEMO_ARTICLE =
  "https://www.noticiascol.com/2026/09/21/gobierno-bolivariano-y-poder-popular-benefician-a-1-900-familias-de-tierra-negra-con-jornada-de-amor-y-prosperidad-comunal/";

export const AD_DEMO_ARTICLE_URL =
  process.env.NEXT_PUBLIC_AD_DEMO_ARTICLE_URL ?? DEFAULT_DEMO_ARTICLE;

export const AD_DEMO_CLOSE_MESSAGE = "ncol-ad-demo-close";
export const AD_DEMO_READY_MESSAGE = "ncol-ad-demo-ready";

export function getAdDemoUrl(slot: AdSlotId) {
  const url = new URL(AD_DEMO_ARTICLE_URL);
  url.searchParams.set("ver-banners", "");
  url.searchParams.set("focus", slot);
  return url.toString();
}
