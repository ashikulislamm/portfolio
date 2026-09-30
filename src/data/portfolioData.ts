import SAS from "@/assets/images/SAS.png";
import DevToolsBox from "@/assets/images/DevToolsBox.png";
import NewsPortal from "@/assets/images/News_Portal.png";
import OnlineStore from "@/assets/images/OnlineStore.png";
import TeleHeal from "@/assets/images/TELEHEAL.png";
import AllyHub from "@/assets/images/AllyHub.png";
import IPGurdian from "@/assets/images/IPGurdian.png";
import Eventify from "@/assets/images/Eventify.png";
import GlobalXchange from "@/assets/images/GlobaXchange.png";
import Planora from "@/assets/images/Planora.png";
import EcommerceAdmin from "@/assets/images/Ecommerce-Admin-Dashboard.png";
import PaperPulse from "@/assets/images/PaperPulse.png";
import Me from "@/assets/images/Me.jpg";

import {
  NavItem,
  PersonalInfo,
  SocialLinks,
  Project,
  ExperienceItem,
  AcademicItem,
  PublicationItem,
  SkillCategory,
  StatItem,
  InquiryMode,
  SiteMetadata,
} from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Ashikul Islam",
  firstName: "Ashikul",
  lastName: "Islam",
  title: "System Architect & Software Engineer",
  role: "System Architect",
  location: "Dhaka, Bangladesh",
  experience: "2+ Years",
  email: "md.ashikul4040@gmail.com",
  phone: "+880 179 462 4361",
  formattedPhone: "+8801794624361",
  status: "Open for collaboration",
  resumeUrl:
    "https://drive.google.com/file/d/16OohJwNNFpsTOpvgGH7CWMqry5zlhHt6/view?usp=sharing",
  avatarImage: Me,
  bioSummary:
    "I build scalable web applications, blockchain systems, and modern developer tools. Focused on performance, security, and clean architecture.",
  bioDetail:
    "I build digital products that are engineered for growth and crafted for humans. From frontend polish to backend robustness, I focus on turning complex ideas into experiences users instantly trust.\n\nMy sweet spot is where product thinking meets deep engineering: scalable web apps, API ecosystems, and blockchain-powered systems that solve meaningful problems without sacrificing speed or simplicity.",
  buildingNow: "Event platforms and developer tooling",
  researchArea: "Blockchain for intellectual property protection",
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/ashikulislamm",
  linkedin: "https://www.linkedin.com/in/ashikulislammm/",
  facebook: "https://www.facebook.com/ashikulislam.me/",
  googleScholar:
    "https://scholar.google.com/citations?hl=en&authuser=1&user=fFdckfgAAAAJ",
  behance: "https://www.behance.net/ashikulislam5",
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    sectionId: "home",
    href: "/",
  },
  {
    label: "Tech Stack",
    sectionId: "tech-stack",
    href: "/#tech-stack",
  },
  {
    label: "Projects",
    sectionId: "projects",
    href: "/#projects",
  },
  {
    label: "Research",
    sectionId: "research",
    href: "/#research",
  },
  {
    label: "About",
    sectionId: "about",
    href: "/#about",
  },
  {
    label: "Contact",
    sectionId: "contact",
    href: "/#contact",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "ShutterArc Studios Landing Page",
    title: "ShutterArc Studios Landing Page",
    desc: "Professional photography studio specializing in product photography. Modern, responsive website with elegant design. Built with Next.js for optimal performance and SEO.",
    description:
      "Professional photography studio specializing in product photography. Modern, responsive website with elegant design. Built with Next.js for optimal performance and SEO.",
    image: SAS,
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    category: "web-app",
    status: "Completed",
    year: "2024",
    demo: "https://shutterarcstudios.com/",
    liveUrl: "https://shutterarcstudios.com/",
    githubUrl: null,
    featured: true,
    highlights: [
      "Professional Agency Portfolio for Showcases high-quality product",
      "Responsive Design , Mobile-first approach with elegant UI",
      "SEO Optimized , Fast loading and search engine friendly",
      "Contact Integration , Easy client inquiry system",
    ],
  },
  {
    id: 2,
    name: "DevToolBox",
    title: "DevToolbox – Productivity Suite",
    desc: "A collection of developer productivity tools including formatters, encoders, and regex testers.",
    description:
      "DevToolsBox is a comprehensive web-based productivity suite designed specifically for developers and programmers. This powerful platform consolidates essential development tools into a single, intuitive interface.",
    image: DevToolsBox,
    stack: ["TypeScript", "React", "Web Workers", "Tailwind"],
    technologies: ["React", "Node.js", "HTML", "Tailwind"],
    category: "web-app",
    status: "Completed",
    year: "2025",
    demo: "https://ashikulislamm.github.io/DevToolsBox/",
    liveUrl: "https://ashikulislamm.github.io/DevToolsBox/",
    github: "https://github.com/ashikulislamm/DevToolsBox",
    githubUrl: "https://github.com/ashikulislamm/DevToolsBox",
    featured: true,
    highlights: [
      "Real-time code formatting and validation",
      "Responsive design optimized for all devices",
      "Clean, intuitive interface for enhanced productivity",
      "Open-source project with active development",
    ],
  },
  {
    id: 3,
    name: "News Portal",
    title: "News Portal",
    desc: "A modern, responsive news portal featuring real-time news articles, categorized content, and dynamic routing.",
    description:
      "A modern, responsive news portal featuring real-time news articles, categorized content, and dynamic routing. Built with Next.js and integrated with content management system for seamless news publishing and reader engagement.",
    image: NewsPortal,
    stack: ["React.js", "Tailwind CSS", "Express.js", "MongoDB"],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "Vercel",
      "MongoDB",
    ],
    category: "web-app",
    status: "Completed",
    year: "2025",
    demo: "https://news-portal-ashik.vercel.app/",
    liveUrl: "https://news-portal-ashik.vercel.app/",
    github: "https://github.com/ashikulislamm/News-Portal",
    githubUrl: "https://github.com/ashikulislamm/News-Portal",
    featured: true,
    highlights: [
      "Dynamic news content with real-time updates",
      "Responsive design with modern UI/UX",
      "Category-based news filtering and organization",
      "Fast loading with Next.js optimization",
    ],
  },
  {
    id: 4,
    name: "E-Commerce Project",
    title: "E-Commerce Project",
    desc: "A comprehensive e-commerce platform featuring product catalog, shopping cart, user reviews, and secure checkout system.",
    description:
      "A comprehensive e-commerce platform featuring product catalog, shopping cart, user reviews, and secure checkout system. Built with modern web technologies for optimal performance and user experience.",
    image: OnlineStore,
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Jquery", "BootStrap"],
    category: "web-app",
    status: "Completed",
    year: "2023",
    demo: "https://onlinestorewithreviews.great-site.net/",
    liveUrl: "https://onlinestorewithreviews.great-site.net/",
    github: "https://github.com/ashikulislamm?tab=repositories",
    githubUrl: "https://github.com/ashikulislamm?tab=repositories",
    featured: false,
    highlights: [
      "Complete e-commerce functionality with product catalog",
      "User registration and authentication system",
      "Shopping cart and secure checkout process",
      "Product review and rating system",
      "Responsive design for all devices",
    ],
  },
  {
    id: 5,
    name: "TeleHeal - Mobile App",
    title: "TeleHeal - Mobile App",
    desc: "A mobile application for task management and health services with offline sync, push notifications, and collaborative features.",
    description:
      "A React Native mobile application for task management with offline sync, push notifications, and collaborative features.",
    image: TeleHeal,
    stack: ["Java", "Android Studio", "Firebase", "Redux"],
    technologies: [
      "Android Studio",
      "Java",
      "Firebase",
      "Redux",
      "AsyncStorage",
    ],
    category: "mobile",
    status: "Completed",
    year: "2023",
    liveUrl: null,
    github: "https://github.com/ashikulislamm/Teleheal-24-7-Health-Care-App",
    githubUrl:
      "https://github.com/ashikulislamm/Teleheal-24-7-Health-Care-App",
    featured: false,
    highlights: [
      "Cross-platform mobile application",
      "Offline-first architecture",
      "Real-time collaboration",
      "Push notifications",
    ],
  },
  {
    id: 6,
    name: "IPGuardian",
    title: "IPGurdian - Secured IP Management System",
    desc: "Blockchain IP protection system using Hyperledger Besu and IPFS. Ensures immutable proof of ownership for digital assets.",
    description:
      "Research project on intellectual property management using blockchain technology, IPFS, and smart contracts for secure and transparent IP trading.",
    image: IPGurdian,
    stack: ["Blockchain", "Hyperledger Besu", "IPFS", "React", "Node.js"],
    technologies: [
      "Go Ethereum",
      "IPFS",
      "Solidity",
      "React",
      "Web3.js",
      "Node.js",
    ],
    category: "research",
    status: "On Progress",
    year: "2024",
    demo: "#",
    liveUrl: null,
    github: "https://github.com/ashikulislamm/IPGurdian",
    githubUrl: "https://github.com/ashikulislamm/IPGurdian",
    featured: true,
    highlights: [
      "Secured IP management using blockchain",
      "Blockchain-based IP protection",
      "IPFS for decentralized storage",
      "Smart contract implementation",
    ],
  },
  {
    id: 7,
    name: "AllyHub",
    title: "AllyHub - Inclusive Job Platform",
    desc: "An inclusive job platform using ASP.NET MVC for secure, accessible, and transparent job matching.",
    description:
      "A research project focused on creating an inclusive job platform using blockchain technology for secure and transparent job matching.",
    image: AllyHub,
    stack: ["ASP.NET", "MSSQL", "C#", "JavaScript"],
    technologies: ["ASP.NET", "MSSQL", "JavaScript", "HTML", "C#"],
    category: "web-app",
    status: "Completed",
    year: "2024",
    liveUrl: null,
    github: "https://github.com/ashikulislamm/ALlyHub",
    githubUrl: "https://github.com/ashikulislamm/ALlyHub",
    featured: false,
    highlights: [
      "Inclusive job matching platform for diverse candidates",
      "ASP.NET MVC architecture with secure authentication",
      "Accessibility-focused design and user experience",
      "Real-time job application tracking and notifications",
    ],
  },
  {
    id: 8,
    name: "Eventify",
    title: "Eventify - Event Management System",
    desc: "Comprehensive event management platform featuring real-time updates, ticket booking, and organizer dashboards.",
    description:
      "A modern, full-stack event management platform that allows users to discover, create, and manage events seamlessly. Built with Next.js and PostgreSQL for optimal performance and scalability.",
    image: Eventify,
    stack: ["Next.js", "Express", "PostgreSQL", "Socket.io"],
    technologies: [
      "NextJS",
      "PostgreSQL",
      "TypeScript",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
    ],
    category: "web-app",
    status: "On Progress",
    year: "2026",
    demo: "https://eventify-ashik.vercel.app/",
    liveUrl: "https://eventify-ashik.vercel.app/",
    github: "https://github.com/ashikulislamm/Eventify",
    githubUrl: "https://github.com/ashikulislamm/Eventify",
    featured: true,
    highlights: [
      "Comprehensive event discovery and management",
      "Next.js architecture with secure authentication",
      "Responsive design for all devices",
      "Real-time event tracking and notifications",
    ],
  },
  {
    id: 9,
    name: "Currency Dashboard",
    title: "GlobalXchange - Currency Exchange Rate Platform",
    desc: "Real-time fiat and crypto conversion tool with interactive charts and historical data analysis.",
    description:
      "A modern, real-time currency converter and cryptocurrency dashboard built with Next.js 16, React 19, and TypeScript. Track live exchange rates for fiat currencies and cryptocurrencies with an intuitive, responsive interface.",
    image: GlobalXchange,
    stack: ["React", "D3.js", "CoinGecko API", "Tailwind"],
    technologies: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Binance API",
      "ExchangeRate-API",
    ],
    category: "web-app",
    status: "On Progress",
    year: "2026",
    demo: "https://globalxchange-currency-converter.vercel.app/",
    liveUrl: "https://globalxchange-currency-converter.vercel.app/",
    github: "https://github.com/ashikulislamm/Currency-Converter",
    githubUrl: "https://github.com/ashikulislamm/Currency-Converter",
    featured: true,
    highlights: [
      "Real-time currency and cryptocurrency conversion",
      "Next.js and TailwindCSS for modern UI/UX design",
      "Responsive design for all devices",
      "Real-time data fetching from Binance and ExchangeRate-API",
    ],
  },
  {
    id: 10,
    name: "Planora AI",
    title: "Planora — Your Intelligent Task & Focus Workspace",
    desc: "AI-powered productivity workspace combining task management, a distraction-free Focus Space, and an integrated AI Copilot to help users plan, prioritize, and execute work.",
    description:
      "AI-powered productivity workspace combining task management, a distraction-free Focus Space, and an integrated AI Copilot. Features a keyboard-first command palette and activity analytics, built as a secure, production-ready full-stack app.",
    image: Planora,
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Framer Motion",
      "Node.js",
      "Express.js v5",
      "MongoDB",
    ],
    technologies: [
      "Next.js 16",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google GenAI",
    ],
    category: "web-app",
    status: "in-progress",
    year: "2026",
    demo: "https://task-manager-seven-sigma-39.vercel.app/",
    liveUrl: "https://task-manager-seven-sigma-39.vercel.app/",
    githubUrl: "https://github.com/ashikulislamm/Planora_AI",
    featured: true,
    highlights: [
      "AI Copilot integration using Google GenAI for task breakdown and workflow optimization",
      "Deep Focus Space with built-in timers and progress tracking for distraction-free execution",
      "Command Palette (Ctrl+K) for full keyboard-driven navigation and task creation",
      "Activity Analytics dashboard visualizing completion rates and productivity streaks with Recharts",
      "Enterprise-grade security with JWT authentication, password hashing, and secure session management",
      "Structured, documented REST API with standardized success/error response formats",
      "Production monorepo architecture deployed across Vercel (frontend) and Render (backend)",
    ],
    
  },
  {
    id: 11,
    name: "Enterprise Ecommerce Admin Dashboard",
    title: "Enterprise Ecommerce Admin Dashboard",
    desc: "Full-stack, enterprise-grade admin dashboard for e-commerce platforms featuring dual-JWT authentication, dynamic database-backed RBAC, media library management, and full product catalog control.",
    description:
      "Enterprise-grade admin dashboard with dual-JWT authentication, database-backed RBAC, and full product catalog management. Built with Next.js, Express, Prisma, and PostgreSQL — documented with OpenAPI specs and a Postman collection.",
    image: EcommerceAdmin,
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Node.js",
      "Express.js v5",
      "PostgreSQL",
      "Prisma ORM",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
    ],
    category: "web-app",
    status: "in-progress",
    year: "2026",
    demo: "https://ecommerce-admin-dashboard-eight-eta.vercel.app",
    liveUrl: "https://ecommerce-admin-dashboard-eight-eta.vercel.app",
    githubUrl: "https://github.com/ashikulislamm/Ecommerce-Admin-dashboard",
    featured: true,
    highlights: [
      "Dual-token JWT authentication: in-memory access tokens with HttpOnly refresh cookies, plus session rotation and revocation backed by PostgreSQL",
      "Dynamic, database-backed RBAC with granular module:action permissions and instant propagation across active sessions",
      "Media library with bulk uploads, automatic thumbnail generation via Sharp, and hierarchical folder navigation",
      "Full catalog system supporting simple and variable products with Cartesian product variant matrix generation",
      "Domain-modular Express backend with request ID tracing, rate limiting, Zod validation, and structured Pino logging",
      "Complete API documentation: OpenAPI 3.0 spec, Postman collection, and markdown reference",
      "Documented architecture, PRD, and phased development plan (ARCHITECTURE.md, PRD.md, PHASES.md)",
    ],
  },
  {
    id: 12,
    name: "PaperPulse",
    title: "PaperPulse — Academic Workspace & Assignment Submission Studio",
    desc: "Multi-tenant assignment authoring, submission, and evaluation platform with role-based workspaces for Admins, Teachers, and Students.",
    description:
      "Multi-tenant academic platform with role-differentiated workspaces for Admins, Teachers, and Students. Features real-time deadline countdowns, a drag-and-drop submission studio, multi-version submission history, grading and evaluation, and live role-based analytics. Built on a Clean Architecture .NET backend and a Next.js frontend.",
    image: PaperPulse,
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "ASP.NET Core (.NET 10)",
      "Entity Framework Core",
      "PostgreSQL",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "JWT",
      "CQRS",
      "FluentValidation",
      "Swagger / OpenAPI",
    ],
    category: "web-app",
    status: "completed",
    year: "2026",
    demo: "https://paper-pulse-sigma.vercel.app",
    liveUrl: "https://paper-pulse-sigma.vercel.app",
    githubUrl: "https://github.com/ashikulislamm/PaperPulse",
    featured: true,
    highlights: [
      "Three role-differentiated workspaces (Admin, Teacher, Student) enforced with JWT authentication and permission-based authorization guards",
      "Assignment Authoring Studio for teachers to create, publish, and close submission windows, then evaluate and grade work",
      "Drag-and-drop Submission Studio with real-time deadline countdowns and multi-version submission history",
      "Role-based analytics dashboards and admin tooling for user administration, role claims, and audit logs",
      "Clean Architecture backend (API, Application, Domain, Infrastructure, Persistence) using CQRS and FluentValidation",
      "Auto-migrating, auto-seeding PostgreSQL database via EF Core for zero-setup local onboarding",
      "Fully documented REST API with interactive Swagger UI and a dedicated API reference",
    ],
},
];

// Homepage specific projects list requested as homePageProjects
export const homePageProjects: Project[] = [
  projects.find((p) => p.name === "Planora AI") || projects[projects.length - 1],
  projects.find((p) => p.name === "Enterprise Ecommerce Admin Dashboard") || projects[projects.length - 2],
  projects.find((p) => p.name === "IPGuardian")!,
  projects.find((p) => p.name === "Eventify")!,
];

export const experiences: ExperienceItem[] = [
  {
    year: "Jul 2026 - Present",
    title: "Full Stack Developer",
    company: "AWTOMATIG",
    description:
      "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
    highlights: [
      "Optimized system performance by identifying and resolving backend bottlenecks.",
      "Improved logging and debugging tools, leading to a 30% reduction in issue resolution time.",
      "Collaborated with the engineering team to deploy critical hotfixes and feature updates.",
    ],
  },
  {
    year: "Jul 2025 - Present",
    title: "Technical Support and Integration Executive",
    company: "Chologhuri Limited",
    description:
      "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
    highlights: [
      "Optimized system performance by identifying and resolving backend bottlenecks.",
      "Improved logging and debugging tools, leading to a 30% reduction in issue resolution time.",
      "Collaborated with the engineering team to deploy critical hotfixes and feature updates.",
    ],
  },
  {
    year: "Dec 2024 - Jun 2025",
    title: "Technical Support Intern",
    company: "Chologhuri Limited",
    description:
      "Worked on developing and maintaining websites and web applications using modern JavaScript frameworks.",
    highlights: [
      "Assisted in troubleshooting customer integration issues and API queries.",
      "Maintained internal portal codebases and updated developer documentation.",
    ],
  },
];

export const academics: AcademicItem[] = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Ahsanullah University of Science & Technology",
    duration: "Dec 2021 - Jan 2026",
    grade: "",
    description:
      "Specialized in Software Engineering, Web Technologies, and Database Management Systems.",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "National Ideal College",
    duration: "2018 - 2020",
    grade: "",
    description:
      "Concentrated on Mathematics, Physics, Chemistry, and Information & Communication Technology.",
  },
  {
    degree: "Secondary School Certificate (Science)",
    institution: "National Ideal School",
    duration: "2016 - 2018",
    grade: "",
    description:
      "Strong foundation in Mathematics, Science subjects, and early exposure to computer programming.",
  },
];

export const publications: PublicationItem[] = [
  {
    title:
      "Leveraging Hyperledger Besu-Based Private Blockchain, IPFS, and NFTs for Secure and Transparent Intellectual Property Preservation and Trading",
    authors:
      "Gazi Maliha Raisa Noor, Md. Ashikul Islam, Saba Al Mukter Mahin, Saha Reno",
    publisher: "IEEE",
    year: "2025",
    type: "Conference Paper",
    status: "Published",
    doi: "10.1109/NCIM65934.2025.11160067",
    description:
      "Presented at the National Conference on Information Management.",
    link: "https://ieeexplore.ieee.org/abstract/document/11160067",
  },
];

export const heroSkills = [
  "React",
  "Next.js",
  "Node.js",
  ".NET",
  "Blockchain",
];

export const aboutSkills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    level: 90,
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    level: 85,
  },
  {
    category: "Blockchain",
    items: ["Solidity", "Hyperledger", "Web3.js", "Smart Contracts"],
    level: 80,
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "CI/CD", "Figma"],
    level: 85,
  },
];

export const aboutStats: StatItem[] = [
  { label: "Years of Experience", value: "2+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Open Source Contributions", value: "50+" },
];

export const inquiryModesData: InquiryMode[] = [
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

export const siteMetadata: SiteMetadata = {
  titleDefault: "Ashikul Islam - System Architect",
  titleTemplate: "%s | Ashikul Islam",
  description:
    "Ashikul Islam is a System Architect and Software Engineer specializing in resilient distributed systems, scalable web applications, and secure cloud infrastructure.",
  applicationName: "Ashikul Islam — System Architect",
  keywords: [
    "Ashikul Islam",
    "System Architect",
    "Software Engineer",
    "Distributed Systems",
    "Cloud Architecture",
    "Full Stack Engineer",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma ORM",
    "Docker",
    "Microservices",
    "Blockchain Architecture",
    "Hyperledger Besu",
    "Software Architecture",
    "Bangladesh Developer",
    "Dhaka System Architect",
  ],
  siteUrl: "https://ashikulislamm.github.io/portfolio/",
  ogImage: "/opengraph-image",
  googleVerification: "a7cc7dZojGpV_FVOhmH1xjA88NpQF7iZQlRdHcwUZ50",
};
