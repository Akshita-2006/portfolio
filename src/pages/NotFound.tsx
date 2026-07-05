import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-6xl text-ink-950 dark:text-white">404</p>
      <p className="mt-3 text-ink-500 dark:text-ink-400">
        This page doesn&apos;t exist.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-ink-950 px-6 py-3 text-sm font-medium text-warm-white transition-colors hover:bg-ink-800 dark:bg-lavender dark:text-ink-950 dark:hover:bg-lavender-soft"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
