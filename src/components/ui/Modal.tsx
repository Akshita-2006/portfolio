import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/50 p-4 backdrop-blur-sm dark:bg-black/60"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-ink-200 bg-warm-white shadow-2xl dark:border-night-600 dark:bg-night-900"
          >
            <div className="flex items-center justify-between border-b border-ink-100 px-6 py-4 dark:border-night-700">
              <h3 className="text-sm font-semibold text-ink-950 dark:text-white">{title}</h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink-500 hover:bg-ink-100 hover:text-ink-950 dark:text-ink-400 dark:hover:bg-night-800 dark:hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
