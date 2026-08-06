import { AboutPage as AboutPageContent } from "@/app/about/about-page";
import { RouteTransition } from "@/components/route-transition";

export { aboutPageMetadata as metadata } from "./metadata";

export default function AboutPage() {
  return (
    <RouteTransition key="about">
      <AboutPageContent />
    </RouteTransition>
  );
}
