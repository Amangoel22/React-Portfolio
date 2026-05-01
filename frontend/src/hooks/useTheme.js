'use client'

import { useEffect, useState, useCallback } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Sync state with whatever the boot script (in layout) already set on <html>.
  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark')
    setIsDark(dark)
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev
      const root = document.documentElement
      if (next) root.classList.add('dark')
      else root.classList.remove('dark')
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light')
      } catch {}
      return next
    })
  }, [])

  return { isDark, toggleTheme, mounted }
}
