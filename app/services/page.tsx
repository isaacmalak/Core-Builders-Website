import { ServicesPage as ServicesPageContent } from "@/app/services/services-page";
import { RouteTransition } from "@/components/route-transition";

export { servicesPageMetadata as metadata } from "./metadata";

export default function ServicesPage() {
  return (
    <RouteTransition key="services">
      <ServicesPageContent />
    </RouteTransition>
  );
}
