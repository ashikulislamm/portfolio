import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Ashikul Islam — a full-stack developer from Dhaka, Bangladesh, specializing in React, Next.js, Node.js, and building performant, user-focused web applications.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About | Ashikul Islam",
    description:
      "Full‑stack developer passionate about modern web tech, performance, and great UX.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashikul Islam — Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Ashikul Islam",
    description:
      "Full‑stack developer passionate about modern web tech, performance, and great UX.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
