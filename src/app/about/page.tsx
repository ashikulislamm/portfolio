"use client";

import { motion } from "framer-motion";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import {
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Code,
  Coffee,
  BookOpen,
  Music,
  Terminal,
  Award,
  Zap,
  Heart,
  ExternalLink,
  Download,
} from "lucide-react";
import Me from "@/assets/images/Me.jpg";

export default function AboutPage() {
  const personalInfo = {
    name: "Ashikul Islam",
    title: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    experience: "2+ Years",
    email: "md.ashikul4040@gmail.com",
    phone: "+880 179 462 4361",
  };

  const stats = [
    { label: "Years of Experience", value: "2+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies Mastered", value: "15+" },
    { label: "Open Source Contributions", value: "50+" },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      level: 90,
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
      level: 85,
    },
    {
      category: "Blockchain",
      items: ["Solidity", "Hyperledger", "Web3.js", "Smart Contracts"],
      level: 80,
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "CI/CD", "Figma"],
      level: 85,
    },
  ];

  const interests = [
    {
      icon: <Code size={24} />,
      title: "Open Source",
      description: "Contributing to community projects",
    },
    {
      icon: <Coffee size={24} />,
      title: "Coffee",
      description: "Fuel for coding marathons",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Tech Blogs",
      description: "Writing about development",
    },
    {
      icon: <Music size={24} />,
      title: "Music",
      description: "Lo-fi beats while coding",
    },
  ];

  const values = [
    {
      icon: <Terminal size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and elegant solutions",
    },
    {
      icon: <Zap size={24} />,
      title: "Continuous Learning",
      description: "Staying updated with latest tech trends and best practices",
    },
    {
      icon: <Award size={24} />,
      title: "Quality First",
      description: "Delivering exceptional results that exceed expectations",
    },
    {
      icon: <Heart size={24} />,
      title: "Collaboration",
      description: "Building strong relationships and working as a team",
    },
  ];

  const milestones = [
    {
      year: "2025 - Present",
      title: "Technical Support and Integration Executive",
      company: "Chologhuri Limited",
      description:
        "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
    },
    {
      year: "2024 - 2025",
      title: "Technical Support Intern",
      company: "Chologhuri Limited",
      description:
        "Worked on developing and maintaining their websites and web applications using modern JavaScript frameworks.",
    },
  ];

  const academics = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Ahsanullah University of Science & Technology",
      duration: "2021 - 2025",
      grade: "",
      description:
        "Specialized in Software Engineering, Web Technologies, and Database Management Systems.",
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "National Ideal College",
      duration: "2018 - 2020",
      grade: "",
      description:
        "Concentrated on Mathematics, Physics, Chemistry, and Information & Communication Technology.",
    },
    {
      degree: "Secondary School Certificate (Science)",
      institution: "National Ideal School",
      duration: "2016 - 2018",
      grade: "",
      description:
        "Strong foundation in Mathematics, Science subjects, and early exposure to computer programming.",
    },
  ];

  const publications = [
    {
      title:
        "Leveraging Hyperledger Besu-Based Private Blockchain, IPFS, and NFTs for Secure and Transparent Intellectual Property Preservation and Trading",
      authors:
        "Gazi Maliha Raisa Noor, Md. Ashikul Islam, Saba Al Mukter Mahin, Saha Reno",
      publisher: "IEEE",
      year: "2025",
      type: "Conference Paper",
      status: "Published",
      link: "https://ieeexplore.ieee.org/abstract/document/11160067",
    },
  ];

  return (
    <div
      className="min-h-screen bg-background"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Profile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile Image */}
              <div className="w-64 h-64 rounded-full bg-[#1A1A1A] border-2 border-[#2A2A2A] mb-8 flex items-center justify-center mx-auto lg:mx-0 overflow-hidden">
                <img
                  src={Me.src}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h1
                className="text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                About Me
              </h1>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-[#A1A1A1]">
                  <MapPin size={18} />
                  <span style={{ fontFamily: "Inter, sans-serif" }}>
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[#A1A1A1]">
                  <Mail size={18} />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[#A1A1A1]">
                  <Briefcase size={18} />
                  <span style={{ fontFamily: "Inter, sans-serif" }}>
                    {personalInfo.title}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[#A1A1A1]">
                  <GraduationCap size={18} />
                  <span style={{ fontFamily: "Inter, sans-serif" }}>
                    Computer Science & Engineering
                  </span>
                </div>
              </div>

              <a
                href="https://drive.google.com/file/d/16OohJwNNFpsTOpvgGH7CWMqry5zlhHt6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Right - Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-8">
                <h2
                  className="text-3xl font-bold text-white mb-6"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Hello, I'm Ashikul Islam
                </h2>
                <div
                  className="space-y-4 text-[#A1A1A1]"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}
                >
                  <p>
                    A passionate full-stack developer specializing in building
                    exceptional digital experiences. With over 2+ years of
                    hands-on experience in web development, I've worked on
                    everything from sleek web applications to complex blockchain
                    systems.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and creating
                    solutions that not only work well but also provide an
                    excellent user experience. My approach combines technical
                    expertise with a deep understanding of user needs and modern
                    best practices.
                  </p>
                  <p>
                    When I'm not coding, you'll find me contributing to open
                    source projects, writing technical blog posts, or exploring
                    the latest developments in web3, AI, and blockchain
                    technologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-5xl font-bold text-white mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-[#A1A1A1]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-16 text-center"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Career Journey
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-[#2A2A2A] last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white"></div>

                <div className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-6 hover:border-white transition-all">
                  <div
                    className="text-sm text-[#A1A1A1] mb-2"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {milestone.year}
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {milestone.title}
                  </h3>
                  <div
                    className="text-[#A1A1A1] mb-3"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {milestone.company}
                  </div>
                  <p
                    className="text-[#A1A1A1]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-16 text-center"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Education
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {academics.map((academic, index) => (
              <motion.div
                key={academic.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-6 hover:border-white transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {academic.degree}
                    </h3>
                    <div
                      className="text-white mb-1"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {academic.institution}
                    </div>
                    <div
                      className="text-sm text-[#A1A1A1]"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {academic.duration} • {academic.grade}
                    </div>
                  </div>
                </div>
                <p
                  className="text-[#A1A1A1]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {academic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-16 text-center"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Technical Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-6"
              >
                <h3
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {skill.category}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-[#1A1A1A] text-[#A1A1A1] text-sm rounded border border-[#2A2A2A]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="relative h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="absolute top-0 left-0 h-full bg-white"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-16 text-center"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Research & Publications
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-6 hover:border-white transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {publication.title}
                    </h3>
                    <div
                      className="text-sm text-[#A1A1A1] mb-3 space-y-1"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <div>
                        <span className="font-medium text-white">Authors:</span>{" "}
                        {publication.authors}
                      </div>
                      <div>
                        <span className="font-medium text-white">
                          Publisher:
                        </span>{" "}
                        {publication.publisher}
                      </div>
                      <div>
                        <span className="font-medium text-white">Year:</span>{" "}
                        {publication.year}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded text-sm border border-green-500/20">
                      {publication.status}
                    </span>
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors mt-1"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-16 text-center"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            What I Value
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-6 hover:border-white transition-all text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                  <div className="text-black">{value.icon}</div>
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-[#A1A1A1] text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-16 text-center"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Beyond Code
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-6 hover:border-white transition-all"
              >
                <div className="text-white mb-3">{interest.icon}</div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {interest.title}
                </h3>
                <p
                  className="text-[#A1A1A1] text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111111] border-2 border-white rounded-lg p-12 text-center"
          >
            <div
              className="text-3xl font-bold text-white mb-4 leading-relaxed"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              "Code is like humor. When you have to explain it, it's bad."
            </div>
            <div
              className="text-[#A1A1A1]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              — Cory House
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
