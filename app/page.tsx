"use client";

import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { LogoMarquee } from "@/components/logo-marquee";
import { Process } from "@/components/process";
import { RouteTransition } from "@/components/route-transition";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { language } = useLanguage();

  return (
    <RouteTransition key="home">
      <Hero />
      <LogoMarquee />
      <Services language={language} />
      <Portfolio language={language} />
      <Process language={language} />
      <About language={language} />
      <Testimonials language={language} />
      <Contact language={language} />
    </RouteTransition>
  );
}
