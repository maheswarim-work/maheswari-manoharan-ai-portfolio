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
  title: "Maheswari Manoharan - Technology Professional",
  description: "Personal portfolio of Maheswari Manoharan - Technology Professional with 12+ years of expertise in cloud technologies, software development, and data platforms.",
  keywords: "Maheswari Manoharan, Technology Professional, Cloud Technologies, AWS, Azure, Software Development, Data Engineering",
  authors: [{ name: "Maheswari Manoharan" }],
  manifest: '/manifest.json',
  openGraph: {
    title: "Maheswari Manoharan - AI-Powered Technology Portfolio",
    description: "Software Engineering Manager specializing in modern cloud technologies powered with artificial intelligence. 12+ years expertise in AWS, Azure, and enterprise solutions.",
    type: "website",
    url: "https://maheswari-manoharan.ai",
    siteName: "Maheswari Manoharan Portfolio",
    images: [
      {
        url: "https://og-image.vercel.app/**Maheswari%20Manoharan**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&widths=0&heights=0&caption=Software%20Engineering%20Manager%20%7C%20AI-Powered%20Cloud%20Technologies",
        width: 1200,
        height: 630,
        alt: "Maheswari Manoharan - Software Engineering Manager",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maheswari Manoharan - AI-Powered Technology Portfolio",
    description: "Software Engineering Manager specializing in modern cloud technologies powered with artificial intelligence.",
    images: ["https://og-image.vercel.app/**Maheswari%20Manoharan**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&widths=0&heights=0&caption=Software%20Engineering%20Manager%20%7C%20AI-Powered%20Cloud%20Technologies"],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
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
