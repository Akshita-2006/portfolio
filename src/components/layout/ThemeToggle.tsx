import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-ink-400 hover:text-ink-950 dark:border-night-600 dark:text-ink-300 dark:hover:border-night-500 dark:hover:text-white"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
