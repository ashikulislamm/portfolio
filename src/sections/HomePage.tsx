"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa6";

const Hero = () => (
  <section
    id="home"
    className="mx-auto grid max-w-7xl scroll-mt-28 gap-12 px-6 pb-20 pt-32 md:grid-cols-2 md:items-center"
  >
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1
        className="mb-4 text-5xl font-bold leading-tight md:text-7xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Hi, I&apos;m Ashikul
        <br />
        Islam
      </h1>
      <h2 className="mb-6 text-xl font-medium text-text-secondary md:text-2xl">
        Full-Stack Software Engineer
      </h2>
      <p className="mb-8 max-w-lg leading-relaxed text-text-secondary">
        I build scalable web applications, blockchain systems, and modern
        developer tools. Focused on performance, security, and clean
        architecture.
      </p>
      <div className="mb-10 flex flex-wrap gap-3">
        {["React", "Next.js", "Node.js", ".NET", "Blockchain"].map((tech) => (
          <span
            key={tech}
            className="rounded border border-border-subtle px-2 py-1 font-mono text-xs text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <Link href="/projects" className="btn-primary">
          View Projects
        </Link>
        <a
          className="btn-secondary inline-flex items-center gap-2"
          href="https://drive.google.com/file/d/16OohJwNNFpsTOpvgGH7CWMqry5zlhHt6/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <FileText size={18} />
          Download CV
        </a>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="terminal-card"
    >
      <div className="flex items-center gap-2 border-b border-border-subtle bg-secondary-bg px-4 py-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full border border-red-500/40 bg-red-500/20" />
          <div className="h-3 w-3 rounded-full border border-yellow-500/40 bg-yellow-500/20" />
          <div className="h-3 w-3 rounded-full border border-green-500/40 bg-green-500/20" />
        </div>
        <div className="ml-2 flex items-center gap-1 text-[10px] text-text-secondary">
          <Terminal size={10} />
          developer.js - ashikul-portfolio
        </div>
      </div>
      <div className="p-6 text-sm leading-relaxed">
        <div className="flex gap-4">
          <span className="select-none text-text-secondary">1</span>
          <p>
            <span className="text-violet-400">const</span>{" "}
            <span className="text-blue-400">developer</span> = {"{"}
          </p>
        </div>
        <div className="flex gap-4">
          <span className="select-none text-text-secondary">2</span>
          <p className="pl-4">
            name: <span className="text-green-400">&quot;Ashikul Islam&quot;</span>,
          </p>
        </div>
        <div className="flex gap-4">
          <span className="select-none text-text-secondary">3</span>
          <p className="pl-4">
            role: <span className="text-green-400">&quot;Full Stack Engineer&quot;</span>,
          </p>
        </div>
        <div className="flex gap-4">
          <span className="select-none text-text-secondary">4</span>
          <p className="pl-4">
            stack: [<span className="text-green-400">&quot;React&quot;</span>,{" "}
            <span className="text-green-400">&quot;Node.js&quot;</span>,{" "}
            <span className="text-green-400">&quot;Blockchain&quot;</span>],
          </p>
        </div>
        <div className="flex gap-4">
          <span className="select-none text-text-secondary">5</span>
          <p className="pl-4">
            location: <span className="text-green-400">&quot;Dhaka, Bangladesh&quot;</span>,
          </p>
        </div>
        <div className="flex gap-4">
          <span className="select-none text-text-secondary">6</span>
          <p className="pl-4">
            status: <span className="text-green-400">&quot;Open for collaboration&quot;</span>
          </p>
        </div>
        <div className="flex gap-4">
          <span className="select-none text-text-secondary">7</span>
          <p>{"};"}</p>
        </div>
        <div className="mt-4 flex gap-4">
          <span className="select-none text-text-secondary">8</span>
          <p>
            <span className="text-blue-400">console</span>.
            <span className="text-yellow-400">log</span>(developer.
            <span className="text-yellow-400">role</span>);
          </p>
        </div>
        <div className="flex gap-4">
          <span className="select-none text-text-secondary">9</span>
          <p className="text-text-secondary">// Output: Full Stack Engineer</p>
        </div>
      </div>
    </motion.div>
  </section>
);

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Globe size={20} />,
      skills: ["React", "Next.js", "Tailwind", "TypeScript", "Redux", "Framer Motion"],
    },
    {
      title: "Backend",
      icon: <Code2 size={20} />,
      skills: ["Node.js", "Express", "ASP.NET Core", "REST APIs", "GraphQL", "WebSockets"],
    },
    {
      title: "Database",
      icon: <Database size={20} />,
      skills: ["PostgreSQL", "MongoDB", "MSSQL", "Redis", "Firebase"],
    },
    {
      title: "DevOps & Tools",
      icon: <Cpu size={20} />,
      skills: ["Docker", "GitHub Actions", "AWS", "Vercel", "Linux", "Git"],
    },
  ];

  return (
    <section id="tech-stack" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20">
      <div className="mb-12">
        <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          Tech Stack
        </h2>
        <div className="h-1 w-20 bg-white" />
      </div>
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border-subtle bg-secondary-bg/50 p-6"
          >
            <div className="mb-6 flex items-center gap-3 text-white">
              {cat.icon}
              <h3 className="font-semibold">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "IPGuardian",
      desc: "Blockchain IP protection system using Hyperledger Besu and IPFS. Ensures immutable proof of ownership for digital assets.",
      stack: ["Blockchain", "Hyperledger Besu", "IPFS", "React", "Node.js"],
      github: "https://github.com/ashikulislamm/IPGurdian",
      demo: "#",
    },
    {
      name: "Eventify",
      desc: "Comprehensive event management platform featuring real-time updates, ticket booking, and organizer dashboards.",
      stack: ["Next.js", "Express", "PostgreSQL", "Socket.io"],
      github: "https://github.com/ashikulislamm/Eventify",
      demo: "https://eventify-ashik.vercel.app/",
    },
    {
      name: "Currency Dashboard",
      desc: "Real-time fiat and crypto conversion tool with interactive charts and historical data analysis.",
      stack: ["React", "D3.js", "CoinGecko API", "Tailwind"],
      github: "https://github.com/ashikulislamm/Currency-Converter",
      demo: "https://globalxchange-currency-converter.vercel.app/",
    },
    {
      name: "DevToolBox",
      desc: "A collection of developer productivity tools including formatters, encoders, and regex testers.",
      stack: ["TypeScript", "React", "Web Workers"],
      github: "https://github.com/ashikulislamm/DevToolsBox",
      demo: "https://ashikulislamm.github.io/DevToolsBox/",
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20">
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-white" />
        </div>
        <Link href="/projects" className="btn-secondary inline-flex items-center gap-2 self-start">
          <ExternalLink size={16} />
          View All Projects
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="project-card flex flex-col justify-between"
          >
            <div>
              <h3 className="mb-3 text-xl font-bold">{project.name}</h3>
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">{project.desc}</p>
              <div className="mb-8 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border-subtle px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white"
              >
                <ExternalLink size={16} />
                View Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="experience" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20">
    <div className="mb-12">
      <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
        Experience
      </h2>
      <div className="h-1 w-20 bg-white" />
    </div>
    <div className="space-y-12">
      <div className="relative border-l border-border-subtle pl-8">
        <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-white" />
        <div className="mb-2">
          <span className="font-mono text-sm text-text-secondary">2024 - Present</span>
          <h3 className="text-xl font-bold">Technical Support Executive</h3>
          <p className="text-white/80">Chologhuri Limited</p>
        </div>
        <ul className="max-w-2xl space-y-2 text-sm text-text-secondary">
          <li className="flex gap-2">
            <ChevronRight size={16} className="mt-0.5 shrink-0" />
            Optimized system performance by identifying and resolving backend bottlenecks.
          </li>
          <li className="flex gap-2">
            <ChevronRight size={16} className="mt-0.5 shrink-0" />
            Improved logging and debugging tools, leading to a 30% reduction in issue resolution time.
          </li>
          <li className="flex gap-2">
            <ChevronRight size={16} className="mt-0.5 shrink-0" />
            Collaborated with the engineering team to deploy critical hotfixes and feature updates.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const Research = () => (
  <section className="mx-auto max-w-7xl px-6 py-20" id="research">
    <div className="mb-12">
      <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
        Research & Publications
      </h2>
      <div className="h-1 w-20 bg-white" />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-border-subtle bg-secondary-bg/30 p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs text-text-secondary">
            <GraduationCap size={14} />
            CONFERENCE PUBLICATION - IEEE
          </div>
          <h3 className="mb-4 text-xl font-bold leading-tight">
            Leveraging Hyperledger Besu-Based Private Blockchain for Intellectual Property Preservation
          </h3>
          <div className="mb-6 space-y-2 text-sm text-text-secondary">
            <p>
              <span className="text-white/60">DOI:</span> 10.1109/NCIM65934.2025.11160067
            </p>
            <p>Presented at the National Conference on Information Management.</p>
          </div>
          <a
            href="https://ieeexplore.ieee.org/abstract/document/11160067"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FileText size={18} />
            View Paper
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

const About = () => {
  const strengths = [
    {
      icon: <Rocket size={18} />,
      title: "Performance First",
      text: "Fast, reliable user experiences with clean architecture and measurable outcomes.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security Mindset",
      text: "I treat security and data integrity as product features, not post-launch patches.",
    },
    {
      icon: <Sparkles size={18} />,
      title: "Product Taste",
      text: "Technical decisions are shaped by usability, clarity, and real business value.",
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            About Me
          </h2>
          <div className="h-1 w-20 bg-white" />
        </div>
        <Link href="/about" className="btn-secondary inline-flex items-center gap-2 self-start">
          <ExternalLink size={16} />
          Read Full About Page
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border-subtle bg-secondary-bg/40 p-8"
        >
          <p className="mb-5 max-w-3xl text-lg leading-relaxed text-text-secondary">
            I build digital products that are engineered for growth and crafted for humans. From frontend
            polish to backend robustness, I focus on turning complex ideas into experiences users instantly trust.
          </p>
          <p className="mb-8 max-w-3xl leading-relaxed text-text-secondary">
            My sweet spot is where product thinking meets deep engineering: scalable web apps, API ecosystems,
            and blockchain-powered systems that solve meaningful problems without sacrificing speed or simplicity.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-1 md:grid-cols-3">
            <div className="rounded-xl border border-border-subtle bg-card-bg p-4 text-center">
              <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">Experience</p>
              <p className="mt-2 text-2xl font-bold text-white">2+ Years</p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-card-bg p-4 text-center">
              <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">Projects</p>
              <p className="mt-2 text-2xl font-bold text-white">20+</p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-card-bg p-4 text-center">
              <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">Focus</p>
              <p className="mt-2 text-xl font-bold text-white">Scalable Solutions</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3">
            {strengths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-border-subtle bg-card-bg p-4"
              >
                <div className="mb-3 inline-flex rounded-md border border-white/20 bg-white/5 p-2 text-white">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-border-subtle bg-card-bg p-6"
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-secondary-bg px-3 py-1 text-xs font-mono text-text-secondary">
              <Terminal size={12} /> developer.profile
            </div>

            <div className="mb-6 rounded-xl border border-border-subtle bg-secondary-bg p-4 font-mono text-sm">
              <p className="text-text-secondary">name: <span className="text-white">"Ashikul Islam"</span></p>
              <p className="text-text-secondary">role: <span className="text-white">"Full-Stack Engineer"</span></p>
              <p className="text-text-secondary">location: <span className="text-white">"Dhaka, Bangladesh"</span></p>
              <p className="text-text-secondary">status: <span className="text-green-400">"Open to collaborate"</span></p>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg border border-border-subtle bg-secondary-bg px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-text-secondary">Building Now</p>
                <p className="mt-1 font-medium text-white">Event platforms and developer tooling</p>
              </div>
              <div className="rounded-lg border border-border-subtle bg-secondary-bg px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-text-secondary">Research Area</p>
                <p className="mt-1 font-medium text-white">Blockchain for intellectual property protection</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-white">
              <Globe size={18} className="text-text-secondary" />
              <span>Based in Dhaka, Bangladesh</span>
            </div>

            <div className="mt-6 border-t border-border-subtle pt-6">
              <p className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">
                Social Profiles
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="https://www.linkedin.com/in/ashikulislammm/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-secondary-bg px-4 py-3 text-sm text-text-secondary transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ashikulislamm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-secondary-bg px-4 py-3 text-sm text-text-secondary transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://www.facebook.com/ashikulislam.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-secondary-bg px-4 py-3 text-sm text-text-secondary transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <FaFacebook className="text-[18px]" />
                  Facebook
                </a>
                <a
                  href="mailto:md.ashikul4040@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-secondary-bg px-4 py-3 text-sm text-text-secondary transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Mail size={18} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mx-auto max-w-3xl rounded-3xl border border-border-subtle bg-secondary-bg/50 px-8 py-16"
    >
      <h2 className="mb-6 text-4xl font-bold md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
        Let&apos;s Build Something Great Together
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-text-secondary">
        I&apos;m currently open to new opportunities and collaborations. Whether you have a question or
        just want to say hi, my inbox is always open.
      </p>
      <div className="mb-10 flex flex-wrap justify-center gap-6">
        <a
          href="mailto:md.ashikul4040@gmail.com"
          className="hidden flex items-center gap-2 text-text-secondary transition-colors hover:text-white"
        >
          <Mail size={20} />
          md.ashikul4040@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ashikulislammm/"
          target="_blank"
          rel="noreferrer"
          className="hidden flex items-center gap-2 text-text-secondary transition-colors hover:text-white"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
        <a
          href="https://github.com/ashikulislamm"
          target="_blank"
          rel="noreferrer"
          className="hidden flex items-center gap-2 text-text-secondary transition-colors hover:text-white"
        >
          <Github size={20} />
          GitHub
        </a>
      </div>
      <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
        <Mail size={18} />
        Contact Me
      </Link>
    </motion.div>
  </section>
);

export const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <div className="space-y-20">
        <TechStack />
        <Projects />
        <Experience />
        <Research />
        <About />
        <ContactSection />
      </div>
    </div>
  );
};
