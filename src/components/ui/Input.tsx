import React, { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = "", id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block font-mono text-xs text-neutral-400"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
              {icon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={`w-full rounded border border-border-subtle bg-[#121212] px-3 py-2 font-mono text-sm text-neutral-200 placeholder-neutral-600 outline-none transition-colors focus:border-accent/60 focus:bg-[#151515] ${
              icon ? "pl-9" : ""
            } ${error ? "border-red-500/60" : ""} ${className}`}
            {...props}
          />
        </div>
        {error && <p className="font-mono text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
