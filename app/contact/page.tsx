import { ContactPage as ContactPageContent } from "@/app/contact/contact-page";
import { RouteTransition } from "@/components/route-transition";

//TODO: Add the right links
//TODO: Enhance the written code for this page and its components to be more readable and maintainable.

export { contactPageMetadata as metadata } from "./metadata";

export default function ContactPage() {
  return (
    <RouteTransition key="contact">
      <ContactPageContent />
    </RouteTransition>
  );
}
