import { motion } from 'framer-motion'
import { Megaphone, Users, Crown, Compass } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { leadership, eventManagementNote } from '@/data/leadership'
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion'

const ICONS = [Megaphone, Users, Crown, Compass]
const TONES = [
  'bg-lavender-soft text-ink-700 dark:bg-lavender/15 dark:text-lavender',
  'bg-peach-soft text-ink-700 dark:bg-peach/15 dark:text-peach',
  'bg-sage-soft text-ink-700 dark:bg-sage/15 dark:text-sage',
]

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="Leadership"
      title="Leadership & community"
      description={eventManagementNote}
      tint="lavender"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid gap-5 sm:grid-cols-2"
      >
        {leadership.map((entry, i) => {
          const Icon = ICONS[i % ICONS.length]
          const isLastOdd = leadership.length % 2 !== 0 && i === leadership.length - 1
          return (
            <motion.div
              key={entry.role + entry.organization}
              variants={fadeUp}
              className={isLastOdd ? 'sm:col-span-2 sm:mx-auto sm:w-1/2' : undefined}
            >
              <Card className="h-full p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`inline-flex h-10 w-10 flex-none items-center justify-center rounded-full ${TONES[i % TONES.length]}`}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-ink-950 dark:text-white">{entry.role}</h3>
                        <p className="mt-1 text-sm font-medium text-ink-600 dark:text-ink-300">
                          {entry.organization}
                        </p>
                      </div>
                      <span className="flex-none text-xs font-medium uppercase tracking-wide text-ink-500 dark:text-ink-400">
                        {entry.period}
                      </span>
                    </div>
                    {entry.description && (
                      <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                        {entry.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
