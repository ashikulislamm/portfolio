import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { personalInfo, siteMetadata } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: {
    default: siteMetadata.titleDefault,
    template: siteMetadata.titleTemplate,
  },
  description: siteMetadata.description,
  applicationName: siteMetadata.applicationName,
  keywords: siteMetadata.keywords,
  authors: [
    {
      name: personalInfo.name,
      url: siteMetadata.siteUrl,
    },
  ],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteMetadata.siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMetadata.siteUrl,
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: siteMetadata.description,
    siteName: personalInfo.name,
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: siteMetadata.description,
    site: "@ashikul_islam",
    creator: "@ashikul_islam",
    images: [siteMetadata.ogImage],
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
    google: siteMetadata.googleVerification,
  },
  icons: {
    icon: [
      { url: "favicon.ico" },
      { url: "logo.png", type: "image/png" },
    ],
    shortcut: "favicon.ico",
    apple: "logo.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: personalInfo.name,
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
