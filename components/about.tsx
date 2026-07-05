"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statement =
  "We're a small studio that builds software, apps, and brands the way we'd want them built for us — thoughtfully, directly, without the noise of a big agency in between.";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(wordsRef.current, {
        color: "#0A0A09",
        stagger: 0.04,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 55%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = statement.split(" ");

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-10">
          About
        </p>

      
      </div>
    </section>
  );
}
