import React, { ReactNode } from "react";

export interface BadgeProps {
  variant?: "default" | "tech" | "status" | "featured" | "mono" | "git";
  statusType?: "completed" | "progress" | string;
  className?: string;
  children: ReactNode;
}

export const Badge = ({
  variant = "default",
  statusType,
  className = "",
  children,
}: BadgeProps) => {
  const baseStyles = "inline-flex items-center font-mono text-[11px] leading-none transition-colors rounded-lg px-2.5 py-1";

  const isCompleted = statusType?.toLowerCase() === "completed";

  const variants = {
    default:
      "border border-border-subtle bg-card-bg text-neutral-300",
    tech:
      "border border-border-subtle bg-[#171717] text-neutral-300 hover:border-neutral-700 hover:text-white",
    featured:
      "border border-accent/30 bg-accent/10 text-accent font-semibold",
    mono:
      "border border-border-subtle bg-secondary-bg text-neutral-400",
    git:
      "border border-border-subtle bg-secondary-bg text-neutral-400 font-mono",
    status: isCompleted
      ? "border border-accent/30 bg-accent/10 text-accent"
      : "border border-amber-500/30 bg-amber-500/10 text-amber-300",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
