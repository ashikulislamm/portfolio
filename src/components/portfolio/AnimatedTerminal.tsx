"use client";

import React, { useEffect, useState } from "react";
import { Play, CheckCircle2, Terminal as TerminalIcon, RotateCcw } from "lucide-react";

export interface CodeLine {
  lineNum: number;
  text: string;
  syntaxHighlight?: (text: string) => React.ReactNode;
}

export interface AnimatedTerminalProps {
  filename?: string;
  language?: string;
  lines?: string[];
  command?: string;
  outputLines?: string[];
  className?: string;
  autoPlay?: boolean;
}

export const AnimatedTerminal = ({
  filename = "developer.ts",
  language = "TypeScript",
  lines = [
    'export const developer = {',
    '  name: "Ashikul Islam",',
    '  role: "Software Engineer",',
    '  location: "Dhaka, Bangladesh",',
    '  status: "available_for_hire",',
    '};',
  ],
  command = "node --version",
  outputLines = ["v20.12.0", "✓ [compiled successfully in 18ms]"],
  className = "",
  autoPlay = true,
}: AnimatedTerminalProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [phase, setPhase] = useState<"typing" | "command" | "executing" | "completed">("typing");

  const runAnimation = () => {
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setDisplayedLines([]);
    setPhase("typing");
  };

  useEffect(() => {
    if (!autoPlay) return;

    if (phase === "typing") {
      if (currentLineIndex < lines.length) {
        const fullLine = lines[currentLineIndex];
        if (currentCharIndex < fullLine.length) {
          const timer = setTimeout(() => {
            setCurrentCharIndex((prev) => prev + 1);
          }, 24); // Typing speed per character
          return () => clearTimeout(timer);
        } else {
          // Line completed, move to next line
          const timer = setTimeout(() => {
            setDisplayedLines((prev) => [...prev, fullLine]);
            setCurrentLineIndex((prev) => prev + 1);
            setCurrentCharIndex(0);
          }, 90);
          return () => clearTimeout(timer);
        }
      } else {
        // Typing finished, move to command phase
        const timer = setTimeout(() => {
          setPhase("command");
        }, 400);
        return () => clearTimeout(timer);
      }
    }

    if (phase === "command") {
      const timer = setTimeout(() => {
        setPhase("executing");
      }, 500);
      return () => clearTimeout(timer);
    }

    if (phase === "executing") {
      const timer = setTimeout(() => {
        setPhase("completed");
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, lines, phase, autoPlay]);

  // Syntax highlighter helper
  const renderSyntaxHighlightedText = (text: string) => {
    if (text.includes("export const")) {
      return (
        <>
          <span className="text-accent font-semibold">export const</span>{" "}
          <span className="text-blue-400">{text.replace("export const", "").split("=")[0]}</span>=
          {text.includes("{") ? " {" : ""}
        </>
      );
    }

    if (text.includes("name:") || text.includes("role:") || text.includes("location:") || text.includes("status:") || text.includes("architecture:") || text.includes("testing:") || text.includes("ci_cd:") || text.includes("database_strategy:")) {
      const [key, val] = text.split(":");
      const isStatus = key.trim() === "status";
      return (
        <span className="pl-4">
          <span className="text-neutral-500">{key}:</span>
          {val && (
            <span className={isStatus ? "text-accent font-semibold" : "text-amber-300"}>
              {val}
            </span>
          )}
        </span>
      );
    }

    if (text.trim() === "};" || text.trim() === "}") {
      return <span className="text-neutral-400">{text}</span>;
    }

    return <span>{text}</span>;
  };

  return (
    <div className={`terminal-card border border-border-subtle bg-[#0d0d0d] rounded-xl overflow-hidden shadow-xl text-left ${className}`}>
      {/* Top Window Chrome Bar */}
      <div className="flex items-center justify-between border-b border-[#202020] bg-secondary-bg px-3.5 py-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-neutral-300 font-medium">
            {filename}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-neutral-500">{language}</span>
          <button
            onClick={runAnimation}
            className="flex items-center gap-1 font-mono text-[10px] text-accent bg-accent/5 px-2 py-0.5 rounded-md hover:bg-accent/15 transition-all"
            title="Re-run code typing animation"
          >
            {phase === "completed" ? <RotateCcw size={10} /> : <Play size={10} />}
            <span>{phase === "completed" ? "replay" : "run_code"}</span>
          </button>
        </div>
      </div>

      {/* Code Window Body */}
      <div className="p-4 font-mono text-xs leading-relaxed text-neutral-300">
        {/* Render completed lines */}
        {displayedLines.map((lineText, idx) => (
          <div key={idx} className="flex gap-3 min-h-[22px]">
            <span className="select-none text-neutral-600 w-4 text-right shrink-0">{idx + 1}</span>
            <p className="min-w-0 flex-1 break-words">{renderSyntaxHighlightedText(lineText)}</p>
          </div>
        ))}

        {/* Currently typing line */}
        {phase === "typing" && currentLineIndex < lines.length && (
          <div className="flex gap-3 min-h-[22px]">
            <span className="select-none text-neutral-600 w-4 text-right shrink-0">
              {currentLineIndex + 1}
            </span>
            <p className="min-w-0 flex-1 break-words">
              {renderSyntaxHighlightedText(lines[currentLineIndex].substring(0, currentCharIndex))}
              <span className="inline-block h-3.5 w-1.5 bg-accent ml-0.5 animate-cursor-blink" />
            </p>
          </div>
        )}

        {/* Command & Execution Terminal Prompt */}
        {(phase === "command" || phase === "executing" || phase === "completed") && (
          <div className="mt-3 pt-3 border-t border-[#1c1c1c] space-y-1.5">
            <div className="flex gap-3 items-center text-neutral-400">
              <span className="select-none text-neutral-600 w-4 text-right shrink-0">
                {lines.length + 1}
              </span>
              <p className="flex min-w-0 flex-wrap items-center gap-1.5 text-neutral-300">
                <span className="text-accent font-bold">$</span>
                <span>{command}</span>
                {phase === "executing" && (
                  <span className="h-3 w-3 animate-spin rounded-full border-2 border-accent border-t-transparent ml-2" />
                )}
              </p>
            </div>

            {/* Execution stdout output */}
            {phase === "completed" && (
              <div className="space-y-1 pl-7 font-mono text-[11px]">
                {outputLines.map((outStr, idx) => (
                  <p
                    key={idx}
                    className={
                      outStr.includes("✓") || outStr.includes("success")
                        ? "text-accent font-medium flex items-center gap-1"
                        : "text-neutral-400"
                    }
                  >
                    {outStr.includes("✓") && <CheckCircle2 size={12} className="text-accent" />}
                    <span>{outStr}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
