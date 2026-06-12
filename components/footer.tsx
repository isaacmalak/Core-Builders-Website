"use client";

import { translations } from "@/lib/translations";

interface FooterProps {
  language: "en" | "ar";
}

export function Footer({ language }: FooterProps) {
  const t = translations[language];
  const isArabic = language === "ar";
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
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
                {isArabic ? "تابعونا" : "Connect"}
              </h4>
              <div className="flex gap-3 mb-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.label} // ✅ FIXED: Now using the unique label instead of the '#' href
                    href={link.href}
                    className="w-10 h-10 bg-secondary border border-border rounded flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
                    title={link.label}
                  >
                    <span className="text-sm font-bold group-hover:scale-110 transition-transform">
                      {link.label.charAt(0)}
                    </span>
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
