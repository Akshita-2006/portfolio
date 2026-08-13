import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
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
      <div className="relative space-y-10 pl-8 before:absolute before:bottom-2 before:left-1.25 before:top-2 before:w-px before:bg-ink-200 before:content-[''] dark:before:bg-night-600 sm:pl-10">
        {experience.map((entry, i) => (
          <motion.div
            key={entry.organization + entry.role}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ delay: i * 0.05 }}
            className="relative min-w-0"
          >
            <span className="absolute -left-8 top-2 h-2.5 w-2.5 rounded-full bg-lavender ring-4 ring-warm-white dark:ring-night-950 sm:-left-10" />

            <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
              <h3 className="min-w-0 wrap-break-word text-lg font-semibold leading-snug text-ink-950 dark:text-white">
                {entry.role}
              </h3>
              <div className="flex items-center justify-end">
                <span className="whitespace-nowrap text-right text-sm font-medium text-ink-500 dark:text-ink-400">
                  {entry.period}
                </span>
              </div>
            </div>
            <p className="mt-1 min-w-0 wrap-break-word text-sm font-medium text-ink-600 dark:text-ink-300">
              {entry.organization}
            </p>

            <ul className="mt-3 space-y-2">
              {entry.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex min-w-0 gap-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400"
                >
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink-400 dark:bg-ink-500" />
                  <span className="min-w-0 flex-1 wrap-break-word">{point}</span>
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
