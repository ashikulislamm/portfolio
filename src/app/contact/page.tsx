"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  ArrowUpRight,
  Github,
  Linkedin,
  GraduationCap,
  FileText,
} from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const subject = encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const bentoLinks = [
    {
      name: "GitHub",
      subtitle: "Code & Repos",
      href: socialLinks.github,
      icon: <Github size={18} />,
    },
    {
      name: "LinkedIn",
      subtitle: "Network & Career",
      href: socialLinks.linkedin,
      icon: <Linkedin size={18} />,
    },
    {
      name: "Scholar",
      subtitle: "IEEE Research",
      href: socialLinks.googleScholar,
      icon: <GraduationCap size={18} />,
    },
    {
      name: "Resume",
      subtitle: "Curriculum Vitae",
      href: personalInfo.resumeUrl,
      icon: <FileText size={18} />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-neutral-100">
      <main className="site-container pb-28 pt-28 md:pt-36">
        {/* Editorial Section Header */}
        <div className="mb-12 text-left">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Get In Touch
          </h1>
          <p className="mt-3 max-w-2xl text-base text-neutral-400 font-sans leading-relaxed">
            Have a project in mind, an engineering role to discuss, or want to
            connect? Reach out directly or send a message through the form below.
          </p>
        </div>

        {/* Bento Grid: Aligned 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Bento Column (5 cols on lg) */}
          <aside className="lg:col-span-5 flex flex-col justify-between gap-5 text-left">
            {/* Bento 1: Direct Email Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/20">
              <div className="flex items-center gap-3 text-cream mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-sans text-sm font-semibold text-white hover:text-cream transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2 px-3 font-mono text-xs text-white/80 transition-all hover:border-cream/50 hover:bg-white/[0.06] hover:text-white active:scale-95"
                >
                  {isCopied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-cream px-4 py-2 font-mono text-xs font-semibold text-black transition-all hover:bg-white active:scale-95 shrink-0"
                >
                  <span>Open Client</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Bento 2: Availability & Coordinates */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition-all hover:border-white/20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin size={16} className="text-cream" />
                  <span className="font-sans text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
                <span className="font-mono text-xs text-white/40">UTC+06:00</span>
              </div>
              <p className="font-mono text-xs text-emerald-400 flex items-center gap-2 pt-2 border-t border-white/5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Remote & Hybrid Roles</span>
              </p>
            </div>

            {/* Bento 3: 2x2 Grid for Socials & CV */}
            <div className="grid grid-cols-2 gap-3 flex-1">
              {bentoLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm transition-all duration-200 hover:border-cream/40 hover:bg-white/[0.04] hover:shadow-[0_0_25px_rgba(247,242,235,0.06)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-white/80 group-hover:text-cream group-hover:border-cream/30 transition-colors">
                      {item.icon}
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-white/30 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream"
                    />
                  </div>

                  <div className="mt-3">
                    <span className="font-heading text-sm font-bold block text-white group-hover:text-cream transition-colors">
                      {item.name}
                    </span>
                    <span className="font-sans text-[11px] text-white/40 block mt-0.5 group-hover:text-white/60 transition-colors">
                      {item.subtitle}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </aside>

          {/* Right Bento Column: Contact Form (7 cols on lg) */}
          <section className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm text-left transition-all hover:border-white/20">
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-2">
                Send a Message
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans mb-6">
                Fill in your details below and I&apos;ll get back to you promptly.
              </p>

              {isSubmitted ? (
                <div className="rounded-2xl border border-cream/30 bg-cream/[0.05] p-8 text-center my-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream/10 text-cream mb-4">
                    <Check size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white uppercase mb-2">
                    Message Prepared
                  </h3>
                  <p className="text-sm text-neutral-300 font-sans max-w-md mx-auto">
                    Thank you, {formData.name}. Your email message has been
                    composed. If your email client didn&apos;t open automatically,
                    you can reach me directly at{" "}
                    <span className="text-cream">{personalInfo.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-cream hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-sans text-xs font-medium text-neutral-300 mb-1.5"
                      >
                        Your Name <span className="text-cream">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 font-sans text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-cream focus:bg-white/[0.05]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-sans text-xs font-medium text-neutral-300 mb-1.5"
                      >
                        Your Email <span className="text-cream">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 font-sans text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-cream focus:bg-white/[0.05]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-sans text-xs font-medium text-neutral-300 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project Inquiry / Engineering Role / Collaboration"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 font-sans text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-cream focus:bg-white/[0.05]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-sans text-xs font-medium text-neutral-300 mb-1.5"
                    >
                      Your Message <span className="text-cream">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, or open role..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 font-sans text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-cream focus:bg-white/[0.05] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cream py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(247,242,235,0.25)] active:scale-[0.99] disabled:opacity-50 mt-2"
                  >
                    <Send
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
