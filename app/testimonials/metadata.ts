import type { Metadata } from "next";
import { siteUrl, siteName, social, defaultOgImage } from "@/lib/site-metadata";

export const testimonialsPageMetadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from the clients who've worked with Link Design Studio and see the results our software and marketing partnerships have delivered.",
  keywords: ["testimonials", "client reviews", "client feedback"],
  alternates: {
    canonical: `${siteUrl}/testimonials`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Testimonials",
    description:
      "Hear from the clients who've worked with Link Design Studio and see the results our software and marketing partnerships have delivered.",
    url: `${siteUrl}/testimonials`,
    siteName,
    type: "website",
    locale: "en_US",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials",
    description:
      "Hear from the clients who've worked with Link Design Studio and see the results our software and marketing partnerships have delivered.",
    creator: social.twitter,
    images: [defaultOgImage.url],
  },
};
