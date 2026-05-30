import { motion } from 'framer-motion'
import {
  Award,
  Brain,
  Briefcase,
  ExternalLink,
  FileText,
  FolderOpen,
  Github,
  Linkedin,
  Trophy,
  User,
} from 'lucide-react'
import { useState } from 'react'
import { Modal } from '../components/Modal'
import { SectionHeading } from '../components/SectionHeading'
import {
  achievementSections,
  capstoneDocs,
  featuredDocuments,
  supplementalMaterials,
} from '../data/resources'

const documentIcons = {
  user: User,
  'file-text': FileText,
  github: Github,
  linkedin: Linkedin,
  award: Award,
  brain: Brain,
  folder: FolderOpen,
}

const achievementIconMap = {
  brain: Brain,
  award: Award,
  briefcase: Briefcase,
  trophy: Trophy,
}

export function Portfolio() {
  const [modal, setModal] = useState({ open: false, title: '', body: '' })
  const [capstoneOpen, setCapstoneOpen] = useState(false)

  const openModal = (title, body) => setModal({ open: true, title, body })
  const closeModal = () => setModal((m) => ({ ...m, open: false }))

  const renderDocumentAction = (item) => {
    const baseBtn =
      'inline-flex w-full items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition'
    const primaryBtn = `${baseBtn} border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20`
    const secondaryBtn = `${baseBtn} border border-white/10 bg-white/[0.05] text-zinc-300 hover:bg-white/[0.09]`

    if (item.action === 'modal') {
      return (
        <button
          type="button"
          onClick={() => openModal(item.title, item.modalContent)}
          className={secondaryBtn}
        >
          Read
        </button>
      )
    }

    if (item.action === 'external') {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          className={secondaryBtn}
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          View Profile
        </a>
      )
    }

    if (item.action === 'capstone') {
      return (
        <button type="button" onClick={() => setCapstoneOpen(true)} className={primaryBtn}>
          <FolderOpen className="h-3.5 w-3.5" aria-hidden />
          Browse PDFs
        </button>
      )
    }

    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer noopener"
        className={primaryBtn}
      >
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        View PDF
      </a>
    )
  }

  const renderDocumentCard = (item, i) => {
    const Icon = documentIcons[item.icon] || FileText

    return (
      <motion.article
        key={item.id}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.04 }}
        className="glass-panel flex h-full min-h-[11.5rem] flex-col p-5 ring-1 ring-white/[0.06] transition hover:border-white/12 hover:bg-white/[0.03]"
      >
        <Icon className="mb-3 h-6 w-6 text-emerald-300" strokeWidth={1.6} />
        <h4 className="font-semibold text-white">{item.title}</h4>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-400">{item.description}</p>
        <div className="mt-auto pt-4">{renderDocumentAction(item)}</div>
      </motion.article>
    )
  }

  return (
    <section id="portfolio" className="section-pad relative z-10 scroll-mt-24">
      <SectionHeading
        title="Portfolio"
        subtitle="Résumé, credentials, GitHub, LinkedIn, and DriveTree capstone documentation—prioritized for recruiter review."
      />

      <div className="mx-auto mt-10 max-w-6xl space-y-10">
        <div>
          <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Featured documents
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-zinc-400">
            Résumé, academic credentials, and DriveTree capstone documentation.
          </p>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDocuments.map((item, i) => renderDocumentCard(item, i))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Additional resources
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-zinc-400">
            Professional summary and direct links recruiters review most often.
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supplementalMaterials.map((item, i) => renderDocumentCard(item, i))}
          </div>
        </div>

        <div id="achievements" className="scroll-mt-28">
          <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Transferable experience
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-zinc-400">
            Prior leadership roles with skills relevant to software collaboration (see Experience).
          </p>
          <div className="space-y-10">
            {achievementSections.map((block) => (
              <div key={block.id}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {block.items.map((row, i) => {
                    const Icon = achievementIconMap[row.icon] || Award
                    return (
                      <motion.article
                        key={row.id}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="glass-panel flex h-full min-h-[11.5rem] flex-col p-6"
                      >
                        <Icon className="mb-3 h-7 w-7 text-amber-300" strokeWidth={1.6} />
                        <h5 className="text-lg font-semibold text-white">{row.title}</h5>
                        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                          {row.subtitle}
                        </p>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                          {row.description}
                        </p>
                        <a
                          href={row.href}
                          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 pt-4 text-xs font-semibold text-zinc-200 transition hover:bg-white/[0.1]"
                        >
                          View in timeline
                        </a>
                      </motion.article>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal open={modal.open} onClose={closeModal} title={modal.title}>
        <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-300">{modal.body}</p>
      </Modal>

      <Modal
        open={capstoneOpen}
        onClose={() => setCapstoneOpen(false)}
        title="DriveTree (T06) — capstone documents"
        wide
        plainContent
      >
        <p className="mb-4 text-xs text-zinc-500">
          Opens each file in a new tab. Hosted under{' '}
          <code className="text-zinc-400">public/documents/capstone/</code>.
        </p>
        <ul className="space-y-2">
          {capstoneDocs.map((doc) => (
            <li key={doc.id}>
              <a
                href={doc.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-left transition hover:border-white/12 hover:bg-white/[0.06]"
              >
                <span>
                  <span className="block text-sm font-medium text-white">{doc.title}</span>
                  <span className="mt-0.5 block text-xs text-zinc-500">{doc.description}</span>
                </span>
                <ExternalLink className="h-4 w-4 shrink-0 text-purple-400" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Modal>
    </section>
  )
}
