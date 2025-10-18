import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maheswari Manoharan - Software Engineering Professional",
  description: "AI-Driven Engineering Portfolio. Software Engineering Professional with 12+ years building scalable cloud solutions across insurance, automotive, and employment verification. Built with Cursor AI, Claude Code, Next.js, and AWS.",
  keywords: "Maheswari Manoharan, Software Engineering Manager, Cloud Architecture, AWS, Azure, Python, Java, Microservices, AI-Powered Development, Cursor AI, Claude Code",
  authors: [{ name: "Maheswari Manoharan" }],
  manifest: '/manifest.json',
  openGraph: {
    title: "Maheswari Manoharan — AI-Driven Engineering Portfolio",
    description: "Software Engineering Professional with 12+ years building scalable cloud solutions. Built with Cursor AI, Claude Code, Next.js, AWS, and GitHub Actions.",
    type: "website",
    url: "https://maheswari-manoharan.ai",
    siteName: "Maheswari Manoharan",
    images: [
      {
        url: "https://maheswari-manoharan.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maheswari Manoharan - AI-Driven Engineering Portfolio | Built with Cursor AI, Claude Code, Next.js, AWS",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maheswari Manoharan — AI-Driven Engineering Portfolio",
    description: "Software Engineering Professional. Built with Cursor AI, Claude Code, Next.js, AWS, and GitHub Actions.",
    images: ["https://maheswari-manoharan.ai/og-image.png"],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  metadataBase: new URL('https://maheswari-manoharan.ai'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
