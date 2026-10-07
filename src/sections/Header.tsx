"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Terminal, Github, Linkedin, X, Plus } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import { StaggeredDrawer } from "@/components/navigation/StaggeredDrawer";

export const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY <= 20 || scrollDelta < 0) {
        setIsNavVisible(true);
      } else if (scrollDelta > 0 && !isDrawerOpen) {
        setIsNavVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDrawerOpen]);

  useEffect(() => {
    if (!isHome) {
      setActiveSection("home");
      return;
    }

    const sectionIds = [
      "home",
      "capabilities",
      "tech-stack",
      "history",
      "experience",
      "projects",
      "research",
      "about",
      "contact",
    ];

    const updateActiveSection = () => {
      const anchor = window.innerHeight * 0.35;
      let current = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= anchor) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [isHome, pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          isNavVisible || isDrawerOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        } ${
          isScrolled
            ? "border-b border-white/10 bg-[#070709]/85 backdrop-blur-md py-3.5 shadow-lg shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3 font-mono text-sm tracking-tight text-white"
          >
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm text-neutral-100 group-hover:text-cream transition-colors">
                {personalInfo.name}
              </span>
            </div>
          </Link>

          {/* Right: Quick Socials & Animated Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDrawerOpen((prev) => !prev)}
              className="group relative inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs uppercase tracking-wider text-neutral-200 backdrop-blur-sm transition-all duration-200 hover:border-cream/60 hover:bg-cream/10 hover:text-cream active:scale-95"
              aria-label="Toggle navigation menu"
              aria-expanded={isDrawerOpen}
            >
              <span className="font-semibold">
                {isDrawerOpen ? "Close" : "Menu"}
              </span>
              <span className="flex h-4 w-4 items-center justify-center text-cream transition-transform duration-300 group-hover:rotate-90">
                {isDrawerOpen ? (
                  <X size={14} className="text-cream" />
                ) : (
                  <Plus size={14} className="text-cream" />
                )}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Staggered Navigation Drawer */}
      <StaggeredDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
