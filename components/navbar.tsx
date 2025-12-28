import Link from 'next/link'
import React from 'react'

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="w-full px-8 py-8 sm:px-10 md:px-16 lg:px-28">
      <div className="mx-auto flex items-center justify-between">
        <div className="space-x-6">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-500 hover:text-gray-600 transition-colors"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}
