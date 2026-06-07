import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dental78.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/laboratorio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/proceso`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];
}
