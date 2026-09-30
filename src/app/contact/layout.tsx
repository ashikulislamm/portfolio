import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    "Get in touch with Ashikul Islam for system architecture consulting, software engineering opportunities, distributed platforms, and technical leadership.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact & Collaboration | Ashikul Islam",
    description:
      "Get in touch with Ashikul Islam for system architecture consulting, software engineering opportunities, and technical leadership.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashikul Islam — Contact & Collaboration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Collaboration | Ashikul Islam",
    description:
      "Get in touch with Ashikul Islam for system architecture consulting, software engineering opportunities, and technical leadership.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
