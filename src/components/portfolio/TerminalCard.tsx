import React from "react";
import { PersonalInfo } from "@/types/portfolio";

export interface TerminalCardProps {
  personalInfo: PersonalInfo;
  filename?: string;
}

export const TerminalCard = ({
  personalInfo,
  filename = "developer.ts",
}: TerminalCardProps) => {
  return (
    <div className="terminal-card border border-border-subtle bg-[#0d0d0d]">
      <div className="flex items-center justify-between border-b border-[#202020] bg-secondary-bg px-3 py-2 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-[11px] text-neutral-400">
            {filename}
          </span>
        </div>
        <span className="font-mono text-[10px] text-neutral-600">TypeScript</span>
      </div>
      <div className="p-4 font-mono text-xs leading-relaxed text-neutral-300">
        <div className="flex gap-3">
          <span className="select-none text-neutral-600">1</span>
          <p>
            <span className="text-accent">export const</span>{" "}
            <span className="text-blue-400">developer</span> = {"{"}
          </p>
        </div>
        <div className="flex gap-3">
          <span className="select-none text-neutral-600">2</span>
          <p className="pl-4">
            name: <span className="text-amber-300">&quot;{personalInfo.name}&quot;</span>,
          </p>
        </div>
        <div className="flex gap-3">
          <span className="select-none text-neutral-600">3</span>
          <p className="pl-4">
            role: <span className="text-amber-300">&quot;{personalInfo.role}&quot;</span>,
          </p>
        </div>
        <div className="flex gap-3">
          <span className="select-none text-neutral-600">4</span>
          <p className="pl-4">
            location: <span className="text-amber-300">&quot;{personalInfo.location}&quot;</span>,
          </p>
        </div>
        <div className="flex gap-3">
          <span className="select-none text-neutral-600">5</span>
          <p className="pl-4">
            status: <span className="text-accent">&quot;{personalInfo.status}&quot;</span>,
          </p>
        </div>
        <div className="flex gap-3">
          <span className="select-none text-neutral-600">6</span>
          <p>{"};"}</p>
        </div>
        <div className="mt-3 flex gap-3 border-t border-[#1c1c1c] pt-2">
          <span className="select-none text-neutral-600">7</span>
          <p className="text-neutral-500">
            <span className="text-accent">$</span> node --version
          </p>
        </div>
        <div className="flex gap-3">
          <span className="select-none text-neutral-600">8</span>
          <p className="text-neutral-400">
            v20.12.0 <span className="inline-block h-3.5 w-1.5 bg-accent animate-cursor-blink" />
          </p>
        </div>
      </div>
    </div>
  );
};
