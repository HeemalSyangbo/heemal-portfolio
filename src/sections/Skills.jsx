import { Cloud, Code2, Server } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { skillCategories } from '../data/skills'

const headerIcons = {
  code: Code2,
  server: Server,
  cloud: Cloud,
}

export function Skills() {
  return (
    <section id="skills" className="section-pad relative z-10 scroll-mt-24">
      <SectionHeading
        title="Skills"
        subtitle="Technical skills grouped by area—frontend, backend, and development tools I use in projects."
      />

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = headerIcons[cat.icon] || Code2
          return (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="glass-panel flex flex-col p-6"
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.accent} shadow-lg ring-1 ring-white/10`}
                >
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                </span>
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-1 flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                      cat.secondary
                        ? 'border-white/[0.06] bg-white/[0.02] text-zinc-500 hover:border-white/10 hover:text-zinc-400'
                        : 'border-white/10 bg-white/[0.05] text-zinc-200 hover:border-white/20 hover:bg-white/[0.08]'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
