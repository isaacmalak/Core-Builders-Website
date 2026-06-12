'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const shapes = containerRef.current.querySelectorAll('.shape')

    // Create subtle floating animation
    shapes.forEach((shape, index) => {
      const duration = 6 + index * 0.5
      gsap.to(shape, {
        y: Math.sin(index) * 20,
        x: Math.cos(index) * 15,
        duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-50" />

      {/* Floating shapes - subtle and minimal */}
      <div className="shape absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full opacity-5 blur-3xl" />
      <div className="shape absolute top-1/3 right-5 w-80 h-80 bg-foreground rounded-full opacity-3 blur-3xl" />
      <div className="shape absolute bottom-10 left-1/4 w-72 h-72 bg-secondary rounded-full opacity-4 blur-3xl" />
    </div>
  )
}
