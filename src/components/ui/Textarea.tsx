import React, { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const textareaId = id || props.name;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="block font-mono text-xs text-neutral-400"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={`w-full rounded-xl border border-border-subtle bg-[#121212] px-3.5 py-2.5 font-mono text-sm text-neutral-200 placeholder-neutral-600 outline-none transition-colors focus:border-accent/60 focus:bg-[#151515] ${
            error ? "border-red-500/60" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="font-mono text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
