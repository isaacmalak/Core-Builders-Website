"use client";

import { AboutPage as AboutPageContent } from "@/app/about/about-page";
import { RouteTransition } from "@/components/route-transition";

export default function AboutPage() {
  return (
    <RouteTransition key="about">
      <AboutPageContent />
    </RouteTransition>
  );
}
