import React from 'react'

export default function SectionTitle({
  text,
}: {
  text: string
}): React.JSX.Element {
  return <h3 className="text-lg sm:text-xl font-semibold">{text}</h3>
}
