import { Background } from './components/Background'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { useActiveSection } from './hooks/useActiveSection'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Portfolio } from './sections/Portfolio'
import { Projects } from './sections/Projects'
import { RecruiterHighlights } from './sections/RecruiterHighlights'
import { Skills } from './sections/Skills'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'portfolio', 'contact']

export default function App() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Background />
      <Navbar activeId={activeId} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <RecruiterHighlights />
        <Projects />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
