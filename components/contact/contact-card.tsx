import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ContactCardProps {
  /** Bold label, e.g. "Call us". */
  label: string;
  /** Muted secondary line — availability. */
  meta: string;
  /** tel: or mailto: target. */
  href: string;
  icon: ReactNode;
  /** Hover wash + border color. */
  accent: string;
  onRef: (el: HTMLAnchorElement | null) => void;
}

/**
 * White card with the icon in a black rounded-square badge. Depth comes from
 * hairline borders and tint, never shadow. The whole card is the link, so its
 * accessible name comes from the visible label and every decorative layer is
 * hidden from assistive tech.
 */
export function ContactCard({
  label,
  meta,
  href,
  icon,
  accent,
  onRef,
}: ContactCardProps) {
  return (
    <a
      ref={onRef}
      href={href}
      style={{ "--accent": accent } as CSSProperties}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-[#0A0A09]/[0.07] bg-white p-4 transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A09] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:gap-5 sm:p-5"
    >
      {/* Brand wash, revealed on hover */}
      <span
        aria-hidden="true"
        className=" absolute inset-0 bg-linear-150 from-[color-mix(in_srgb,var(--accent)_14%,transparent)] to-65% to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Brand border, revealed on hover */}
      <span
        aria-hidden="true"
        className=" absolute inset-0 rounded-3xl border border-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-50"
      />

      <ArrowUpRight
        aria-hidden="true"
        className="absolute top-4 right-4 size-4 translate-x-1 -translate-y-1 text-[#9B9A94] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
      />

      <span
        aria-hidden="true"
        className="relative flex size-10 items-center justify-center rounded-2xl bg-[#0A0A09] text-white transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100 [&_svg]:size-[18px] sm:size-11 sm:[&_svg]:size-5"
      >
        {icon}
      </span>

      <span className="relative flex flex-col gap-1.5">
        <span className="text-[15px] leading-none font-semibold text-[#0A0A09] sm:text-base">
          {label}
        </span>
        <span className="text-xs leading-relaxed text-[#6B6A65] sm:text-[13px]">
          {meta}
        </span>
      </span>
    </a>
  );
}
