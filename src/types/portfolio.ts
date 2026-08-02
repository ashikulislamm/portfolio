import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export interface NavItem {
  label: string;
  sectionId: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  role: string;
  location: string;
  experience: string;
  email: string;
  phone: string;
  formattedPhone: string;
  status: string;
  resumeUrl: string;
  avatarImage: StaticImageData | string;
  bioSummary: string;
  bioDetail: string;
  buildingNow: string;
  researchArea: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  facebook: string;
  googleScholar: string;
  behance: string;
}

export interface Project {
  id: number | string;
  name: string;
  title?: string;
  desc: string;
  description?: string;
  image?: StaticImageData | string;
  stack: string[];
  technologies?: string[];
  category: "web-app" | "mobile" | "research" | "blockchain" | string;
  status: "Completed" | "On Progress" | string;
  year: string;
  demo?: string;
  liveUrl?: string | null;
  github?: string;
  githubUrl?: string | null;
  featured: boolean;
  highlights?: string[];
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description?: string;
  highlights?: string[];
}

export interface AcademicItem {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  description: string;
}

export interface PublicationItem {
  title: string;
  authors: string;
  publisher: string;
  year: string;
  type: string;
  status: string;
  doi?: string;
  description?: string;
  link: string;
}

export interface TechCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
  level: number;
}

export interface InterestItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ValueItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface StrengthItem {
  icon: ReactNode;
  title: string;
  text: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ContactDetail {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
}

export interface SocialLinkItem {
  name: string;
  href: string;
  icon: ReactNode;
}

export interface InquiryMode {
  id: string;
  label: string;
  title: string;
  description: string;
  subject: string;
  message: string;
}

export interface SiteMetadata {
  titleDefault: string;
  titleTemplate: string;
  description: string;
  applicationName: string;
  keywords: string[];
  siteUrl: string;
  ogImage: string;
  googleVerification: string;
}
