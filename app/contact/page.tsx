'use client'

import { Contact } from '@/components/contact'
import { RouteTransition } from '@/components/route-transition'
import { useLanguage } from '@/lib/language-context'

export default function ContactPage() {
  const { language } = useLanguage()

  return (
    <RouteTransition key="contact">
      <Contact language={language} />
    </RouteTransition>
  )
}
