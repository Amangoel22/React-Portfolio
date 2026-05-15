import { useState } from 'react'
import { skills } from '../data/portfolioData'

function SkillChip({ label, index }) {
  return (
    <span
      style={{ animationDelay: `${index * 50}ms` }}
      className="animate-chip-pop relative px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-800/50 transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-0.5 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:shadow-md hover:shadow-blue-500/20"
    >
      {label}
    </span>
  )
}

const DELAYS = ['delay-100', 'delay-200', 'delay-300', 'delay-400']

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Web Dev')
  const tabs = Object.keys(skills)

  const getSkillsForTab = (tabName) => {
    const tabSkills = skills[tabName]
    
    // For Web Dev tab, combine Frontend and Backend
    if (tabName === 'Web Dev' && typeof tabSkills === 'object' && !Array.isArray(tabSkills)) {
      return [...tabSkills.Frontend, ...tabSkills.Backend]
    }
    
    // For other tabs, return as is
    return Array.isArray(tabSkills) ? tabSkills : []
  }

  return (
    <section
      id="skills"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills &amp; Expertise
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full animate-shimmer" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll fade-up">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 animate-on-scroll fade-up">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 inline-flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse-dot" />
            {activeTab}
          </h3>
          <div className="flex flex-wrap gap-3">
            {getSkillsForTab(activeTab).map((skill, idx) => (
              <SkillChip key={skill} label={skill} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
