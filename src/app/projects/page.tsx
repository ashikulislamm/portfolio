"use client";

import { useState } from "react";
import { projects } from "@/data/portfolioData";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionHeader } from "@/components/portfolio/SectionHeader";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web App", "Blockchain", "Research", "Mobile"];

  const categoryValue = (label: string) => {
    if (label === "Web App") return "web-app";
    if (label === "Research") return "research";
    if (label === "Mobile") return "mobile";
    return label;
  };

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === categoryValue(filter),
        );

  const displayProjects = [...filteredProjects].reverse();

  const categoryCount = (label: string) => {
    if (label === "All") return projects.length;
    const value = categoryValue(label);
    return projects.filter((project) => project.category === value).length;
  };

  const featuredCount = projects.filter((project) => project.featured).length;
  const completedCount = projects.filter(
    (project) => project.status.toLowerCase() === "completed",
  ).length;

  return (
    <div className="min-h-screen bg-background text-neutral-100">
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-28 md:pt-32">
        <section className="pb-8">
          <SectionHeader
            comment="// 02 — projects_repository"
            title="Projects & Architecture"
            subtitle="Complete catalog of web applications, blockchain systems, and developer productivity tools engineered with modern tech stacks."
          />

          <div className="mt-6 grid max-w-3xl grid-cols-3 gap-3 font-mono text-xs">
            <div className="rounded-xl border border-border-subtle bg-card-bg p-3">
              <p className="text-neutral-500">total_projects</p>
              <p className="mt-1 text-xl font-bold text-neutral-200">{projects.length}</p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-card-bg p-3">
              <p className="text-neutral-500">featured</p>
              <p className="mt-1 text-xl font-bold text-accent">{featuredCount}</p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-card-bg p-3">
              <p className="text-neutral-500">stable_main</p>
              <p className="mt-1 text-xl font-bold text-neutral-200">{completedCount}</p>
            </div>
          </div>
        </section>

        {/* Filter Bar styled as IDE tabs */}
        <section className="pb-8">
          <div className="flex flex-wrap gap-2 border-b border-border-subtle pb-3">
            {categories.map((category) => {
              const isActive = filter === category;
              return (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-3.5 py-1.5 font-mono text-xs rounded-xl transition-colors ${
                    isActive
                      ? "border border-accent/40 bg-accent/10 text-accent font-semibold"
                      : "border border-border-subtle bg-card-bg text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  [{category.toLowerCase().replace(" ", "_")}] ({categoryCount(category)})
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between font-mono text-xs text-neutral-400">
            <span>showing {filteredProjects.length} result{filteredProjects.length > 1 ? "s" : ""}</span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                mode="catalog"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
