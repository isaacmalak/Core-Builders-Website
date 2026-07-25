"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "./services-data";

gsap.registerPlugin(ScrollTrigger);

export function ServicesMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        const accent = card.querySelector<HTMLElement>(".service-accent");

        gsap.fromTo(
          card,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );

        if (accent) {
          gsap.fromTo(
            accent,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.7,
              delay: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col gap-4 md:hidden">
      {services.map((service, index) => (
        <article
          key={service.title}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          className="group relative overflow-hidden rounded-2xl border border-[#E4E2DC] bg-white p-6 active:border-[#0A0A09] transition-colors duration-300"
        >
          {/* Oversized ghost numeral as a background accent */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-1 -top-1 select-none font-serif text-6xl p-3 leading-none text-[#F1EFE9]"
          >
            {service.number}
          </span>

          <div className="relative z-10">
            <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#9B9A94]">
              <span className="text-[#0A0A09]">{service.number}</span>
              <span className="h-px w-4 bg-[#D8D6D0]" />
              {service.category}
            </span>

            <h3 className="mt-4 font-serif text-2xl leading-tight text-[#0A0A09]">
              {service.title}
            </h3>

            <p className="mt-2 text-[15px] leading-relaxed text-[#6B6A65]">
              {service.description}
            </p>

            <span className="service-accent mt-5 block h-[2px] w-12 origin-left bg-[#0A0A09]" />
          </div>
        </article>
      ))}
    </div>
  );
}
