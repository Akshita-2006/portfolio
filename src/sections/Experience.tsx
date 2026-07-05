import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { ViewCertificatesLink } from "@/components/ui/ViewCertificatesLink";
import { experience } from "@/data/experience";
import { fadeUp, viewportOnce } from "@/utils/motion";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've Worked"
      description="Research and industry internships across AI, geospatial systems, and business intelligence."
      tint="lavender"
    >
      <div className="relative space-y-10 border-l border-ink-200 pl-8 dark:border-night-600 sm:pl-10">
        {experience.map((entry, i) => (
          <motion.div
            key={entry.organization + entry.role}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-9.25 top-1.5 h-2.5 w-2.5 rounded-full bg-lavender ring-4 ring-warm-white dark:ring-night-950 sm:-left-11.25" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold text-ink-950 dark:text-white">
                {entry.role}
              </h3>
              <div className="flex items-center gap-2">
                {entry.current && <Tag tone="sage">Current</Tag>}
                <span className="text-sm font-medium text-ink-500 dark:text-ink-400">
                  {entry.period}
                </span>
              </div>
            </div>
            <p className="mt-1 text-sm font-medium text-ink-600 dark:text-ink-300">
              {entry.organization}
            </p>

            <ul className="mt-3 space-y-2">
              {entry.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex gap-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400"
                >
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink-400 dark:bg-ink-500" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <ViewCertificatesLink />
    </Section>
  );
}
