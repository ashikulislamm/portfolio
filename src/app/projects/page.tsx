"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, Code } from "lucide-react";
import SAS from "@/assets/images/SAS.png";
import DevToolsBox from "@/assets/images/DevToolsBox.png";
import NewsPortal from "@/assets/images/News_Portal.png";
import OnlineStore from "@/assets/images/OnlineStore.png";
import TeleHeal from "@/assets/images/TELEHEAL.png";
import AllyHub from "@/assets/images/AllyHub.png";
import IPGurdian from "@/assets/images/IPGurdian.png";
import Eventify from "@/assets/images/Eventify.png";
import GlobalXchange from "@/assets/images/GlobaXchange.png";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "ShutterArc Studios Landing Page",
      description:
        "Professional photography studio specializing in product photography. Modern, responsive website with elegant design. Built with Next.js for optimal performance and SEO. Built with Next.js for optimal performance and SEO.",
      image: SAS,
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "TypeScript",
      ],
      category: "web-app",
      status: "Completed",
      year: "2024",
      liveUrl: "https://shutterarcstudios.com/",
      githubUrl: null,
      featured: true,
      highlights: [
        "Professional Agency Portfolio for Showcases high-quality product",
        "Responsive Design , Mobile-first approach with elegant UI",
        "SEO Optimized , Fast loading and search engine friendly",
        "Contact Integration , Easy client inquiry system",
      ],
    },
    {
      id: 2,
      title: "DevToolbox – Productivity Suite",
      description:
        "DevToolsBox is a comprehensive web-based productivity suite designed specifically for developers and programmers. This powerful platform consolidates essential development tools into a single, intuitive interface.",
      image: DevToolsBox,
      technologies: ["React", "Node.js", "HTML", "Tailwind"],
      category: "web-app",
      status: "Completed",
      year: "2025",
      liveUrl: "https://ashikulislamm.github.io/DevToolsBox/",
      githubUrl: "https://github.com/ashikulislamm/DevToolsBox",
      featured: true,
      highlights: [
        "Real-time code formatting and validation",
        "Responsive design optimized for all devices",
        "Clean, intuitive interface for enhanced productivity",
        "Open-source project with active development",
      ],
    },
    {
      id: 3,
      title: "News Portal",
      description:
        "A modern, responsive news portal featuring real-time news articles, categorized content, and dynamic routing. Built with Next.js and integrated with content management system for seamless news publishing and reader engagement.",
      image: NewsPortal,
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Express.js",
        "Vercel",
        "MongoDB",
      ],
      category: "web-app",
      status: "Completed",
      year: "2025",
      liveUrl: "https://news-portal-ashik.vercel.app/",
      githubUrl: "https://github.com/ashikulislamm/News-Portal",
      featured: true,
      highlights: [
        "Dynamic news content with real-time updates",
        "Responsive design with modern UI/UX",
        "Category-based news filtering and organization",
        "Fast loading with Next.js optimization",
      ],
    },
    {
      id: 4,
      title: "E-Commerce Project",
      description:
        "A comprehensive e-commerce platform featuring product catalog, shopping cart, user reviews, and secure checkout system. Built with modern web technologies for optimal performance and user experience.",
      image: OnlineStore,
      technologies: ["HTML", "CSS", "PHP", "MySQL", "Jquery", "BootStrap"],
      category: "web-app",
      status: "Completed",
      year: "2023",
      liveUrl: "https://onlinestorewithreviews.great-site.net/",
      githubUrl: "https://github.com/ashikulislamm?tab=repositories",
      featured: false,
      highlights: [
        "Complete e-commerce functionality with product catalog",
        "User registration and authentication system",
        "Shopping cart and secure checkout process",
        "Product review and rating system",
        "Responsive design for all devices",
      ],
    },
    {
      id: 5,
      title: "TeleHeal - Mobile App",
      description:
        "A React Native mobile application for task management with offline sync, push notifications, and collaborative features.",
      image: TeleHeal,
      technologies: [
        "Android Studio",
        "Java",
        "Firebase",
        "Redux",
        "AsyncStorage",
      ],
      category: "mobile",
      status: "Completed",
      year: "2023",
      liveUrl: null,
      githubUrl:
        "https://github.com/ashikulislamm/Teleheal-24-7-Health-Care-App",
      featured: false,
      highlights: [
        "Cross-platform mobile application",
        "Offline-first architecture",
        "Real-time collaboration",
        "Push notifications",
      ],
    },
    {
      id: 6,
      title: "IPGurdian - Secured IP Management System",
      description:
        "Research project on intellectual property management using blockchain technology, IPFS, and smart contracts for secure and transparent IP trading.",
      image: IPGurdian,
      technologies: [
        "Go Ethereum",
        "IPFS",
        "Solidity",
        "React",
        "Web3.js",
        "Node.js",
      ],
      category: "research",
      status: "On Progress",
      year: "2024",
      liveUrl: null,
      githubUrl: "https://github.com/ashikulislamm/IPGurdian",
      featured: true,
      highlights: [
        "Secured IP management using blockchain",
        "Blockchain-based IP protection",
        "IPFS for decentralized storage",
        "Smart contract implementation",
      ],
    },
    {
      id: 7,
      title: "AllyHub - Inclusive Job Platform",
      description:
        "A research project focused on creating an inclusive job platform using blockchain technology for secure and transparent job matching.",
      image: AllyHub,
      technologies: ["ASP.NET", "MSSQL", "JavaScript", "HTML", "C#"],
      category: "web-app",
      status: "Completed",
      year: "2024",
      liveUrl: null,
      githubUrl: "https://github.com/ashikulislamm/ALlyHub",
      featured: false,
      highlights: [
        "Inclusive job matching platform for diverse candidates",
        "ASP.NET MVC architecture with secure authentication",
        "Accessibility-focused design and user experience",
        "Real-time job application tracking and notifications",
      ],
    },
    {
      id: 8,
      title: "Eventify - Event Management System",
      description:
        "A modern, full-stack event management platform that allows users to discover, create, and manage events seamlessly. Built with Next.js and PostgreSQL for optimal performance and scalability.",
      image: Eventify,
      technologies: [
        "NextJS",
        "PostgreSQL",
        "TypeScript",
        "TailwindCSS",
        "NodeJS",
        "ExpressJS",
      ],
      category: "web-app",
      status: "On Progress",
      year: "2026",
      liveUrl: "https://eventify-ashik.vercel.app/",
      githubUrl: "https://github.com/ashikulislamm/Eventify",
      featured: false,
      highlights: [
        "Comprehensive event discovery and management",
        "Next.js architecture with secure authentication",
        "Responsive design for all devices",
        "Real-time event tracking and notifications",
      ],
    },
    {
      id: 9,
      title: "GlobalXchange - Currency Exchange Rate Platform",
      description:
        "A modern, real-time currency converter and cryptocurrency dashboard built with Next.js 16, React 19, and TypeScript. Track live exchange rates for fiat currencies and cryptocurrencies with an intuitive, responsive interface.",
      image: GlobalXchange,
      technologies: [
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Binance API",
        "ExchangeRate-API",
      ],
      category: "web-app",
      status: "On Progress",
      year: "2026",
      liveUrl: "https://globalxchange-currency-converter.vercel.app/",
      githubUrl: "https://github.com/ashikulislamm/Currency-Converter",
      featured: true,
      highlights: [
        "Real-time currency and cryptocurrency conversion",
        "Next.js and TailwindCSS for modern UI/UX design",
        "Responsive design for all devices",
        "Real-time data fetching from Binance and ExchangeRate-API",
      ],
    },
  ];

  const categories = ["All", "Web App", "Blockchain", "Research", "Mobile"];

  const categoryLabel = (category: string) => {
    if (category === "web-app") return "Web App";
    if (category === "research") return "Research";
    if (category === "mobile") return "Mobile";
    return category;
  };

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

  const categoryCount = (label: string) => {
    if (label === "All") return projects.length;
    const value = categoryValue(label);
    return projects.filter((project) => project.category === value).length;
  };

  const featuredCount = projects.filter((project) => project.featured).length;
  const completedCount = projects.filter(
    (project) => project.status.toLowerCase() === "completed",
  ).length;

  const statusStyle = (status: string) => {
    if (status.toLowerCase() === "completed") {
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
    }
    return "border-amber-500/30 bg-amber-500/10 text-amber-300";
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-text-primary">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl" />
      </div>
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-28 md:pt-32">
        <section className="pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-5 inline-flex items-center rounded-full border border-border-subtle bg-secondary-bg px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-text-secondary">
              Curated Portfolio Collection
            </span>
            <h1
              className="mb-6 text-5xl font-bold md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              All Projects
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-text-secondary">
              A comprehensive collection of web applications, blockchain
              systems, and developer tools I&apos;ve built using modern
              technologies.
            </p>

            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border-subtle bg-secondary-bg/80 p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">Total Projects</p>
                <p className="mt-2 text-2xl font-bold text-white">{projects.length}</p>
              </div>
              <div className="rounded-xl border border-border-subtle bg-secondary-bg/80 p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">Featured</p>
                <p className="mt-2 text-2xl font-bold text-white">{featuredCount}</p>
              </div>
              <div className="rounded-xl border border-border-subtle bg-secondary-bg/80 p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">Completed</p>
                <p className="mt-2 text-2xl font-bold text-white">{completedCount}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="pb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-lg border px-6 py-2 font-medium transition-all ${
                  filter === category
                    ? "border-white bg-white text-black"
                    : "border-border-subtle bg-card-bg text-text-secondary hover:border-white hover:text-white"
                }`}
              >
                {category} ({categoryCount(category)})
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Showing {filteredProjects.length} project{filteredProjects.length > 1 ? "s" : ""}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-secondary-bg/95 p-6 transition-all hover:border-white"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative mb-5 overflow-hidden rounded-xl border border-border-subtle">
                  <img
                    src={project.image.src}
                    alt={project.title}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>

                {project.featured && (
                  <div className="mb-4">
                    <span className="rounded bg-white px-3 py-1 text-xs font-medium text-black">
                      Featured
                    </span>
                  </div>
                )}

                <h3
                  className="mb-3 text-2xl font-bold leading-tight text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>

                <p className="mb-4 flex-grow text-text-secondary">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-4 text-sm text-text-secondary">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{project.year}</span>
                  </div>
                  <div
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs leading-none ${statusStyle(project.status)}`}
                  >
                    <Users className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none">{project.status}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Code size={14} />
                    <span>{categoryLabel(project.category)}</span>
                  </div>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border-subtle bg-card-bg px-2 py-1 text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded border border-border-subtle bg-card-bg px-2 py-1 text-xs text-text-secondary">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="mb-6 space-y-2">
                  {project.highlights.slice(0, 2).map((highlight) => (
                    <p key={highlight} className="flex items-start gap-2 text-xs leading-relaxed text-text-secondary">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-white/70" />
                      {highlight}
                    </p>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-white transition-colors hover:text-text-secondary"
                    >
                      View Project
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-white transition-colors hover:text-text-secondary"
                    >
                      GitHub
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
