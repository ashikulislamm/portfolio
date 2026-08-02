import React, { ReactNode } from "react";

export interface SocialButtonProps {
  name: string;
  href: string;
  icon?: ReactNode;
  variant?: "icon-only" | "card" | "text-link";
  className?: string;
}

export const SocialButton = ({
  name,
  href,
  icon,
  variant = "icon-only",
  className = "",
}: SocialButtonProps) => {
  const isExternal = href.startsWith("http");

  if (variant === "card") {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={`flex items-center gap-2.5 rounded-xl border border-border-subtle bg-[#121212] px-3.5 py-2.5 font-mono text-xs text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white ${className}`}
      >
        {icon && <span className="shrink-0 text-neutral-400">{icon}</span>}
        <span>{name}</span>
      </a>
    );
  }

  if (variant === "text-link") {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={`inline-flex items-center gap-1.5 font-mono text-xs text-neutral-400 transition-colors hover:text-accent ${className}`}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{name}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-[#121212] text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white ${className}`}
      aria-label={`${name} profile`}
    >
      {icon}
    </a>
  );
};
