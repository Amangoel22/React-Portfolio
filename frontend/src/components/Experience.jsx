'use client'

import { Briefcase, GraduationCap, Star } from 'lucide-react'
import TimelineItem from './TimelineItem'
import {
  workExperience,
  positionsOfResponsibility,
  education,
} from '../data/portfolioData'

function TimelineSection({ icon: Icon, title, items, getProps }) {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-8 animate-on-scroll fade-up">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 transition-transform duration-500 hover:rotate-6 hover:scale-110">
          <Icon className="w-5 h-5" />
        </span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>

      <div className="relative ml-3 md:ml-4 space-y-12">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-blue-500 to-transparent dark:from-blue-700 dark:via-blue-500 animate-draw-line" />
        {items.map((item, i) => (
          <TimelineItem
            key={item.id}
            {...getProps(item)}
            delay={`delay-${Math.min((i + 1) * 100, 500)}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-300/10 dark:bg-indigo-700/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience &amp; Education
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full animate-shimmer" />
        </div>

        <div className="space-y-16">
          <TimelineSection
            icon={Briefcase}
            title="Work Experience"
            items={workExperience}
            getProps={(item) => ({
              period: item.period,
              title: item.title,
              subtitle: item.organisation,
              description: item.description,
            })}
          />

          <TimelineSection
            icon={Star}
            title="Positions of Responsibility"
            items={positionsOfResponsibility}
            getProps={(item) => ({
              period: item.period,
              title: item.title,
              subtitle: item.organisation,
              description: item.description,
              bullets: item.bullets,
            })}
          />

          <TimelineSection
            icon={GraduationCap}
            title="Education"
            items={education}
            getProps={(item) => ({
              period: item.period,
              title: item.title,
              subtitle: item.institution,
              grade: item.grade,
            })}
          />
        </div>
      </div>
    </section>
  )
}
