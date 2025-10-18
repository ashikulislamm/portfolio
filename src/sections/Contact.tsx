import { Mail } from "lucide-react";
import { LoadingLink } from "@/components/LoadingLink";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Interactive Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
                Ready to Start Your Project?
              </h2>
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Let's turn your vision into reality with cutting-edge technology
              and creative solutions
            </p>
          </div>

          {/* Interactive Action Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Quick Chat Card */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-surface/30 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:scale-105 cursor-pointer group-hover:shadow-2xl group-hover:shadow-accent/10 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-accent group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                  Quick Chat
                </h3>
                <p className="text-text-secondary text-sm mb-4 flex-grow">
                  Schedule a 15-minute call to discuss your project
                </p>
                <LoadingLink
                  href="/contact"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors mt-auto"
                >
                  Let's Talk
                  <span className="transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </LoadingLink>
              </div>
            </div>

            {/* Project Quote Card */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-surface/30 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 cursor-pointer group-hover:shadow-2xl group-hover:shadow-blue-500/10 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-blue-500 group-hover:animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-blue-500 transition-colors">
                  Get Quote
                </h3>
                <p className="text-text-secondary text-sm mb-4 flex-grow">
                  Receive a detailed proposal for your custom project
                </p>
                <LoadingLink
                  href="/contact"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-colors mt-auto"
                >
                  Request Quote
                  <span className="transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </LoadingLink>
              </div>
            </div>

            {/* Collaboration Card */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-surface/30 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 cursor-pointer group-hover:shadow-2xl group-hover:shadow-purple-500/10 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-purple-500 group-hover:animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-purple-500 transition-colors">
                  Collaborate
                </h3>
                <p className="text-text-secondary text-sm mb-4 flex-grow">
                  Partner with me on your next big idea or startup
                </p>
                <LoadingLink
                  href="/contact"
                  className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 font-medium transition-colors mt-auto"
                >
                  Start Partnership
                  <span className="transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </LoadingLink>
              </div>
            </div>
          </div>

          {/* Interactive Main CTA with Floating Elements */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-surface/40 to-surface/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-accent/20 group-hover:border-accent/40 transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left md:text-left flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
                    Ready to Transform Your Ideas?
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Join 20+ satisfied clients who've brought their visions to
                    life with modern, scalable solutions.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <LoadingLink
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-background px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/25 text-lg group-hover:animate-pulse"
                  >
                    <Mail className="w-5 h-5" />
                    Start Your Project
                  </LoadingLink>
                  <LoadingLink
                    href="/projects"
                    className="inline-flex items-center gap-3 bg-transparent hover:bg-surface/30 text-text-primary border border-accent/20 hover:border-accent/40 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                  >
                    View My Work
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </LoadingLink>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Status Indicator */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 rounded-full border border-green-500/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium text-sm">
              Currently accepting new projects
            </span>
            <div
              className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
