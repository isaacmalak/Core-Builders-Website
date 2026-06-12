"use client";

import { translations } from "@/lib/translations";

interface FooterProps {
  language: "en" | "ar";
}

export function Footer({ language }: FooterProps) {
  const isArabic = language === "ar";
  const currentYear = new Date().getFullYear();

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
          className="w-5 h-5"
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
          className="w-5 h-5"
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
          className="w-5 h-5"
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
          className="w-5 h-5"
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
          className="w-5 h-5"
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
          className="w-5 h-5"
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
          className="w-5 h-5"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14h.8A8.38 8.38 0 0 1 21 11.5Z" />
          <path d="M10 11a3 3 0 1 1 4 0c0 .5-.5 1-1 2.5s-1.5 1.5-1.5 1.5" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-background border-t border-border pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12">
          {/* Main Contact */}
          <div>
            <h3
              className={`text-2xl md:text-3xl font-bold text-foreground mb-2 ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {isArabic ? "لنبدأ معاً" : "Let's Create Something Great"}
            </h3>
            <p
              className={`text-muted-foreground mb-6 ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {isArabic
                ? "اتصل بنا اليوم ونخبرك بكيف يمكننا مساعدتك."
                : "Reach out today and discover how we can transform your digital presence."}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-foreground font-semibold">✉</span>
                <a
                  href="mailto:hello@nexusdesign.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@nexusdesign.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-foreground font-semibold">📱</span>
                <a
                  href="tel:+15551234567"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-foreground font-semibold">📍</span>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Social & Quick Links */}
          <div className="flex flex-col justify-between">
            <div>
              <h4
                className={`font-semibold text-foreground mb-4 ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {isArabic ? "مواقع التواصل" : "Social Media"}
              </h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-10 h-10 bg-secondary border border-border rounded flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
                    title={link.label}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {link.svg}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                {isArabic ? "سياسة الخصوصية" : "Privacy"}
              </a>
              <span>•</span>
              <a href="#" className="hover:text-foreground transition-colors">
                {isArabic ? "الشروط" : "Terms"}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-6" />

        {/* Bottom */}
        <div className="text-center text-xs text-muted-foreground">
          <p className={isArabic ? "font-arabic" : ""}>
            © {currentYear}{" "}
            {isArabic ? "استوديو نيكسس للتصميم" : "Nexus Design Studio"}.{" "}
            {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
