"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Briefcase, GraduationCap, FileText, ExternalLink } from "lucide-react";
import { experiences, publications, academics } from "@/data/portfolioData";
import { ExperienceItem, PublicationItem, AcademicItem } from "@/types/portfolio";

interface CompanyGroup {
  company: string;
  roles: ExperienceItem[];
  location: string;
  workMode?: string;
  period: string;
}

type ChronologyCardData =
  | {
      id: string;
      type: "experience";
      companyGroup: CompanyGroup;
    }
  | {
      id: string;
      type: "publication";
      publication: PublicationItem;
    }
  | {
      id: string;
      type: "education";
      academic: AcademicItem;
    };

export const ChronologyFlow: React.FC = () => {
  // 1. Dynamically group experiences by company and extract location and work mode
  const companyGroups = useMemo(() => {
    const map = new Map<string, ExperienceItem[]>();
    experiences.forEach((exp) => {
      const comp = exp.company.trim();
      const existing = map.get(comp) || [];
      existing.push(exp);
      map.set(comp, existing);
    });

    const groups: CompanyGroup[] = [];
    map.forEach((roles, company) => {
      const allYears = roles.map((r) => r.year);
      const isPresent = allYears.some((y) => y.toLowerCase().includes("present"));
      const startYear = allYears[allYears.length - 1]?.split("-")[0]?.trim() || "";
      const period = isPresent ? `${startYear} – PRESENT` : roles[0]?.year || "";

      // Derive location and work mode from newest role or fallback
      const primaryLoc = roles[0]?.location || "Dhaka, BD";
      const primaryMode = roles[0]?.workMode || "Hybrid";

      groups.push({
        company,
        roles,
        location: primaryLoc,
        workMode: primaryMode,
        period,
      });
    });

    return groups;
  }, []);

  // 2. Filter academic degrees (excluding secondary/school exams, keeping university & higher education)
  const higherAcademics = useMemo(() => {
    return academics.filter(
      (acad) =>
        !acad.degree.toLowerCase().includes("secondary") &&
        !acad.institution.toLowerCase().includes("school")
    );
  }, []);

  // 3. Assemble all stack cards dynamically in sequential order
  const allCards: ChronologyCardData[] = useMemo(() => {
    const cards: ChronologyCardData[] = [];

    // Experience cards (1 card per company)
    companyGroups.forEach((cg, idx) => {
      cards.push({
        id: `exp-${cg.company.replace(/\s+/g, "-").toLowerCase()}-${idx}`,
        type: "experience",
        companyGroup: cg,
      });
    });

    // Publication cards (1 card per publication)
    publications.forEach((pub, idx) => {
      cards.push({
        id: `pub-${idx}`,
        type: "publication",
        publication: pub,
      });
    });

    // Education cards (1 card per university)
    higherAcademics.forEach((acad, idx) => {
      cards.push({
        id: `edu-${idx}`,
        type: "education",
        academic: acad,
      });
    });

    return cards;
  }, [companyGroups, higherAcademics]);

  // 4. Sticky offsets: cards stack 16px apart below the header. A card taller than
  // the remaining viewport pins by its bottom edge instead (negative top), so its
  // lower content is fully scrolled into view before the next card covers it.
  const STACK_BASE = 64;
  const STACK_STEP = 16;
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [stickyTops, setStickyTops] = useState<number[]>([]);

  useEffect(() => {
    const measure = () => {
      const viewport = window.innerHeight;
      const next = sectionRefs.current.map((el, i) => {
        const stackTop = STACK_BASE + i * STACK_STEP;
        if (!el) return stackTop;
        return Math.min(stackTop, viewport - el.offsetHeight);
      });
      setStickyTops((prev) =>
        prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [allCards.length]);

  // Distinct rich dark card surface colors for tactile stacking depth
  const cardBgColors = [
    "bg-[#000000]",
    "bg-[#09090d]",
    "bg-[#101016]",
    "bg-[#151520]",
    "bg-[#1a1a28]",
  ];

  return (
    <div id="history" className="relative w-full pb-36 sm:pb-48 md:pb-64">
      {allCards.map((card, index) => {
        const formattedIndex = String(index + 1).padStart(2, "0");
        const bgClass = cardBgColors[index % cardBgColors.length];

        return (
          <div
            key={card.id}
            className="sticky w-full"
            style={{
              top: `${stickyTops[index] ?? STACK_BASE + index * STACK_STEP}px`,
              zIndex: 10 + index,
            }}
          >
            <section
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              aria-label={`${card.type} section`}
              className={`relative min-h-[min(420px,70svh)] md:min-h-[72svh] w-full flex flex-col justify-between rounded-t-3xl border-t border-white/15 px-5 pt-7 pb-10 xs:px-6 sm:px-10 sm:pt-10 sm:pb-12 md:p-12 lg:py-16 lg:px-[max(4rem,calc((100%_-_80rem)/2))] text-white transition-colors text-left shadow-[0_-20px_50px_rgba(0,0,0,0.9)] backdrop-blur-md ${bgClass}`}
            >
              {/* Subtle glowing hairline edge on top */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/35 to-transparent rounded-t-3xl" />

              {/* 1. EXPERIENCE CARD */}
              {card.type === "experience" && (
                <>
                  <div>
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-2">
                      <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cream">
                        {formattedIndex} — CAREER & INDUSTRY
                      </span>
                      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 font-mono text-[11px] sm:text-xs text-white/50">
                        <span>{card.companyGroup.location}</span>
                        {card.companyGroup.workMode && (
                          <>
                            <span className="text-white/30">·</span>
                            <span className="text-cream/80">{card.companyGroup.workMode}</span>
                          </>
                        )}
                        {card.companyGroup.period && (
                          <>
                            <span className="text-white/30">·</span>
                            <span>{card.companyGroup.period}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <h2 className="mt-4 font-heading text-[clamp(1.75rem,1rem_+_4vw,3.75rem)] font-black tracking-tight uppercase leading-[1] text-white break-words">
                      {card.companyGroup.company}
                    </h2>
                  </div>

                  <div className="mt-6 md:mt-10 flex flex-col gap-6 md:gap-8 border-t border-white/10 pt-6 md:pt-8">
                    {card.companyGroup.roles.map((role, rIdx) => (
                      <div
                        key={rIdx}
                        className={`flex items-start gap-3.5 sm:gap-4 ${
                          rIdx > 0 ? "border-t border-white/10 pt-6" : ""
                        }`}
                      >
                        <div className="mt-1 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cream">
                          <Briefcase size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                            {role.title}
                          </h3>

                          {role.highlights && role.highlights.length > 0 && (
                            <ul className="mt-3.5 space-y-1.5 text-xs md:text-sm text-neutral-400 max-w-3xl">
                              {role.highlights.map((h, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2">
                                  <span className="text-cream font-mono mt-0.5 shrink-0">›</span>
                                  <span className="leading-relaxed">{h}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* 2. PUBLICATION CARD */}
              {card.type === "publication" && (
                <>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cream">
                        {formattedIndex} — RESEARCH
                      </span>
                      <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[10px] sm:text-[11px] text-cream">
                        {card.publication.publisher || "PUBLICATION"} // {card.publication.year}
                      </span>
                    </div>

                    <h2 className="mt-4 font-heading text-[clamp(1.75rem,1rem_+_4vw,3.75rem)] font-black tracking-tight uppercase leading-[1] text-white break-words">
                      {card.publication.publisher || "RESEARCH"} PUBLICATION
                    </h2>

                    <p className="mt-3 sm:mt-4 max-w-3xl text-sm md:text-base text-neutral-300 font-sans leading-relaxed">
                      {card.publication.title}
                    </p>
                  </div>

                  <div className="mt-8 md:mt-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-white/15 pt-6 md:pt-8">
                    <div className="space-y-2 font-mono text-xs text-neutral-300 max-w-2xl min-w-0">
                      {card.publication.description && (
                        <p className="leading-relaxed">
                          <span className="text-white/50">VENUE:</span>{" "}
                          {card.publication.description.replace(/^Presented at the /i, "")}
                        </p>
                      )}
                      <p className="leading-relaxed">
                        <span className="text-white/50">AUTHORS:</span> {card.publication.authors}
                      </p>
                      {card.publication.doi && (
                        <p className="leading-relaxed break-all">
                          <span className="text-white/50">DOI:</span> {card.publication.doi}
                        </p>
                      )}
                    </div>

                    {card.publication.link && (
                      <a
                        href={card.publication.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-cream px-5 py-3 font-mono text-xs font-bold uppercase text-black hover:bg-white transition-all shrink-0 active:scale-95 shadow-md"
                      >
                        <FileText size={15} />
                        <span>Read on IEEE Xplore</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </>
              )}

              {/* 3. EDUCATION CARD */}
              {card.type === "education" && (
                <>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cream">
                        {formattedIndex} — ACADEMIC FOUNDATION
                      </span>
                      <span className="font-mono text-[11px] sm:text-xs text-white/50 shrink-0">
                        DHAKA, BANGLADESH
                      </span>
                    </div>

                    <h2 className="mt-4 font-heading text-[clamp(1.75rem,1rem_+_4vw,3.75rem)] font-black tracking-tight uppercase leading-[1] text-white break-words">
                      {card.academic.institution}
                    </h2>

                    <p className="mt-3 sm:mt-4 max-w-3xl text-sm md:text-base text-neutral-300 font-sans leading-relaxed">
                      {card.academic.description}
                    </p>
                  </div>

                  {/* Degree & Graduation Info Block */}
                  <div className="mt-8 md:mt-12 border-t border-white/10 pt-6">
                    <div className="flex items-start gap-3.5">
                      <div className="mt-1 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cream">
                        <GraduationCap size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                          {card.academic.degree}
                        </h3>
                        <p className="mt-1 font-mono text-[11px] sm:text-xs text-neutral-400">
                          Department of Computer Science & Engineering
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="inline-flex max-w-full items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] sm:text-xs font-medium leading-snug text-cream">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cream animate-pulse" />
                            Graduated {card.academic.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </section>
          </div>
        );
      })}
    </div>
  );
};
