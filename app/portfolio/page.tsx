'use client'

import { Portfolio } from '@/components/portfolio'
import { RouteTransition } from '@/components/route-transition'
import { GradientBackground } from '@/components/gradient-background'
import { useLanguage } from '@/lib/language-context'

export default function PortfolioPage() {
  const { language } = useLanguage()

  return (
    <RouteTransition key="portfolio">
      <GradientBackground>
        <Portfolio language={language} />
      </GradientBackground>
    </RouteTransition>
  )
}
