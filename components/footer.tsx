"use client";

import Link from "next/link";
import { COMPANY_NAME } from "@/lib/translations";
import { ArrowUp, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface FooterProps {
  language: "en" | "ar";
}

export function Footer({ language }: FooterProps) {
  const isArabic = language === "ar";
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "#",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "#",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/01210869350",
      svg: <SiWhatsapp />,
    },
  ];

  return (
    <footer className="relative bg-neutral-950 text-neutral-300 pt-16 pb-8 border-t border-neutral-900/60 overflow-hidden">
      {/* Top neon glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent blur-[1px]" />

      {/* Subtle radial ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo Matches Navbar */}
              <div className="mb-4">
                <span className="font-sans font-bold tracking-tight text-white text-2xl">
                  Link{" "}
                  <span className="font-serif italic font-normal text-cyan-400">
                    Design
                  </span>{" "}
                  Studio
                </span>
              </div>
              <p
                className={`text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                Building brands, developing software, and creating digital
                experiences that move businesses forward.
              </p>
            </div>

            {/* Social Icons */}
            <div>
              <p
                className={`text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-3 ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {isArabic ? "تابعنا" : "Follow Us"}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-9 h-9 bg-neutral-900/60 border border-neutral-800/80 rounded-full flex items-center justify-center text-neutral-400 hover:border-cyan-500 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 group"
                    title={link.label}
                  >
                    <div className="group-hover:scale-105 transition-transform">
                      {link.svg}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2">
            <h4
              className={`text-white text-sm font-semibold uppercase tracking-wider mb-5 ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {isArabic ? "خدماتنا" : "Our Services"}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                {
                  en: "Software Dev",
                  ar: "تطوير البرمجيات",
                  href: "#services",
                },
                { en: "UI/UX Design", ar: "تصميم الواجهات", href: "#services" },
                {
                  en: "Digital Marketing",
                  ar: "التسويق الرقمي",
                  href: "#services",
                },
                { en: "Branding", ar: "العلامة التجارية", href: "#services" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className={`text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group ${
                      isArabic ? "font-arabic" : ""
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 scale-0 group-hover:scale-100 transition-transform duration-200" />
                    <span>{isArabic ? item.ar : item.en}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 4: Start a project CTA */}
          <div className="lg:col-span-6">
            <h4
              className={`text-white text-sm font-semibold uppercase tracking-wider mb-5 ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {isArabic ? "لديك مشروع في بالك؟" : "Have a project in mind?"}
            </h4>
            <p
              className={`text-neutral-400 text-sm leading-relaxed mb-6 max-w-md ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {isArabic
                ? "أخبرنا بما تريد بناءه، وسنعود إليك بخطة وجدول زمني وتقدير للتكلفة — عادةً في غضون يوم عمل واحد."
                : "Tell us what you're building. We'll come back with a plan, a timeline, and a number — usually within one business day."}
            </p>

            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-cyan-400 transition-colors duration-300 group ${
                isArabic ? "font-arabic flex-row-reverse" : ""
              }`}
            >
              <span>{isArabic ? "ابدأ مشروعك" : "Start a project"}</span>
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  isArabic
                    ? "rotate-180 group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              />
            </Link>

            {/* Contact details */}
            <div className="mt-6 pt-6 border-t border-neutral-900 flex flex-col gap-2 text-xs text-neutral-500">
              <a
                href="mailto:hello@linkdesignstudio.com"
                className="hover:text-neutral-300 transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>hello@linkdesignstudio.com</span>
              </a>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <a
                  href="tel:+15551234567"
                  className="hover:text-neutral-300 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Cairo, Egypt</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-900/80 mb-6" />

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p className={isArabic ? "font-arabic" : ""}>
            © {currentYear} {COMPANY_NAME}.{" "}
            {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="hover:text-neutral-300 transition-colors">
                {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
              </a>
              <a href="#" className="hover:text-neutral-300 transition-colors">
                {isArabic ? "الشروط والأحكام" : "Terms of Service"}
              </a>
            </div>

            {/* Elegant Back to Top button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 hover:border-cyan-500/80 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer group"
              title={isArabic ? "العودة للأعلى" : "Back to top"}
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
