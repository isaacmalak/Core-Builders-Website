"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { COMPANY_NAME, translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

interface NavbarProps {
  language: "en" | "ar";
}

/** Destinations, in order. `key` indexes `translations[language].nav`. */
const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  // { key: "portfolio", href: "/portfolio" },
  { key: "contact", href: "/contact" },
] as const;

const MOBILE_MENU_ID = "primary-navigation";

/** Exact for "/", prefix elsewhere, so nested routes keep their tab active. */
function isActiveHref(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar({ language }: NavbarProps) {
  const pathname = usePathname();
  const isArabic = language === "ar";
  const t = translations[language].nav;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigating away closes the menu.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Escape closes the menu.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    // The bar spans the viewport in order to center the pill, so it must not
    // intercept clicks on the page behind it — only the pill itself does.
    <nav
      aria-label={isArabic ? "التنقل الرئيسي" : "Main"}
      className="fixed z-50 w-full flex justify-center pt-5 px-4 pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-5xl flex flex-col bg-backdrop backdrop-blur-md rounded-[25px] md:rounded-full px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-5 text-white">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm lg:text-xl font-bold whitespace-nowrap"
          >
            {COMPANY_NAME}
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavPill
                key={item.href}
                href={item.href}
                label={t[item.key]}
                isActive={isActiveHref(pathname, item.href)}
                isArabic={isArabic}
                variant="desktop"
              />
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center text-white cursor-pointer"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu — `inert` keeps the collapsed links out of the tab
            order and the accessibility tree without blocking the animation. */}
        <div
          id={MOBILE_MENU_ID}
          inert={!isMenuOpen}
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out",
            "motion-reduce:transition-none",
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col items-stretch gap-2 pt-2">
            {NAV_ITEMS.map((item) => (
              <NavPill
                key={item.href}
                href={item.href}
                label={t[item.key]}
                isActive={isActiveHref(pathname, item.href)}
                isArabic={isArabic}
                variant="mobile"
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavPillProps {
  href: string;
  label: string;
  isActive: boolean;
  isArabic: boolean;
  variant: "desktop" | "mobile";
}

function NavPill({ href, label, isActive, isArabic, variant }: NavPillProps) {
  const isDesktop = variant === "desktop";

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group text-sm font-medium text-white",
        isArabic && "font-arabic",
        !isDesktop && "w-full"
      )}
    >
      <span
        className={cn(
          "block rounded-[50px] border-2 motion-reduce:transition-none",
          isDesktop
            ? // The pill always carries its 2px border (transparent when idle)
              // so hovering animates padding and color only, never
              // border-width, which would snap the width open.
              cn(
                "py-[5px] transition-[padding,border-color,background-color] duration-300 ease-out",
                isActive
                  ? "border-white px-3"
                  : "border-transparent px-0 group-hover:border-white group-hover:bg-white/10 group-hover:px-3"
              )
            : cn(
                "px-3 py-2 transition-[border-color,background-color] duration-300 ease-out",
                isActive
                  ? "border-white bg-white/10"
                  : "border-transparent group-hover:border-white group-hover:bg-white/10"
              )
        )}
      >
        {label}
      </span>
    </Link>
  );
}
