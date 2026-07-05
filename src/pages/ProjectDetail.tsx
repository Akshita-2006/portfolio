import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { StatusPill } from "@/components/ui/StatusPill";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/utils/motion";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer(0.08)}
      className="container-page py-16 sm:py-20"
    >
      <motion.div variants={fadeUp}>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-ink-950 dark:text-ink-400 dark:hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to projects
        </Link>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8 max-w-3xl">
        {(project.category || project.status) && (
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {project.category && <Tag tone="peach">{project.category}</Tag>}
            {project.status && <StatusPill status={project.status} />}
          </div>
        )}
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-ink-500 dark:text-ink-400">
          {project.tagline}
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t} tone="lavender">
            {t}
          </Tag>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
        {project.githubUrl && (
          <LinkButton
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            <GithubIcon size={16} />
            GitHub
          </LinkButton>
        )}
        {project.demoUrl && (
          <LinkButton
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            variant="primary"
          >
            <ArrowUpRight size={16} />
            Live Demo
          </LinkButton>
        )}
      </motion.div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
        <motion.div variants={fadeUp} className="space-y-5">
          {project.longDescription.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-ink-600 dark:text-ink-300"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        <div className="space-y-6">
          {project.metrics && (
            <motion.div variants={fadeUp}>
              <Card className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                  Metrics
                </h3>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-ink-50 px-3 py-3 text-center dark:bg-night-800"
                    >
                      <p className="font-display text-lg font-semibold text-ink-950 dark:text-white">
                        {m.value}
                      </p>
                      <p className="text-[11px] uppercase tracking-wide text-ink-500 dark:text-ink-400">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          )}

          {project.features && (
            <motion.div variants={fadeUp}>
              <Card className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                  Highlights
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-ink-400 dark:bg-ink-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
