import SAS from "@/assets/images/SAS.png";
import NewsPortal from "@/assets/images/News_Portal.png";
import DevToolsBox from "@/assets/images/DevToolsBox.png";
import { ExternalLink } from "lucide-react";
import { LoadingLink } from "@/components/LoadingLink";

const portfolioProjects = [
  {
    company: "ShutterArc Studios",
    year: "2024",
    title: "SAS Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://shutterarcstudios.com/",
    image: SAS,
  },
  {
    company: "Full Stack Project",
    year: "2025",
    title: "News Portal",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://news-portal-ashik.vercel.app/",
    image: NewsPortal,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "DevTools Box",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://ashikulislamm.github.io/DevToolsBox/",
    image: DevToolsBox,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
      
      {/* Gradient orbs - matching hero section style */}
      <div className="absolute inset-0 -z-10">
        {/* Right side accent glow */}
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        
        {/* Right middle blue glow */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Bottom right subtle glow */}
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
            <span className="text-accent text-sm font-medium">
              REAL-WORLD RESULTS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See how I transformed concepts into engaging digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-12">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-16 items-center group`}
            >
              {/* Project Info */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-accent font-medium">
                    {project.company}
                  </span>
                  <span className="text-text-muted">•</span>
                  <span className="text-text-muted">{project.year}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                  {project.title}
                </h3>

                <div className="space-y-3">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-text-secondary">
                        {result.title}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-surface hover:bg-surface/80 text-text-primary px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 border border-accent/20 hover:border-accent/40"
                >
                  Visit Live Site
                  <ExternalLink className="w-4 h-4 text-accent" />
                </a>
              </div>

              {/* Project Image */}
              <div className="flex-1">
                <div className="relative group/image">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-surface rounded-2xl overflow-hidden border border-accent/10 transform group-hover:scale-105 transition-all duration-300">
                    <img
                      src={project.image.src}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* More About Me Button */}
        <div className="text-center mt-12">
          <LoadingLink
            href="/projects"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-background px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
          >
            All Projects
            <ExternalLink className="w-4 h-4" />
          </LoadingLink>
        </div>
      </div>
    </section>
  );
};
