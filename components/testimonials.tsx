'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { translations } from '@/lib/translations'

gsap.registerPlugin(ScrollTrigger)

interface TestimonialsProps {
  language: 'en' | 'ar'
}

export function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language]
  const reviewsRef = useRef<HTMLDivElement[]>([])
  const isArabic = language === 'ar'

  useEffect(() => {
    reviewsRef.current.forEach((review, index) => {
      gsap.fromTo(
        review,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: review,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance ${
              isArabic ? 'font-arabic' : ''
            }`}
          >
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((review, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) reviewsRef.current[index] = el
              }}
              className="p-8 bg-background rounded-lg border border-border hover:border-foreground transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className={`text-muted-foreground mb-6 leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
                {`"${review.text}"`}
              </p>

              <div>
                <p className={`font-semibold text-foreground ${isArabic ? 'font-arabic' : ''}`}>
                  {review.author}
                </p>
                <p className={`text-sm text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                  {review.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
