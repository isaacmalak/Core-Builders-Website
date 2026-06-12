'use client'

import { Testimonials } from '@/components/testimonials'
import { RouteTransition } from '@/components/route-transition'
import { useLanguage } from '@/lib/language-context'

export default function TestimonialsPage() {
  const { language } = useLanguage()

  return (
    <RouteTransition key="testimonials">
      <Testimonials language={language} />
    </RouteTransition>
  )
}
