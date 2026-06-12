'use client'

import { FormEvent, useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { translations } from '@/lib/translations'

gsap.registerPlugin(ScrollTrigger)

interface ContactProps {
  language: 'en' | 'ar'
}

export function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const isArabic = language === 'ar'

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance ${
              isArabic ? 'font-arabic' : ''
            }`}
          >
            {t.contact.title}
          </h2>
          <p className={`text-lg text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
            {t.contact.subtitle}
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 border border-border rounded-lg bg-secondary"
        >
          {submitted && (
            <div className="p-4 bg-primary text-primary-foreground rounded-lg">
              {isArabic ? 'تم إرسال رسالتك بنجاح!' : 'Message sent successfully!'}
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium text-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}
            >
              {t.contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium text-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}
            >
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-medium text-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}
            >
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder={isArabic ? 'اكتب رسالتك' : 'Write your message'}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
          >
            {t.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  )
}
