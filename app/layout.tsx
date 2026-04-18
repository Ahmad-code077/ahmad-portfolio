import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CursorProvider } from "@/components/providers/CursorProvider";
import "./global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad | Full Stack + AI Engineer",
  description:
    "Senior Full Stack Engineer specializing in distributed systems, backend architecture, and AI-powered applications. Building scalable systems that handle millions of operations.",
  keywords: [
    "Full Stack Engineer",
    "Backend Engineer",
    "AI Systems",
    "Distributed Systems",
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Ahmad" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    title: "Ahmad | Full Stack + AI Engineer",
    description:
      "Senior Full Stack Engineer specializing in distributed systems, backend architecture, and AI-powered applications.",
    siteName: "Ahmad's Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CursorProvider>{children}</CursorProvider>
      </body>
    </html>
  );
}
