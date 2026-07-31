import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  children: ReactNode;
  className?: string;
}

/**
 * Page background: off-white settling into a cool grey with a faint cyan cast,
 * picking up the cyan accent already used in the navbar, footer and ::selection.
 * The cast is kept low so the palette's greys (#6B6A65, #9B9A94, #D8D6D0) stay
 * clean rather than muddy. `bg-fixed` pins the ramp to the viewport, so page
 * height can't stretch it flat.
 */
export function GradientBackground({
  children,
  className,
}: GradientBackgroundProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-linear-to-b from-[#FBFDFE] via-[#E3EFF3] to-[#B9D7E0] bg-fixed",
        className
      )}
    >
      {children}
    </div>
  );
}
