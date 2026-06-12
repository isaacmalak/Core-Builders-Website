'use client'

import { Services } from '@/components/services'
import { RouteTransition } from '@/components/route-transition'
import { useLanguage } from '@/lib/language-context'

export default function ServicesPage() {
  const { language } = useLanguage()

  return (
    <RouteTransition key="services">
      <Services language={language} />
    </RouteTransition>
  )
}
