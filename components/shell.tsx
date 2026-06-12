'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LanguageProvider } from '@/lib/language-context'
import { ShellContent } from '@/components/shell-content'

interface ShellProps {
  children: React.ReactNode
}

export function Shell({ children }: ShellProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Animate black overlay fade out on route change, covering entire viewport
    if (overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          pointerEvents: 'none',
        }
      )
    }
  }, [pathname])

  return (
    <LanguageProvider>
      {/* Black overlay covering entire viewport including navbar */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-[100] pointer-events-none"
      />
      <ShellContent>{children}</ShellContent>
    </LanguageProvider>
  )
}
