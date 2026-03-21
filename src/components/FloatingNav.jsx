import {
  Briefcase,
  Code2,
  FolderOpen,
  Home,
  Mail,
  User,
  FileStack,
} from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Code2, label: 'Skills' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'portfolio', icon: FileStack, label: 'Portfolio' },
  { id: 'contact', icon: Mail, label: 'Contact' },
]

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function FloatingNav({ activeId }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 md:block xl:right-6"
    >
      <div
        className="glass-panel flex flex-col gap-1 p-2 shadow-2xl shadow-black/50"
        role="navigation"
        aria-label="Section shortcuts"
      >
        {items.map(({ id, icon: Icon, label }) => {
          const active = activeId === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              title={label}
              aria-label={label}
              aria-current={active ? 'true' : undefined}
              className={`relative flex h-11 w-11 items-center justify-center rounded-full transition ${
                active ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              {active ? (
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-600/50 blur-[1px] ring-1 ring-purple-400/50" />
              ) : null}
              <Icon className="relative z-10 h-[18px] w-[18px]" strokeWidth={1.75} />
            </button>
          )
        })}
      </div>
    </motion.div>
  )
}
