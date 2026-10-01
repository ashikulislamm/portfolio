"use client";

import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/types/portfolio";

export interface ProjectCardProps {
  project: Project;
  index?: number;
  mode?: "home" | "catalog";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
}) => {
  const imageSrc =
    typeof project.image === "string"
      ? project.image
      : (project.image as { src: string })?.src || "";

  const projectTitle = project.title || project.name;
  const projectDesc = project.description || project.desc;
  const techList = project.stack || project.technologies || [];
  const liveLink = project.liveUrl || project.demo;
  const repoLink = project.githubUrl || project.github;
  const isCompleted = project.status.toLowerCase().includes("complete");

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-cream/40 hover:bg-white/[0.035] hover:shadow-[0_0_35px_rgba(247,242,235,0.06)]">
      <div>
        {/* Mockup Preview Container */}
        <div className="relative h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0c0c10]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={projectTitle}
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-mono text-[11px] text-white/30">
              PREVIEW UNAVAILABLE
            </div>
          )}

          {/* Gentle vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-25" />
          {/* Status Badge */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-2.5 py-0.5 font-mono text-[10px] text-white/90 backdrop-blur-md">
            <span className="uppercase">
              {project.year} · {project.status}
            </span>
          </div>
        </div>

        {/* Category & Index */}
        <div className="mt-4 flex items-center justify-between gap-3 font-mono text-[11px] text-white/40">
          <span>
            {String(index + 1).padStart(2, "0")} —{" "}
            {project.category.replace("-", " ").toUpperCase()}
          </span>
          {techList[0] && (
            <span className="truncate text-cream/80 font-medium">{techList[0]}</span>
          )}
        </div>

        {/* Title with Floating Tooltip on Hover */}
        <div className="relative group/title inline-block max-w-full mt-1">
          <h3
            className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-white transition-colors duration-200 group-hover/title:text-cream line-clamp-1 cursor-pointer"
          >
            {projectTitle}
          </h3>

          {/* Floating Tooltip */}
          <div className="pointer-events-none absolute bottom-full left-0 mb-2 z-30 opacity-0 invisible group-hover/title:opacity-100 group-hover/title:visible transition-all duration-200 flex flex-col rounded-xl bg-[#121216]/95 px-3 py-2 shadow-2xl backdrop-blur-xl w-max max-w-[280px] sm:max-w-xs text-left">
            <span className="font-heading text-xs font-bold text-cream uppercase leading-snug tracking-wide">
              {projectTitle}
            </span>
            {/* Tooltip caret */}
            <div className="absolute top-full left-4 -mt-px border-4 border-transparent border-t-[#121216]/95" />
          </div>
        </div>

        {/* Description */}
        <p className="mt-1.5 text-xs text-neutral-400 font-sans leading-relaxed line-clamp-2">
          {projectDesc}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {techList.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-neutral-300 transition-colors group-hover:border-white/20"
            >
              {tech}
            </span>
          ))}
          {techList.length > 4 && (
            <span className="rounded-md border border-white/5 bg-transparent px-1.5 py-0.5 font-mono text-[10px] text-white/40">
              +{techList.length - 4}
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
};
