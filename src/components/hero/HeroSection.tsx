"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  GraduationCap,
  FileText,
  ArrowDown,
  Layers,
  Sparkles,
} from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import { HeroCanvasSlot } from "./HeroCanvasSlot";

export const HeroSection: React.FC = () => {
  // Roles for the typewriter animation
  const roles = [
    "Software Engineer",
    "Systems Architect",
    "Backend Specialist",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 85;

    if (!isDeleting && displayText === currentFullText) {
      typingSpeed = 2200; // Pause when fully typed
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500;
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentFullText.substring(0, prev.length - 1);
        } else {
          return currentFullText.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayText === currentFullText) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  const scrollToNext = () => {
    const nextSection =
      document.getElementById("capabilities") ||
      document.getElementById("tech-stack");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#070709] px-6 pt-24 pb-16 md:px-12"
    >
      {/* ReactBits Swappable Canvas Slot */}
      <HeroCanvasSlot />

      {/* Foreground Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start justify-center">
        {/* Top telemetry tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs text-white/50"
        >
          <span className="text-white/60">DHAKA, BANGLADESH</span>
        </motion.div>

        {/* Social Quick-Access Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 flex items-center gap-4 text-white"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-cream hover:text-cream hover:shadow-[0_0_20px_rgba(247,242,235,0.15)]"
          >
            <Github size={20} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-cream hover:text-cream hover:shadow-[0_0_20px_rgba(247,242,235,0.15)]"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={socialLinks.googleScholar}
            target="_blank"
            rel="noreferrer"
            aria-label="Google Scholar"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-cream hover:text-cream hover:shadow-[0_0_20px_rgba(247,242,235,0.15)]"
          >
            <GraduationCap size={20} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Resume / Curriculum Vitae"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-cream hover:text-cream hover:shadow-[0_0_20px_rgba(247,242,235,0.15)]"
          >
            <FileText size={20} />
          </a>
        </motion.div>

        {/* Editorial Display Typography Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-[clamp(2.6rem,9.5vw,8.5rem)] font-black tracking-[-0.04em] text-white uppercase leading-[0.92] select-none break-words"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typewriter Subtitle Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex items-baseline font-mono text-[clamp(1.2rem,2.8vw,2.2rem)] font-medium text-neutral-300"
        >
          <span className="text-cream mr-2"></span>
          <span>{displayText}</span>
          <span className="ml-1 inline-block h-[1.1em] w-2.5 bg-cream animate-cursor-blink align-middle" />
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="group absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-white/40 uppercase hover:text-cream transition-colors"
        aria-label="Scroll to capabilities"
      >
        <span>SCROLL TO DIVE</span>
        <ArrowDown
          size={14}
          className="text-cream transition-transform group-hover:translate-y-1"
        />
      </motion.button>
    </section>
  );
};
