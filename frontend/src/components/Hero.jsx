'use client'

import { ArrowRight, Mouse } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-center justify-center pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-300/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float-y" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200/60 dark:border-blue-800/60 animate-on-scroll fade-down animate-glow-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
          </span>
          <span className="text-xs md:text-sm font-semibold text-blue-700 dark:text-blue-300 tracking-wide uppercase">
            Hello, I&apos;m
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-on-scroll fade-up delay-100">
          <span className="inline-block bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent animate-shimmer">
            {personalInfo.name}
          </span>
        </h1>

        <h3 className="text-lg sm:text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6 animate-on-scroll fade-up delay-200">
          <span className="animate-typewriter">{personalInfo.title}</span>
        </h3>

        <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-on-scroll fade-up delay-300 text-pretty">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll fade-up delay-400">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white rounded-full overflow-hidden transition-all shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-sweep" />
            <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center">
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full transition-all shadow-sm hover:-translate-y-0.5 hover:shadow-md w-full sm:w-auto"
          >
            <span>Contact Me</span>
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <a
          href="#about"
          aria-label="Scroll to next section"
          className="hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-6 animate-on-scroll fade-up delay-700 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce-soft">
            <Mouse className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
          </div>
        </a>
      </div>
    </section>
  )
}
