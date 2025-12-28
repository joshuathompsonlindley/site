import Header from '@/components/header'
import Page from '@/components/page'
import Section from '@/components/section'
import Subheader from '@/components/subheader'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HomePage(): React.JSX.Element {
  return (
    <Page>
      <Header text="Hi, I'm Joshua Thompson-Lindley." />
      <Subheader
        text="a full-stack developer passionate about building elegant solutions to
        complex problems."
      />
      <Section>
        <p>
          I&apos;m an Engineering Lead at Darktrace, where I lead a team of 4
          people working on the{' '}
          <Link
            href="https://www.darktrace.com/forensic-acquisition-investigation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors"
            aria-label="FAI"
          >
            Forensic Acquisition & Investigation
          </Link>{' '}
          product. I also lead development of a{' '}
          <Link
            href="https://docs.cadosecurity.com/cado/discovery-import/cado-host/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors"
            aria-label="Cado Host"
          >
            forensic acquisition tool
          </Link>{' '}
          that captures and secures critical data from target systems.
        </p>
        <p>
          Before this, I was a Senior Software Engineer at Cado Security, where
          I designed the core processing engine and built the integration
          architecture that powers their cloud security platform, until
          Darktrace{' '}
          <Link
            href="https://www.darktrace.com/news/darktrace-announces-proposed-acquisition-of-cado-security-a-cloud-investigation-and-response-specialist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors"
            aria-label="Press Release"
          >
            acquired
          </Link>{' '}
          the team.
        </p>
      </Section>
      <Section title="Want to contact me?">
        <div className="flex gap-4 sm:gap-6">
          <Link
            href="https://github.com/joshuathompsonlindley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-stone-600 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joshuathompsonlindley/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-stone-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </Link>
        </div>
      </Section>
    </Page>
  )
}
