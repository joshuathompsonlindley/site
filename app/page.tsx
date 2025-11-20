import { Github, Linkedin } from "lucide-react";
import React from "react";
export default function Page(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-stone-100 px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:px-24" role="main">
      <div className="max-w-2xl flex flex-col gap-y-6 sm:gap-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          Hi, I&apos;m Joshua Thompson-Lindley.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
          a full-stack developer passionate about building elegant solutions to complex problems.
        </p>
        <div className="space-y-6 text-base sm:text-lg text-black leading-relaxed">
          <p>
            I&apos;m a Specialist Software Engineer at Darktrace, where I lead development of a forensic acquisition tool that captures and secures critical data from target systems. I also plan sprints, building solutions to the challenges product brings to the table.
          </p>
          <p>
            Before this, I was a Senior Software Engineer at Cado Security, where I designed the core processing engine and built the integration architecture that powers their cloud security platform, until Darktrace acquired the team.
          </p>
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-black">
          Want to contact me?
        </h2>
        <div className="flex gap-4 sm:gap-6">
          <a
            href="https://github.com/joshuathompsonlindley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-stone-600 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/joshuathompsonlindley/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-stone-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>
        </div>
      </div>
    </main>
  );
}
