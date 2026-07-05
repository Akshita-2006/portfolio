import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { skills } from '@/data/skills'
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/motion'

const TONES = ['lavender', 'sage', 'peach'] as const

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Toolkit" tint="peach">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group, i) => (
          <motion.div key={group.category} variants={fadeUp}>
            <Card className="h-full p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} tone={TONES[i % TONES.length]}>
                    {item}
                  </Tag>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
