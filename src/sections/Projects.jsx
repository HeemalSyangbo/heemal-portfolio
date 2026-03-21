import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'
import { personal } from '../data/personal'

export function Projects() {
  return (
    <section
      id="projects"
      className="section-pad relative z-10 scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      <SectionHeading
        id="projects-heading"
        title="Projects"
        subtitle="Coursework and portfolio builds—honest scope; ask for demos or walkthroughs."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className="group glass-panel overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.imageAlt ?? ''}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute right-3 top-3 flex flex-wrap justify-end gap-1.5">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[10px] font-medium text-zinc-200 backdrop-blur-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative p-6">
              <span className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xs font-semibold text-zinc-300">
                {project.number}
              </span>
              <h3
                className={`pr-12 text-xl font-bold ${
                  project.gradientTitle ? 'text-gradient' : 'text-white'
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-blue-500/50 via-purple-500/40 to-pink-500/40 opacity-60" />

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href={project.links.cta.href}
                  className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-white transition hover:text-purple-200"
                >
                  {project.links.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  <Github className="h-4 w-4" aria-hidden />
                  GitHub
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto mt-12 flex justify-center"
      >
        <a
          href={`${personal.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer noopener"
          className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
        >
          <Github className="h-4 w-4" aria-hidden />
          Browse repositories
        </a>
      </motion.div>
    </section>
  )
}
