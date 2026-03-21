import { motion } from 'framer-motion'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = '',
  gradient = true,
  id,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mx-auto max-w-3xl text-center ${className}`}
    >
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className={`text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${
          gradient ? 'text-gradient' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{subtitle}</p>
      ) : null}
    </motion.div>
  )
}
