import { Award, ArrowDown } from 'lucide-react'

export function ViewCertificatesLink() {
  return (
    <a
      href="#certifications"
      className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink-600 underline-offset-4 transition-colors hover:text-ink-950 hover:underline dark:text-ink-300 dark:hover:text-white"
    >
      <Award size={15} />
      See the certificates behind this
      <ArrowDown size={14} />
    </a>
  )
}
