'use client'

import { useRef } from 'react'
import gsap from 'gsap'

interface ServiceCardProps {
  title: string
  description: string
  index: number
  isArabic: boolean
  onRef: (el: HTMLDivElement | null) => void
}

export function ServiceCard({
  title,
  description,
  index,
  isArabic,
  onRef,
}: ServiceCardProps) {
  return (
    <div
      ref={onRef}
      className="relative p-8 bg-card border border-border rounded-xl hover:border-foreground hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer overflow-hidden"
      onMouseEnter={(e) => {
        gsap.to(e.currentTarget, {
          y: -6,
          duration: 0.3,
          ease: 'power2.out',
        })
        gsap.to(e.currentTarget.querySelector('.service-icon'), {
          scale: 1.1,
          rotate: 5,
          duration: 0.3,
          ease: 'power2.out',
        })
      }}
      onMouseLeave={(e) => {
        gsap.to(e.currentTarget, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
        gsap.to(e.currentTarget.querySelector('.service-icon'), {
          scale: 1,
          rotate: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      }}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-secondary opacity-20 rounded-full blur-3xl -z-10 group-hover:opacity-30 transition-opacity" />

      <div className="service-icon mb-6 w-14 h-14 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform">
        <span className="text-2xl font-bold">{String.fromCharCode(65 + index)}</span>
      </div>

      <h3 className={`text-2xl font-bold mb-3 text-foreground ${isArabic ? 'font-arabic' : ''}`}>
        {title}
      </h3>

      <p className={`text-muted-foreground leading-relaxed mb-4 ${isArabic ? 'font-arabic' : ''}`}>
        {description}
      </p>

      <div className="h-1 w-0 bg-foreground group-hover:w-12 transition-all duration-300" />
    </div>
  )
}
