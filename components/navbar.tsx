"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { COMPANY_NAME } from "@/lib/translations";

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
    { index: 3, label: "Portfolio", href: "/portfolio" },
    { index: 4, label: "Testimonials", href: "/testimonials" },
    { index: 5, label: "Contact", href: "/contact" },
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
                className="text-sm font-medium group "
                key={link.index}
              >
                <div
                  className={`${
                    pathname === link.href
                      ? "border-2 px-3 py-[5px] rounded-[50px] border-white "
                      : "hover:border-2 group-hover:px-3 group-hover:py-[5px] rounded-[50px] border-white transition-all  stroke-1 stroke-cyan-800 duration-200"
                  }`}
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
                  className={`w-full px-3 py-2 rounded-[50px] ${
                    pathname === link.href
                      ? "border-2 border-white"
                      : "border-2 border-transparent"
                  }`}
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
