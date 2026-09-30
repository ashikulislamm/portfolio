import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { personalInfo, siteMetadata } from "@/data/portfolioData";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMetadata.siteUrl,
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: siteMetadata.description,
    siteName: `${personalInfo.name} - ${personalInfo.role}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: siteMetadata.description,
    site: "@ashikul_islam",
    creator: "@ashikul_islam",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth",
        inter.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable
      )}
    >
      <body
        suppressHydrationWarning
        className="font-sans bg-background text-text-primary antialiased selection:bg-cream/20 selection:text-cream"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
