import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolioData'

const DELAYS = [
  'delay-100',
  'delay-200',
  'delay-300',
  'delay-100',
  'delay-200',
  'delay-300',
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-300/10 dark:bg-blue-700/10 rounded-full blur-3xl animate-float-slower pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-indigo-300/10 dark:bg-indigo-700/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full animate-shimmer" />
        </div>

        {/* Grid — add projects in portfolioData.js */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              {...project}
              delay={DELAYS[i % DELAYS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
