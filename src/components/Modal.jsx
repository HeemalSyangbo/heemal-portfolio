import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

export function Modal({ open, onClose, title, children, wide = false, plainContent = false }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const maxW = wide ? 'max-w-2xl' : 'max-w-lg'
  const maxH = wide ? 'max-h-[min(85vh,720px)]' : 'max-h-[min(80vh,640px)]'

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close dialog"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className={`glass-panel relative z-10 w-full ${maxW} ${maxH} overflow-y-auto p-6 sm:p-8`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 id="modal-title" className="text-xl font-semibold text-white">
                {title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div
              className={
                plainContent
                  ? 'text-sm text-zinc-300'
                  : 'whitespace-pre-line text-sm leading-relaxed text-zinc-300'
              }
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
