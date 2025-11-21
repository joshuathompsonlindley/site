import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function Page(): React.JSX.Element {
  return (
    <main
      className="min-h-screen px-8 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-28"
      role="main"
    >
      <div className="max-w-2xl flex flex-col gap-y-6 sm:gap-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          Hi, I&apos;m Joshua Thompson-Lindley.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
          a full-stack developer passionate about building elegant solutions to
          complex problems.
        </p>
        <div className="space-y-6 text-base sm:text-lg text-black leading-relaxed">
          <p>
            I&apos;m a Specialist Software Engineer at Darktrace, where I lead
            development of a{" "}
            <Link
              href="https://docs.cadosecurity.com/cado/discovery-import/cado-host/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
              aria-label="Cado Host"
            >
              forensic acquisition tool
            </Link>{" "}
            that captures and secures critical data from target systems. I also
            plan sprints and lead technical strategy , building solutions to the
            challenges product brings to the table.
          </p>
          <p>
            Before this, I was a Senior Software Engineer at Cado Security,
            where I designed the core processing engine and built the
            integration architecture that powers their cloud security platform,
            until Darktrace{" "}
            <Link
              href="https://www.darktrace.com/news/darktrace-announces-proposed-acquisition-of-cado-security-a-cloud-investigation-and-response-specialist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
              aria-label="Press Release"
            >
              acquired
            </Link>{" "}
            the team.
          </p>
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-black">
          Want to contact me?
        </h2>
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
      </div>
    </main>
  );
}
