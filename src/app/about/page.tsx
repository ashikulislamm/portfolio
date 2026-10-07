"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Timeline } from "@/components/portfolio/Timeline";
import { GitHubContributionGraph } from "@/components/portfolio/GitHubContributionGraph";
import { AnimatedTerminal } from "@/components/portfolio/AnimatedTerminal";
import {
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Download,
  ExternalLink,
  Github,
  Terminal,
  Code,
  Coffee,
  BookOpen,
  Music,
  Cpu,
} from "lucide-react";

import {
  personalInfo,
  aboutStats as stats,
  aboutSkills as skills,
  experiences,
  academics,
  publications,
  socialLinks,
} from "@/data/portfolioData";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "timeline" | "skills" | "publications">("overview");

  const interests = [
    {
      icon: <Code size={18} />,
      title: "Open Source",
      description: "Contributing to community packages and developer tools",
    },
    {
      icon: <Coffee size={18} />,
      title: "Clean Architecture",
      description: "Designing modular, testable software systems",
    },
    {
      icon: <BookOpen size={18} />,
      title: "Tech Writing",
      description: "Authoring technical docs and architecture guides",
    },
    {
      icon: <Music size={18} />,
      title: "Focus Music",
      description: "Ambient lo-fi & synthwave during deep coding sprints",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-neutral-100 animate-fade-in">
      <main className="site-container pb-20 sm:pb-24 pt-24 md:pt-32">
        {/* Header Profile Hero */}
        <section className="pb-10 border-b border-border-subtle">
          <div className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-8 md:gap-10 items-center md:items-start text-left">
            {/* Avatar image frame */}
            <div className="mx-auto md:mx-0 w-40 h-40 xs:w-44 xs:h-44 sm:w-48 sm:h-48 rounded-xl border border-border-subtle bg-secondary-bg overflow-hidden relative group">
              <img
                src={typeof personalInfo.avatarImage === "string" ? personalInfo.avatarImage : personalInfo.avatarImage.src}
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 rounded-md text-[10px] font-mono text-accent border border-accent/30">
                [status: active]
              </div>
            </div>

            <div className="min-w-0 space-y-4">
              <div>
                <p className="font-mono text-xs font-medium text-accent mb-1">{"// README.md"}</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-100 break-words">
                  {personalInfo.name}
                </h1>
                <p className="font-mono text-xs sm:text-sm text-neutral-400 mt-1">{personalInfo.title}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs text-neutral-400 max-w-2xl">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-accent shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="min-w-0 hover:text-white transition-colors truncate">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className="text-accent shrink-0" />
                  <span>{personalInfo.experience} Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={14} className="text-accent shrink-0" />
                  <span>B.Sc in CSE (AUST)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href={personalInfo.resumeUrl} icon={<Download size={15} />} isMono>
                  download_cv.pdf
                </Button>
                <Button variant="secondary" href={socialLinks.github} icon={<Github size={15} />} isMono>
                  github_profile
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs Bar */}
        <section className="-mx-4 xs:-mx-6 md:mx-0 px-4 xs:px-6 md:px-0 py-3 sm:py-6 border-b border-border-subtle sticky top-14 z-30 bg-background/95 backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <div className="-my-1 flex min-w-0 gap-2 overflow-x-auto py-1 font-mono text-xs [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap md:overflow-visible">
              <button
                onClick={() => setActiveTab("overview")}
                className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-xl transition-colors ${
                  activeTab === "overview"
                    ? "border border-accent/50 bg-accent/10 text-accent font-semibold"
                    : "border border-border-subtle bg-card-bg text-neutral-400 hover:text-white"
                }`}
              >
                overview.md
              </button>
              <button
                onClick={() => setActiveTab("timeline")}
                className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-xl transition-colors ${
                  activeTab === "timeline"
                    ? "border border-accent/50 bg-accent/10 text-accent font-semibold"
                    : "border border-border-subtle bg-card-bg text-neutral-400 hover:text-white"
                }`}
              >
                career_timeline.git
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-xl transition-colors ${
                  activeTab === "skills"
                    ? "border border-accent/50 bg-accent/10 text-accent font-semibold"
                    : "border border-border-subtle bg-card-bg text-neutral-400 hover:text-white"
                }`}
              >
                skills_matrix.json
              </button>
              <button
                onClick={() => setActiveTab("publications")}
                className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-xl transition-colors ${
                  activeTab === "publications"
                    ? "border border-accent/50 bg-accent/10 text-accent font-semibold"
                    : "border border-border-subtle bg-card-bg text-neutral-400 hover:text-white"
                }`}
              >
                research_papers.pdf
              </button>
            </div>

            <span className="hidden lg:inline-block shrink-0 font-mono text-[11px] text-neutral-500">
              [press tabs to inspect details]
            </span>
          </div>
        </section>

        {/* Tab Content 1: Overview */}
        {activeTab === "overview" && (
          <div className="space-y-12 py-8 text-left">
            {/* Bio Summary */}
            <section>
              <SectionHeader comment="// 01 — background" title="Engineering Philosophy" />
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                <div className="space-y-4 text-sm leading-relaxed text-neutral-300">
                  <p>
                    I am a software engineer focused on building robust full-stack web applications, scalable backend API ecosystems, and decentralized Web3 systems. I believe software craft is defined by simplicity, performance, and maintainable architecture.
                  </p>
                  <p className="text-neutral-400">
                    My core expertise spans modern JavaScript/TypeScript frameworks (React, Next.js, Node.js), enterprise frameworks (ASP.NET Core), and distributed databases (PostgreSQL, MongoDB, Redis). I specialize in translating complex system requirements into clean, production-ready code.
                  </p>
                </div>

                <AnimatedTerminal
                  filename="architect.config.ts"
                  language="TypeScript"
                  lines={[
                    'export const architectConfig = {',
                    '  architecture: "Clean / Domain-Driven",',
                    '  testing: "Automated & Unit Verification",',
                    '  ci_cd: "GitHub Actions & Vercel",',
                    '  database_strategy: "PostgreSQL + Prisma / Mongo",',
                    '};',
                  ]}
                  command="npm run build:check"
                  outputLines={["✓ [0 system errors]", "✓ [all 8 system checks passing]"]}
                />
              </div>
            </section>

            {/* Quick Metrics Grid */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0 rounded-xl border border-border-subtle bg-card-bg p-4 text-left">
                  <p className="text-neutral-500 text-[10px] uppercase tracking-wider">{stat.label}</p>
                  <p className="mt-1 text-xl sm:text-2xl font-bold text-accent">{stat.value}</p>
                </div>
              ))}
            </section>

            {/* Realtime GitHub Contribution Graph */}
            <section>
              <GitHubContributionGraph username="ashikulislamm" />
            </section>
          </div>
        )}

        {/* Tab Content 2: Career Timeline */}
        {activeTab === "timeline" && (
          <div className="py-8">
            <SectionHeader
              comment="// 02 — career_timeline"
              title="Experience & Education Timeline"
              subtitle="Interactive milestone log tracking professional software engineering roles and academic computer science background."
            />
            <Timeline experiences={experiences} academics={academics} />
          </div>
        )}

        {/* Tab Content 3: Skill Matrix */}
        {activeTab === "skills" && (
          <div className="py-8 space-y-8 text-left">
            <SectionHeader
              comment="// 03 — technical_skills"
              title="Skill Matrix & Proficiency"
              subtitle="Engineering stack categorized by frontend, backend, database architectures, and DevOps tooling."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="min-w-0 rounded-xl border border-border-subtle bg-card-bg p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-mono text-sm font-semibold text-neutral-200 flex items-center gap-2">
                      <Cpu size={16} className="text-accent" />
                      {skillGroup.category}
                    </h3>
                    <span className="font-mono text-xs text-accent font-bold">{skillGroup.level}%</span>
                  </div>

                  <div className="w-full bg-[#1c1c1c] h-2 rounded-full overflow-hidden mb-5 border border-[#262626]">
                    <div className="bg-accent h-full rounded-full transition-all duration-500" style={{ width: `${skillGroup.level}%` }} />
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item) => (
                      <Badge key={item} variant="tech">
                        {item.toLowerCase()}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 4: Research Papers */}
        {activeTab === "publications" && (
          <div className="py-8 space-y-6 text-left">
            <SectionHeader
              comment="// 04 — research_publications"
              title="IEEE Conference Papers"
              subtitle="Peer-reviewed research contributions in computer science and blockchain applications."
            />

            <div className="grid grid-cols-1 gap-6">
              {publications.map((pub, idx) => (
                <div key={idx} className="min-w-0 rounded-xl border border-border-subtle bg-card-bg p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <Badge variant="status" statusType="completed">{pub.status}</Badge>
                    <span className="font-mono text-xs text-neutral-500">{pub.publisher} ({pub.year})</span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-100 mb-3 leading-snug">{pub.title}</h3>

                  <div className="space-y-2 font-mono text-xs text-neutral-400 mb-6">
                    <p><span className="text-neutral-500">Authors:</span> {pub.authors}</p>
                    {pub.doi && <p className="break-all"><span className="text-neutral-500">DOI:</span> {pub.doi}</p>}
                    {pub.description && <p className="font-sans text-xs text-neutral-400 mt-2">{pub.description}</p>}
                  </div>

                  <Button variant="secondary" href={pub.link} icon={<ExternalLink size={14} />} isMono>
                    read_paper_pdf
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interests & Beyond Code Section */}
        <section className="py-12 border-t border-border-subtle text-left">
          <SectionHeader comment="// 05 — beyond_code" title="Engineering Culture & Hobbies" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((item) => (
              <div key={item.title} className="rounded-xl border border-border-subtle bg-card-bg p-5 transition-colors hover:border-neutral-700">
                <div className="text-accent mb-3">{item.icon}</div>
                <h3 className="font-mono text-xs font-bold text-neutral-200 mb-1">{item.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
