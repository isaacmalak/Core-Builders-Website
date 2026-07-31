import type { ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";

export interface ContactMethod {
  /** Bold label, e.g. "Call us". */
  label: string;
  /** Muted secondary line — availability. */
  meta: string;
  href: string;
  icon: ReactNode;
  /** Drives the hover wash and border. */
  accent: string;
}

export interface SocialChannel {
  name: string;
  href: string;
  icon: ReactNode;
  /** Brand colour — hover wash, border and accent bar. */
  accent: string;
  /** Optional richer badge fill (Instagram's mark is a gradient, not a hue). */
  badge?: string;
}

export const contactMethods: ContactMethod[] = [
  {
    label: "Call us",
    meta: "Our team is on the line ·24/7",
    href: "tel:+201210869350",
    icon: <Phone strokeWidth={2.25} />,
    accent: "#2E9E6B",
  },
  {
    label: "Email us",
    meta: "Our team is online ·24/7",
    href: "mailto:hello@linkdesignstudio.com",
    icon: <Mail strokeWidth={2.25} />,
    accent: "#0E7490",
  },
];

// TODO: swap the placeholder hrefs for the studio's real profile URLs.
export const socialChannels: SocialChannel[] = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <SiInstagram />,
    accent: "#E1306C",
    badge:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <SiFacebook />,
    accent: "#1877F2",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/01210869350",
    icon: <SiWhatsapp />,
    accent: "#25D366",
  },
];
