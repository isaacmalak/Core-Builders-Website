"use client";

import { useState } from "react";
import { COMPANY_NAME } from "@/lib/translations";
import { ArrowUp, Mail, Phone, MapPin, Check } from "lucide-react";

interface FooterProps {
  language: "en" | "ar";
}

export function Footer({ language }: FooterProps) {
  const isArabic = language === "ar";
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      label: "Twitter",
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
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
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
      label: "GitHub",
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
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      label: "YouTube",
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
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
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
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14h.8A8.38 8.38 0 0 1 21 11.5Z" />
          <path d="M10 11a3 3 0 1 1 4 0c0 .5-.5 1-1 2.5s-1.5 1.5-1.5 1.5" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-neutral-950 text-neutral-300 pt-16 pb-8 border-t border-neutral-900/60 overflow-hidden">
      {/* Top neon glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent blur-[1px]" />

      {/* Subtle radial ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                {isArabic
                  ? "هندسة التميز الرقمي. نصنع حلول برمجية استثنائية واستراتيجيات تسويق مبنية على البيانات لتمكين نمو الأعمال."
                  : "Digital Excellence Engineered. We craft exceptional software and data-driven marketing strategies that fuel business transformation."}
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

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4
              className={`text-white text-sm font-semibold uppercase tracking-wider mb-5 ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { en: "Home", ar: "الرئيسية", href: "/" },
                { en: "Services", ar: "الخدمات", href: "/services" },
                { en: "About", ar: "من نحن", href: "/about" },
                { en: "Portfolio", ar: "أعمالنا", href: "/portfolio" },
                {
                  en: "Testimonials",
                  ar: "آراء العملاء",
                  href: "/testimonials",
                },
                { en: "Contact", ar: "اتصل بنا", href: "/contact" },
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

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4">
            <h4
              className={`text-white text-sm font-semibold uppercase tracking-wider mb-5 ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {isArabic ? "كن على اطلاع" : "Stay Updated"}
            </h4>
            <p
              className={`text-neutral-400 text-sm leading-relaxed mb-5 ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {isArabic
                ? "اشترك في نشرتنا البريدية للحصول على أحدث النصائح والتحديثات من استوديو التصميم."
                : "Subscribe to our newsletter for insights and weekly digital updates from our design studio."}
            </p>

            {isSubscribed ? (
              <div className="flex items-center gap-2 p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-cyan-400 animate-fadeIn">
                <Check className="w-4 h-4 shrink-0" />
                <span
                  className={`text-xs font-medium ${
                    isArabic ? "font-arabic" : ""
                  }`}
                >
                  {isArabic
                    ? "تم الاشتراك بنجاح! شكراً لك."
                    : "Subscribed successfully! Thank you."}
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder={
                    isArabic ? "أدخل بريدك الإلكتروني" : "Your email address"
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 px-3 py-2 bg-neutral-900/60 border border-neutral-850 text-white rounded text-sm placeholder-neutral-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all ${
                    isArabic ? "font-arabic text-right text-neutral-400" : ""
                  }`}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 bg-white text-black font-semibold text-sm rounded hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] disabled:opacity-50 disabled:hover:bg-white cursor-pointer ${
                    isArabic ? "font-arabic" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : isArabic ? (
                    "اشترك"
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            )}

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
