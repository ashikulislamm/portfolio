"use client";

import React, { useMemo } from "react";
import { Briefcase, GraduationCap, FileText, ExternalLink } from "lucide-react";
import { experiences, publications, academics } from "@/data/portfolioData";
import { ExperienceItem, PublicationItem, AcademicItem } from "@/types/portfolio";

interface CompanyGroup {
  company: string;
  roles: ExperienceItem[];
  location: string;
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
  // 1. Dynamically group experiences by company (adding a new company spawns an identical full-screen card)
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

      groups.push({
        company,
        roles,
        location: "DHAKA, BD · HYBRID",
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

  // Distinct rich dark card surface colors for tactile stacking depth
  const cardBgColors = [
    "bg-[#000000]",
    "bg-[#09090d]",
    "bg-[#101016]",
    "bg-[#151520]",
    "bg-[#1a1a28]",
  ];

  return (
    <div id="history" className="relative w-full">
      {allCards.map((card, index) => {
        const formattedIndex = String(index + 1).padStart(2, "0");
        const bgClass = cardBgColors[index % cardBgColors.length];

        // Progressive top sticky offset for full-width stacking
        const stickyTopStyle = {
          top: `calc(${index * 24}px)`,
          zIndex: 10 + index,
        };

        return (
          <div
            key={card.id}
            className="sticky w-full"
            style={stickyTopStyle}
          >
            <section
              aria-label={`${card.type} section`}
              className={`relative min-h-[90vh] w-full flex flex-col justify-between p-8 md:p-16 lg:p-20 text-white transition-colors border-t border-white/15 text-left shadow-[0_-25px_60px_rgba(0,0,0,0.95)] backdrop-blur-md ${bgClass}`}
            >
              {/* Subtle glowing hairline edge on top */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/35 to-transparent" />

              {/* 1. EXPERIENCE CARD */}
              {card.type === "experience" && (
                <>
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cream">
                        {formattedIndex} — CAREER & INDUSTRY
                      </span>
                      <span className="font-mono text-xs text-white/50 shrink-0">
                        {card.companyGroup.location} · {card.companyGroup.period}
                      </span>
                    </div>

                    <hr className="my-6 border-0" />

                    <h2 className="font-heading text-[clamp(2.8rem,9vw,8rem)] font-black tracking-tight uppercase leading-[0.9] text-white">
                      {card.companyGroup.company}
                    </h2>
                  </div>

                  <div className="mt-6 flex flex-col gap-8 border-0 pt-16">
                    {card.companyGroup.roles.map((role, rIdx) => (
                      <div
                        key={rIdx}
                        className={`flex flex-col sm:flex-row sm:items-start justify-between gap-4 ${
                          rIdx > 0 ? "border-0 pt-6" : ""
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cream">
                            <Briefcase size={20} />
                          </div>
                          <div>
                            <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                              {role.title}
                            </h3>
                            <p className="font-mono text-xs text-cream/90">{role.company}</p>
                            {role.highlights && role.highlights.length > 0 && (
                              <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-neutral-400 max-w-3xl">
                                {role.highlights.map((h, hIdx) => (
                                  <li key={hIdx} className="flex items-start gap-2">
                                    <span className="text-cream font-mono mt-0.5">›</span>
                                    <span>{h}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                        <span className="font-mono text-xs font-semibold text-white/60 sm:text-right shrink-0">
                          {role.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* 2. PUBLICATION CARD */}
              {card.type === "publication" && (
                <>
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cream">
                        {formattedIndex} — RESEARCH
                      </span>
                      <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[11px] text-cream shrink-0">
                        {card.publication.publisher || "PUBLICATION"} // {card.publication.year}
                      </span>
                    </div>

                    <hr className="my-6 border-0" />

                    <h2 className="font-heading text-[clamp(2.8rem,9vw,8rem)] font-black tracking-tight uppercase leading-[0.9] text-white">
                      {card.publication.publisher || "RESEARCH"} PUBLICATION
                    </h2>

                    <p className="mt-4 max-w-3xl text-sm md:text-base text-neutral-300 font-sans leading-relaxed">
                      {card.publication.title}
                    </p>
                  </div>

                  <div className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/15 pt-8">
                    <div className="space-y-2 font-mono text-xs text-neutral-300">
                      {card.publication.description && (
                        <p>
                          <span className="text-white/50">VENUE:</span>{" "}
                          {card.publication.description.replace(/^Presented at the /i, "")}
                        </p>
                      )}
                      <p>
                        <span className="text-white/50">AUTHORS:</span> {card.publication.authors}
                      </p>
                      {card.publication.doi && (
                        <p>
                          <span className="text-white/50">DOI:</span> {card.publication.doi}
                        </p>
                      )}
                    </div>

                    {card.publication.link && (
                      <a
                        href={card.publication.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-cream px-6 py-3 font-mono text-xs font-bold uppercase text-black hover:bg-white transition-all shrink-0"
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
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cream">
                        {formattedIndex} — ACADEMIC FOUNDATION
                      </span>
                      {/* Duplicate duration removed — only location kept */}
                      <span className="font-mono text-xs text-white/50 shrink-0">
                        DHAKA, BANGLADESH
                      </span>
                    </div>

                    <hr className="my-6 border-0" />

                    {/* Full University Name in Big font, NO short form, NO duplicate paragraph */}
                    <h2 className="font-heading text-[clamp(2.4rem,7.5vw,7rem)] font-black tracking-tight uppercase leading-[0.92] text-white">
                      {card.academic.institution}
                    </h2>

                    <p className="mt-4 max-w-3xl text-sm md:text-base text-neutral-300 font-sans leading-relaxed">
                      {card.academic.description}
                    </p>
                  </div>

                  <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cream">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <p className="font-heading text-lg md:text-xl font-bold text-white">
                          {card.academic.degree}
                        </p>
                        <p className="font-mono text-xs text-neutral-400">
                          Department of Computer Science & Engineering
                        </p>
                      </div>
                    </div>

                    {/* Duration shown only once cleanly */}
                    <span className="font-mono text-xs font-semibold text-cream sm:text-right shrink-0">
                      Graduated {card.academic.duration}
                    </span>
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
