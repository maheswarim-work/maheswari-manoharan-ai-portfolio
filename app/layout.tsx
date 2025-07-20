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
    title: "Maheswari Manoharan - Technology Professional",
    description: "Personal portfolio showcasing expertise in cloud technologies, software development, and data platforms.",
    type: "website",
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
