import clsx from 'clsx'

type Tone = 'lavender' | 'sage' | 'peach' | 'neutral'

const tones: Record<Tone, string> = {
  lavender: 'bg-lavender-soft text-ink-800 dark:bg-lavender/15 dark:text-lavender',
  sage: 'bg-sage-soft text-ink-800 dark:bg-sage/15 dark:text-sage',
  peach: 'bg-peach-soft text-ink-800 dark:bg-peach/15 dark:text-peach',
  neutral: 'bg-ink-100 text-ink-600 dark:bg-night-800 dark:text-ink-300',
}

export function Tag({ children, tone = 'neutral', className }: { children: React.ReactNode; tone?: Tone; className?: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
