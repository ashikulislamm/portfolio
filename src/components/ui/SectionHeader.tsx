"use client";

import React, { ReactNode } from "react";

export interface SectionHeaderProps {
  /** The small uppercase monospace indicator/tag (e.g. "// 02 — CAPABILITIES & EXPERTISE") */
  tag?: string;
  /** Alias for `tag` for backward compatibility */
  comment?: string;
  /** Optional icon displayed beside the tag (e.g. <Cpu size={14} />) */
  icon?: ReactNode;
  /** Main header title text (e.g. "ENGINEERING MATRIX") */
  title: string;
  /** Optional description/subtitle (omitted when not provided) */
  description?: string;
  /** Alias for `description` for backward compatibility */
  subtitle?: string;
  /** Optional action/link element placed on the right side */
  action?: ReactNode;
  /** Whether to show a subtle bottom border divider line (default: true) */
  bordered?: boolean;
  /** Heading scale variant: "homepage" (4xl/6xl) | "compact" (2xl/3xl) */
  size?: "homepage" | "compact";
  /** Alignment: "left" (default) | "center" */
  align?: "left" | "center";
  /** Custom extra styling classes for the container */
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  comment,
  icon,
  title,
  description,
  subtitle,
  action,
  bordered = true,
  size = "homepage",
  align = "left",
  className = "",
}) => {
  const displayTag = tag || comment;
  const displayDescription = description || subtitle;
  const isHomepageSize = size === "homepage";

  return (
    <div
      className={`w-full text-left ${
        bordered ? "pb-8" : ""
      } ${
        action
          ? "flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          : "flex flex-col items-start gap-2"
      } ${align === "center" ? "items-center text-center" : ""} ${className}`}
    >
      <div className={align === "center" ? "flex flex-col items-center" : ""}>
        <h2
          className={`font-heading font-extrabold uppercase tracking-tight text-white ${
            isHomepageSize ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
          }`}
        >
          {title}
        </h2>

        {displayDescription && (
          <p className="mt-2 max-w-xl text-sm md:text-base text-neutral-400">
            {displayDescription}
          </p>
        )}
      </div>

      {action && <div className="shrink-0 self-start sm:self-end">{action}</div>}
    </div>
  );
};

export default SectionHeader;
