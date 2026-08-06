import { TestimonialsPage as TestimonialsPageContent } from '@/app/testimonials/testimonials-page'
import { RouteTransition } from '@/components/route-transition'

export { testimonialsPageMetadata as metadata } from './metadata'

export default function TestimonialsPage() {
  return (
    <RouteTransition key="testimonials">
      <TestimonialsPageContent />
    </RouteTransition>
  )
}
