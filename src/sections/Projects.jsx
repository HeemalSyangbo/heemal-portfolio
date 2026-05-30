import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
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

function GitHubButton({ href, compact = false }) {
  const btnBase = compact ? 'text-xs px-3 py-1.5' : 'text-sm px-4 py-2'
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] font-medium text-zinc-300 transition hover:border-white/20 hover:text-white ${btnBase}`}
    >
      <Github className="h-4 w-4" aria-hidden />
      GitHub
      <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
      <span className="sr-only">(opens in new tab)</span>
    </a>
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
        <GitHubButton href={project.links.github} compact={compact} />
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={project.links.cta.href}
        className={`inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06] ${btnBase}`}
      >
        {project.links.cta.label}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
      <GitHubButton href={project.links.github} compact={compact} />
    </div>
  )
}

function ProjectScreenshotGallery({ project }) {
  const slides = project.gallery?.length ? project.gallery : [{ src: projectImageSrc(project), alt: project.imageAlt, label: 'App' }]
  const [active, setActive] = useState(0)
  const current = slides[active]
  const hasMultiple = slides.length > 1

  const go = (direction) => {
    setActive((i) => (i + direction + slides.length) % slides.length)
  }

  return (
    <div className="overflow-hidden rounded-t-2xl">
      <div className="relative h-[350px] w-full sm:h-[420px] lg:h-[480px] lg:max-h-[500px]">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt ?? project.title}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.01]"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
        {hasMultiple ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-zinc-200 transition hover:bg-black/80"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-zinc-200 transition hover:bg-black/80"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        ) : null}
      </div>
      {hasMultiple ? (
        <div className="flex flex-wrap gap-2 border-t border-white/[0.06] bg-black/30 px-4 py-2.5">
          {slides.map((slide, index) => (
            <button
              key={slide.id ?? slide.label}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              className={`rounded-full px-3 py-1 text-[11px] font-medium transition ${
                active === index
                  ? 'bg-amber-500/15 text-amber-200 ring-1 ring-amber-400/40'
                  : 'text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-300'
              }`}
            >
              {slide.label}
            </button>
          ))}
        </div>
      ) : null}
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
      className="group glass-panel overflow-hidden rounded-2xl ring-1 ring-amber-400/35 shadow-lg shadow-amber-500/10 transition duration-300 hover:-translate-y-0.5 hover:ring-amber-400/55 hover:shadow-xl hover:shadow-amber-500/15"
    >
      <ProjectScreenshotGallery project={project} />

      <div className="p-5 sm:p-6 lg:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            {project.titleBadges?.length ? (
              <div className="mb-3 flex flex-wrap gap-2">
                {project.titleBadges.map((label) => (
                  <span
                    key={label}
                    className="inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-200"
                  >
                    {label}
                  </span>
                ))}
              </div>
            ) : null}
            <h3 className="text-xl font-bold text-gradient sm:text-2xl">{project.title}</h3>
            {project.teamNote ? (
              <p className="mt-1 text-xs font-medium text-zinc-500">{project.teamNote}</p>
            ) : null}
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-[0.9375rem]">
          {project.description}
        </p>

        {project.stats?.length ? (
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-3 text-center"
              >
                <p className="text-sm font-bold text-white sm:text-base">{stat.value}</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {project.highlights?.length ? (
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-purple-300">
                Project Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {project.keyContributions?.length ? (
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-300/90">
                Key Contributions
              </h4>
              <ul className="space-y-2">
                {project.keyContributions.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400/80" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-white/[0.06] pt-5">
          <ProjectActions project={project} />
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

      <div className="mx-auto mt-10 max-w-6xl space-y-10">
        {featuredProject ? (
          <div>
            <h3 className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">
              Featured Project
            </h3>
            <FeaturedProjectCard project={featuredProject} />
          </div>
        ) : null}

        <div>
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
        className="mx-auto mt-8 flex justify-center"
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
