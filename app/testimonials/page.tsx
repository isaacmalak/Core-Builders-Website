'use client'

import { Testimonials } from '@/components/testimonials'
import { RouteTransition } from '@/components/route-transition'
import { GradientBackground } from '@/components/gradient-background'
import { useLanguage } from '@/lib/language-context'

export default function TestimonialsPage() {
  const { language } = useLanguage()

  return (
    <RouteTransition key="testimonials">
      <GradientBackground>
        <Testimonials language={language} />
      </GradientBackground>
    </RouteTransition>
  )
}
