import type { AdSlotId } from "@/data/advertising";

const DEFAULT_DEMO_ARTICLE =
  "https://www.noticiascol.com/2026/09/21/gobierno-bolivariano-y-poder-popular-benefician-a-1-900-familias-de-tierra-negra-con-jornada-de-amor-y-prosperidad-comunal/";

export const AD_DEMO_ARTICLE_URL =
  process.env.NEXT_PUBLIC_AD_DEMO_ARTICLE_URL ?? DEFAULT_DEMO_ARTICLE;

export const AD_DEMO_CLOSE_MESSAGE = "ncol-ad-demo-close";
export const AD_DEMO_READY_MESSAGE = "ncol-ad-demo-ready";

export function getAdDemoUrl(slot: AdSlotId) {
  const url = new URL(AD_DEMO_ARTICLE_URL);

  if (
    process.env.NODE_ENV === "development" &&
    typeof window !== "undefined" &&
    (!process.env.NEXT_PUBLIC_AD_DEMO_ARTICLE_URL ||
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1" ||
      url.hostname === "0.0.0.0")
  ) {
    url.protocol = window.location.protocol;
    url.hostname = window.location.hostname;
    url.port = "3011";
  }

  url.searchParams.set("ver-banners", "1");
  url.searchParams.set("focus", slot);
  return url.toString();
}
