import { motion } from 'framer-motion'
import { Trophy, Medal, Sparkles, Code2, TrendingUp, Award } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ViewCertificatesLink } from '@/components/ui/ViewCertificatesLink'
import { achievements } from '@/data/achievements'
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion'

const ICONS = [Trophy, Sparkles, Medal, Code2, TrendingUp, Award]
const TONES = [
  'bg-peach-soft text-ink-700 dark:bg-peach/15 dark:text-peach',
  'bg-lavender-soft text-ink-700 dark:bg-lavender/15 dark:text-lavender',
  'bg-sage-soft text-ink-700 dark:bg-sage/15 dark:text-sage',
]

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition along the way" tint="sage">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {achievements.map((item, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <motion.div key={item.title} variants={fadeUp}>
              <Card className="h-full p-6">
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full ${TONES[i % TONES.length]}`}
                >
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-semibold text-ink-950 dark:text-white">{item.title}</h3>
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{item.description}</p>
                )}
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
      <ViewCertificatesLink />
    </Section>
  )
}
