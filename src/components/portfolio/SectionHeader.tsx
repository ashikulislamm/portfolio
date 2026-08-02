import React, { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  comment?: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}

export const SectionHeader = ({
  title,
  comment,
  subtitle,
  action,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div
      className={`mb-8 border-b border-border-subtle pb-4 ${
        action ? "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" : ""
      } ${className}`}
    >
      <div>
        {comment && (
          <p className="mb-1 font-mono text-xs font-medium text-accent">
            {comment}
          </p>
        )}
        <h2
          className="text-2xl font-bold tracking-tight text-neutral-100 md:text-3xl"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="self-start sm:self-end">{action}</div>}
    </div>
  );
};
