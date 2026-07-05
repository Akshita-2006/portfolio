import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 dark:border-night-600">
      <div className="container-page flex flex-col items-center gap-4 py-10 sm:flex-row sm:justify-between">
        <p className="flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
          <img src="/sticker.png" alt="" className="h-5 w-5 object-contain" />© {year} {profile.name}.
        </p>
        <div className="flex items-center gap-4">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-500 transition-colors hover:text-ink-950 dark:text-ink-400 dark:hover:text-white"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-500 transition-colors hover:text-ink-950 dark:text-ink-400 dark:hover:text-white"
            >
              <LinkedinIcon size={18} />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-ink-500 transition-colors hover:text-ink-950 dark:text-ink-400 dark:hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
