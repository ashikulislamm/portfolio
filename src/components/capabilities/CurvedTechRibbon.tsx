"use client";

import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiExpress,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

// Official Hyperledger Besu logomark (SVG)
const HyperledgerBesuLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 20,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 366 500"
    fill="currentColor"
    className={className}
    aria-label="Hyperledger Besu logo"
  >
    <path d="M358.6,207.5v-1c0-12.8-10.2-23-23-23h-1c-5.1,0-9.7,1.5-13.3,4.1l-114.7-66v-2.6c0-12.8-10.2-23-23-23h-1c-12.8,0-23,10.2-23,23v2.6l-114.7,66c-1.5-1-2.6-1.5-4.1-2.6V51.9c8.2-3.6,13.8-11.8,13.8-21.5S43.8,6.8,31,6.8,7.4,17,7.4,30.4s5.6,17.9,13.8,21.5v133.6c-8.2,3.6-13.8,11.8-13.8,21v1c0,9.2,5.6,17.4,13.8,21v132.1c-8.2,3.6-13.8,11.8-13.8,21v1c0,12.8,10.2,23,23,23h1c5.1,0,9.7-1.5,13.3-4.1l114.7,66v2.6c0,12.8,10.2,23,23,23h1c12.8,0,23-10.2,23-23v-2.6l114.7-66c3.6,2.6,8.2,4.1,13.3,4.1h1c12.8,0,23-10.2,23-23v-.5c0-9.2-5.6-17.4-13.8-21v-132.1c8.2-3.6,13.8-11.8,13.8-21.5ZM325.3,356.9c-10.7-17.9-29.2-37.4-52.2-56.3-5.1,4.1-10.7,8.2-15.9,12.3,29.2,23.5,47.6,46.1,55.3,61.4-.5,2.6-1,5.1-1,7.7v2.6l-114.7,66.5c-3.1-2-6.1-3.6-10.2-4.1-14.3-24.1-28.2-78.3-28.2-152s.5-22.5,1-32.8c-6.7-3.1-12.8-6.1-18.9-9.2-1,13.8-1.5,27.6-1.5,42,0,59.4,9.2,119.3,26.6,154.1l-105.4-60.9c19.5,0,45.6-6.1,74.2-17.4-1-6.7-1.5-13.3-2.6-20-37.9,15.4-66.5,20-82.4,16.9-2.6-3.1-5.6-5.6-9.2-7.2v-131.6c3.6-1.5,6.7-4.1,9.2-7.2,23.5-4.6,78.8,8.7,148.4,50.2,9.2,5.6,17.9,11.3,26.1,16.9,5.6-4.1,11.3-8.2,16.9-12.3-10.7-7.2-21.5-14.3-32.8-21.5-57.3-34.3-112.1-53.7-147.9-54.3l105.4-60.9c-9.2,18.4-16.4,43.5-20.5,72.2,6.1,2.6,12.3,5.1,18.4,8.2,5.1-36.3,14.3-63,23-77.8,3.6-.5,7.2-2,10.2-4.1l114.7,66.5v2.6c0,2.6.5,5.1,1,7.2-11.8,24.6-51.2,64.5-114.2,102.4-9.7,6.1-19.5,11.3-28.7,15.9.5,7.2,1,14.3,2,21,12.3-6.1,24.6-12.8,36.9-20,50.7-30.2,96.7-68.6,117.2-101.9v124.9h-.5Z" />
  </svg>
);

interface TechNode {
  name: string;
  category: string;
  icon: React.ReactNode;
  brandColor: string;
}

export const CurvedTechRibbon: React.FC = () => {
  const techs: TechNode[] = [
    {
      name: "Next.js 16",
      category: "Framework",
      icon: <SiNextdotjs size={20} />,
      brandColor: "#FFFFFF",
    },
    {
      name: "React 19",
      category: "Library",
      icon: <SiReact size={20} />,
      brandColor: "#61DAFB",
    },
    {
      name: "TypeScript",
      category: "Language",
      icon: <SiTypescript size={20} />,
      brandColor: "#3178C6",
    },
    {
      name: "Node.js",
      category: "Runtime",
      icon: <SiNodedotjs size={20} />,
      brandColor: "#5FA04E",
    },
    {
      name: "Hyperledger Besu",
      category: "Blockchain",
      icon: <HyperledgerBesuLogo size={20} />,
      brandColor: "#20A1A1",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: <SiPostgresql size={20} />,
      brandColor: "#4169E1",
    },
    {
      name: "Prisma ORM",
      category: "ORM",
      icon: <SiPrisma size={20} />,
      brandColor: "#5A67D8",
    },
    {
      name: "Docker",
      category: "DevOps",
      icon: <SiDocker size={20} />,
      brandColor: "#2496ED",
    },
    {
      name: "Express v5",
      category: "Backend",
      icon: <SiExpress size={20} />,
      brandColor: "#F7F2EB",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      icon: <SiTailwindcss size={20} />,
      brandColor: "#38BDF8",
    },
    {
      name: "AWS",
      category: "Cloud",
      icon: <FaAws size={20} />,
      brandColor: "#FF9900",
    },
    {
      name: "Github",
      category: "Version Control",
      icon: <SiGithub size={20} />,
      brandColor: "#FFFFFF",
    },
  ];

  // Infinite curved marquee loop
  return (
    <div className="relative w-full overflow-hidden py-8 sm:py-12 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      {/* Subtle guide line */}
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cream/25 to-transparent" />

      {/* Infinite Horizontal Glide with Hover Pause */}
      <div className="flex w-max gap-3 sm:gap-6 animate-ribbon-glide">
        {[...techs, ...techs].map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="group relative flex items-center gap-3.5 rounded-2xl px-3 py-3 sm:px-5 sm:py-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:scale-110 group-hover:border-white/20 group-hover:drop-shadow-[0_0_8px_currentColor]"
              style={{ color: tech.brandColor }}
            >
              {tech.icon}
            </div>
            <div className="flex flex-col text-left">
              <span className="whitespace-nowrap font-heading text-sm font-bold text-white transition-colors group-hover:text-cream">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ribbonGlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ribbon-glide {
          animation: ribbonGlide 32s linear infinite;
        }
        .animate-ribbon-glide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

