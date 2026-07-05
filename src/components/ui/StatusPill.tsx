import clsx from 'clsx'

const STATUS_STYLES: Record<string, { dot: string; text: string; pulse?: boolean }> = {
  Live: { dot: 'bg-sage', text: 'text-ink-600 dark:text-ink-300', pulse: true },
  'Active Development': { dot: 'bg-lavender', text: 'text-ink-600 dark:text-ink-300' },
  'Research Prototype': { dot: 'bg-peach', text: 'text-ink-600 dark:text-ink-300' },
  'Production Prototype': { dot: 'bg-peach', text: 'text-ink-600 dark:text-ink-300' },
}

const DEFAULT_STYLE = { dot: 'bg-ink-400 dark:bg-ink-500', text: 'text-ink-600 dark:text-ink-300' }

export function StatusPill({ status, className }: { status: string; className?: string }) {
  const style = STATUS_STYLES[status] ?? DEFAULT_STYLE

  return (
    <span className={clsx('inline-flex items-center gap-1.5 text-xs font-medium', style.text, className)}>
      <span className="relative flex h-1.5 w-1.5">
        {style.pulse && (
          <span className={clsx('absolute inline-flex h-full w-full animate-ping rounded-full opacity-75', style.dot)} />
        )}
        <span className={clsx('relative inline-flex h-1.5 w-1.5 rounded-full', style.dot)} />
      </span>
      {status}
    </span>
  )
}
