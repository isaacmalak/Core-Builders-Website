'use client'

import { About } from '@/components/about'
import { RouteTransition } from '@/components/route-transition'
import { useLanguage } from '@/lib/language-context'

export default function AboutPage() {
  const { language } = useLanguage()

  return (
    <RouteTransition key="about">
      <About language={language} />
    </RouteTransition>
  )
}
