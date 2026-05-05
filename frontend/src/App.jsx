import { useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { useScrollReveal } from './hooks/useScrollReveal'

import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import BackToTop from './components/BackToTop'
import MinorProjects from './components/MinorProjects'

export default function App() {
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  useScrollReveal()

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-blue-200 dark:selection:bg-blue-900 overflow-x-hidden">
      <Loader />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <MinorProjects />
        <Skills />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <MusicPlayer />
      <BackToTop />
    </div>
  )
}
