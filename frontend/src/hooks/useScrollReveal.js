'use client'

import { useEffect } from 'react'

/**
 * Observes any element with the `.animate-on-scroll` class and adds
 * `.is-visible` when it enters the viewport. Re-observes on DOM changes.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const els = document.querySelectorAll('.animate-on-scroll:not(.is-visible)')
    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
