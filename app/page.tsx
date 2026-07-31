"use client";

import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Process } from "@/components/process";
import { RouteTransition } from "@/components/route-transition";
import { useLanguage } from "@/lib/language-context";
import { Vision } from "@/components/vision/vision";
import { SectionDivider } from "@/components/section-divider";
import { GradientBackground } from "@/components/gradient-background";

export default function Home() {
  const { language } = useLanguage();

  return (
    <RouteTransition key="home">
      {/* Hero paints its own dark canvas, so it sits outside the gradient */}
      <Hero />
      <GradientBackground>
        <SectionDivider index="01" label="Services" />
        <Services />
        <SectionDivider index="02" label="Vision" />
        <Vision />
        <SectionDivider index="03" label="Process" />
        <Process />
        <SectionDivider index="04" label="Contact" />
        <Contact language={language} />
      </GradientBackground>
    </RouteTransition>
  );
}
