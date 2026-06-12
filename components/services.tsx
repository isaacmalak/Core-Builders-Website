'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { translations } from '@/lib/translations'
import { ServiceCard } from '@/components/services/service-card'

gsap.registerPlugin(ScrollTrigger)

interface ServicesProps {
  language: 'en' | 'ar'
}

export function Services({ language }: ServicesProps) {
  const t = translations[language]
  const cardsRef = useRef<HTMLDivElement[]>([])
  const isArabic = language === 'ar'

  useEffect(() => {
    const cards = cardsRef.current
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance ${isArabic ? 'font-arabic' : ''}`}>
            {t.services.title}
          </h2>
          <p className={`text-xl text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {t.services.items.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              index={index}
              isArabic={isArabic}
              onRef={(el) => {
                if (el) cardsRef.current[index] = el
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
