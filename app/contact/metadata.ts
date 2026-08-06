import type { Metadata } from "next";
import { siteUrl, siteName, social, defaultOgImage } from "@/lib/site-metadata";

export const contactPageMetadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Link Design Studio to discuss your software or marketing project — reach out by email, social, or the contact form.",
  keywords: ["contact us", "get in touch", "start a project"],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with Link Design Studio to discuss your software or marketing project — reach out by email, social, or the contact form.",
    url: `${siteUrl}/contact`,
    siteName,
    type: "website",
    locale: "en_US",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us",
    description:
      "Get in touch with Link Design Studio to discuss your software or marketing project — reach out by email, social, or the contact form.",
    creator: social.twitter,
    images: [defaultOgImage.url],
  },
};
