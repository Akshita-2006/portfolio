import { useState } from "react";
import { motion } from "framer-motion";
import { Award, BadgeCheck, GraduationCap, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { certifications } from "@/data/certifications";
import type { CertificationEntry } from "@/data/types";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";

const ICONS = [Award, BadgeCheck, GraduationCap];
const TONES = [
  "bg-sage-soft text-ink-700 dark:bg-sage/15 dark:text-sage",
  "bg-lavender-soft text-ink-700 dark:bg-lavender/15 dark:text-lavender",
  "bg-peach-soft text-ink-700 dark:bg-peach/15 dark:text-peach",
];

export function Certifications() {
  const [active, setActive] = useState<CertificationEntry | null>(null);

  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications & programs"
      description="Click a card to preview the certificate."
      tint="sage"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certifications.map((cert, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.button
              key={cert.title}
              variants={fadeUp}
              onClick={() => setActive(cert)}
              className="text-left"
            >
              <Card className="h-full p-6 cursor-pointer">
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full ${TONES[i % TONES.length]}`}
                >
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-semibold text-ink-950 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                  {cert.issuer}
                </p>
                {cert.date && (
                  <p className="mt-2 text-xs uppercase tracking-wide text-ink-400 dark:text-ink-500">
                    {cert.date}
                  </p>
                )}
              </Card>
            </motion.button>
          );
        })}
      </motion.div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title}
      >
        {active && (
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-ink-200 bg-ink-50 dark:border-night-700 dark:bg-night-800">
              <img
                src={active.image}
                alt={active.title}
                className="max-h-[55vh] w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling;
                  fallback?.classList.remove("hidden");
                  fallback?.classList.add("flex");
                }}
              />
              <div className="hidden h-48 w-full flex-col items-center justify-center gap-1 text-center text-ink-400 dark:text-ink-500">
                <span className="text-sm font-medium">
                  Certificate image pending
                </span>
                <span className="max-w-60 text-xs">
                  Add the file at {active.image}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-ink-500 dark:text-ink-400">
                {active.issuer}
                {active.date && ` · ${active.date}`}
              </p>
              {active.credentialUrl && (
                <a
                  href={active.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-800 hover:underline dark:text-ink-100"
                >
                  Verify credential
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}
