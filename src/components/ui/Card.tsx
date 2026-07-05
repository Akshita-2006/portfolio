import type { ReactNode, HTMLAttributes } from 'react'
import clsx from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
}

export function Card({ children, className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-ink-200/80 bg-white/80 dark:border-night-600 dark:bg-night-900/70',
        'backdrop-blur-[2px]',
        'shadow-[0_1px_2px_rgba(20,15,35,0.04),0_14px_28px_-18px_rgba(20,15,35,0.18)]',
        'dark:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_14px_28px_-18px_rgba(0,0,0,0.55)]',
        hover &&
          'transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-[0_4px_12px_-6px_rgba(20,15,35,0.14),0_22px_40px_-22px_rgba(20,15,35,0.28)] dark:hover:border-night-500',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
