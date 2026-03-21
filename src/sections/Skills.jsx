import { Cloud, Code2, Server } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { SkillBar } from '../components/SkillBar'
import { alsoExperienced, skillCategories } from '../data/skills'

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
        subtitle="Web development first (React, Node.js, REST). DevOps and cloud reflect coursework and labs—not production SRE experience."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
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
              <div className="flex flex-1 flex-col gap-4">
                {cat.items.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} variant={cat.id} />
                ))}
              </div>
              <div className="mt-6 flex items-end justify-between border-t border-white/[0.06] pt-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                <span>Technologies</span>
                <span className="text-3xl font-bold text-white/90 tabular-nums">{cat.footerNumber}</span>
              </div>
            </motion.article>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto mt-12 max-w-6xl"
      >
        <p className="mb-4 text-center text-sm font-medium text-zinc-400">Also experienced with</p>
        <div className="glass-panel flex flex-wrap justify-center gap-2 p-5">
          {alsoExperienced.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
