import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Background",
  description:
    "Learn more about Ashikul Islam — System Architect and Software Engineer specializing in resilient distributed systems, scalable web applications, and cloud architecture.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About | Ashikul Islam",
    description:
      "System Architect and Software Engineer specializing in resilient distributed systems, scalable web applications, and cloud architecture.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashikul Islam — System Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Ashikul Islam",
    description:
      "System Architect and Software Engineer specializing in resilient distributed systems, scalable web applications, and cloud architecture.",
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
