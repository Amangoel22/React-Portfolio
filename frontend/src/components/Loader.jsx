'use client'

import { useState, useEffect } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-950 animate-fade-out"
      aria-label="Loading"
      role="status"
    >
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse-ring" />
        <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin-slow" />
        <div className="absolute inset-3 border-4 border-blue-400/70 border-b-transparent rounded-full animate-spin-reverse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse-dot" />
        </div>
      </div>
    </div>
  )
}
