"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export const BlueprintContact: React.FC = () => {
  return (
    <section id="contact" className="relative w-full bg-[#000000] py-28 md:py-36 text-center">
      <div className="site-container">
        <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-10 md:p-16 backdrop-blur-sm">
          {/* Subtle ambient glow */}
          <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-72 rounded-full bg-cream/10 blur-[80px]" />

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
            Whether you are looking to engineer resilient distributed systems, build modern web applications, or discuss new engineering roles, let&apos;s talk.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-cream px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(247,242,235,0.25)] active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 font-mono text-xs text-white/80 transition-all hover:border-cream/50 hover:bg-white/[0.06] hover:text-white"
            >
              <Mail size={15} className="text-cream" />
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
