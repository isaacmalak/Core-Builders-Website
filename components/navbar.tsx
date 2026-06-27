"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { COMPANY_NAME } from "@/lib/translations";

interface NavbarProps {
  language: "en" | "ar";
}

export function Navbar({ language }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isArabic = language === "ar";

  const navLinks = isArabic
    ? [
        { label: "الرئيسية", href: "/" },
        { label: "الخدمات", href: "/services" },
        { label: "من نحن", href: "/about" },
        { label: "أعمالنا", href: "/portfolio" },
        { label: "شهادات العملاء", href: "/testimonials" },
        { label: "اتصل بنا", href: "/contact" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact", href: "/contact" },
      ];

  return (
    <nav className="fixed z-50  w-full flex flex-row justify-center items-center pt-5">
      <div className="bg-backdrop backdrop-blur-md  rounded-full px-10  shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] border  ">
        <div className="flex justify-center items-center h-16 space-x-70">
          {/* Logo */}
          <div>
            <h1 className="text-xl  font-bold ">{COMPANY_NAME}</h1>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:opacity-60 transition-opacity duration-200 relative group"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
