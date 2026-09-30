import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Architecture",
  description:
    "Explore production-grade architectures, distributed systems, developer tools, and blockchain research engineered by Ashikul Islam.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "/projects",
    title: "Projects & Architecture | Ashikul Islam",
    description:
      "Explore production-grade architectures, distributed systems, developer tools, and blockchain research engineered by Ashikul Islam.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashikul Islam — Projects & Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Architecture | Ashikul Islam",
    description:
      "Explore production-grade architectures, distributed systems, developer tools, and blockchain research engineered by Ashikul Islam.",
    images: ["/og-image.png"],
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
