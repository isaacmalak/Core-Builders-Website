'use client'

import Image from 'next/image'
import gsap from 'gsap'

interface ProjectCardProps {
  title: string
  category: string
  description: string
  index: number
  isArabic: boolean
  viewCaseText: string
  onRef: (el: HTMLDivElement | null) => void
}

export function ProjectCard({
  title,
  category,
  description,
  index,
  isArabic,
  viewCaseText,
  onRef,
}: ProjectCardProps) {
  const portfolioImages = ['/portfolio-1.png', '/portfolio-2.png', '/portfolio-3.png']

  return (
    <div
      ref={onRef}
      className="group cursor-pointer"
      onMouseEnter={(e) => {
        const card = e.currentTarget.querySelector('.portfolio-card')
        gsap.to(card, {
          y: -8,
          duration: 0.3,
          ease: 'power2.out',
        })
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget.querySelector('.portfolio-card')
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      }}
    >
      <div className="portfolio-card transition-all duration-300">
        <div className="w-full aspect-video bg-secondary rounded-xl border border-border mb-4 overflow-hidden relative shadow-sm group-hover:shadow-md group-hover:border-foreground transition-all duration-300">
          <Image
            src={portfolioImages[index]}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 px-3 py-1 bg-foreground text-background text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            {index + 1}/3
          </div>
        </div>

        <div>
          <h3 className={`text-xl font-bold text-foreground group-hover:opacity-70 transition-opacity ${isArabic ? 'font-arabic' : ''}`}>
            {title}
          </h3>
          <p className={`text-sm font-medium text-muted-foreground mb-3 ${isArabic ? 'font-arabic' : ''}`}>
            {category}
          </p>
          <p className={`text-muted-foreground mb-4 text-sm leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
            {description}
          </p>
          <a href="#" className="inline-flex items-center text-sm font-medium text-foreground group-hover:translate-x-1 transition-transform">
            {viewCaseText}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
