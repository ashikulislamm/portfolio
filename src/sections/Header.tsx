"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  sectionId: string;
  href: string;
};

export const Header = () => {
  const pathname = usePathname();
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

  const navItems: NavItem[] = [
    {
      label: "Home",
      sectionId: "home",
      href: "/",
    },
    {
      label: "Tech Stack",
      sectionId: "tech-stack",
      href: "/#tech-stack",
    },
    {
      label: "Projects",
      sectionId: "projects",
      href: "/#projects",
    },
    {
      label: "Experience",
      sectionId: "experience",
      href: "/#experience",
    },
    {
      label: "Research",
      sectionId: "research",
      href: "/#research",
    },
    {
      label: "About",
      sectionId: "about",
      href: "/#about",
    },
    {
      label: "Contact",
      sectionId: "contact",
      href: "/#contact",
    },
  ] as const;

  const handleSectionClick = (sectionId: string) => {
    if (isHome) {
      setActiveSection(sectionId);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMobileOpen(false);
  };

  const isItemActive = (item: NavItem) => {
    if (isHome) {
      return activeSection === item.sectionId;
    }

    return false;
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div
          className={`mx-auto max-w-7xl rounded-full bg-background/80 px-4 py-3 backdrop-blur-xl transition-all duration-300 ${
            isScrolled || isMobileOpen ? "shadow-[0_18px_60px_rgba(0,0,0,0.45)]" : "shadow-[0_8px_30px_rgba(0,0,0,0.22)]"
          }`}
        >
          <div className="hidden items-center gap-6 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
            <Link
              href="/"
              className="justify-self-start text-lg font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ashikul Islam
            </Link>

            <nav aria-label="Primary navigation" className="nav-shell justify-self-center">
              <div className="flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = isItemActive(item);

                  if (isHome) {
                    return (
                      <button
                        key={item.label}
                        onClick={() => handleSectionClick(item.sectionId)}
                        className={`nav-item ${isActive ? "nav-item-active" : ""}`}
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
                      className={`nav-item ${isActive ? "nav-item-active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="justify-self-end text-text-secondary">
              <a
                href="https://github.com/ashikulislamm"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-secondary transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between md:hidden">
            <Link
              href="/"
              className="text-base font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ashikul Islam
            </Link>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-primary transition-colors hover:border-white/20 hover:bg-white/10"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative h-6 w-6">
                <Menu className={`absolute h-6 w-6 transition ${isMobileOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`} />
                <X className={`absolute h-6 w-6 transition ${isMobileOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-8 pt-24 text-base text-text-secondary">
              {navItems.map((item) => {
                const isActive = isItemActive(item);

                if (isHome) {
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleSectionClick(item.sectionId)}
                      className={`rounded-2xl border px-4 py-3 text-left transition-colors ${
                        isActive
                          ? "border-[var(--color-nav-active)] bg-[var(--color-nav-active)] text-black"
                          : "border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`rounded-2xl border px-4 py-3 transition-colors ${
                      isActive
                        ? "border-[var(--color-nav-active)] bg-[var(--color-nav-active)] text-black"
                        : "border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <a
                href="https://github.com/ashikulislamm"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
