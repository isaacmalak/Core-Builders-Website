'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { translations } from '@/lib/translations'
import { ProjectCard } from '@/components/portfolio/project-card'

gsap.registerPlugin(ScrollTrigger)

interface PortfolioProps {
  language: 'en' | 'ar'
}

export function Portfolio({ language }: PortfolioProps) {
  const t = translations[language]
  const projectsRef = useRef<HTMLDivElement[]>([])
  const isArabic = language === 'ar'

  useEffect(() => {
    projectsRef.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: project,
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
            {t.portfolio.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.portfolio.projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              index={index}
              isArabic={isArabic}
              viewCaseText={t.portfolio.viewCase}
              onRef={(el) => {
                if (el) projectsRef.current[index] = el
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
