import type { Metadata } from "next";
import { siteUrl, siteName, social, defaultOgImage } from "@/lib/site-metadata";

//TODO: change the description and keywords to be more specific to the about page
export const aboutPageMetadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Link Design Studio and learn about our principles, capabilities, and track record delivering software and marketing work for modern businesses.",
  keywords: ["about us", "our team", "company mission", "design principles"],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About Us",
    description:
      "Meet the team behind Link Design Studio and learn about our principles, capabilities, and track record delivering software and marketing work for modern businesses.",
    url: `${siteUrl}/about`,
    siteName,
    type: "website",
    locale: "en_US",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "Meet the team behind Link Design Studio and learn about our principles, capabilities, and track record delivering software and marketing work for modern businesses.",
    creator: social.twitter,
    images: [defaultOgImage.url],
  },
};
