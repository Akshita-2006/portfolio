import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { profile } from '@/data/profile'

const NAV_ITEMS = [
  { label: 'About', hash: '#about' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Achievements', hash: '#achievements' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Certifications', hash: '#certifications' },
  { label: 'Contact', hash: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  const goTo = (hash: string) => {
    if (location.pathname !== '/') {
      navigate(`/${hash}`)
      return
    }
    const el = document.querySelector(hash)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-warm-white/80 backdrop-blur-md border-b border-ink-200 dark:bg-night-950/80 dark:border-night-600'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-ink-950 dark:text-white">
          {profile.name}
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.hash}
              onClick={() => goTo(item.hash)}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 dark:border-night-600 dark:text-ink-300 lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-ink-200 bg-warm-white lg:hidden dark:border-night-600 dark:bg-night-950"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.hash}
                  onClick={() => goTo(item.hash)}
                  className="rounded-lg px-2 py-3 text-left text-sm font-medium text-ink-600 hover:bg-ink-50 dark:text-ink-300 dark:hover:bg-night-800"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
