import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
