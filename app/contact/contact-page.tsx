"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GradientBackground } from "@/components/gradient-background";
import { ContactCard } from "@/components/contact/contact-card";
import { SocialRow } from "@/components/contact/social-row";
import {
  contactMethods,
  socialChannels,
} from "@/components/contact/contact-data";

gsap.registerPlugin(ScrollTrigger);

export function ContactPage() {
  const rootRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLElement[]>([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Intro reveal
      gsap.fromTo(
        introRef.current?.children ?? [],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
        }
      );

      // Cards and social rows reveal on scroll
      itemsRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
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
      <section
        ref={rootRef}
        className="mx-auto max-w-3xl px-6 pt-32 pb-20 md:pt-35 md:pb-16"
      >
        {/* Header */}
        <div ref={introRef} className="flex flex-col gap-6">
          <h1 className="font-serif text-5xl leading-[1.02] text-[#0A0A09] md:text-6xl">
            Contact{" "}
            <span className="relative inline-block text-[#0E7490] italic">
              Us
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#0E7490]/25"
              />
            </span>
          </h1>
        </div>

        {/* Direct contact */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-10">
          {contactMethods.map((method, index) => (
            <ContactCard
              key={method.label}
              label={method.label}
              meta={method.meta}
              href={method.href}
              icon={method.icon}
              accent={method.accent}
              onRef={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
            />
          ))}
        </div>

        {/* Social */}
        <h2
          id="social-heading"
          className="mt-10 flex items-center gap-3 text-xs font-medium tracking-[0.18em] text-[#6B6A65] uppercase md:mt-7"
        >
          Contact us on social media
          <span aria-hidden="true" className="h-px flex-1 bg-[#0A0A09]/10" />
        </h2>

        <ul
          aria-labelledby="social-heading"
          className="mt-4 flex flex-col gap-2.5 sm:gap-3"
        >
          {socialChannels.map((channel, index) => (
            <SocialRow
              key={channel.name}
              name={channel.name}
              href={channel.href}
              icon={channel.icon}
              accent={channel.accent}
              badge={channel.badge}
              onRef={(el) => {
                if (el) itemsRef.current[contactMethods.length + index] = el;
              }}
            />
          ))}
        </ul>
      </section>
    </GradientBackground>
  );
}
