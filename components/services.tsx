"use client";

import { services } from "./services/services-data";
import { ServicesMobile } from "./services/services-mobile";

export function Services() {
  return (
    <section className="bg-[#FAFAF8] pt-8 md:pt-10  ">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 ex flex-col gap-6 border-b border-[#D8D6D0] pb-10 md:mb-16 md:items-start md:justify-between ">
          <h2 className=" font-serif text-2xl leading-tight text-[#0A0A09] md:text-4xl">
            Everything your business needs to launch and grow.
          </h2>
          <p className=" text-lg leading-relaxed text-[#6B6A65]">
            We combine software engineering, design, branding, and marketing to
            create digital products that move businesses forward.
          </p>
        </div>

        {/* Mobile: editorial card stack with scroll reveal */}
        <ServicesMobile />

        {/* Desktop: asymmetric bento grid */}
        <div className="hidden grid-cols-1 gap-px overflow-hidden border border-[#D8D6D0] bg-[#D8D6D0] md:grid md:auto-rows-[200px] md:grid-cols-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group flex flex-col justify-between gap-4 bg-[#FAFAF8] p-6 transition-colors duration-300 hover:bg-white md:p-8 ${service.className}`}
            >
              <span className="text-xs uppercase tracking-[0.15em] text-[#9B9A94]">
                {service.number} — {service.category}
              </span>

              <div>
                <h3 className="font-serif text-xl text-[#0A0A09] transition-transform group-hover:-skew-x-20  duration-500 md:text-2xl lg:text-3xl">
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
