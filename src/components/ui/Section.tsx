import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/utils/motion'
import clsx from 'clsx'

type Tint = 'none' | 'lavender' | 'sage' | 'peach'

interface SectionProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
  align?: 'left' | 'center'
  tint?: Tint
}

const TINT_BLOB_A: Record<Exclude<Tint, 'none'>, string> = {
  lavender: 'bg-lavender/50 dark:bg-lavender/15',
  sage: 'bg-sage/50 dark:bg-sage/15',
  peach: 'bg-peach/50 dark:bg-peach/15',
}

const TINT_BLOB_B: Record<Exclude<Tint, 'none'>, string> = {
  lavender: 'bg-peach/30 dark:bg-peach/10',
  sage: 'bg-lavender/30 dark:bg-lavender/10',
  peach: 'bg-sage/30 dark:bg-sage/10',
}

const TINT_LINES: Record<Exclude<Tint, 'none'>, string> = {
  lavender:
    'bg-[repeating-linear-gradient(120deg,rgba(124,92,210,0.08)_0px,rgba(124,92,210,0.08)_1px,transparent_1px,transparent_18px)]',
  sage: 'bg-[repeating-linear-gradient(120deg,rgba(90,120,70,0.08)_0px,rgba(90,120,70,0.08)_1px,transparent_1px,transparent_18px)]',
  peach:
    'bg-[repeating-linear-gradient(120deg,rgba(205,120,70,0.08)_0px,rgba(205,120,70,0.08)_1px,transparent_1px,transparent_18px)]',
}

const TINT_DOT: Record<Exclude<Tint, 'none'>, string> = {
  lavender: 'bg-lavender',
  sage: 'bg-sage',
  peach: 'bg-peach',
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = 'left',
  tint = 'none',
}: SectionProps) {
  const tinted = tint !== 'none'

  return (
    <section id={id} className={clsx('relative scroll-mt-20 overflow-hidden', className)}>
      {tinted && (
        <>
          <div
            aria-hidden
            className={clsx(
              'pointer-events-none absolute -top-32 -left-24 -z-20 h-80 w-80 rounded-full blur-3xl sm:h-112 sm:w-md',
              TINT_BLOB_A[tint],
            )}
          />
          <div
            aria-hidden
            className={clsx(
              'pointer-events-none absolute -bottom-32 -right-24 -z-20 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96',
              TINT_BLOB_B[tint],
            )}
          />
          <div
            aria-hidden
            className={clsx(
              'pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-30',
              'mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]',
              TINT_LINES[tint],
            )}
          />
        </>
      )}

      <div className="container-page py-20 sm:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className={clsx('mb-12 sm:mb-16', align === 'center' && 'text-center mx-auto max-w-2xl')}
        >
          {eyebrow && (
            <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
              <span
                className={clsx(
                  'h-1.5 w-1.5 rounded-full',
                  tinted ? TINT_DOT[tint] : 'bg-ink-400 dark:bg-ink-500',
                  align === 'center' && 'sr-only',
                )}
              />
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">{title}</h2>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-ink-500 dark:text-ink-400 text-balance">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
