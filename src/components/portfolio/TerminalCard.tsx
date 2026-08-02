import React from "react";
import { PersonalInfo } from "@/types/portfolio";
import { AnimatedTerminal } from "@/components/portfolio/AnimatedTerminal";

export interface TerminalCardProps {
  personalInfo: PersonalInfo;
  filename?: string;
}

export const TerminalCard = ({
  personalInfo,
  filename = "developer.ts",
}: TerminalCardProps) => {
  const codeLines = [
    'export const developer = {',
    `  name: "${personalInfo.name}",`,
    `  role: "${personalInfo.role}",`,
    `  location: "${personalInfo.location}",`,
    `  status: "${personalInfo.status}",`,
    '};',
  ];

  return (
    <AnimatedTerminal
      filename={filename}
      language="TypeScript"
      lines={codeLines}
      command="node --version"
      outputLines={["v20.12.0", "✓ [process compiled successfully in 16ms]"]}
    />
  );
};
