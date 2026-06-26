import { translations } from "@/lib/translations";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";


// We keep dynamic, but we will control WHEN this is actually called
const HeroCanvas = dynamic(() => import("@/components/hero/hero-canvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin opacity-50" />
    </div>
  ),
});



interface HeroProps {
  language: "en" | "ar";
}
/// This is deprecated for now
function HeroContent({ language }: HeroProps) {
   const t = translations[language];
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const isArabic = language === "ar";

  // 1. ADDED: A state to hold back the 3D execution
  const [mount3D, setMount3D] = useState(false);

  useEffect(() => {
    // 2. ADDED: Wait 800ms before triggering the heavy 3D WebGL compilation.
    // This allows the browser to breathe and the user to scroll smoothly immediately.
    const timer = setTimeout(() => {
      setMount3D(true);
    }, 800);

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30, letterSpacing: "0.1em" },
          {
            opacity: 1,
            y: 0,
            letterSpacing: "0em",
            duration: 1.2,
            ease: "power2.out",
          },
          0
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.2
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.4
        );
    });

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, [language]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { y: -2, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={isArabic ? "text-right" : "text-left"}>
            <h1
              ref={headlineRef}
              className={`text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground text-balance ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {t.hero.headline}
            </h1>

            <p
              ref={subtitleRef}
              className={`text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed text-balance ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {t.hero.subtitle}
            </p>

            <div
              ref={buttonsRef}
              className={`flex flex-col sm:flex-row gap-4 ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                {t.hero.cta.contact}
              </button>
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="px-8 py-3 border border-primary text-primary font-medium rounded hover:bg-secondary transition-colors"
              >
                {t.hero.cta.work}
              </button>
            </div>
          </div>

          <div className="hidden lg:block h-[500px] w-full overflow-visible transition-opacity duration-1000">
            {/* 3. FIXED: Only mount the heavy canvas after the timeout finishes */}
            {mount3D ? (
              <HeroCanvas />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin opacity-50" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
