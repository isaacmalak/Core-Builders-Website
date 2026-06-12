'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { COMPANY_NAME } from '@/lib/translations'

interface NavbarProps {
  language: 'en' | 'ar'
  onLanguageChange: (lang: 'en' | 'ar') => void
}

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isArabic = language === 'ar'
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 0) {
          gsap.to(navRef.current, {
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
          })
        } else {
          gsap.to(navRef.current, {
            boxShadow: 'none',
            duration: 0.3,
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = isArabic
    ? [
        { label: 'الرئيسية', href: '/' },
        { label: 'الخدمات', href: '/services' },
        { label: 'من نحن', href: '/about' },
        { label: 'أعمالنا', href: '/portfolio' },
        { label: 'شهادات العملاء', href: '/testimonials' },
        { label: 'اتصل بنا', href: '/contact' },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'About', href: '/about' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Contact', href: '/contact' },
      ]

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              {COMPANY_NAME}
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:opacity-60 transition-opacity duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'ar' : 'en')}
              className="px-3 py-1 text-sm font-medium border border-border rounded hover:bg-secondary transition-colors"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-secondary rounded transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
