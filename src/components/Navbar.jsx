import { motion } from 'framer-motion'
import { personal } from '../data/personal'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar({ activeId }) {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-black/55 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="group flex items-center gap-3 text-left"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-purple-500/20 ring-2 ring-white/10">
            {personal.initials}
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold text-white">{personal.name}</span>
            <span className="h-0.5 w-full max-w-[120px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => {
            const active = activeId === l.id
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => scrollTo(l.id)}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition ${
                  active ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {active ? (
                  <span className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/10" />
                ) : null}
                <span className="relative z-10">{l.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>

      <nav
        className="flex justify-center gap-1 overflow-x-auto border-t border-white/[0.04] px-2 py-2 lg:hidden"
        aria-label="Primary mobile"
      >
        {links.map((l) => {
          const active = activeId === l.id
          return (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollTo(l.id)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium ${
                active ? 'bg-white/10 text-white' : 'text-zinc-400'
              }`}
            >
              {l.label}
            </button>
          )
        })}
      </nav>
    </motion.header>
  )
}
