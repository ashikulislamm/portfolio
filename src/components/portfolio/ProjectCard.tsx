import React from "react";
import { ExternalLink, Github, Terminal, GitBranch } from "lucide-react";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export interface ProjectCardProps {
  project: Project;
  index?: number;
  mode?: "home" | "catalog";
}

export const ProjectCard = ({
  project,
  mode = "home",
}: ProjectCardProps) => {
  const imageSrc =
    typeof project.image === "string" ? project.image : project.image?.src;
  const projectTitle = project.title || project.name;
  const projectDesc = project.description || project.desc;
  const techList = project.technologies || project.stack;
  const liveLink = project.liveUrl || project.demo;
  const repoLink = project.githubUrl || project.github;

  const isCompleted = project.status.toLowerCase() === "completed";

  if (mode === "catalog") {
    return (
      <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border-subtle bg-secondary-bg p-5 transition-colors duration-200 hover:border-neutral-700">
        <div>
          {imageSrc && (
            <div className="relative mb-4 overflow-hidden rounded-xl border border-border-subtle bg-background">
              <img
                src={imageSrc}
                alt={projectTitle}
                className="h-44 w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="status" statusType={project.status}>
                  <GitBranch className="mr-1 h-3 w-3 inline" />
                  {isCompleted ? "main: stable" : "dev: in-progress"}
                </Badge>
              </div>
            </div>
          )}

          <div className="mb-2 flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-neutral-100">{projectTitle}</h3>
            {project.featured && (
              <Badge variant="featured">featured</Badge>
            )}
          </div>

          <p className="mb-4 text-xs leading-relaxed text-neutral-400">
            {projectDesc}
          </p>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {techList.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech.toLowerCase()}
              </Badge>
            ))}
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-4 space-y-1 font-mono text-[11px] text-neutral-500">
              {project.highlights.slice(0, 2).map((highlight, idx) => (
                <p key={idx} className="flex items-start gap-1.5">
                  <span className="text-accent">{">"}</span>
                  <span>{highlight}</span>
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-[#202020] mt-auto">
          {liveLink && liveLink !== "#" && (
            <Button variant="terminal" size="sm" href={liveLink} isMono icon={<ExternalLink size={13} />} iconPosition="right">
              live_demo
            </Button>
          )}
          {repoLink && (
            <Button variant="secondary" size="sm" href={repoLink} isMono icon={<Github size={13} />}>
              view_code
            </Button>
          )}
        </div>
      </article>
    );
  }

  return (
    <div className="project-card flex flex-col justify-between rounded-xl">
      <div>
        <div className="mb-3 flex items-center justify-between gap-2">
          <h3 className="text-base font-bold text-neutral-100 flex items-center gap-2">
            <Terminal size={15} className="text-accent" />
            {project.name}
          </h3>
          <span className="font-mono text-[11px] text-neutral-500">
            {isCompleted ? "[main]" : "[dev]"}
          </span>
        </div>
        <p className="mb-4 text-xs leading-relaxed text-neutral-400">
          {project.desc}
        </p>
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Badge key={s} variant="tech">
              {s.toLowerCase()}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 pt-3 border-t border-[#202020] font-mono text-xs">
        {liveLink && liveLink !== "#" && (
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-accent transition-colors hover:opacity-80"
          >
            <ExternalLink size={13} />
            live_demo
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-neutral-400 transition-colors hover:text-white"
          >
            <Github size={13} />
            view_code
          </a>
        )}
      </div>
    </div>
  );
};
