"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const TICKS_PER_SIDE = 22;

type SectionDividerProps = {
  /** Small ordinal shown before the label, e.g. "02". */
  index: string;
  label: string;
  /** Background of the section above — the divider fades from it. */
  from?: string;
  /** Background of the section below — the divider fades into it. */
  to?: string;
  /** Ink colour for the rule, ticks and label. */
  ink?: string;
  className?: string;
};

export function SectionDivider({
  index,
  label,
  from = "#FFFFFF",
  to = "#FFFFFF",
  ink = "#0A0A09",
  className,
}: SectionDividerProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const scrollTrigger = {
        trigger: rootRef.current,
        start: "top 100%",
        end: "top 40%",
        scrub: 0.5,
      };

      // Hairline draws outward from the emblem.
      gsap.fromTo(
        "[data-seam-rule]",
        { scaleX: 0 },
        { scaleX: 1, ease: "none", scrollTrigger }
      );

      // Ticks stand up, closest to the emblem first.
      gsap.fromTo(
        "[data-seam-tick]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          stagger: { each: 0.015, from: "center" },
          scrollTrigger,
        }
      );

      gsap.fromTo(
        "[data-seam-sweep]",
        { opacity: 0 },
        { opacity: 1, ease: "none", scrollTrigger }
      );

      gsap.fromTo(
        "[data-seam-emblem]",
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, ease: "none", scrollTrigger }
      );

      gsap.fromTo(
        "[data-seam-diamond]",
        { rotation: 0 },
        { rotation: 135, ease: "none", scrollTrigger }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={cn("w-full overflow-hidden py-10 md:py-14", className)}
      style={{
        color: ink,
        background: `linear-gradient(to bottom, ${from} 0%, ${to} 100%)`,
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 md:gap-6">
        <Ruler side="left" />

        <div
          data-seam-emblem
          className="flex shrink-0 items-center gap-3 md:gap-4"
        >
          <Diamond />
          <span className="font-mono text-[10px] uppercase leading-none tracking-[0.32em] md:text-[11px] md:tracking-[0.4em]">
            <span className="opacity-40">{index}</span>
            <span className="mx-2 opacity-25">/</span>
            {label}
          </span>
          <Diamond />
        </div>

        <Ruler side="right" />
      </div>
    </div>
  );
}

function Diamond() {
  return (
    <span
      data-seam-diamond
      className="relative block h-2.5 w-2.5 rotate-45 border border-current opacity-60"
    />
  );
}

function Ruler({ side }: { side: "left" | "right" }) {
  // k = distance from the emblem; the left ruler renders it mirrored so the
  // DOM order stays left-to-right and GSAP's "from: center" stagger lines up.
  const ticks = Array.from({ length: TICKS_PER_SIDE }, (_, k) => k);
  const ordered = side === "left" ? [...ticks].reverse() : ticks;

  return (
    <div className="relative h-4 flex-1">
      <div
        data-seam-rule
        className={cn(
          "absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current opacity-25",
          side === "left" ? "origin-right" : "origin-left"
        )}
      />

      <TickRow ordered={ordered} animated />

      {/* Light pulse travelling away from the emblem. */}
      <div
        data-seam-sweep
        className={cn(
          "seam-sweep absolute inset-0",
          side === "left" && "seam-sweep-reverse"
        )}
      >
        <TickRow ordered={ordered} />
      </div>
    </div>
  );
}

function TickRow({
  ordered,
  animated,
}: {
  ordered: number[];
  animated?: boolean;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-between">
      {ordered.map((k, i) => {
        const major = k % 4 === 0;
        const fade = Math.max(0.12, 1 - (k / TICKS_PER_SIDE) * 0.95);

        return (
          <span
            key={i}
            {...(animated ? { "data-seam-tick": "" } : {})}
            className="w-px shrink-0 bg-current"
            style={{
              height: major ? 14 : 7,
              opacity: animated ? fade * 0.5 : fade,
            }}
          />
        );
      })}
    </div>
  );
}
