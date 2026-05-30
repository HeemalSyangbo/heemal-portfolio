import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/personal'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel relative w-full max-w-xl px-6 py-10 text-center shadow-2xl shadow-blue-500/10 sm:px-10"
      >
        <div className="mx-auto mb-6 flex justify-center">
          <div className="relative isolate aspect-square w-[clamp(7rem,32vw,9.25rem)] shrink-0">
            {/* Ambient glow behind avatar */}
            <div
              className="pointer-events-none absolute -inset-[10px] rounded-full bg-gradient-to-r from-blue-500/45 via-purple-500/40 to-pink-500/35 opacity-90 blur-xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -inset-[3px] rounded-full bg-gradient-to-br from-sky-300/50 via-white/25 to-fuchsia-400/35 opacity-80 blur-md"
              aria-hidden
            />
            {/* Clip + ring: anchor to top so the full head stays inside the circle */}
            <div className="relative h-full w-full overflow-hidden rounded-full ring-[1.5px] ring-inset ring-white/45 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_16px_48px_-12px_rgba(0,0,0,0.55),0_0_56px_-18px_rgba(96,165,250,0.38)]">
              <img
                src={personal.profileImage}
                alt={`${personal.name}, professional headshot`}
                width={360}
                height={360}
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 148px"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full origin-center scale-[1.08] object-cover object-top rotate-[2.5deg]"
              />
            </div>
          </div>
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          {personal.headline}
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-gradient">{personal.name}</span>
        </h1>
        <p className="mt-3 text-sm font-medium tracking-wide text-emerald-300/90">
          {personal.heroStatus}
        </p>
        <div className="mx-auto mt-4 max-w-sm text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Open to:</p>
          <ul className="mt-2 space-y-1">
            {personal.heroOpenRoles.map((role) => (
              <li key={role} className="flex items-center gap-2 text-sm text-zinc-300">
                <span className="text-zinc-500" aria-hidden>
                  •
                </span>
                {role}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm text-zinc-500">{personal.location}</p>

        <p className="mt-5 text-sm font-medium tracking-wide text-zinc-300 sm:text-base">
          {personal.heroTechStack}
        </p>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">
          {personal.heroIntro}
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110"
          >
            View My Work
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.07]"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </motion.div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500"
      >
        Scroll to explore
        <span className="block h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.button>
    </section>
  )
}
