"use client";

import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Filter,
  Search,
} from "lucide-react";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import SAS from "@/assets/images/SAS.png";
import DevToolsBox from "@/assets/images/DevToolsBox.png";
import NewsPortal from "@/assets/images/News_Portal.png";
import OnlineStore from "@/assets/images/OnlineStore.png";
import TeleHeal from "@/assets/images/TELEHEAL.png";
import AllyHub from "@/assets/images/AllyHub.png";
import IPGurdian from "@/assets/images/IPGurdian.png";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Projects data first
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
      githubUrl: "https://github.com/MRGDFK/ShutterArc-Studios-Website",
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
      technologies: [
        "ASP.NET",
        "MSSQL",
        "JavaScript",
        "HTML",
        "C#",
      ],
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
  ];

  // Calculate category counts dynamically after projects are defined
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return projects.length;
    return projects.filter((project) => project.category === categoryId).length;
  };

  const categories = [
    { id: "all", name: "All Projects", count: getCategoryCount("all") },
    {
      id: "web-app",
      name: "Web Applications",
      count: getCategoryCount("web-app"),
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      count: getCategoryCount("ui-ux"),
    },
    { id: "mobile", name: "Mobile Apps", count: getCategoryCount("mobile") },
    {
      id: "research",
      name: "Research Projects",
      count: getCategoryCount("research"),
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter((project) => project.featured);

  // Animation effect for filtering
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setAnimationKey((prev) => prev + 1);
    }, 200);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

  // Handle category change with animation
  const handleCategoryChange = (categoryId: string) => {
    if (categoryId !== selectedCategory) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedCategory(categoryId);
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <main className="py-16 md:py-24 mt-16 md:mt-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
              <span className="gradient-text text-sm font-medium">
                MY PORTFOLIO
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Featured Projects & Works
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills, creativity, and
              passion for building exceptional digital experiences.
            </p>
          </div>

          {/* Featured Projects */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
              Featured Projects
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-surface/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-accent/10 hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    <img
                      src={project.image.src}
                      alt={project.title}
                      className="w-full h-48 md:h-64 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-text-secondary">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            project.status === "Completed"
                              ? "bg-green-500/10 text-green-400"
                              : project.status === "In Progress"
                              ? "bg-yellow-500/10 text-yellow-400"
                              : "bg-blue-500/10 text-blue-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-text-primary font-medium mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="text-text-secondary text-sm flex items-start gap-2"
                        >
                          <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background/50 rounded-full text-xs text-text-secondary border border-accent/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Filters and Search */}
          <section className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-surface/50 border border-accent/20 rounded-lg focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-accent/10 transition-all duration-200 text-text-primary"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      selectedCategory === category.id
                        ? "bg-accent text-background shadow-lg shadow-accent/25"
                        : "bg-surface/50 text-text-secondary hover:text-accent hover:bg-surface/70"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* All Projects Grid */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
              All Projects ({filteredProjects.length})
            </h2>

            {filteredProjects.length === 0 ? (
              <div
                className={`text-center py-12 transition-all duration-300 ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <div className="w-16 h-16 bg-surface/50 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Search className="w-8 h-8 text-text-secondary" />
                </div>
                <h3 className="text-text-primary font-medium mb-2">
                  No projects found
                </h3>
                <p className="text-text-secondary">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              <div
                key={animationKey}
                className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-300 ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-surface/30 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-accent/20 transition-all duration-300 group cursor-pointer animate-fade-in"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    <div className="mb-4">
                      <img
                        src={project.image.src}
                        alt={project.title}
                        className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-accent transition-colors duration-200">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-text-secondary">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {project.year}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              project.status === "Completed"
                                ? "bg-green-500/10 text-green-400"
                                : project.status === "In Progress"
                                ? "bg-yellow-500/10 text-yellow-400"
                                : "bg-blue-500/10 text-blue-400"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 bg-accent/10 rounded flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-6 h-6 bg-accent/10 rounded flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-background/50 rounded text-xs text-text-secondary border border-accent/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-background/50 rounded text-xs text-text-secondary border border-accent/10">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="text-center mt-16 pt-16 border-t border-surface">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing
              projects. Let's discuss how we can work together to bring your
              ideas to life.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-accent hover:bg-accent-hover text-background px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Start a Project
              </a>
              <a
                href="/#about"
                className="border border-accent text-accent hover:bg-accent hover:text-background px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Tag className="w-4 h-4" />
                View Skills
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
