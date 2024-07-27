import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://blifinvestment.com/",
      lastModified: new Date(),
    },
    {
      url: "https://blifinvestment.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://blifinvestment.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://blifinvestment.com/collections",
      lastModified: new Date(),
    },
    {
      url: "https://blifinvestment.com/plans",
      lastModified: new Date(),
    },
  ];
}
