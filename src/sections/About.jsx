import { motion } from 'framer-motion'
import { BookOpen, Code2, Layers, Users } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { personal } from '../data/personal'

const stats = [
  {
    title: 'Key projects',
    detail: 'Full-stack apps & completed capstone',
    icon: Code2,
    className: 'from-blue-600/30 to-blue-500/10 ring-blue-500/20',
  },
  {
    title: 'Stack focus',
    detail: 'JavaScript, React.js, Node.js, REST, MongoDB',
    icon: Layers,
    className: 'from-purple-600/30 to-purple-500/10 ring-purple-500/20',
  },
  {
    title: 'Credentials',
    detail: 'Diploma, certificates & capstone docs',
    icon: BookOpen,
    className: 'from-orange-500/25 to-amber-500/10 ring-orange-400/20',
  },
  {
    title: 'Collaboration',
    detail: 'Agile teams & prior leadership roles',
    icon: Users,
    className: 'from-emerald-500/25 to-teal-500/10 ring-emerald-400/25',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export function About() {
  return (
    <section id="about" className="section-pad relative z-10 scroll-mt-24">
      <SectionHeading
        gradient={false}
        title="About"
        subtitle="George Brown College graduate focused on React.js, Node.js, and full-stack delivery—with leadership experience from prior roles."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel space-y-5 p-8"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            {personal.name} · {personal.location}
          </p>
          {personal.aboutParagraphs.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-zinc-300 sm:text-base">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className={`glass-panel relative overflow-hidden bg-gradient-to-br p-5 ring-1 ${s.className}`}
            >
              <s.icon className="mb-3 h-6 w-6 text-white/90" strokeWidth={1.75} />
              <p className="text-sm font-semibold leading-snug text-white">{s.title}</p>
              <p className="mt-1 text-xs leading-snug text-zinc-500">{s.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
