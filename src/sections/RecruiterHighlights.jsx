import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { developerSnapshot, recruiterStats } from '../data/highlights'
import { SectionHeading } from '../components/SectionHeading'

export function RecruiterHighlights() {
  return (
    <section id="highlights" className="section-pad relative z-10 scroll-mt-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div>
          <SectionHeading
            gradient={false}
            title="Developer Snapshot"
            subtitle="Quick overview of strengths recruiters scan first."
            className="!max-w-4xl"
          />
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-panel mx-auto mt-10 grid max-w-4xl gap-3 p-6 sm:grid-cols-2 sm:gap-x-8 sm:p-8"
          >
            {developerSnapshot.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-200 sm:text-base">
                <Check className="h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2.5} aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass-panel mx-auto grid max-w-6xl gap-4 p-6 sm:grid-cols-2 lg:grid-cols-5 sm:p-6"
        >
          {recruiterStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-5 text-center"
            >
              <span className="text-xl font-bold text-white sm:text-2xl">{stat.value}</span>
              <span className="mt-2 text-xs font-medium leading-snug text-zinc-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
