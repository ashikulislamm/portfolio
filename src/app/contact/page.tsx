"use client";

import { useState } from "react";
import {
  Copy,
  Mail,
  Send,
  Terminal,
  Code2,
} from "lucide-react";
import { FaBehance, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

import {
  personalInfo,
  socialLinks as globalSocialLinks,
  inquiryModesData as inquiryModes,
} from "@/data/portfolioData";
import { InquiryMode } from "@/types/portfolio";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { SocialButton } from "@/components/portfolio/SocialButton";
import { SectionHeader } from "@/components/portfolio/SectionHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [selectedMode, setSelectedMode] = useState<InquiryMode>(inquiryModes[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyMode = (mode: InquiryMode) => {
    setSelectedMode(mode);
    setFormData((prev) => ({
      ...prev,
      subject: mode.subject,
      message: mode.message,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("[status 200]: Message queued successfully. Response expected within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyMessage("[clipboard]: Email copied successfully.");
      window.setTimeout(() => setCopyMessage(""), 2200);
    } catch {
      setCopyMessage("[error]: Copy failed.");
      window.setTimeout(() => setCopyMessage(""), 2200);
    }
  };

  const messageLength = formData.message.trim().length;

  return (
    <div className="min-h-screen bg-background text-neutral-100">
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-28 md:pt-32">
        <SectionHeader
          comment="// 06 — terminal_contact_console"
          title="Contact & Transmission"
          subtitle="Send a structured brief or query directly into my inbox. Fast responses guaranteed for software opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          {/* Left Column - Terminal Info Console */}
          <aside className="space-y-6 text-left">
            <div className="rounded-xl border border-border-subtle bg-secondary-bg p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[#202020] pb-3 mb-4 text-neutral-400">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-accent" />
                  <span>contact --info</span>
                </div>
                <span className="text-[10px] text-neutral-600">bash</span>
              </div>

              <div className="space-y-3">
                <p className="text-neutral-500">$ cat contact.json</p>
                <div className="pl-2 space-y-1.5 text-neutral-300">
                  <p><span className="text-neutral-500">&quot;email&quot;:</span> &quot;{personalInfo.email}&quot;</p>
                  <p><span className="text-neutral-500">&quot;phone&quot;:</span> &quot;{personalInfo.phone}&quot;</p>
                  <p><span className="text-neutral-500">&quot;location&quot;:</span> &quot;{personalInfo.location}&quot;</p>
                  <p><span className="text-neutral-500">&quot;status&quot;:</span> <span className="text-accent">&quot;available_for_hire&quot;</span></p>
                </div>

                <div className="pt-3 border-t border-[#1c1c1c] flex flex-wrap gap-2">
                  <Button variant="terminal" size="sm" onClick={copyEmail} icon={<Copy size={13} />} isMono>
                    copy_email
                  </Button>
                  <Button variant="secondary" size="sm" href={`mailto:${personalInfo.email}`} icon={<Mail size={13} />} isMono>
                    open_mail_client
                  </Button>
                </div>

                {(copyMessage || submitMessage) && (
                  <p className="mt-3 font-mono text-xs text-accent bg-accent/10 border border-accent/20 p-2 rounded-lg">
                    {copyMessage || submitMessage}
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-border-subtle bg-[#121212] p-5 text-left font-mono text-xs">
              <p className="text-neutral-400 mb-3">$ list --social-signals</p>
              <div className="grid grid-cols-2 gap-2">
                <SocialButton name="GitHub" href={globalSocialLinks.github} icon={<FaGithub size={14} />} variant="card" />
                <SocialButton name="LinkedIn" href={globalSocialLinks.linkedin} icon={<FaLinkedin size={14} />} variant="card" />
                <SocialButton name="Facebook" href={globalSocialLinks.facebook} icon={<FaFacebook size={14} />} variant="card" />
                <SocialButton name="Behance" href={globalSocialLinks.behance} icon={<FaBehance size={14} />} variant="card" />
              </div>
            </div>
          </aside>

          {/* Right Column - Terminal Form Console */}
          <section className="rounded-xl border border-border-subtle bg-secondary-bg p-6 text-left md:p-8">
            <div className="flex items-center justify-between border-b border-[#202020] pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-300">
                <Code2 size={15} className="text-accent" />
                <span>$ send-message --to=ashikul</span>
              </div>
              <span className="font-mono text-[10px] text-neutral-500">Form Console</span>
            </div>

            {/* Quick intent selector tabs */}
            <div className="mb-6">
              <p className="font-mono text-xs text-neutral-400 mb-2">{"// Select Intent Preset:"}</p>
              <div className="grid grid-cols-3 gap-2">
                {inquiryModes.map((mode) => {
                  const isActive = selectedMode.id === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => applyMode(mode)}
                      className={`px-3 py-2 text-left font-mono text-xs rounded-xl border transition-colors ${
                        isActive
                          ? "border-accent/50 bg-accent/10 text-accent font-semibold"
                          : "border-border-subtle bg-[#161616] text-neutral-400 hover:border-neutral-700 hover:text-white"
                      }`}
                    >
                      <span>[{mode.label.toLowerCase()}]</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
                <Input
                  label="email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <Input
                label="subject"
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder={selectedMode.subject}
              />

              <div>
                <Textarea
                  label="message_body"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="min-h-[160px] resize-none"
                  placeholder={selectedMode.message}
                />
                <div className="mt-1.5 flex items-center justify-between font-mono text-[11px] text-neutral-500">
                  <span>{messageLength} characters</span>
                  <span>[cmd + enter to submit]</span>
                </div>
              </div>

              <Button
                type="submit"
                isLoading={isSubmitting}
                variant="primary"
                size="lg"
                isMono
                className="w-full"
                icon={<Send size={15} />}
              >
                {isSubmitting ? "transmitting..." : "send_message()"}
              </Button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
