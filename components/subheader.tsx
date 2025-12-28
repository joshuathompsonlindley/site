import React from 'react'

export default function Subheader({
  text,
}: {
  text: string
}): React.JSX.Element {
  return (
    <h2 className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
      {text}
    </h2>
  )
}
