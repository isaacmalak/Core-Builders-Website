import type { Metadata } from "next";
import { siteUrl, siteName, social, defaultOgImage } from "@/lib/site-metadata";

//TODO: Enhance the description and keywords to be more specific to the portfolio page

export const portfolioPageMetadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our portfolio of software and marketing projects — real case studies showing the results we've delivered for our clients.",
  keywords: ["portfolio", "case studies", "client projects", "our work"],
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Portfolio",
    description:
      "Browse our portfolio of software and marketing projects — real case studies showing the results we've delivered for our clients.",
    url: `${siteUrl}/portfolio`,
    siteName,
    type: "website",
    locale: "en_US",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description:
      "Browse our portfolio of software and marketing projects — real case studies showing the results we've delivered for our clients.",
    creator: social.twitter,
    images: [defaultOgImage.url],
  },
};
