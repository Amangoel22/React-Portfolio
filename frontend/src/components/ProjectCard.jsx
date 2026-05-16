'use client'

import { useRef } from 'react'
import { Code, ExternalLink } from 'lucide-react'

export default function ProjectCard({
  title,
  description,
  tags,
  icon,
  image,
  liveUrl,
  codeUrl,
  delay = '',
}) {
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

      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
          <img
            src={image || '/placeholder.svg'}
            alt={title}
            className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-semibold text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg hover:scale-105"
            >
              Live <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      ) : null}

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          {!image && icon && (
            <div className="relative w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              <i className={`${icon} text-lg`} />
              <span className="absolute inset-0 rounded-xl ring-2 ring-blue-400/0 group-hover:ring-blue-400/40 transition-[box-shadow,ring] duration-500" />
            </div>
          )}

          {image && icon && (
            <div className="w-10 h-10 -mt-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
              <i className={`${icon} text-base`} />
            </div>
          )}

          <div className="flex space-x-3 ml-auto">
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-rotate-6"
                aria-label={`View code for ${title}`}
              >
                <Code className="w-5 h-5" />
              </a>
            )}
            {liveUrl && !image && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:translate-x-0.5 hover:-translate-y-0.5"
                aria-label={`View live demo for ${title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
