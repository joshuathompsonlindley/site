import React from 'react'

export default function Header({ text }: { text: string }): React.JSX.Element {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
      {text}
    </h1>
  )
}
