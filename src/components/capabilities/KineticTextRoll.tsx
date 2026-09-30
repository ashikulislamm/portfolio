"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface KineticTextRollProps {
  text: string;
  className?: string;
  subtext?: string;
  isActive?: boolean;
}

export const KineticTextRoll: React.FC<KineticTextRollProps> = ({
  text,
  className = "",
  subtext,
  isActive = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const letters = text.split("");

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative inline-flex cursor-pointer flex-col select-none py-1 ${className}`}
    >
      <div className="relative inline-flex overflow-hidden">
        {letters.map((char, index) => {
          const isSpace = char === " ";
          return (
            <span
              key={index}
              className="relative inline-block overflow-hidden leading-tight"
            >
              {/* Primary top letter (slides up on hover) */}
              <motion.span
                animate={{
                  y: isHovered || isActive ? "-110%" : "0%",
                  opacity: isHovered || isActive ? 0.3 : 0.85,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.02,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block ${isSpace ? "w-2 md:w-3" : ""}`}
              >
                {char}
              </motion.span>

              {/* Duplicate rolling letter (slides up from below) */}
              <motion.span
                animate={{
                  y: isHovered || isActive ? "0%" : "110%",
                  opacity: isHovered || isActive ? 1 : 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.02,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute left-0 top-0 inline-block text-cream font-bold ${
                  isSpace ? "w-2 md:w-3" : ""
                }`}
              >
                {char}
              </motion.span>
            </span>
          );
        })}
      </div>

      {subtext && (
        <span className="font-mono text-xs text-white/40 tracking-wider transition-colors group-hover:text-cream">
          {subtext}
        </span>
      )}
    </div>
  );
};
