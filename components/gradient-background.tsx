import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Full-height mint gradient surface used as a page background.
 *
 * Renders the element that holds the gradient, so `ref` and any extra classes
 * pass straight through — the consumer keeps using it as its own page root
 * (e.g. as a GSAP context scope) instead of layering a separate backdrop.
 */
export function GradientBackground({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "min-h-screen bg-linear-to-b from-[#F2F7F3] via-[#E7F0E9] to-[#DAE8DE]",
        className
      )}
      {...props}
    />
  );
}
