import type { MetadataRoute } from "next";

const BASE_URL = "https://critt.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/ozellikler",
    "/ozellikler/ai-sesli-ajanlar",
    "/ozellikler/iletisim-kanallari",
    "/ozellikler/gorev-bilet-yonetimi",
    "/ozellikler/is-akisi-otomasyonu",
    "/ozellikler/ai-kategorizasyon",
    "/ozellikler/raporlama-dashboard",
    "/ozellikler/musteri-yonetimi",
    "/ozellikler/cagri-merkezi",
    "/cozumler",
    "/cozumler/finans-bankacilik",
    "/cozumler/kamu-belediye",
    "/cozumler/sigorta",
    "/cozumler/perakende-eticaret",
    "/cozumler/enerji-altyapi",
    "/cozumler/cagri-merkezi-bpo",
    "/fiyatlandirma",
    "/hakkimizda",
    "/iletisim",
    "/kvkk",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/") && route.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
