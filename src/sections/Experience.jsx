import { motion } from 'framer-motion'
import { Briefcase, Cloud, Code2, GraduationCap, Layers } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { timeline } from '../data/timeline'

const iconMap = {
  graduation: GraduationCap,
  code: Code2,
  layers: Layers,
  cloud: Cloud,
  briefcase: Briefcase,
}

export function Experience() {
  return (
    <section id="experience" className="section-pad relative z-10 scroll-mt-24">
      <SectionHeading
        gradient={false}
        title="Experience & Education"
        subtitle="Education, capstone delivery, and professional experience—including transferable leadership from prior roles."
      />

      <div className="relative mx-auto mt-10 max-w-3xl">
        <div className="absolute left-[21px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/40 md:left-[25px]" />

        <ul className="space-y-10">
          {timeline.map((entry, i) => {
            const Icon = iconMap[entry.icon] || Code2
            return (
              <motion.li
                key={entry.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="relative flex gap-6 md:gap-8"
              >
                <div
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${entry.accent} shadow-lg ring-2 ring-black/40`}
                >
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                </div>
                <article className="glass-panel flex-1 p-6">
                  <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
                  <p className="mt-1 text-sm font-medium text-zinc-400">{entry.org}</p>
                  <p className={`mt-2 text-sm font-semibold bg-gradient-to-r ${entry.accent} bg-clip-text text-transparent`}>
                    {entry.date}
                  </p>
                  {entry.highlights ? (
                    <ul className="mt-3 space-y-2">
                      {entry.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-relaxed text-zinc-400"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{entry.description}</p>
                  )}
                </article>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
