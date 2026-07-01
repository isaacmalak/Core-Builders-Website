"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { COMPANY_NAME } from "@/lib/translations";

interface NavbarProps {
  language: "en" | "ar";
}

export function Navbar({ language }: NavbarProps) {
  const [index, setIndex] = useState<number>(0);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll(); // Set initial state

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed z-50  w-full flex flex-row justify-center items-center pt-5">
      <div className="bg-backdrop backdrop-blur-md  rounded-full px-10  shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] border ">
        <div className="flex justify-center items-center h-16 space-x-70 text-white ">
          {/* Logo */}

          <div>
            <Link className="text-xl font-bold " href="/">
              {COMPANY_NAME}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                className="text-sm font-medium group "
                key={link.index}
                onClick={() => setIndex(link.index)}
              >
                <div
                  className={`${
                    index === link.index
                      ? "border-2 px-3 py-[5px] rounded-[50px] border-white "
                      : "hover:border-2 group-hover:px-3 group-hover:py-[5px] rounded-[50px] border-white transition-all  stroke-1 stroke-cyan-800 duration-200"
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
