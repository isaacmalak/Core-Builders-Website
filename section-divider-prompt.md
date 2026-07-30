# Prompt — "Teach me this component"

Paste everything below the line into the AI tool.

---

I want you to **teach me** a component that was added to my project. I didn't write it and I don't fully understand it. Don't just summarize it — walk me through it so I could rebuild something like it myself.

My stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, GSAP 3 with the ScrollTrigger plugin. I'm comfortable with React and Tailwind. I'm shaky on GSAP, on scroll-driven animation in general, and on CSS masks.

## What the component is for

It's a decorative divider that sits between the sections of my home page instead of a plain `<hr>`. It looks like a draftsman's ruler: a thin line spanning the page with tick marks along it, broken in the middle by a small label like `02 / VISION` between two rotated squares. As you scroll toward it, it assembles itself — the line draws outward from the middle, the ticks stand up, the squares rotate. There's also a small light pulse that continuously travels along the ticks.

It's used four times on my home page:

```tsx
<Hero />
<SectionDivider index="01" label="Services" from="#FAFAF8" to="#FAFAF8" />
<Services />
<SectionDivider index="02" label="Vision" from="#FAFAF8" to="#FFFFFF" />
<Vision />
<SectionDivider index="03" label="Process" />
<Process />
<SectionDivider index="04" label="Contact" />
<Contact language={language} />
```

## The code

`components/section-divider.tsx`:

```tsx
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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const scrollTrigger = {
        trigger: rootRef.current,
        start: "top 95%",
        end: "top 55%",
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
```

And this was added to `app/globals.css` inside `@layer base`:

```css
.seam-sweep {
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 40%,
    #000 50%,
    transparent 60%
  );
  mask-image: linear-gradient(90deg, transparent 40%, #000 50%, transparent 60%);
  -webkit-mask-size: 260% 100%;
  mask-size: 260% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  animation: seam-sweep 4.5s linear infinite;
}

.seam-sweep-reverse {
  animation-direction: reverse;
}

@keyframes seam-sweep {
  from {
    -webkit-mask-position: 0% 0;
    mask-position: 0% 0;
  }
  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .seam-sweep {
    animation: none;
    opacity: 0;
  }
}
```

## How I want to be taught

**1. Mental model first.** Before any code, describe the structure in plain language — what the DOM tree looks like, which pieces are stacked on top of each other, and what each layer is responsible for. A little ASCII sketch of the layout would help.

**2. Then a guided walkthrough,** in the order the browser actually deals with it: render the markup, then the CSS, then the scroll animation. For each part, tell me *why* it's built that way and what the obvious alternative would have been.

**3. Explain these specific things properly** — these are the parts I can't follow:

- `gsap.registerPlugin(ScrollTrigger)` at module scope. Why there and not inside the component? What happens if it runs twice?
- `gsap.context(() => {...}, rootRef)` and `ctx.revert()`. What problem does this solve in React, especially with Strict Mode double-mounting?
- Why the animations select elements by data attributes (`[data-seam-tick]`) instead of refs. What is the scoping doing here?
- ScrollTrigger's `start: "top 95%"` / `end: "top 55%"` — teach me how to read that two-value syntax.
- `scrub: 0.5`. How is a scrubbed tween different from a normal one that plays on trigger? Why does the whole thing reverse when I scroll back up?
- `stagger: { each: 0.015, from: "center" }` — how does GSAP decide the order, and why does it depend on DOM order rather than screen position?
- The reversed-array trick in `Ruler`. Walk me through concretely why `side === "left"` needs `[...ticks].reverse()` for the center stagger to look symmetrical. This is the bit I understand least.
- Why the ticks animate `scaleY` instead of `height`, and why `transform-origin` (`origin-left` / `origin-right`) matters for the hairline.
- Why GSAP animates *only* `scaleY` on the ticks and never their opacity — I'm told animating opacity would break something about the design.
- The CSS mask: what `mask-image`, `mask-size: 260%` and animating `mask-position` actually do together, and why that produces a moving band of visible ticks.
- Why there are two identical tick rows layered on top of each other, and why one of them is masked.
- `animation-direction: reverse` on the left half — what visual problem is it solving?
- The `prefers-reduced-motion` early return. Why does the component still look correct with no JS animation at all? What does that imply about how the initial markup must be written?
- `aria-hidden="true"` — when is that the right call and when is it a mistake?
- `color: ink` on the wrapper plus `bg-current` / `border-current` on the children. Explain this pattern and why it's better than passing the colour down to every child.

**4. Check my understanding.** Ask me 5 questions about the code — the kind where I have to reason, not recall. Wait for my answers before giving me yours.

**5. Give me three exercises,** easy to hard, that make me modify this component to prove I understood it (for example: make the ticks radiate from the left edge instead of the center; make the pulse run only once when the divider enters the viewport; add a vertical variant for a sidebar).

Teach one section at a time and stop for my questions. Don't dump the whole lesson at once.
