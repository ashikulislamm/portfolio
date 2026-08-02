"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa6";

import {
  personalInfo,
  socialLinks,
  homePageProjects,
  experiences,
  publications,
  heroSkills,
} from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { TerminalCard } from "@/components/portfolio/TerminalCard";
import { SocialButton } from "@/components/portfolio/SocialButton";

const Hero = () => (
  <section
    id="home"
    className="mx-auto grid max-w-7xl scroll-mt-28 gap-12 px-6 pb-20 pt-32 md:grid-cols-2 md:items-center"
  >
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-left"
    >
      <p className="mb-3 font-mono text-xs font-medium text-accent">
        {"// software_engineer_portfolio"}
      </p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-100 md:text-6xl">
        Ashikul Islam
      </h1>
      <h2 className="mb-4 font-mono text-base text-neutral-400">
        {personalInfo.title}
      </h2>
      <p className="mb-6 max-w-lg text-sm leading-relaxed text-neutral-400">
        {personalInfo.bioSummary}
      </p>
      <div className="mb-8 flex flex-wrap gap-1.5">
        {heroSkills.map((tech) => (
          <Badge key={tech} variant="tech">
            {tech.toLowerCase()}
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" href="/projects">
          View Projects
        </Button>
        <Button
          variant="secondary"
          href={personalInfo.resumeUrl}
          icon={<FileText size={16} />}
          isMono
        >
          Download CV
        </Button>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
    >
      <TerminalCard personalInfo={personalInfo} filename="developer.ts" />
    </motion.div>
  </section>
);

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Globe size={18} />,
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux", "Framer Motion"],
    },
    {
      title: "Backend",
      icon: <Code2 size={18} />,
      skills: ["Node.js", "Express", "ASP.NET Core", "REST APIs", "GraphQL", "WebSockets"],
    },
    {
      title: "Database",
      icon: <Database size={18} />,
      skills: ["PostgreSQL", "MongoDB", "MSSQL", "Redis", "Firebase"],
    },
    {
      title: "DevOps & Tools",
      icon: <Cpu size={18} />,
      skills: ["Docker", "GitHub Actions", "AWS", "Vercel", "Linux", "Git"],
    },
  ];

  return (
    <section id="tech-stack" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-16">
      <SectionHeader comment="// 01 — tech_stack" title="Technologies & Expertise" />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded border border-border-subtle bg-card-bg p-5 transition-colors hover:border-neutral-700"
          >
            <div className="mb-4 flex items-center gap-2.5 text-neutral-200">
              <span className="text-accent">{cat.icon}</span>
              <h3 className="font-mono text-sm font-semibold">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <Badge key={skill} variant="tech">
                  {skill.toLowerCase()}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-16">
      <SectionHeader
        comment="// 02 — featured_projects"
        title="Software Engineering Work"
        action={
          <Button
            variant="secondary"
            href="/projects"
            icon={<ExternalLink size={14} />}
            iconPosition="right"
            isMono
          >
            view_all_projects
          </Button>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        {homePageProjects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} mode="home" />
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const currentExperience = experiences[0];

  return (
    <section id="experience" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-16">
      <SectionHeader comment="// 03 — career_timeline" title="Work History" />
      <div className="space-y-8">
        <div className="relative border-l border-border-subtle pl-6">
          <div className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-accent" />
          <div className="mb-2">
            <span className="font-mono text-xs text-neutral-400">{currentExperience.year}</span>
            <h3 className="text-lg font-bold text-neutral-100">{currentExperience.title}</h3>
            <p className="font-mono text-xs text-accent">{currentExperience.company}</p>
          </div>
          <ul className="max-w-2xl space-y-2 text-xs text-neutral-400">
            {currentExperience.highlights?.map((highlight, index) => (
              <li key={index} className="flex gap-2">
                <ChevronRight size={14} className="mt-0.5 shrink-0 text-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Research = () => {
  const publication = publications[0];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16" id="research">
      <SectionHeader comment="// 04 — publications" title="IEEE Conference Paper" />
      <div className="rounded border border-border-subtle bg-card-bg p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2 font-mono text-xs text-neutral-400">
              <GraduationCap size={14} className="text-accent" />
              <span>{publication.type.toUpperCase()} - {publication.publisher} ({publication.year})</span>
            </div>
            <h3 className="mb-3 text-lg font-bold text-neutral-100 leading-snug">
              {publication.title}
            </h3>
            <div className="mb-5 space-y-1 font-mono text-xs text-neutral-400">
              {publication.doi && (
                <p>
                  <span className="text-neutral-500">DOI:</span> {publication.doi}
                </p>
              )}
              {publication.description && <p className="font-sans text-xs text-neutral-400">{publication.description}</p>}
            </div>
            <Button
              variant="secondary"
              href={publication.link}
              icon={<FileText size={15} />}
              isMono
            >
              read_paper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader
        comment="// 05 — profile_overview"
        title="About & Engineering Philosophy"
        action={
          <Button
            variant="secondary"
            href="/about"
            icon={<ExternalLink size={14} />}
            iconPosition="right"
            isMono
          >
            read_full_readme
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded border border-border-subtle bg-card-bg p-6 text-left">
          <p className="mb-4 text-sm leading-relaxed text-neutral-300">
            I build digital products that are engineered for growth and crafted for humans. From frontend
            polish to backend robustness, I focus on turning complex ideas into experiences users instantly trust.
          </p>
          <p className="mb-6 text-sm leading-relaxed text-neutral-400">
            My sweet spot is where product thinking meets deep engineering: scalable web apps, API ecosystems,
            and blockchain-powered systems that solve meaningful problems without sacrificing speed or simplicity.
          </p>

          <div className="grid gap-3 grid-cols-3 border-t border-[#202020] pt-4">
            <div>
              <p className="font-mono text-[10px] uppercase text-neutral-500">Experience</p>
              <p className="mt-1 font-mono text-lg font-bold text-accent">{personalInfo.experience}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase text-neutral-500">Projects</p>
              <p className="mt-1 font-mono text-lg font-bold text-neutral-200">20+</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase text-neutral-500">Focus</p>
              <p className="mt-1 font-mono text-sm font-semibold text-neutral-200">Web & Web3</p>
            </div>
          </div>
        </div>

        <aside className="rounded border border-border-subtle bg-secondary-bg p-6 font-mono text-xs text-left">
          <div className="mb-3 flex items-center gap-2 border-b border-[#202020] pb-3 text-neutral-400">
            <Terminal size={14} className="text-accent" />
            <span>developer.json</span>
          </div>

          <div className="space-y-2 text-neutral-300">
            <p><span className="text-neutral-500">&quot;name&quot;:</span> &quot;{personalInfo.name}&quot;</p>
            <p><span className="text-neutral-500">&quot;role&quot;:</span> &quot;{personalInfo.role}&quot;</p>
            <p><span className="text-neutral-500">&quot;location&quot;:</span> &quot;{personalInfo.location}&quot;</p>
            <p><span className="text-neutral-500">&quot;status&quot;:</span> <span className="text-accent">&quot;{personalInfo.status}&quot;</span></p>
          </div>

          <div className="mt-6 border-t border-[#202020] pt-4">
            <p className="mb-3 text-[10px] uppercase tracking-wider text-neutral-500">
              Profiles
            </p>
            <div className="grid gap-2 grid-cols-2">
              <SocialButton name="LinkedIn" href={socialLinks.linkedin} icon={<Linkedin size={14} />} variant="card" />
              <SocialButton name="GitHub" href={socialLinks.github} icon={<Github size={14} />} variant="card" />
              <SocialButton name="Facebook" href={socialLinks.facebook} icon={<FaFacebook className="text-[14px]" />} variant="card" />
              <SocialButton name="Email" href={`mailto:${personalInfo.email}`} icon={<Mail size={14} />} variant="card" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-16 text-left">
    <div className="rounded border border-border-subtle bg-card-bg p-8 md:p-12">
      <p className="mb-2 font-mono text-xs font-medium text-accent">{"// 06 — initiate_contact"}</p>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-100">
        Let&apos;s build something great together.
      </h2>
      <p className="mb-8 max-w-xl text-sm leading-relaxed text-neutral-400">
        Currently open to full-stack engineering roles, technical advisory, and software collaboration. Send a direct message or connect via email.
      </p>
      <div className="mb-8 flex flex-wrap gap-4 font-mono text-xs">
        <SocialButton name={personalInfo.email} href={`mailto:${personalInfo.email}`} icon={<Mail size={14} />} variant="text-link" />
        <SocialButton name="LinkedIn" href={socialLinks.linkedin} icon={<Linkedin size={14} />} variant="text-link" />
        <SocialButton name="GitHub" href={socialLinks.github} icon={<Github size={14} />} variant="text-link" />
      </div>
      <Button variant="primary" href="/contact" icon={<Mail size={16} />} isMono>
        send_message
      </Button>
    </div>
  </section>
);

export const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <div className="space-y-8">
        <TechStack />
        <Projects />
        <Experience />
        <Research />
        <About />
        <ContactSection />
      </div>
    </div>
  );
};
