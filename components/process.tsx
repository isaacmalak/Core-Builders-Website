"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discovery",
    description:
      "We start by understanding your goals, audience, and competition.",
  },
  {
    title: "Strategy",
    description:
      "We develop a comprehensive roadmap tailored to your specific needs.",
  },
  {
    title: "Execution",
    description:
      "Our experts build your solution using cutting-edge technology.",
  },
  {
    title: "Growth",
    description: "We help you scale and continuously optimize your results.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, index) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
      // Don't touch it, it just works.
      if (lineRef.current && sectionRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "25% bottom",
              end: "0% top",
              scrub: 0.6,
              invalidateOnRefresh: true,
              markers: true, // remove once confirmed
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden "
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-md">
              A proven methodology for delivering exceptional results every
              single time.
            </p>
          </div>

          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute top-2 bottom-2 left-[29px] w-px bg-muted-foreground/15">
              <div
                ref={lineRef}
                className="w-full h-full bg-foreground origin-top"
                style={{ transform: "scaleY(0)" }}
              />
            </div>

            <div className="space-y-14">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) stepsRef.current[index] = el;
                  }}
                  className="relative flex gap-8 items-start pl-2"
                >
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border border-muted-foreground/25 bg-background flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
