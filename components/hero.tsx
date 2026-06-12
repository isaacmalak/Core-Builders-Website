"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { translations } from "@/lib/translations";

// 1. FIXED: Correct dynamic import for a default export
const HeroCanvas = dynamic(() => import("@/components/hero/hero-canvas"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-secondary" />,
});

interface HeroProps {
  language: "en" | "ar";
}

export function Hero({ language }: HeroProps) {
  const t = translations[language];
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const isArabic = language === "ar";

  useEffect(() => {
    // 2. FIXED: Use gsap.context to properly clean up animations in React 18/19
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30, letterSpacing: "0.1em" },
          {
            opacity: 1,
            y: 0,
            letterSpacing: "0em",
            duration: 1.2,
            ease: "power2.out",
          },
          0
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.2
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.4
        );
    });

    // Cleanup timeline on unmount
    return () => ctx.revert();
  }, [language]);

  // 3. FIXED: Handle GSAP hovers safely via reusable functions
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { y: -2, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-20 rounded-full blur-3xl" />
      </div>

      {/* Two column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className={isArabic ? "text-right" : "text-left"}>
            <h1
              ref={headlineRef}
              className={`text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground text-balance ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {t.hero.headline}
            </h1>

            <p
              ref={subtitleRef}
              className={`text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed text-balance ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {t.hero.subtitle}
            </p>

            <div
              ref={buttonsRef}
              className={`flex flex-col sm:flex-row gap-4 ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                {t.hero.cta.contact}
              </button>
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="px-8 py-3 border border-primary text-primary font-medium rounded hover:bg-secondary transition-colors"
              >
                {t.hero.cta.work}
              </button>
            </div>
          </div>

          {/* Right side - 3D Canvas */}
          <div className="hidden lg:block h-[500px] w-full overflow-visible bg-violet-800">
            <HeroCanvas />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
