"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { COMPANY_NAME } from "@/lib/translations";
import { cn } from "@/lib/utils";

interface NavbarProps {
  language: "en" | "ar";
}

export function Navbar({ language }: NavbarProps) {
  const pathname = usePathname();
  const isArabic = language === "ar";

  const navLinks = [
    { index: 0, label: "Home", href: "/" },
    { index: 1, label: "Services", href: "/services" },
    { index: 2, label: "About", href: "/about" },
    // { index: 3, label: "Portfolio", href: "/portfolio" },
    { index: 3, label: "Contact", href: "/contact" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll(); // Set initial state

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed z-50 w-full flex flex-col items-center pt-5 px-4">
      <div className=" flex flex-col bg-backdrop backdrop-blur-md rounded-[25px] md:rounded-full px-6 lg:px-10  ">
        <div className="flex flex-row gap-5 md:gap-10 lg:gap-70 h-16 text-white">
          {/* Logo */}

          <div className="flex items-center justify-center md:text-center">
            <Link className="text-sm lg:text-xl font-bold" href="/">
              {COMPANY_NAME}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                className="text-sm font-medium group"
                key={link.index}
              >
                {/* The pill always carries its 2px border (transparent when
                    idle) so hovering animates padding and color only, never
                    border-width, which would snap the width open. */}
                <div
                  className={cn(
                    "rounded-[50px] border-2 py-[5px] ",
                    "transition-[padding,border-color,background-color] duration-300 ease-out",
                    "motion-reduce:transition-none",
                    pathname === link.href
                      ? "border-white px-3"
                      : "border-transparent px-0 group-hover:border-white group-hover:bg-white/10 group-hover:px-3"
                  )}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center w-20" />
          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="md:hidden flex flex-col items-start gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                className="w-full text-sm font-medium text-white"
                key={link.index}
              >
                <div
                  className={cn(
                    "w-full rounded-[50px] border-2 px-3 py-2",
                    "transition-[border-color,background-color] duration-300 ease-out",
                    "motion-reduce:transition-none",
                    pathname === link.href
                      ? "border-white bg-white/10"
                      : "border-transparent"
                  )}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
