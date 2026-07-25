export interface Service {
  number: string;
  category: string;
  title: string;
  description: string;
  /** Desktop-only grid span classes. */
  className: string;
}

export const services: Service[] = [
  {
    number: "01",
    category: "Software",
    title: "Custom Software",
    description:
      "Scalable systems, dashboards, CRMs, POS solutions, and SaaS products tailored to your business.",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    number: "02",
    category: "Mobile",
    title: "Mobile Apps",
    description: "Android & iOS applications.",
    className: "md:col-span-2",
  },
  {
    number: "03",
    category: "Marketing",
    title: "Growth Marketing",
    description:
      "SEO, paid advertising, social media, and conversion-driven campaigns.",
    className: "md:col-span-2",
  },
  {
    number: "04",
    category: "Automation",
    title: "Business Automation",
    description:
      "Integrations, AI workflows, and automation that save hours every week.",
    className: "md:col-span-3",
  },
  {
    number: "05",
    category: "Design",
    title: "UI / UX Design",
    description:
      "Modern interfaces designed around real users and measurable business goals.",
    className: "md:col-span-3",
  },
  {
    number: "06",
    category: "Brand",
    title: "Brand Identity",
    description:
      "Logos, visual identity systems, and branding that people remember.",
    className: "md:col-span-6",
  },
];
