"use client";

import React, { useState } from "react";
import { ExperienceItem, AcademicItem } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, GraduationCap, Calendar, ChevronRight } from "lucide-react";

export interface CombinedTimelineItem {
  id: string;
  type: "experience" | "academic";
  year: string;
  title: string;
  subtitle: string; // company or institution
  description?: string;
  highlights?: string[];
  tags?: string[];
  status?: string;
}

export interface TimelineProps {
  experiences: ExperienceItem[];
  academics: AcademicItem[];
}

export const Timeline = ({ experiences, academics }: TimelineProps) => {
  const [filter, setFilter] = useState<"all" | "experience" | "academic">("all");
  const [activeView, setActiveView] = useState<"timeline" | "cards">("timeline");

  // Combine and format timeline items
  const timelineItems: CombinedTimelineItem[] = [
    ...experiences.map((exp, idx) => ({
      id: `exp-${idx}`,
      type: "experience" as const,
      year: exp.year,
      title: exp.title,
      subtitle: exp.company,
      description: exp.description,
      highlights: exp.highlights,
      tags: exp.company === "Chologhuri Limited" ? ["React", "Node.js", "Express", "REST APIs", "AWS"] : [],
      status: idx === 0 ? "active_role" : "completed",
    })),
    ...academics.map((acad, idx) => ({
      id: `acad-${idx}`,
      type: "academic" as const,
      year: acad.duration,
      title: acad.degree,
      subtitle: acad.institution,
      description: acad.description,
      tags: ["Computer Science", "Algorithms", "Software Engineering", "DBMS"],
      status: "graduated",
    })),
  ];

  const filteredItems = timelineItems.filter((item) => {
    if (filter === "experience") return item.type === "experience";
    if (filter === "academic") return item.type === "academic";
    return true;
  });

  return (
    <div className="space-y-6 text-left">
      {/* Controls: Filter & View Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-xl transition-colors ${
              filter === "all"
                ? "border border-accent/50 bg-accent/10 text-accent font-semibold"
                : "border border-border-subtle bg-card-bg text-neutral-400 hover:text-white"
            }`}
          >
            [all_milestones] ({timelineItems.length})
          </button>
          <button
            onClick={() => setFilter("experience")}
            className={`px-3 py-1.5 rounded-xl transition-colors ${
              filter === "experience"
                ? "border border-accent/50 bg-accent/10 text-accent font-semibold"
                : "border border-border-subtle bg-card-bg text-neutral-400 hover:text-white"
            }`}
          >
            [work_experience] ({experiences.length})
          </button>
          <button
            onClick={() => setFilter("academic")}
            className={`px-3 py-1.5 rounded-xl transition-colors ${
              filter === "academic"
                ? "border border-accent/50 bg-accent/10 text-accent font-semibold"
                : "border border-border-subtle bg-card-bg text-neutral-400 hover:text-white"
            }`}
          >
            [academics] ({academics.length})
          </button>
        </div>

        {/* View Switcher */}
        <div className="flex gap-1 font-mono text-xs border border-border-subtle bg-[#121212] p-1 rounded-xl">
          <button
            onClick={() => setActiveView("timeline")}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              activeView === "timeline" ? "bg-white/10 text-accent font-semibold" : "text-neutral-400 hover:text-white"
            }`}
          >
            timeline_tree
          </button>
          <button
            onClick={() => setActiveView("cards")}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              activeView === "cards" ? "bg-white/10 text-accent font-semibold" : "text-neutral-400 hover:text-white"
            }`}
          >
            detailed_cards
          </button>
        </div>
      </div>

      {/* Render Mode: Timeline Tree */}
      {activeView === "timeline" && (
        <div className="relative pl-6 sm:pl-8 border-l border-border-subtle space-y-10 my-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              {/* Git Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex items-center justify-center">
                <div
                  className={`h-4 w-4 rounded-full border-2 bg-background flex items-center justify-center transition-colors ${
                    item.status === "active_role"
                      ? "border-accent text-accent animate-pulse"
                      : "border-neutral-600 text-neutral-500 group-hover:border-accent group-hover:text-accent"
                  }`}
                >
                  <div className={`h-1.5 w-1.5 rounded-full ${item.status === "active_role" ? "bg-accent" : "bg-neutral-600"}`} />
                </div>
              </div>

              {/* Node Card Container */}
              <div className="rounded-xl border border-border-subtle bg-card-bg p-5 transition-colors duration-200 hover:border-neutral-700">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
                    {item.type === "experience" ? (
                      <Briefcase size={14} className="text-accent" />
                    ) : (
                      <GraduationCap size={14} className="text-accent" />
                    )}
                    <span className="text-accent font-semibold">{item.subtitle}</span>
                    <span className="text-neutral-600">•</span>
                    <span>{item.type.toUpperCase()}</span>
                  </div>
                  <span className="font-mono text-xs text-neutral-400 bg-secondary-bg px-2.5 py-0.5 rounded-lg border border-border-subtle flex items-center gap-1">
                    <Calendar size={12} />
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-100 mb-2">{item.title}</h3>

                {item.description && (
                  <p className="text-xs text-neutral-300 mb-3 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                )}

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mb-4 space-y-1.5 font-mono text-xs text-neutral-400">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight size={14} className="mt-0.5 shrink-0 text-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1e1e1e]">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="tech">
                        {tag.toLowerCase()}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Render Mode: Detailed Cards */}
      {activeView === "cards" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-border-subtle bg-card-bg p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs text-accent font-medium flex items-center gap-1.5">
                    {item.type === "experience" ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                    {item.subtitle}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-400">{item.year}</span>
                </div>
                <h3 className="text-base font-bold text-neutral-100 mb-2">{item.title}</h3>
                {item.description && (
                  <p className="text-xs text-neutral-400 mb-4 leading-relaxed">{item.description}</p>
                )}
              </div>

              {item.highlights && item.highlights.length > 0 && (
                <div className="space-y-1 pt-3 border-t border-[#202020] font-mono text-[11px] text-neutral-400">
                  {item.highlights.map((h, i) => (
                    <p key={i} className="flex items-start gap-1">
                      <span className="text-accent">{">"}</span>
                      <span>{h}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
