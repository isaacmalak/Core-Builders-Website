'use client'

import { Hero } from '@/components/hero'
import { RouteTransition } from '@/components/route-transition'
import { useLanguage } from '@/lib/language-context'

export default function Home() {
  const { language } = useLanguage()

  return (
    <RouteTransition key="home">
      <Hero language={language} />
    </RouteTransition>
  )
}
