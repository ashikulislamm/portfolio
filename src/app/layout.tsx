import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { FloatingAppointmentButton } from "@/components/Appointment";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ashikul Islam - Fullstack Developer",
    template: "%s | Ashikul Islam",
  },
  description:
    "Experienced fullstack developer from Bangladesh specializing in React, Next.js, Node.js, and modern web technologies. Creating user-centric digital experiences with exceptional functionality and design.",
  keywords: [
    "fullstack developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "JavaScript expert",
    "TypeScript developer",
    "Frontend developer",
    "Backend developer",
    "Bangladesh developer",
    "Dhaka developer",
    "portfolio website",
    "web applications",
    "responsive design",
    "modern web development",
    "Ashikul Islam",
  ],
  authors: [{ name: "Ashikul Islam", url: "https://ashikul-islam.dev" }],
  creator: "Ashikul Islam",
  publisher: "Ashikul Islam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ashikul-islam.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashikul-islam.dev",
    title: "Ashikul Islam - Fullstack Developer",
    description:
      "Experienced fullstack developer from Bangladesh specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Ashikul Islam Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ashikul Islam - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashikul Islam - Fullstack Developer",
    description:
      "Experienced fullstack developer from Bangladesh specializing in React, Next.js, Node.js, and modern web technologies.",
    creator: "@ashikul_islam",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      
      <body className={inter.className}>
        <LoadingProvider>
          <Header />
          {children}
          <Footer />
          <FloatingAppointmentButton />
        </LoadingProvider>
      </body>
    </html>
  );
}
