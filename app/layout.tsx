import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { CursorProvider } from "@/components/providers/CursorProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CursorProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </CursorProvider>
      </body>
    </html>
  );
}
