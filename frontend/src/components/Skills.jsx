import { useState } from 'react'
import { skills } from '../data/portfolioData'

function SkillItem({ label, index }) {
  return (
    <div
      style={{ animationDelay: `${index * 50}ms` }}
      className="animate-chip-pop flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-blue-400 dark:hover:border-blue-600/50 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center flex-shrink-0">
        <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {label.charAt(0)}
        </span>
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </span>
    </div>
  )
}

const DELAYS = ['delay-100', 'delay-200', 'delay-300', 'delay-400']

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Web Dev')
  const tabs = Object.keys(skills)

  const getSkillsForTab = (tabName) => {
    const tabSkills = skills[tabName]
    
    if (tabName === 'Web Dev' && typeof tabSkills === 'object' && !Array.isArray(tabSkills)) {
      return [...tabSkills.Frontend, ...tabSkills.Backend]
    }
    
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

        <div className="flex flex-wrap justify-center gap-6 mb-16 animate-on-scroll fade-up">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative group transition-all duration-300 ${
                activeTab === tab ? 'scale-100' : 'scale-90 hover:scale-95'
              }`}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center font-semibold text-sm text-center px-2 transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/40'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600'
                }`}
              >
                {tab}
              </div>
              {activeTab === tab && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20 blur-xl -z-10" />
              )}
            </button>
          ))}
        </div>

        <div className="animate-on-scroll fade-up">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 inline-flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
            {activeTab}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {getSkillsForTab(activeTab).map((skill, idx) => (
              <SkillItem key={skill} label={skill} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
