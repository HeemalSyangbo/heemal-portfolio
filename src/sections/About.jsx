import { motion } from 'framer-motion'
import { Briefcase, Code2, GraduationCap, Layers } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { personal } from '../data/personal'

const highlightCards = [
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    accent: 'from-emerald-500/25 to-teal-600/10 ring-emerald-400/25',
    iconClass: 'text-emerald-300',
    lines: [
      { text: 'George Brown College', emphasis: true },
      { text: 'Computer Programming & Analysis' },
      { text: 'Graduated April 2026', muted: true },
    ],
  },
  {
    id: 'capstone',
    title: 'DriveTree Capstone',
    icon: Code2,
    accent: 'from-blue-600/30 to-indigo-500/10 ring-blue-500/25',
    iconClass: 'text-blue-300',
    lines: [
      { text: 'Full-stack team project', emphasis: true },
      { text: 'React • Node.js • MongoDB • REST APIs' },
      { text: 'Completed April 2026', muted: true },
    ],
  },
  {
    id: 'stack',
    title: 'Technical Stack',
    icon: Layers,
    accent: 'from-purple-600/30 to-fuchsia-500/10 ring-purple-500/25',
    iconClass: 'text-purple-300',
    tags: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'leadership',
    title: 'Leadership Experience',
    icon: Briefcase,
    accent: 'from-amber-500/25 to-orange-500/10 ring-amber-400/25',
    iconClass: 'text-amber-300',
    lines: [
      { text: '7+ years leadership experience', emphasis: true },
      { text: 'Canada & UAE' },
      { text: 'Team supervision' },
      { text: 'Operations management', muted: true },
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function HighlightCard({ card }) {
  const Icon = card.icon

  return (
    <motion.article
      variants={item}
      className={`group glass-panel relative flex h-full min-h-[11.5rem] flex-col overflow-hidden bg-gradient-to-br p-5 ring-1 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-lg hover:shadow-black/20 ${card.accent}`}
    >
      <span
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-black/25 ring-1 ring-white/10 transition group-hover:scale-105 ${card.iconClass}`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </span>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{card.title}</h3>

      {card.tags ? (
        <ul className="mt-3 flex flex-1 flex-wrap content-start gap-1.5">
          {card.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-block rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] font-medium text-zinc-200">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-3 flex flex-1 flex-col justify-end gap-1.5">
          {card.lines.map((line) => (
            <li
              key={line.text}
              className={`text-sm leading-snug ${
                line.emphasis
                  ? 'font-semibold text-zinc-100'
                  : line.muted
                    ? 'text-xs text-zinc-500'
                    : 'text-zinc-400'
              }`}
            >
              {line.text}
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  )
}

export function About() {
  return (
    <section id="about" className="section-pad relative z-10 scroll-mt-24">
      <SectionHeading
        gradient={false}
        title="About"
        subtitle={personal.aboutSubtitle}
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel group flex h-full flex-col p-6 transition duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20 sm:p-8"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Summary
          </p>
          <ul className="flex flex-1 flex-col justify-center gap-4">
            {personal.aboutParagraphs.map((paragraph, i) => (
              <li
                key={i}
                className="relative pl-4 text-sm leading-relaxed text-zinc-300 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-br before:from-blue-400 before:to-purple-500 sm:text-[0.9375rem]"
              >
                {paragraph}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid h-full grid-cols-2 auto-rows-fr gap-4"
        >
          {highlightCards.map((card) => (
            <HighlightCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
