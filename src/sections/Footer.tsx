"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, GraduationCap, FileText, ArrowUp } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070709] px-4 xs:px-6 py-10 sm:py-12 md:px-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-col text-left">
            <span className="font-heading text-xl md:text-2xl font-black uppercase text-white break-words">
              {personalInfo.name}
            </span>
            <span className="font-mono text-xs text-white/40">
              SYSTEM ARCHITECT · SOFTWARE ENGINEER
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:bg-cream hover:text-black"
            >
              <Github size={17} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:bg-cream hover:text-black"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={socialLinks.googleScholar}
              target="_blank"
              rel="noreferrer"
              aria-label="Google Scholar"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:bg-cream hover:text-black"
            >
              <GraduationCap size={17} />
            </a>
            <button
              onClick={scrollToTop}
              title="Return to top"
              aria-label="Return to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:bg-cream hover:text-black"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-white/50">
          <p>© {currentYear} {personalInfo.name}</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/#home" className="hover:text-cream transition-colors">
              Home
            </a>
            <a href="/#capabilities" className="hover:text-cream transition-colors">
              Capabilities
            </a>
            <a href="/#history" className="hover:text-cream transition-colors">
              Chronology
            </a>
            <a href="/#projects" className="hover:text-cream transition-colors">
              Projects
            </a>
            <a href="/#contact" className="hover:text-cream transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
