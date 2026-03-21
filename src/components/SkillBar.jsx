import { motion, useReducedMotion } from 'framer-motion'

/** Inline gradients so the fill always paints (no Tailwind purge / transform quirks). */
const FILL_GRADIENT = {
  frontend: 'linear-gradient(90deg, #3b82f6 0%, #22d3ee 100%)',
  backend: 'linear-gradient(90deg, #d946ef 0%, #9333ea 100%)',
  devops: 'linear-gradient(90deg, #38bdf8 0%, #22d3ee 100%)',
}

export function SkillBar({ name, level, variant = 'frontend' }) {
  const reduceMotion = useReducedMotion()
  const bg = FILL_GRADIENT[variant] ?? FILL_GRADIENT.frontend
  const targetWidth = `${level}%`

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-zinc-200">{name}</span>
        <span className="tabular-nums text-zinc-500">{level}%</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-white/[0.08] ring-1 ring-inset ring-white/[0.08]"
        role="presentation"
      >
        <motion.div
          className="h-full max-w-full rounded-full"
          initial={{ width: reduceMotion ? targetWidth : '0%' }}
          animate={{ width: targetWidth }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
          }
          style={{ background: bg }}
        />
      </div>
    </div>
  )
}
