'use client'

import { useState, useEffect, useRef } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact Me' },
]

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      setHidden(current > lastScrollY.current && current > 80)
      setScrolled(current > 20)
      lastScrollY.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 shadow-sm py-3 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800/60'
          : 'bg-transparent py-5'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="group text-2xl font-bold tracking-tighter text-gray-900 dark:text-white inline-flex items-baseline transition-transform duration-300 hover:scale-105"
          >
            <span className="relative">
              {personalInfo.initials}
              <span className="absolute inset-0 -z-10 blur-md bg-blue-500/0 group-hover:bg-blue-500/30 transition-colors duration-500 rounded-full" />
            </span>
            <span className="text-blue-600 dark:text-blue-400 inline-block animate-pulse-dot">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                style={{ animationDelay: `${i * 60}ms` }}
                className="link-underline text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {label}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors overflow-hidden group"
              aria-label="Toggle dark mode"
            >
              <span className="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors" />
              <span className="relative inline-block transition-transform duration-500 group-hover:rotate-180">
                {isDark
                  ? <Sun className="w-5 h-5 text-amber-400" />
                  : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
              </span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:rotate-12"
              aria-label="Toggle dark mode"
            >
              {isDark
                ? <Sun className="w-5 h-5 text-amber-400" />
                : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
            </button>

            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="text-gray-600 dark:text-gray-300 transition-transform duration-300"
              aria-label="Toggle menu"
            >
              <span className={`inline-block transition-transform duration-300 ${mobileOpen ? 'rotate-90' : ''}`}>
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={closeMobile}
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-all duration-300 ${
                mobileOpen ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
