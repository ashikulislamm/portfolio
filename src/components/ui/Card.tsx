import React, { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "project" | "terminal" | "code";
  hoverable?: boolean;
  children: ReactNode;
}

export const Card = ({
  variant = "default",
  hoverable = true,
  className = "",
  children,
  ...props
}: CardProps) => {
  const baseStyles = "rounded border border-[#262626] bg-[#121212]";

  const variants = {
    default: "p-5",
    project: "project-card flex flex-col justify-between",
    terminal: "terminal-card",
    code: "p-4 font-mono text-xs bg-[#0d0d0d] border-[#262626]",
  };

  const hoverStyles = hoverable ? "transition-colors duration-150 hover:border-neutral-700" : "";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
