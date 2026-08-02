import { personalInfo, socialLinks } from "@/data/portfolioData";
import { SocialButton } from "@/components/portfolio/SocialButton";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#262626] bg-[#0a0a0a] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 font-mono text-xs text-neutral-400 sm:flex-row sm:items-center">
        <div>
          &copy; {currentYear} {personalInfo.name}. Built with Next.js & TypeScript.
        </div>
        <div className="flex items-center gap-6">
          <SocialButton name="GitHub" href={socialLinks.github} variant="text-link" />
          <SocialButton name="LinkedIn" href={socialLinks.linkedin} variant="text-link" />
          <SocialButton name="Scholar" href={socialLinks.googleScholar} variant="text-link" />
        </div>
      </div>
    </footer>
  );
};
