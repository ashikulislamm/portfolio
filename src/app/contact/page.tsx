"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Copy,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  Sparkles,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import { FaBehance, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

type InquiryMode = {
  id: string;
  label: string;
  title: string;
  description: string;
  subject: string;
  message: string;
};

const inquiryModes: InquiryMode[] = [
  {
    id: "project",
    label: "Project",
    title: "Build something new",
    description: "For product launches, web apps, landing pages, and MVPs.",
    subject: "Project Inquiry",
    message:
      "Hi Ashikul, I have a project in mind and would like to discuss the scope, timeline, and best approach.",
  },
  {
    id: "collab",
    label: "Collaboration",
    title: "Work together",
    description: "For partnerships, team-based work, or technical collaboration.",
    subject: "Collaboration Opportunity",
    message:
      "Hi Ashikul, I am reaching out about a collaboration opportunity and would love to explore whether we are a good fit.",
  },
  {
    id: "consult",
    label: "Consultation",
    title: "Get guidance",
    description: "For audits, technical advice, architecture, or problem solving.",
    subject: "Consultation Request",
    message:
      "Hi Ashikul, I need guidance on a technical challenge and would like to schedule a conversation.",
  },
];

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "md.ashikul4040@gmail.com",
    href: "mailto:md.ashikul4040@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    value: "+8801794624361",
    href: "tel:+8801794624361",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
] as const;

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/ashikulislam.me/",
    icon: <FaFacebook />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ashikulislammm/",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/ashikulislamm",
    icon: <FaGithub />,
  },
  {
    name: "Behance",
    href: "https://www.behance.net/ashikulislam5",
    icon: <FaBehance />,
  },
] as const;

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
      setSubmitMessage("Thanks. Your message is queued and I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSelectedMode(inquiryModes[0]);
    }, 1800);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("md.ashikul4040@gmail.com");
      setCopyMessage("Email copied to clipboard.");
      window.setTimeout(() => setCopyMessage(""), 2200);
    } catch {
      setCopyMessage("Copy failed. Use the email link instead.");
      window.setTimeout(() => setCopyMessage(""), 2200);
    }
  };

  const messageLength = formData.message.trim().length;

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <main className="relative overflow-hidden pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-16 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="absolute right-[-8%] top-32 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/[0.025] blur-3xl" />
        </div>

        <section className="relative mx-auto max-w-7xl px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.24em] text-text-secondary">
              <Sparkles size={12} /> Contact Studio
            </span>
            <h1
              className="mt-6 text-5xl font-bold leading-tight md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s design a message worth opening.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
              Choose a conversation path, prefill your intent, and send a clear brief. The page is set up to feel
              more like a guided interaction than a plain contact form.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
              >
                <Copy size={16} />
                Copy email
              </button>
              <a
                href="mailto:md.ashikul4040@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[var(--color-nav-active)] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white"
              >
                <Mail size={16} />
                Open mail client
              </a>
              <a
                href="tel:+8801794624361"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
              >
                <Phone size={16} />
                Call directly
              </a>
            </div>

            {(copyMessage || submitMessage) && (
              <div
                aria-live="polite"
                className="mt-5 inline-flex rounded-full border border-white/10 bg-secondary-bg px-4 py-2 text-sm text-text-secondary"
              >
                {copyMessage || submitMessage}
              </div>
            )}
          </motion.div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="rounded-3xl border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">Conversation Path</p>
                    <h2 className="mt-2 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                      Pick the right starting point
                    </h2>
                  </div>
                  <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-secondary sm:block">
                    Interactive
                  </div>
                </div>

                <div className="grid gap-3">
                  {inquiryModes.map((mode) => {
                    const isActive = selectedMode.id === mode.id;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => applyMode(mode)}
                        className={`group rounded-2xl border p-4 text-left transition-all duration-200 ${
                          isActive
                            ? "border-[var(--color-nav-active)] bg-[var(--color-nav-active)] text-black shadow-[0_14px_30px_rgba(242,178,76,0.18)]"
                            : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className={`text-xs font-mono uppercase tracking-[0.18em] ${isActive ? "text-black/70" : "text-text-secondary"}`}>
                              {mode.label}
                            </p>
                            <h3 className="mt-1 text-lg font-semibold">{mode.title}</h3>
                          </div>
                          <ArrowRight
                            size={18}
                            className={`mt-1 transition-transform ${isActive ? "translate-x-0 text-black" : "text-text-secondary group-hover:translate-x-1 group-hover:text-white"}`}
                          />
                        </div>
                        <p className={`mt-3 text-sm leading-relaxed ${isActive ? "text-black/80" : "text-text-secondary"}`}>
                          {mode.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-1">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-card-bg p-5"
                >
                  <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-white">
                    <Clock3 size={18} />
                  </div>
                  <h3 className="mb-2 font-semibold text-white">Response Window</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    I usually reply within 24 hours, often sooner for project-related requests.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-card-bg p-5"
                >
                  <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-white">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="mb-2 font-semibold text-white">Clear Process</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    I keep the first response practical, direct, and focused on scope, timeline, and next steps.
                  </p>
                </motion.div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-card-bg p-6">
                <h3 className="mb-5 text-xl font-semibold text-white">Contact details</h3>
                <div className="space-y-3">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-white/15 hover:bg-white/[0.06]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--color-nav-active)] transition-colors group-hover:bg-[var(--color-nav-active)] group-hover:text-black">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{info.title}</p>
                        <p className="text-sm text-text-secondary">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-card-bg p-6">
                <div className="mb-5 flex items-center gap-2">
                  <Globe2 size={18} className="text-text-secondary" />
                  <h3 className="text-xl font-semibold text-white">Social signal</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.name}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-text-secondary transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-3xl border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8"
            >
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">Form Console</p>
                  <h2 className="mt-2 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    Send a concise brief
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-secondary">
                  {selectedMode.label}
                </div>
              </div>

              <div className="mb-6 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {inquiryModes.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => applyMode(mode)}
                    className={`rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
                      selectedMode.id === mode.id
                        ? "border-white bg-white text-black"
                        : "border-white/10 bg-white/5 text-text-secondary hover:border-white/20 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-secondary">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-text-secondary/50 focus:border-white/30 focus:bg-white/8"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-secondary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-text-secondary/50 focus:border-white/30 focus:bg-white/8"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {inquiryModes.map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => applyMode(mode)}
                      className={`rounded-2xl border px-4 py-3 text-left transition-colors ${
                        selectedMode.id === mode.id
                          ? "border-[var(--color-nav-active)] bg-[var(--color-nav-active)] text-black"
                          : "border-white/10 bg-white/5 text-text-secondary hover:border-white/20 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <MessageSquareText size={16} />
                        {mode.label}
                      </div>
                      <p className={`mt-1 text-xs ${selectedMode.id === mode.id ? "text-black/80" : "text-text-secondary"}`}>
                        {mode.description}
                      </p>
                    </button>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text-secondary">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-text-secondary/50 focus:border-white/30 focus:bg-white/8"
                    placeholder={selectedMode.subject}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={8}
                    className="min-h-[220px] w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-text-secondary/50 focus:border-white/30 focus:bg-white/8"
                    placeholder={selectedMode.message}
                  />
                  <div className="mt-2 flex items-center justify-between text-xs text-text-secondary">
                    <span>{messageLength} characters</span>
                    <span>Clear, specific briefs get faster replies.</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[var(--color-nav-active)] px-6 py-4 font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.section>
          </div>
        </section>
      </main>
    </div>
  );
}
