import { Award } from 'lucide-react'
import { achievements } from '../data/portfolioData'

const DELAYS = [
  'delay-100',
  'delay-150',
  'delay-200',
  'delay-250',
  'delay-300',
  'delay-350',
  'delay-400',
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-blue-200/10 dark:bg-blue-800/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full animate-shimmer" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => (
            <div
              key={i}
              className={`group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start space-x-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/15 hover:border-blue-300/60 dark:hover:border-blue-700/60 animate-on-scroll scale-in ${DELAYS[i % DELAYS.length]}`}
            >
              <span className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10 -skew-x-12 translate-x-0 group-hover:translate-x-[260%] transition-transform duration-1000 ease-out" />
              </span>

              <div className="flex-shrink-0 mt-1 relative">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 transition-transform duration-500 group-hover:scale-110">
                  <Award className="w-5 h-5 group-hover:animate-sparkle" />
                </div>
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 animate-ring-ripple" />
              </div>
              <p className="text-gray-800 dark:text-gray-200 font-medium leading-snug relative">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
