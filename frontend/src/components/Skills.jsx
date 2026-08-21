import { useState } from "react";
import { skills } from "../data/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TbApi } from 'react-icons/tb'

function SkillItem({ skill, index }) {
  const Icon = skill.icon

  return (
    <div
      style={{ animationDelay: `${index * 50}ms` }}
      className="animate-chip-pop flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center flex-shrink-0">

        {typeof Icon === 'function' ? (
          <Icon className="text-2xl text-blue-500" />
        ) : (
          <FontAwesomeIcon
            icon={Icon}
            className="text-2xl text-blue-500"
          />
        )}

      </div>

      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {skill.name}
      </span>
    </div>
  )
}

const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Development");
  const tabs = Object.keys(skills);

  const getSkillsForTab = (tabName) => {
    const tabSkills = skills[tabName];

    if (
      tabName === "Development" &&
      typeof tabSkills === "object" &&
      !Array.isArray(tabSkills)
    ) {
      return [...tabSkills.Frontend, ...tabSkills.Backend];
    }

    return Array.isArray(tabSkills) ? tabSkills : [];
  };

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
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-on-scroll fade-up">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="animate-on-scroll fade-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {getSkillsForTab(activeTab).map((skill, idx) => (
              <SkillItem key={skill.name} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
