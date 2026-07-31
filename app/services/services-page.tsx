"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../../components/services/services-data";
import { useGSAP } from "@gsap/react";
import { GradientBackground } from "@/components/gradient-background";

gsap.registerPlugin(ScrollTrigger);

export function ServicesPage() {
  const rootRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLElement[]>([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Intro reveal
      gsap.fromTo(
        ".services-intro > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
        }
      );

      // Per-row reveal on scroll
      rowsRef.current.forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <GradientBackground>
      {/* Intro */}
      <section
        ref={rootRef}
        className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="services-intro flex flex-col gap-6">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#9B9A94]">
            Services
            <span className="h-px w-8 bg-[#D8D6D0]" />
            What we do
          </span>

          <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-[#0A0A09] md:text-6xl">
            Everything your business needs to launch and grow.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[#6B6A65]">
            We combine software engineering, design, branding, and marketing
            under one roof — so you get a single team accountable for the whole
            outcome, not a patchwork of vendors.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#6B6A65]">
            <span>
              <strong className="font-serif text-2xl text-[#0A0A09]">06</strong>{" "}
              disciplines
            </span>
            <span className="hidden h-4 w-px bg-[#D8D6D0] sm:block" />
            <span>One team, end to end</span>
            <span className="hidden h-4 w-px bg-[#D8D6D0] sm:block" />
            <span>Built to scale with you</span>
          </div>
        </div>
      </section>

      {/* Detailed service rows */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="border-t border-[#D8D6D0]">
          {services.map((service, index) => (
            <article
              key={service.title}
              ref={(el) => {
                if (el) rowsRef.current[index] = el;
              }}
              className="group grid grid-cols-1 gap-8 border-b border-[#D8D6D0] py-12 md:grid-cols-[auto_1fr_1fr] md:gap-12 md:py-16"
            >
              {/* Oversized number */}
              <span className="font-serif text-5xl leading-none hover:text-cyan-700 transition-colors duration-500 group-hover:text-[#0A0A09] md:text-7xl">
                {service.number}
              </span>

              {/* Title + category */}
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#9B9A94]">
                  {service.category}
                </span>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A09] md:text-4xl">
                  {service.title}
                </h2>
                <span className="mt-5 block h-[2px] w-12 origin-left bg-[#0A0A09] transition-all duration-500 group-hover:w-20" />
              </div>

              {/* Detail + deliverables */}
              <div>
                <p className="text-[15px] leading-relaxed text-[#6B6A65] md:text-base">
                  {service.detail ?? service.description}
                </p>

                {service.deliverables && (
                  <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#0A0A09]"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#9B9A94]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 flex flex-col items-start gap-6 md:mt-20 md:flex-row md:items-center md:justify-between">
          <h3 className="max-w-xl font-serif text-2xl leading-tight text-[#0A0A09] md:text-3xl">
            Not sure which of these you need? That&apos;s what the first
            conversation is for.
          </h3>
          <Link
            href="/contact"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[#0A0A09] px-7 py-3.5 text-sm font-medium text-[#FAFAF8] transition-colors duration-300 hover:bg-[#2A2A28]"
          >
            Start a project
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </GradientBackground>
  );
}
