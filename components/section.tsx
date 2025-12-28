import SectionTitle from '@/components/section-title'
import Link from 'next/link'
import React from 'react'

export default function Section({
  title,
  link,
  children,
}: {
  title?: string
  link?: string
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <section className="space-y-6 text-base sm:text-lg text-black leading-relaxed">
      {title &&
        (link ? (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            <SectionTitle text={title} />
          </Link>
        ) : (
          <SectionTitle text={title} />
        ))}
      {children}
    </section>
  )
}
