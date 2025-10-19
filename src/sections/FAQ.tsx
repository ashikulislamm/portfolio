"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle, Zap } from "lucide-react";
import { LoadingLink } from "@/components/LoadingLink";

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I provide full-stack web development services including frontend development with React/Next.js, backend development with Node.js, database design, API development, and responsive web design. I also offer website optimization, maintenance, and consultation services."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and requirements. A simple landing page typically takes 1-2 weeks, while a full-stack web application can take 4-8 weeks. I provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Absolutely! I work with clients worldwide and have experience managing remote projects. I use modern collaboration tools like Slack, Zoom, and project management platforms to ensure smooth communication and project delivery regardless of location."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, Express.js, MongoDB, MySQL, and Tailwind CSS. I'm always learning new technologies and can adapt to your project's specific requirements."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! I offer post-launch support and maintenance packages. This includes bug fixes, security updates, content updates, performance optimization, and adding new features as your business grows."
    },
    {
      question: "How do you handle project pricing?",
      answer: "I offer both fixed-price projects and hourly rates depending on your needs. Fixed prices work well for defined scope projects, while hourly rates are better for ongoing work or projects with evolving requirements. I provide detailed quotes after understanding your specific needs."
    },
    {
      question: "Can you help with existing projects or just new ones?",
      answer: "I can work on both new projects from scratch and existing projects that need improvements, bug fixes, or new features. I'm experienced in working with legacy codebases and can help modernize and optimize existing applications."
    },
    {
      question: "What's your development process like?",
      answer: "I follow an agile development approach with regular communication and feedback loops. The process typically includes: requirement analysis, design/wireframing, development with regular updates, testing, deployment, and post-launch support. You'll be involved throughout the entire process."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
      
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
            <HelpCircle className="w-4 h-4 text-accent mr-2" />
            <span className="gradient-text text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Got questions? I've got answers! Here are the most common questions I receive from clients.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-surface/30 backdrop-blur-sm rounded-2xl border border-accent/10 hover:border-accent/20 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent/20 rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-text-secondary transition-transform duration-300 flex-shrink-0 ${
                        openFAQ === index ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFAQ === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <div className="ml-14 pr-10">
                      <div className="h-px bg-accent/10 mb-4"></div>
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-8 border border-accent/10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Don't hesitate to reach out! I'm always happy to discuss your project and answer any specific questions you might have.
            </p>
            <LoadingLink
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-background px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              <MessageCircle className="w-4 h-4" />
              Get In Touch
            </LoadingLink>
          </div>
        </div>
      </div>
    </section>
  );
};