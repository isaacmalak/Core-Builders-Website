export interface Service {
  number: string;
  category: string;
  title: string;
  description: string;
  /** Desktop-only grid span classes (home-page bento grid). */
  className: string;
  /** Longer narrative for the dedicated services page. */
  detail?: string;
  /** Concrete deliverables, shown on the dedicated services page. */
  deliverables?: string[];
}

export const services: Service[] = [
  {
    number: "01",
    category: "Software",
    title: "Custom Software",
    description:
      "Scalable systems, dashboards, CRMs, POS solutions, and SaaS products tailored to your business.",
    className: "md:col-span-4 md:row-span-2",
    detail:
      "We build the systems your business actually runs on — architected to scale with you, not against you. From internal tools that replace spreadsheets to full SaaS platforms, every line is written to be maintainable, secure, and fast.",
    deliverables: [
      "SaaS platforms",
      "Admin dashboards & CRMs",
      "POS & inventory systems",
      "API & third-party integrations",
    ],
  },
  {
    number: "02",
    category: "Mobile",
    title: "Mobile Apps",
    description: "Android & iOS applications.",
    className: "md:col-span-2",
    detail:
      "Native-feeling apps for Android and iOS that your customers keep on their home screen. We handle the full journey — from prototype to app-store launch and the updates that follow.",
    deliverables: [
      "iOS & Android apps",
      "Cross-platform builds",
      "App Store & Play Store launch",
      "Push notifications & analytics",
    ],
  },
  {
    number: "03",
    category: "Marketing",
    title: "Growth Marketing",
    description:
      "SEO, paid advertising, social media, and conversion-driven campaigns.",
    className: "md:col-span-2",
    detail:
      "Traffic is only useful if it converts. We pair sharp creative with disciplined measurement to turn visitors into customers, then keep optimizing against the metrics that actually move revenue.",
    deliverables: [
      "SEO & content strategy",
      "Paid search & social ads",
      "Conversion-rate optimization",
      "Analytics & reporting",
    ],
  },
  {
    number: "04",
    category: "Automation",
    title: "Business Automation",
    description:
      "Integrations, AI workflows, and automation that save hours every week.",
    className: "md:col-span-3",
    detail:
      "The repetitive work your team does by hand is work software should be doing. We connect your tools and layer in AI so processes run themselves — freeing hours every week for the work that matters.",
    deliverables: [
      "Workflow automation",
      "AI-assisted operations",
      "Tool & data integrations",
      "Custom internal automations",
    ],
  },
  {
    number: "05",
    category: "Design",
    title: "UI / UX Design",
    description:
      "Modern interfaces designed around real users and measurable business goals.",
    className: "md:col-span-3",
    detail:
      "Great design is invisible — it just works. We research how your users actually behave, then craft interfaces that feel effortless while quietly driving the outcomes your business cares about.",
    deliverables: [
      "User research & flows",
      "Wireframes & prototypes",
      "High-fidelity UI design",
      "Design systems",
    ],
  },
  {
    number: "06",
    category: "Brand",
    title: "Brand Identity",
    description:
      "Logos, visual identity systems, and branding that people remember.",
    className: "md:col-span-6",
    detail:
      "Your brand is the first thing people feel and the last thing they forget. We build complete identity systems — not just a logo — so you look consistent, intentional, and memorable everywhere you show up.",
    deliverables: [
      "Logo & visual identity",
      "Brand guidelines",
      "Typography & color systems",
      "Marketing collateral",
    ],
  },
];
