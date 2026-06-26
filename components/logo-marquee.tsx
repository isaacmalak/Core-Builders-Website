"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function LogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const content = marquee.firstElementChild as HTMLElement;
    if (!content) return;

    // Duplicate content for seamless loop
    const clone = content.cloneNode(true);
    marquee.appendChild(clone);

    const duration = 30; // seconds

    gsap.to([content, clone], {
      xPercent: -100,
      ease: "none",
      duration: duration,
      repeat: -1,
    });
  }, []);

  const logos = [
    "TechCrunch",
    "Forbes",
    "Wired",
    "The Verge",
    "Mashable",
    "Business Insider",
    "Fast Company",
  ];

  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Trusted by Industry Leaders
        </p>
      </div>

      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div className="flex items-center space-x-12 px-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="text-2xl md:text-3xl font-black text-muted-foreground/30 hover:text-foreground transition-colors cursor-default select-none"
            >
              {logo}
            </div>
          ))}
          {/* Add some gaps between sets */}
          <div className="w-12" />
        </div>
      </div>
    </section>
  );
}
