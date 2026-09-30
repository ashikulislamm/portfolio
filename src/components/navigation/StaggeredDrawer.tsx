"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, GraduationCap, FileText, X } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";

interface StaggeredDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

export const StaggeredDrawer: React.FC<StaggeredDrawerProps> = ({
  isOpen,
  onClose,
  activeSection = "home",
}) => {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const navLinks = [
    { num: "01", label: "HOME", href: "/#home", id: "home" },
    { num: "02", label: "CAPABILITIES", href: "/#capabilities", id: "capabilities" },
    { num: "03", label: "CHRONOLOGY", href: "/#history", id: "history" },
    { num: "04", label: "PROJECTS", href: "/#projects", id: "projects" },
    { num: "05", label: "RESEARCH", href: "/#research", id: "research" },
    { num: "06", label: "CONTACT", href: "/#contact", id: "contact" },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Staggered Pre-layer 2 (Luxury Cream Bar) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 bottom-0 w-full md:w-[460px] bg-cream pointer-events-none z-20"
          />

          {/* Main Staggered Panel (Obsidian Black) */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 bottom-0 z-30 flex h-full w-full flex-col justify-between border-l border-white/10 bg-[#0a0a0c] p-8 md:w-[450px] md:p-10 shadow-2xl overflow-y-auto"
          >
            {/* Top drawer header */}
            <div className="flex items-center justify-between pb-6 pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                NAVIGATION
              </span>
              <button
                onClick={onClose}
                className="group flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase text-white/70 transition-all"
                aria-label="Close menu"
              >
                <span>Close</span>
                <X size={14} className="text-cream transition-transform duration-200 group-hover:rotate-90" />
              </button>
            </div>

            {/* Oversized Numbered Nav Links */}
            <nav className="my-auto py-8">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <button
                        onClick={() => handleLinkClick(item.href)}
                        className="group flex w-full items-baseline justify-between py-1 text-left transition-colors"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="font-mono text-xs font-semibold text-cream opacity-80 group-hover:opacity-100 transition-opacity">
                            {item.num}
                          </span>
                          <span
                            className={`font-heading text-3xl font-extrabold tracking-tight uppercase transition-all duration-200 group-hover:translate-x-2 ${
                              isActive
                                ? "text-cream"
                                : "text-white/80 group-hover:text-white"
                            }`}
                          >
                            {item.label}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cream"
                        />
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            {/* Bottom Coordinates & Socials */}
            <div className="border-t border-white/10 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/40 mb-3">
                EXTERNAL CHANNELS
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/70">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-cream transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-cream transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={socialLinks.googleScholar}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-cream transition-colors"
                >
                  <GraduationCap size={14} />
                  <span>Scholar</span>
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-cream transition-colors"
                >
                  <FileText size={14} />
                  <span>CV ↗</span>
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};
