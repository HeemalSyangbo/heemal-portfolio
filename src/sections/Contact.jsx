import { motion } from 'framer-motion'
import { ExternalLink, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { personal } from '../data/personal'

const cards = [
  {
    title: 'LinkedIn',
    subtitle: 'Connect on LinkedIn',
    href: personal.linkedin,
    className: 'from-blue-600/90 to-blue-500/80',
    icon: Linkedin,
    external: true,
  },
  {
    title: 'GitHub',
    subtitle: 'View GitHub Projects',
    href: personal.github,
    className: 'from-zinc-800 to-zinc-900',
    icon: Github,
    external: true,
  },
  {
    title: 'Email',
    subtitle: personal.email,
    href: `mailto:${personal.email}`,
    className: 'from-fuchsia-600/90 to-purple-700/90',
    icon: Mail,
    external: false,
  },
  {
    title: 'Phone',
    subtitle: personal.phone,
    href: `tel:${personal.phone.replace(/\D/g, '')}`,
    className: 'from-teal-600/90 to-emerald-700/90',
    icon: Phone,
    external: false,
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-pad relative z-10 scroll-mt-24 pb-28">
      <SectionHeading
        gradient={false}
        title="Contact"
        subtitle="Available for Junior Software Developer, Frontend Developer, Full-Stack Developer, QA Analyst, Application Support, and IT Support opportunities across Canada."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-12 max-w-4xl"
      >
        <div className="glass-panel p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer noopener' : undefined}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br p-5 ring-1 ring-white/10 transition hover:brightness-110 ${c.className}`}
              >
                <c.icon className="mb-3 h-8 w-8 text-white/95" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-1 break-all text-sm text-white/80">{c.subtitle}</p>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:brightness-110 sm:w-auto"
            >
              <ExternalLink className="h-4 w-4" />
              View my résumé
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
