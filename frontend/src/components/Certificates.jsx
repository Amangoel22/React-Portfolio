'use client'

import { useRef } from 'react'
import { ExternalLink, BadgeCheck, Calendar } from 'lucide-react'
import { certificates } from '../data/portfolioData'

const DELAYS = [
  'delay-100',
  'delay-200',
  'delay-300',
  'delay-100',
  'delay-200',
  'delay-300',
]

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-blue-300/10 dark:bg-blue-700/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-indigo-300/10 dark:bg-indigo-700/10 rounded-full blur-3xl animate-float-slower pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-5 leading-relaxed">
            Continuous learning and progressing.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full animate-shimmer" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              delay={DELAYS[i % DELAYS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificateCard({ cert, delay }) {
  const cardRef = useRef(null)

  const isFinePointer =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const handleMove = (e) => {
    if (!isFinePointer) return
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`)
  }
  const handleLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform:
          'perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))',
      }}
      className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-[transform,box-shadow,border-color] duration-500 hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-300/70 dark:hover:border-blue-700/70 flex flex-col animate-on-scroll fade-up ${delay}`}
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-blue-500/0 via-blue-500/10 to-indigo-500/20 blur-xl" />

      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <img
          src={cert.image || '/placeholder.svg'}
          alt={`${cert.title} certificate`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-semibold text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg hover:scale-105"
          >
            View <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      <div className="p-7 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4 gap-3">
          {cert.icon && (
            <div className="relative w-11 h-11 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shrink-0">
              <i className={`${cert.icon} text-lg`} />
              <span className="absolute inset-0 rounded-xl ring-2 ring-blue-400/0 group-hover:ring-blue-400/40 transition-[box-shadow,ring] duration-500" />
            </div>
          )}

          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2.5 py-1 rounded-md transition-colors duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-300">
            <Calendar className="w-3.5 h-3.5" />
            {cert.date}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-balance">
          {cert.title}
        </h3>

        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
          {cert.issuer}
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-5 flex-1 leading-relaxed">
          {cert.description}
        </p>
      </div>
    </div>
  )
}
