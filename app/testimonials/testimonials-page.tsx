'use client'

import { Testimonials } from '@/components/testimonials'
import { GradientBackground } from '@/components/gradient-background'
import { useLanguage } from '@/lib/language-context'

export function TestimonialsPage() {
  const { language } = useLanguage()

  return (
    <GradientBackground>
      <Testimonials language={language} />
    </GradientBackground>
  )
}
