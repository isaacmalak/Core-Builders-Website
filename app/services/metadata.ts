import type { Metadata } from "next";
import { siteUrl, siteName, social, defaultOgImage } from "@/lib/site-metadata";

export const servicesPageMetadata: Metadata = {
  title: "Services",
  description:
    "Explore our software development and digital marketing services, from custom web applications to brand strategy and growth campaigns.",
  keywords: ["software services", "marketing services", "web development", "brand strategy"],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Services",
    description:
      "Explore our software development and digital marketing services, from custom web applications to brand strategy and growth campaigns.",
    url: `${siteUrl}/services`,
    siteName,
    type: "website",
    locale: "en_US",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services",
    description:
      "Explore our software development and digital marketing services, from custom web applications to brand strategy and growth campaigns.",
    creator: social.twitter,
    images: [defaultOgImage.url],
  },
};
