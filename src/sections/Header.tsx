"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Github, Menu, X, Terminal } from "lucide-react";
import { navItems, socialLinks } from "@/data/portfolioData";
import { NavItem } from "@/types/portfolio";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isHome) {
      setActiveSection("home");
      return;
    }

    const sectionIds = [
      "home",
      "tech-stack",
      "projects",
      "experience",
      "research",
      "about",
      "contact",
    ];

    const updateActiveSection = () => {
      const anchor = window.innerHeight * 0.38;
      let fallbackSection = "home";

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();

        if (rect.top <= anchor) {
          fallbackSection = sectionId;
        }

        if (rect.top <= anchor && rect.bottom > anchor) {
          setActiveSection(sectionId);
          return;
        }
      }

      setActiveSection(fallbackSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome, pathname]);

  const handleNavClick = (item: NavItem) => {
    setIsMobileOpen(false);
    if (isHome && item.sectionId) {
      setActiveSection(item.sectionId);
      const section = document.getElementById(item.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    router.push(item.href);
  };

  const isItemActive = (item: NavItem) => {
    if (isHome) {
      return activeSection === item.sectionId;
    }
    return pathname === item.href;
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-background/90 backdrop-blur-md px-4 sm:px-6 py-3 transition-shadow ${
          isScrolled ? "shadow-md shadow-black/40" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-neutral-100 transition-colors hover:text-accent"
          >
            <Terminal size={16} className="text-accent shrink-0" />
            <span>ashikul.dev</span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = isItemActive(item);

              if (isHome) {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-1 font-mono text-xs transition-colors ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-1 font-mono text-xs transition-colors ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 transition-colors hover:text-white"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
          </div>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-border-subtle bg-secondary-bg text-neutral-300 md:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-6 md:hidden flex flex-col justify-between pb-8">
          <nav className="flex flex-col gap-3 font-mono text-sm">
            {navItems.map((item) => {
              const isActive = isItemActive(item);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`text-left py-2.5 border-b border-[#1c1c1c] transition-colors flex items-center justify-between ${
                    isActive ? "text-accent font-semibold" : "text-neutral-300 hover:text-accent"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-accent">[active]</span>}
                </button>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>ashikul.dev</span>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-neutral-300 hover:text-white"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
