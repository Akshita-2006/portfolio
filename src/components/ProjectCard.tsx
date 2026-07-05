import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { StatusPill } from '@/components/ui/StatusPill'
import type { Project } from '@/data/types'
import { fadeUp } from '@/utils/motion'

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div variants={fadeUp} custom={index}>
      <Card className="group flex h-full flex-col p-7 sm:p-8">
        {(project.category || project.status) && (
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            {project.category && <Tag tone="peach">{project.category}</Tag>}
            {project.status && <StatusPill status={project.status} />}
          </div>
        )}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink-950 dark:text-white">{project.title}</h3>
            <p className="mt-1 text-sm font-medium text-ink-500 dark:text-ink-400">{project.tagline}</p>
          </div>
          <Link
            to={`/projects/${project.slug}`}
            aria-label={`View ${project.title} details`}
            className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-all group-hover:border-ink-400 group-hover:text-ink-950 dark:border-night-600 dark:text-ink-400 dark:group-hover:border-night-500 dark:group-hover:text-white"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{project.description}</p>

        {project.metrics && (
          <div className="mt-5 grid grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-xl bg-ink-50 px-3 py-2.5 text-center dark:bg-night-800">
                <p className="font-display text-lg font-semibold text-ink-950 dark:text-white">{m.value}</p>
                <p className="text-[11px] uppercase tracking-wide text-ink-500 dark:text-ink-400">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((t) => (
            <Tag key={t} tone="lavender">
              {t}
            </Tag>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-ink-100 pt-5 dark:border-night-700">
          <Link
            to={`/projects/${project.slug}`}
            className="text-sm font-medium text-ink-800 underline-offset-4 hover:underline dark:text-ink-100"
          >
            View details
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-ink-950 dark:text-ink-400 dark:hover:text-white"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-ink-950 dark:text-ink-400 dark:hover:text-white"
            >
              <ArrowUpRight size={14} />
              Live Demo
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
