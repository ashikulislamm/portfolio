import React, { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "terminal";
  size?: "sm" | "md" | "lg";
  href?: string | null;
  target?: string;
  rel?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  isMono?: boolean;
  children: ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  iconPosition = "left",
  isLoading = false,
  isMono = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-150 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-xl";

  const variants = {
    primary:
      "bg-accent text-black hover:opacity-90 font-semibold",
    secondary:
      "border border-border-subtle bg-card-bg text-neutral-200 hover:border-neutral-700 hover:bg-[#1a1a1a]",
    outline:
      "border border-border-subtle bg-transparent text-neutral-300 hover:border-neutral-600 hover:text-white",
    ghost:
      "text-neutral-400 hover:text-white hover:bg-white/5",
    terminal:
      "font-mono bg-[#161616] border border-border-subtle/40 text-accent hover:border-accent/40 hover:bg-[#1c1c1c]",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-2.5 text-base gap-2.5",
  };

  const fontStyle = isMono ? "font-mono" : "";

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fontStyle} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noreferrer"}
          className={combinedClassName}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={combinedClassName}
      {...props}
    >
      {content}
    </button>
  );
};
