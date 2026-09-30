"use client";

import React, { useState, useMemo } from "react";
import { projects } from "@/data/portfolioData";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Layers, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { label: "All Systems", value: "all" },
    { label: "Web Applications", value: "web-app" },
    { label: "Blockchain & Research", value: "research" },
    { label: "Mobile Apps", value: "mobile" },
  ];

  // Latest projects are added to the bottom of the array, so reverse to show newest first at the top
  const filteredProjects = useMemo(() => {
    const reversed = [...projects].reverse();
    if (filter === "all") return reversed;
    return reversed.filter((project) => project.category === filter);
  }, [filter]);

  const getCategoryCount = (val: string) => {
    if (val === "all") return projects.length;
    return projects.filter((p) => p.category === val).length;
  };

  const featuredCount = projects.filter((p) => p.featured).length;
  const completedCount = projects.filter((p) =>
    p.status.toLowerCase().includes("complete")
  ).length;

  return (
    <div className="min-h-screen bg-background text-neutral-100">
      <main className="mx-auto max-w-7xl px-6 pb-28 pt-28 md:pt-36">
        {/* Editorial Section Header */}
        <section className="mb-12 text-left">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Projects & Architecture
          </h1>
          <p className="mt-3 max-w-2xl text-base text-neutral-400 font-sans leading-relaxed">
            A comprehensive catalog of production web applications, distributed
            systems, developer productivity suites, and blockchain research.
          </p>
        </section>

        {/* Minimalist Filter Navigation */}
        <section className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = filter === cat.value;
              const count = getCategoryCount(cat.value);

              if (count === 0 && cat.value !== "all") return null;

              return (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-cream/15 text-cream font-semibold shadow-[0_0_20px_rgba(247,242,235,0.15)]"
                      : "border border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[10px] ${
                      isActive
                        ? "bg-cream text-black font-bold"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="font-mono text-xs text-white/40">
            Showing {filteredProjects.length} of {projects.length} systems
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          {filteredProjects.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center text-white/40 font-mono text-xs">
              No systems found matching this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
