import Navbar from '@/components/navbar'
import React from 'react'

export default function Page({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen px-8 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-28"
        role="main"
      >
        <div className="max-w-2xl flex flex-col gap-y-6 sm:gap-y-8">
          {children}
        </div>
      </main>
    </>
  )
}
