"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/language-context";
import { AnimatedBackground } from "@/components/animated-background";

interface ShellContentProps {
  children: React.ReactNode;
}

export function ShellContent({ children }: ShellContentProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`${
        language === "ar" ? "rtl" : "ltr"
      } flex flex-col min-h-screen `}
    >
      {/* <AnimatedBackground /> */}
      <Navbar language={language} />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer language={language} />
    </div>
  );
}
