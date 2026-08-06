import type { Metadata } from "next";

export const companyName = "Link Design Studio";
export const siteName = companyName;

// TODO: replace with the real production domain before launch
export const siteUrl = "https://example.com";

// TODO: replace with the real social handles
export const social = {
  twitter: "@example",
};

// TODO: add these image files to /public and update the url below
// - og-image.jpg -> 1200x630
export const defaultOgImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${companyName} — Software & Marketing Solutions`,
};

// Root metadata — defines the title template every page's title string plugs into.
export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} | Software & Marketing Solutions`,
    template: `%s | ${companyName}`,
  },
  description:
    "Premium software development and digital marketing agency delivering cutting-edge solutions for modern businesses.",
  keywords: ["software development", "digital marketing", "web design", "agency"],
  authors: [{ name: companyName }],
  alternates: {
    canonical: siteUrl,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${companyName} | Software & Marketing Solutions`,
    description:
      "Premium software development and digital marketing agency delivering cutting-edge solutions for modern businesses.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} | Software & Marketing Solutions`,
    description:
      "Premium software development and digital marketing agency delivering cutting-edge solutions for modern businesses.",
    creator: social.twitter,
    images: [defaultOgImage.url],
  },
};
