import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/personal'

const social = [
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: Github, href: personal.github, label: 'GitHub' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.06] bg-black/40 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">
          © {year} {personal.name}. Crafted for coursework, internships, and future roles.
        </p>
        <div className="flex items-center gap-3">
          {social.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 transition hover:border-white/20 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
