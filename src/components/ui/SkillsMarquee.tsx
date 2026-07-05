interface SkillsMarqueeProps {
  items: string[]
}

export function SkillsMarquee({ items }: SkillsMarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div className="relative w-full min-w-0 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-3">
        {loop.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex-none rounded-full border border-ink-200 bg-white/60 px-4 py-2 text-xs font-medium tracking-wide text-ink-600 dark:border-night-600 dark:bg-night-900/60 dark:text-ink-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
