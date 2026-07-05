import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building software and intelligent systems for real-world impact."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
      >
        <motion.div variants={fadeUp} className="space-y-4">
          <p className="font-display text-2xl text-ink-950 dark:text-white">
            Bharati Vidyapeeth&apos;s College of Engineering, New Delhi
          </p>
          <p className="text-sm text-ink-500 dark:text-ink-400">
            Computer Science Undergraduate — AI Research; Intelligent Systems
            &amp; Software Development
          </p>
        </motion.div>

        <div className="space-y-5">
          {profile.about.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-base leading-relaxed text-ink-600 dark:text-ink-300"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
