'use client'

import { Services } from '@/components/services'
import { RouteTransition } from '@/components/route-transition'

export default function ServicesPage() {
  return (
    <RouteTransition key="services">
      <Services />
    </RouteTransition>
  )
}
