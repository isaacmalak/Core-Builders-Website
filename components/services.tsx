"use client";

const services = [
  {
    tag: "01 — Software",
    title: "Custom Software",
    description:
      "Scalable systems, dashboards, CRMs, POS solutions, and SaaS products tailored to your business.",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    tag: "02 — Mobile",
    title: "Mobile Apps",
    description:
      "Native-feeling Android & iOS applications built with Flutter.",
    className: "md:col-span-2",
  },
  {
    tag: "03 — Marketing",
    title: "Growth Marketing",
    description:
      "SEO, paid advertising, social media, and conversion-driven campaigns.",
    className: "md:col-span-2",
  },
  {
    tag: "04 — Automation",
    title: "Business Automation",
    description:
      "Integrations, AI workflows, and automation that save hours every week.",
    className: "md:col-span-3",
  },
  {
    tag: "05 — Design",
    title: "UI / UX Design",
    description:
      "Modern interfaces designed around real users and measurable business goals.",
    className: "md:col-span-3",
  },
  {
    tag: "06 — Brand",
    title: "Brand Identity",
    description:
      "Logos, visual identity systems, and branding that people remember.",
    className: "md:col-span-6",
  },
];

export function Services() {
  return (
    <section className="bg-[#FAFAF8] py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-6 border-b border-[#D8D6D0] pb-16 md:flex-row md:items-end md:justify-between">
          <h2 className=" font-serif text-4xl leading-tight text-[#0A0A09] md:text-5xl">
            Everything your business needs to launch and grow.
          </h2>
          <p className=" text-sm leading-relaxed text-[#6B6A65]">
            We combine software engineering, design, branding, and marketing to
            create digital products that move businesses forward.
          </p>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-px overflow-hidden border border-[#D8D6D0] bg-[#D8D6D0] md:grid-cols-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group flex flex-col justify-between bg-[#FAFAF8] p-8 transition-colors duration-300 hover:bg-white ${service.className}`}
            >
              <span className="text-xs uppercase tracking-[0.15em] text-[#9B9A94]">
                {service.tag}
              </span>

              <div>
                <h3 className="font-serif text-3xl text-[#0A0A09] transition-transform group-hover:-skew-x-20  duration-500  md:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#6B6A65]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
