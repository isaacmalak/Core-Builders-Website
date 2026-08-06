import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/site-metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata = siteMetadata;

import { Shell } from "@/components/shell";

// This is needed to support shell router pattern
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${inter.variable} ${spaceGrotesk.variable} ${playfair.variable}  `}
    >
      <body className={`font-sans antialiased ${spaceGrotesk.className}`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
