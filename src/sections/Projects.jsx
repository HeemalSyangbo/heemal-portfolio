import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'
import { personal } from '../data/personal'

const featuredProject = projects.find((p) => p.featured)
const otherProjects = projects.filter((p) => !p.featured)

function projectImageSrc(project) {
  return project.screenshot || project.image
}

function ProjectImage({ project, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-black/40 ${className}`}>
      <img
        src={projectImageSrc(project)}
        alt={project.imageAlt ?? project.title}
        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    </div>
  )
}

function ProjectActions({ project, compact = false }) {
  const btnBase = compact ? 'text-xs px-3 py-1.5' : 'text-sm px-4 py-2'

  if (project.links.liveDemo) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <a
          href={project.links.liveDemo.href}
          target="_blank"
          rel="noreferrer noopener"
          className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:brightness-110 ${btnBase}`}
        >
          {project.links.liveDemo.label}
          <ExternalLink className="h-3.5 w-3.5 opacity-90" aria-hidden />
          <span className="sr-only">(opens in new tab)</span>
        </a>
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer noopener"
          className={`inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] font-medium text-zinc-300 transition hover:border-white/20 hover:text-white ${btnBase}`}
        >
          <Github className="h-4 w-4" aria-hidden />
          🐙 GitHub
          <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
          <span className="sr-only">(opens in new tab)</span>
        </a>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={project.links.cta.href}
        className={`inline-flex items-center gap-2 font-semibold text-white transition hover:text-purple-200 ${compact ? 'text-xs' : 'text-sm'}`}
      >
        {project.links.cta.label}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
      <a
        href={project.links.github}
        target="_blank"
        rel="noreferrer noopener"
        className={`inline-flex items-center gap-2 font-medium text-zinc-400 transition hover:text-white ${compact ? 'text-xs' : 'text-sm'}`}
      >
        <Github className="h-4 w-4" aria-hidden />
        GitHub
        <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
        <span className="sr-only">(opens in new tab)</span>
      </a>
    </div>
  )
}

function FeaturedProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className="group glass-panel overflow-hidden ring-1 ring-amber-400/30 shadow-lg shadow-amber-500/5"
    >
      <div className="flex flex-col md:flex-row">
        <ProjectImage
          project={project}
          className="h-40 shrink-0 md:h-auto md:w-[38%] md:min-h-[200px] md:max-h-[220px]"
        />
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          {project.badge ? (
            <span className="mb-2 inline-block w-fit rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-200">
              {project.badge}
            </span>
          ) : null}
          <h3 className="text-lg font-bold text-gradient sm:text-xl">{project.title}</h3>
          {project.teamNote ? (
            <p className="mt-0.5 text-xs font-medium text-zinc-500">{project.teamNote}</p>
          ) : null}
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[10px] text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 border-t border-white/[0.06] pt-4">
            <ProjectActions project={project} compact />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectGridCard({ project, index }) {
  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className="group glass-panel flex h-full flex-col overflow-hidden"
    >
      <ProjectImage project={project} className="h-40 shrink-0 sm:h-44" />
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
          {project.number}
        </span>
        <h3
          className={`mt-1 text-base font-bold leading-snug ${
            project.gradientTitle ? 'text-gradient' : 'text-white'
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-2 min-h-[4.5rem] flex-1 line-clamp-4 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <div className="mt-3 flex min-h-[3.25rem] flex-wrap content-start gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[10px] text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto border-t border-white/[0.06] pt-4">
          <ProjectActions project={project} />
        </div>
      </div>
    </motion.article>
  )
}

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
        subtitle="Featured capstone delivery and supporting full-stack, API, and DevOps work."
      />

      <div className="mx-auto mt-14 max-w-6xl space-y-14">
        {featuredProject ? (
          <div>
            <h3 className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">
              Featured Project
            </h3>
            <FeaturedProjectCard project={featuredProject} />
          </div>
        ) : null}

        <div>
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <ProjectGridCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
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
