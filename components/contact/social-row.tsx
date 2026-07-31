import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface SocialRowProps {
  name: string;
  href: string;
  icon: ReactNode;
  /** Brand color — hover wash, border and accent bar. */
  accent: string;
  /** Optional richer badge fill for brands whose mark is a gradient. */
  badge?: string;
  onRef: (el: HTMLAnchorElement | null) => void;
}

/**
 * One platform per row. The badge sits black at rest and flips to the brand
 * fill on hover, which is what keeps the list from reading as a flat stack.
 *
 * The row itself is the link — nesting a real button inside an anchor would be
 * invalid markup and a duplicate tab stop — so the trailing circle is
 * decorative and the anchor carries the accessible name.
 */
export function SocialRow({
  name,
  href,
  icon,
  accent,
  badge,
  onRef,
}: SocialRowProps) {
  return (
    <li>
      <a
        ref={onRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} — opens in a new tab`}
        style={{ "--accent": accent } as CSSProperties}
        className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#0A0A09]/[0.06] bg-white/60 px-4 py-2.5 transition-[transform,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A09] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        {/* Brand wash sweeping in from the badge side */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-r from-[color-mix(in_srgb,var(--accent)_16%,transparent)] to-70% to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Brand border, revealed on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl border border-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-40"
        />

        {/* Left edge accent bar, grows on hover */}
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-0 h-0 w-[3px] -translate-y-1/2 rounded-r-full bg-[var(--accent)] transition-all duration-300 ease-out group-hover:h-8 motion-reduce:transition-none"
        />

        <span
          aria-hidden="true"
          className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#0A0A09] text-white transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 [&_svg]:size-4"
        >
          {/* Brand fill fades over the black badge on hover */}
          <span
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: badge ?? accent }}
          />
          <span className="relative flex items-center justify-center">
            {icon}
          </span>
        </span>

        <span className="relative min-w-0 flex-1 truncate text-[15px] font-semibold text-[#0A0A09]">
          {name}
        </span>

        <span
          aria-hidden="true"
          className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0A0A09]/5 text-[#0A0A09] transition-colors duration-300 group-hover:bg-white motion-reduce:transition-none"
        >
          <ArrowUpRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-px group-hover:-translate-y-px motion-reduce:transition-none" />
        </span>
      </a>
    </li>
  );
}
