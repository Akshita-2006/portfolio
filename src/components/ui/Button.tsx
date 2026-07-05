import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'sm'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-400 dark:focus-visible:ring-offset-night-950 disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-ink-950 text-warm-white hover:bg-ink-800 dark:bg-lavender dark:text-ink-950 dark:hover:bg-lavender-soft',
  secondary:
    'bg-transparent text-ink-800 border border-ink-300 hover:border-ink-500 hover:bg-ink-50 dark:text-ink-100 dark:border-night-500 dark:hover:bg-night-800',
  ghost: 'bg-transparent text-ink-600 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  sm: 'px-4 py-2 text-sm',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => (
    <button ref={ref} className={clsx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  ),
)
Button.displayName = 'Button'

type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => (
    <a ref={ref} className={clsx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  ),
)
LinkButton.displayName = 'LinkButton'
