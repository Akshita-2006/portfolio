import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { staggerContainer, viewportOnce } from '@/utils/motion'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="SDE-focused full-stack products first, followed by applied AI and machine learning systems."
      tint="peach"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </motion.div>
    </Section>
  )
}
