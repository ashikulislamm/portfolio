"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const FeaturedSystems: React.FC = () => {
  // Curate newest flagship production systems from the bottom of the projects list
  const featuredList = useMemo(() => {
    const reversed = [...projects].reverse();
    const featured = reversed.filter((p) => p.featured && p.image != null);
    return featured.slice(0, 4);
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#000000] py-16 sm:py-20 px-4 sm:px-6 md:px-12 text-left"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <SectionHeader
          title="FEATURED SYSTEMS"
          action={
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-cream hover:text-white transition-colors shrink-0"
            >
              <span>View All ({projects.length}) Projects</span>
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          }
        />

        {/* Compact 2x2 Minimal Showcase Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {featuredList.map((project, index) => {
            if (!project) return null;

            const imageSrc =
              typeof project.image === "string"
                ? project.image
                : (project.image as { src: string })?.src || "";

            const liveLink = project.liveUrl || project.demo;
            const repoLink = project.githubUrl || project.github;

            return (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-cream/40 hover:bg-white/[0.035] hover:shadow-[0_0_30px_rgba(247,242,235,0.05)]"
              >
                <div>
                  {/* Compact Mockup Preview */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-lg border border-white/10 bg-[#0c0c10]">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={project.title || project.name}
                        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-mono text-[11px] text-white/30">
                        PREVIEW UNAVAILABLE
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-25" />

                    {/* Compact Corner Status Tag */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-2.5 py-0.5 font-mono text-[10px] text-white/90 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-cream animate-pulse" />
                      <span className="uppercase">
                        {project.year} · {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Meta Tag: Index & Primary Tech */}
                  <div className="mt-3.5 flex items-center justify-between gap-3 font-mono text-[11px] text-white/40">
                    <span>
                      0{index + 1} — {project.category.replace("-", " ").toUpperCase()}
                    </span>
                    <span className="truncate text-cream/80 font-medium">
                      {project.stack[0]}
                    </span>
                  </div>

                  {/* Title with Floating Tooltip on Hover */}
                  <div className="relative group/title inline-block max-w-full mt-1">
                    <h3
                      className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-white transition-colors duration-200 group-hover/title:text-cream line-clamp-1 cursor-pointer"
                    >
                      {project.title || project.name}
                    </h3>

                    {/* Floating Tooltip */}
                    <div className="pointer-events-none absolute bottom-full left-0 mb-2 z-30 opacity-0 invisible group-hover/title:opacity-100 group-hover/title:visible transition-all duration-200 flex flex-col rounded-xl border border-white/20 bg-[#121216]/95 px-3 py-2 shadow-2xl backdrop-blur-md w-max max-w-[280px] sm:max-w-xs text-left">
                      <span className="font-heading text-xs font-bold text-cream uppercase leading-snug tracking-wide">
                        {project.title || project.name}
                      </span>
                      {/* Tooltip caret */}
                      <div className="absolute top-full left-4 -mt-px border-4 border-transparent border-t-[#121216]/95" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-1.5 text-xs text-neutral-400 font-sans leading-relaxed line-clamp-2">
                    {project.desc || project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-neutral-300 transition-colors group-hover:border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="rounded-md border border-white/5 bg-transparent px-1.5 py-0.5 font-mono text-[10px] text-white/40">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-5 flex flex-wrap items-center gap-2.5 pt-3.5 border-t border-white/10">
                  {liveLink && liveLink !== "#" ? (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-cream px-3 py-1.5 font-mono text-[11px] font-semibold text-black transition-all hover:bg-white hover:shadow-[0_0_15px_rgba(247,242,235,0.2)] active:scale-95"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ) : null}

                  {repoLink ? (
                    <a
                      href={repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-white/80 transition-all hover:border-cream/50 hover:bg-white/[0.06] hover:text-white active:scale-95"
                    >
                      <Github size={13} className="text-cream" />
                      <span>Source Code</span>
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/projects"
            className="group inline-flex max-w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 sm:px-5 py-2.5 text-center font-mono text-[11px] sm:text-xs uppercase tracking-wider text-white/80 transition-all duration-200 hover:border-cream/60 hover:bg-cream/10 hover:text-cream active:scale-95"
          >
            <span>Explore Full Project Catalog ({projects.length})</span>
            <ArrowUpRight
              size={14}
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cream"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
