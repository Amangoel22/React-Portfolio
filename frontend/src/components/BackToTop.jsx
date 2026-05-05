'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`safe-bottom group fixed right-5 sm:right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/50 transition-all duration-500 z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
        visible
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-50 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-blue-500/40 opacity-0 group-hover:opacity-100 animate-pulse-ring" />
      <ArrowUp className="w-6 h-6 relative transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  )
}
