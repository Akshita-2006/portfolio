import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { SkillsMarquee } from "@/components/ui/SkillsMarquee";
import { profile } from "@/data/profile";
import { stats } from "@/data/stats";
import { fadeUp, staggerContainer } from "@/utils/motion";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-linear-to-br from-lavender-soft/70 via-peach-soft/40 to-sage-soft/50 dark:from-lavender/10 dark:via-peach/5 dark:to-sage/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)] bg-[repeating-linear-gradient(120deg,rgba(124,92,210,0.08)_0px,rgba(124,92,210,0.08)_1px,transparent_1px,transparent_18px)] opacity-70 dark:opacity-30"
      />

      <div className="container-page pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1)}
            className="min-w-0"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-ink-600 dark:border-night-600 dark:bg-night-900/70 dark:text-ink-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
              </span>
              Open to internships, collaborations, and opportunities to build
              technology.
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base font-medium text-ink-600 sm:text-lg dark:text-ink-300"
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-500 dark:text-ink-400"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <LinkButton
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
              >
                <Download size={16} />
                Resume
              </LinkButton>
              <LinkButton href="#contact" variant="secondary">
                Contact
                <ArrowRight size={16} />
              </LinkButton>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12">
              <SkillsMarquee items={profile.skillsCarousel} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div className="absolute -inset-10 -z-10 rounded-4xl bg-linear-to-br from-lavender-soft via-peach-soft to-sage-soft opacity-60 blur-3xl dark:opacity-20" />
            <img
              src="/hero-portrait.png"
              alt={profile.name}
              className="h-auto w-full object-contain mask-[linear-gradient(to_bottom,black_0%,black_88%,transparent_99%)]"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling;
                fallback?.classList.remove("hidden");
                fallback?.classList.add("flex");
              }}
            />
            <div className="hidden h-96 w-full flex-col items-center justify-center gap-2 text-center text-ink-400 dark:text-ink-500">
              <span className="font-display text-lg">Portrait pending</span>
              <span className="max-w-50 text-xs">
                Drop your illustrated portrait at /public/hero-portrait.png
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.08, 0.5)}
          className="mx-auto mt-16 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-10 gap-y-6 border-t border-ink-200/70 pt-8 text-center dark:border-night-600/70"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex items-baseline gap-2.5"
            >
              <span className="font-display text-3xl font-semibold text-ink-950 sm:text-4xl dark:text-white">
                {stat.value}
              </span>
              <span className="text-sm text-ink-500 dark:text-ink-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
