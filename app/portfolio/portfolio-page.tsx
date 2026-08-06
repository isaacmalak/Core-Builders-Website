'use client'

import { Portfolio } from '@/components/portfolio'
import { GradientBackground } from '@/components/gradient-background'
import { useLanguage } from '@/lib/language-context'

export function PortfolioPage() {
  const { language } = useLanguage()

  return (
    <GradientBackground>
      <Portfolio language={language} />
    </GradientBackground>
  )
}
