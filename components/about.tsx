'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { translations } from '@/lib/translations'

gsap.registerPlugin(ScrollTrigger)

interface AboutProps {
  language: 'en' | 'ar'
}

export function About({ language }: AboutProps) {
  const t = translations[language]
  const statsRef = useRef<HTMLDivElement[]>([])
  const isArabic = language === 'ar'

  useEffect(() => {
    statsRef.current.forEach((stat, index) => {
      gsap.fromTo(
        stat,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance ${
                isArabic ? 'font-arabic' : ''
              }`}
            >
              {t.about.title}
            </h2>
            <p
              className={`text-lg text-muted-foreground leading-relaxed mb-8 ${
                isArabic ? 'font-arabic' : ''
              }`}
            >
              {t.about.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {t.about.stats.map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) statsRef.current[index] = el
                  }}
                  className="p-4 bg-background border border-border rounded-xl text-center hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs md:text-sm text-muted-foreground ${
                      isArabic ? 'font-arabic' : ''
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="w-full aspect-square bg-background rounded-lg border border-border flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <svg
                  className="w-32 h-32 text-muted-foreground mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-muted-foreground">Team Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
