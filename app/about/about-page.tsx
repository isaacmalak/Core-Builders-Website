"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  capabilities,
  principles,
  stats,
} from "../../components/about/about-data";

gsap.registerPlugin(ScrollTrigger);

/**
 * Renders copy written with **double asterisks** around the words that should
 * stand out, lifting them from body grey to ink.
 */
function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-medium text-[#0A0A09]">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

/** Inline emphasis for copy written directly in this file. */
function Mark({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-[#0A0A09]">{children}</strong>;
}

export function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLElement[]>([]);
  const blocksRef = useRef<HTMLElement[]>([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Intro reveal
      gsap.fromTo(
        ".about-intro > *",
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
      [...rowsRef.current, ...blocksRef.current].forEach((row) => {
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
    <div ref={rootRef} className="bg-[#FAFAF8]">
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="about-intro flex flex-col gap-6">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#9B9A94]">
            About
            <span className="h-px w-8 bg-[#D8D6D0]" />
            Who we are
          </span>

          <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-[#0A0A09] md:text-6xl">
            One team builds your business. The same team grows it.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[#6B6A65] md:text-xl md:leading-relaxed">
            We&apos;re Link Design Studio. Engineers, designers, and marketers
            in <Mark>one team</Mark>, so the same people who launch your
            business are the ones who grow it.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#6B6A65] md:text-base">
            <span>
              <strong className="font-serif text-2xl text-[#0A0A09]">04</strong>{" "}
              principles
            </span>
            <span className="hidden h-4 w-px bg-[#D8D6D0] sm:block" />
            <span>Launch to growth, one team</span>
            <span className="hidden h-4 w-px bg-[#D8D6D0] sm:block" />
            <span>Based in Egypt</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div
          ref={(el) => {
            if (el) blocksRef.current[0] = el;
          }}
          className="grid grid-cols-1 gap-8 border-t border-[#D8D6D0] pt-12 md:grid-cols-[auto_1fr_1fr] md:gap-12 md:pt-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#9B9A94] md:w-24">
            Story
          </span>

          <h2 className="font-serif text-3xl leading-tight text-[#0A0A09] md:text-4xl">
            Good work kept dying between vendors.
          </h2>

          <div className="flex flex-col gap-5 text-base leading-relaxed text-[#6B6A65] md:text-lg md:leading-relaxed">
            <p>
              We combine branding, marketing, and custom software into a single
              creative and technical team.{" "}
              <Mark> One vision. One process. One partner.</Mark>
            </p>

            <p>
              Whether you're launching a startup or scaling an established
              business, we build the identity, the strategy, and the technology
              that move you forward.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="border-t border-[#D8D6D0]">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              ref={(el) => {
                if (el) rowsRef.current[index] = el;
              }}
              className="group grid grid-cols-1 gap-8 border-b border-[#D8D6D0] py-12 md:grid-cols-[auto_1fr_1fr] md:gap-12 md:py-16"
            >
              {/* Oversized number */}
              <span className="font-serif text-5xl leading-none text-[#D8D6D0] transition-colors duration-500 group-hover:text-[#0A0A09] md:text-7xl">
                {principle.number}
              </span>

              {/* Title + category */}
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#9B9A94]">
                  {principle.category}
                </span>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A09] md:text-4xl">
                  {principle.title}
                </h2>
                <span className="mt-5 block h-[2px] w-12 origin-left bg-[#0A0A09] transition-all duration-500 group-hover:w-20" />
              </div>

              {/* Detail + practices */}
              <div>
                <p className="text-base leading-relaxed text-[#6B6A65] md:text-lg md:leading-relaxed">
                  <Emphasis text={principle.detail} />
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                  {principle.practices.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[15px] text-[#0A0A09] md:text-base"
                    >
                      <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#9B9A94]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div
          ref={(el) => {
            if (el) blocksRef.current[1] = el;
          }}
          className="grid grid-cols-1 gap-8 border-t border-[#D8D6D0] pt-12 sm:grid-cols-3 md:gap-12 md:pt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="font-serif text-5xl leading-none text-[#0A0A09] md:text-6xl">
                {stat.value}
              </span>
              <h3 className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-[#9B9A94]">
                {stat.label}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#6B6A65] md:text-lg md:leading-relaxed">
                <Emphasis text={stat.detail} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div
          ref={(el) => {
            if (el) blocksRef.current[2] = el;
          }}
          className="grid grid-cols-1 gap-8 border-t border-[#D8D6D0] pt-12 md:grid-cols-[auto_1fr_1fr] md:gap-12 md:pt-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#9B9A94] md:w-24">
            Scope
          </span>

          <h2 className="font-serif text-3xl leading-tight text-[#0A0A09] md:text-4xl">
            Everything it takes to launch, and to keep growing after.
          </h2>

          <div>
            <p className="text-base leading-relaxed text-[#6B6A65] md:text-lg md:leading-relaxed">
              Six disciplines, all of them <Mark>under one roof</Mark>.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[15px] text-[#0A0A09] md:text-base"
                >
                  <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#9B9A94]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 border-b border-[#D8D6D0] pb-1 text-[15px] font-medium text-[#0A0A09] transition-colors duration-300 hover:border-[#0A0A09] md:text-base"
            >
              See what each one includes
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16 flex flex-col items-start gap-6 md:mt-20 md:flex-row md:items-center md:justify-between">
          <h3 className="max-w-xl font-serif text-2xl leading-tight text-[#0A0A09] md:text-3xl">
            Tell us what you&apos;re building.
          </h3>
          <Link
            href="/contact"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[#0A0A09] px-7 py-3.5 text-sm font-medium text-[#FAFAF8] transition-colors duration-300 hover:bg-[#2A2A28] md:text-base"
          >
            Start a project
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
