import Header from '@/components/header'
import Page from '@/components/page'
import Section from '@/components/section'
import React from 'react'

export default function ProjectsPage(): React.JSX.Element {
  return (
    <Page>
      <Header text="Projects" />
      <Section
        title="miditrackpad"
        link="https://github.com/joshuathompsonlindley/miditrackpad"
      >
        <p>
          Converts Mac trackpad pressure values to a virtual MIDI Control Change
          message.
        </p>
      </Section>
      <Section
        title="web-synth"
        link="https://github.com/joshuathompsonlindley/web-synth"
      >
        <p>A web-based synthesizer built with the Web Audio API.</p>
      </Section>
    </Page>
  )
}
