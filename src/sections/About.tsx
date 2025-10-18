"use client";
import { useState } from "react";
import {
  BookOpen,
  Wrench,
  Star,
  Gamepad2,
  Music,
  Dumbbell,
  Code2,
  Palette,
  Database,
} from "lucide-react";
import { DiMongodb, DiMysql, DiFirebase, DiJqueryLogo } from "react-icons/di";
import { LoadingLink } from "@/components/LoadingLink";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaNode,
  FaNodeJs,
  FaRoute,
  FaPhp,
} from "react-icons/fa";
export const AboutSection = () => {
  const [selectedTab, setSelectedTab] = useState("toolbox");

  const frontendSkills = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
    { name: "Tailwind", icon: Palette, color: "text-cyan-400" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: Code2, color: "text-gray-300" },
    { name: "jQuery", icon: DiJqueryLogo, color: "text-blue-400" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: FaNode, color: "text-green-600" },
    { name: "Express.js", icon: FaNodeJs, color: "text-gray-400" },
    { name: "Routing", icon: FaRoute, color: "text-blue-400" },
    { name: "MongoDB", icon: DiMongodb, color: "text-green-500" },
    { name: "MySQL", icon: DiMysql, color: "text-blue-600" },
    { name: "Firebase", icon: DiFirebase, color: "text-orange-400" },
    { name: "PHP", icon: FaPhp, color: "text-purple-600" },
    { name: "API Design", icon: Wrench, color: "text-accent" },
  ];

  const hobbies = [
    {
      name: "Reading",
      icon: BookOpen,
      description:
        "I enjoy reading books about technology and personal development.",
      color: "text-blue-400",
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      description:
        "Gaming helps me unwind and stay updated with the latest tech trends.",
      color: "text-purple-400",
    },
    {
      name: "Music",
      icon: Music,
      description:
        "I love listening to music while coding - it keeps me focused.",
      color: "text-pink-400",
    },
    {
      name: "Fitness",
      icon: Dumbbell,
      description:
        "Staying fit helps me maintain focus and energy for long coding sessions.",
      color: "text-orange-400",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
            <span className="text-accent text-sm font-medium">ABOUT ME</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            A Glimpse Into My World
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Learn more about who I am, what I do, and what inspires me.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Frontend Expertise Card */}
          <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-accent/10 hover:border-accent/20 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                Frontend Expertise
              </h3>
            </div>
            <p className="text-text-secondary mb-4 md:mb-6 text-sm md:text-base">
              Creating beautiful, responsive, and interactive user interfaces
              with modern technologies.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {frontendSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="bg-background/50 rounded-lg p-3 sm:p-4 border border-accent/10 hover:border-accent/30 transition-all duration-200 hover:scale-105 group/skill cursor-pointer"
                    title={skill.name}
                  >
                    <div className="text-center">
                      <IconComponent
                        className={`w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-2 ${skill.color} group-hover/skill:scale-110 transition-transform`}
                      />
                      <span className="text-xs sm:text-sm text-text-secondary group-hover/skill:text-accent transition-colors font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Backend Expertise Card */}
          <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-accent/10 hover:border-accent/20 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                Backend Expertise
              </h3>
            </div>
            <p className="text-text-secondary mb-4 md:mb-6 text-sm md:text-base">
              Building robust server-side applications, APIs, and database
              architectures for scalable solutions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {backendSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="bg-background/50 rounded-lg p-3 sm:p-4 border border-accent/10 hover:border-accent/30 transition-all duration-200 hover:scale-105 group/skill cursor-pointer"
                    title={skill.name}
                  >
                    <div className="text-center">
                      <IconComponent
                        className={`w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-2 ${skill.color} group-hover/skill:scale-110 transition-transform`}
                      />
                      <span className="text-xs sm:text-sm text-text-secondary group-hover/skill:text-accent transition-colors font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* My Services Section */}
        <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-accent/10 hover:border-accent/20 transition-all duration-300 overflow-hidden relative">
          {/* Animated Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                  My Services
                </h3>
                <div
                  className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
              <p className="text-text-secondary text-lg">
                Transforming ideas into digital experiences with cutting-edge
                solutions
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Frontend Design Service */}
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:scale-105 cursor-pointer group-hover:shadow-2xl group-hover:shadow-accent/10 h-full flex flex-col">
                  {/* Service Icon */}
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Palette className="w-8 h-8 text-accent group-hover:animate-pulse" />
                    </div>
                    <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                      Frontend Design
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      Creating stunning, responsive user interfaces with modern
                      frameworks like React, Next.js, and cutting-edge CSS
                      animations.
                    </p>
                  </div>

                  {/* Interactive Features List */}
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-accent">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                      <span>React & Next.js Development</span>
                    </div>
                    <div
                      className="flex items-center gap-2 text-xs text-accent"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                      <span>Responsive Design</span>
                    </div>
                    <div
                      className="flex items-center gap-2 text-xs text-accent"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                      <span>CSS Animations & Interactions</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Backend Development Service */}
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 cursor-pointer group-hover:shadow-2xl group-hover:shadow-blue-500/10 h-full flex flex-col">
                  {/* Service Icon */}
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Database className="w-8 h-8 text-blue-500 group-hover:animate-pulse" />
                    </div>
                    <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-blue-500 transition-colors">
                      Backend Development
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      Building robust server-side applications, APIs, and
                      database architectures that power your digital solutions.
                    </p>
                  </div>

                  {/* Interactive Features List */}
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-blue-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Node.js & Express.js</span>
                    </div>
                    <div
                      className="flex items-center gap-2 text-xs text-blue-500"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Database Design & APIs</span>
                    </div>
                    <div
                      className="flex items-center gap-2 text-xs text-blue-500"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Authentication & Security</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* UI/UX Design Service */}
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 cursor-pointer group-hover:shadow-2xl group-hover:shadow-purple-500/10 h-full flex flex-col">
                  {/* Service Icon */}
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-8 h-8 text-purple-500 group-hover:animate-pulse" />
                    </div>
                    <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-purple-500 transition-colors">
                      UI/UX Design
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      Crafting intuitive user experiences and beautiful
                      interfaces that engage users and drive conversions.
                    </p>
                  </div>

                  {/* Interactive Features List */}
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-purple-500">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
                      <span>User Experience Design</span>
                    </div>
                    <div
                      className="flex items-center gap-2 text-xs text-purple-500"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
                      <span>Wireframing & Prototyping</span>
                    </div>
                    <div
                      className="flex items-center gap-2 text-xs text-purple-500"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
                      <span>Brand Identity & Visual Design</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-full border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-text-primary font-medium group-hover:text-accent transition-colors">
                  Ready to bring your vision to life?
                </span>
                <div
                  className="w-3 h-3 bg-accent rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* More About Me Button */}
        <div className="text-center mt-8">
          <LoadingLink
            href="/about"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-background px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
          >
            <BookOpen className="w-4 h-4" />
            More About Me
          </LoadingLink>
        </div>
      </div>
    </section>
  );
};
