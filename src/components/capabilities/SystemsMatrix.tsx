"use client";

import React, { useState } from "react";
import { Boxes, Code2, Database, Cloud, RotateCw } from "lucide-react";
import { CurvedTechRibbon } from "./CurvedTechRibbon";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ExpertiseCard {
  index: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  highlights: string[];
  techSummary: string;
}

export const SystemsMatrix: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (index: string) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const cards: ExpertiseCard[] = [
    {
      index: "01",
      title: "System Architect",
      subtitle: "Decentralized & Distributed Systems",
      icon: <Boxes size={26} />,
      highlights: [
        "Private Consortium Chains",
        "Smart Contracts & IPFS",
        "Microservices & Fault Isolation",
        "Domain-Driven Architecture",
      ],
      techSummary: "Besu · Solidity · IPFS",
    },
    {
      index: "02",
      title: "Software Engineering",
      subtitle: "Full-Stack Web & Scalable APIs",
      icon: <Code2 size={26} />,
      highlights: [
        "Next.js 16 & React 19 SSR",
        "Strict End-to-End Type Safety",
        "RESTful & WebSocket APIs",
        "Modular Component Architecture",
      ],
      techSummary: "Next.js · TypeScript · Node",
    },
    {
      index: "03",
      title: "Database Admin",
      subtitle: "Relational & ACID Management",
      icon: <Database size={26} />,
      highlights: [
        "PostgreSQL Schema Design",
        "Prisma Migration Versioning",
        "Query Indexing & Optimization",
        "Data Integrity & ACID Safety",
      ],
      techSummary: "Postgres · Prisma · Redis",
    },
    {
      index: "04",
      title: "Cloud and Deployments",
      subtitle: "DevOps & Infrastructure CI/CD",
      icon: <Cloud size={26} />,
      highlights: [
        "Multi-Stage Docker Builds",
        "Automated GitHub CI/CD",
        "Linux VPS Hardening",
        "NGINX Proxy & SSL Security",
      ],
      techSummary: "Docker · AWS · Linux",
    },
  ];

  return (
    <section id="capabilities" className="relative w-full bg-[#000000] py-24 px-6 md:px-12 text-left">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <SectionHeader title="CORE EXPERTISE" />

        {/* 4 Cards in One Row with 3D Flip/Hover Interaction */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => {
            const isFlipped = Boolean(flippedCards[card.index]);

            return (
              <div
                key={card.index}
                className="group h-[280px] [perspective:1000px] cursor-pointer"
                onClick={() => toggleFlip(card.index)}
              >
                <div
                  className={`relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRONT FACE (Minimal & Clean) */}
                  <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-cream/40 group-hover:bg-white/[0.04] group-hover:shadow-[0_0_30px_rgba(247,242,235,0.06)] [backface-visibility:hidden]">
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cream transition-transform duration-300 group-hover:scale-105">
                        {card.icon}
                      </div>
                    </div>

                    {/* Bottom info */}
                    <div>
                      <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white transition-colors group-hover:text-cream">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-400 leading-snug">
                        {card.subtitle}
                      </p>
                      <div className="mt-4 flex items-center justify-between pt-3 font-mono text-[10px] text-white/30">
                        <span>Tap/Hover to view</span>
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE (Details on Flip) */}
                  <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-[#0c0c12] p-6 shadow-[0_0_35px_rgba(247,242,235,0.08)] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {/* Top row */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-heading text-xs font-bold uppercase text-cream tracking-wider">
                        {card.title}
                      </span>
                    </div>

                    {/* Highlights bullet points */}
                    <ul className="my-auto space-y-2 text-xs text-neutral-300 leading-snug">
                      {card.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cream text-xs leading-none mt-0.5">›</span>
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Tech summary */}
                    <div className="border-t border-white/10 pt-2.5 flex items-center justify-between font-mono text-[10px]">
                      <span className="text-white/40">CORE</span>
                      <span className="text-cream font-medium tracking-wide">
                        {card.techSummary}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Curved Tech Ribbon with exact logos */}
        <div className="mt-20">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-white/40 text-center">
            Tools and Technologies
          </div>
          <CurvedTechRibbon />
        </div>
      </div>
    </section>
  );
};
