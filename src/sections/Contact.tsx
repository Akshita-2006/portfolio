import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, Code2, Download, Send } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button, LinkButton } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const CONTACT_LINKS = [
  {
    key: "email",
    label: profile.email,
    icon: Mail,
    href: `mailto:${profile.email}`,
  },
  {
    key: "phone",
    label: profile.phone,
    icon: Phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    key: "github",
    label: "GitHub",
    icon: GithubIcon,
    href: profile.social.github,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: profile.social.linkedin,
  },
  {
    key: "leetcode",
    label: "LeetCode",
    icon: Code2,
    href: profile.social.leetcode,
  },
].filter((link) => !!link.label && !!link.href);

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `${data.message}\n\n— ${data.name} (${data.email})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="Interested in building products, solving challenging problems, and collaborating on innovative ideas."
      tint="lavender"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14"
      >
        <motion.div variants={fadeUp} className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {CONTACT_LINKS.map(({ key, label, icon: Icon, href }) => (
              <a
                key={key}
                href={href}
                target={
                  key === "email" || key === "phone" ? undefined : "_blank"
                }
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2.5 text-sm font-medium text-ink-600 transition-colors hover:border-ink-400 hover:text-ink-950 dark:border-night-600 dark:text-ink-300 dark:hover:border-night-500 dark:hover:text-white"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>

          <LinkButton
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            variant="primary"
          >
            <Download size={16} />
            Download Resume
          </LinkButton>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full rounded-xl border border-ink-200 bg-transparent px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-ink-500 dark:border-night-600 dark:text-white dark:focus:border-ink-300"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">Name is required.</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full rounded-xl border border-ink-200 bg-transparent px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-ink-500 dark:border-night-600 dark:text-white dark:focus:border-ink-300"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    A valid email is required.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: true })}
                  className="w-full resize-none rounded-xl border border-ink-200 bg-transparent px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-ink-500 dark:border-night-600 dark:text-white dark:focus:border-ink-300"
                  placeholder="Tell me a bit about what you have in mind"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    A message is required.
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto"
              >
                <Send size={15} />
                Send message
              </Button>

              {isSubmitSuccessful && (
                <p className="text-sm text-ink-500 dark:text-ink-400">
                  Your email client should have opened — thanks for reaching
                  out.
                </p>
              )}
            </form>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
}
