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

      <div
        className={`fixed inset-0 z-40 overflow-hidden md:hidden transition-all duration-500 ${
          isMobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#050608] transition-opacity duration-500 ${
            isMobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileOpen(false)}
        />

        <div
          className={`absolute -right-16 top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(229,231,235,0.24),_transparent_70%)] blur-2xl transition-all duration-700 ${
            isMobileOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        />
        <div
          className={`absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.22),_transparent_68%)] blur-3xl transition-all duration-700 ${
            isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />

        <div
          className={`relative mx-auto flex h-full w-full max-w-lg flex-col px-6 pb-8 pt-28 transition-all duration-500 ${
            isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          

          <div className="flex flex-1 flex-col justify-center gap-1">
            {navItems.map((item, index) => {
              const isActive = isItemActive(item);
              const order = String(index + 1).padStart(2, "0");

              if (isHome) {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleSectionClick(item.sectionId)}
                    className={`group flex w-full items-center justify-between border-b py-4 text-left transition-all duration-500 ${
                      isActive
                        ? "border-[var(--color-nav-active)] text-[var(--color-nav-active)]"
                        : "border-white/10 text-white/82 hover:border-white/35 hover:text-white"
                    }`}
                    style={{ transitionDelay: `${140 + index * 55}ms` }}
                  >
                    <span className="text-[11px] tracking-[0.22em] text-white/35 group-hover:text-white/55">{order}</span>
                    <span
                      className="text-[clamp(1.35rem,7.1vw,2rem)] leading-none"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`group flex w-full items-center justify-between border-b py-4 transition-all duration-500 ${
                    isActive
                      ? "border-[var(--color-nav-active)] text-[var(--color-nav-active)]"
                      : "border-white/10 text-white/82 hover:border-white/35 hover:text-white"
                  }`}
                  style={{ transitionDelay: `${140 + index * 55}ms` }}
                >
                  <span className="text-[11px] tracking-[0.22em] text-white/35 group-hover:text-white/55">{order}</span>
                  <span
                    className="text-[clamp(1.35rem,7.1vw,2rem)] leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
            <p className="text-sm text-white/55">@ashikulislamm</p>
            <a
              href="https://github.com/ashikulislamm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
