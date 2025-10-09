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
  title: "Ghifary Ahmad - Front End Developer",
  description: "Front End Developer & UI/UX Designer. I create beautiful and functional web applications with modern technologies.",
  keywords: "Ghifary Ahmad, Front End Developer, React, Next.js, TypeScript, Node.js, Web Developer, Portfolio",
  authors: [{ name: "Ghifary Ahmad" }],
  creator: "Ghifary Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Ghifary Ahmad - Front End Developer",
    description: "Front End Developer & UI/UX Designer. Creating beautiful and functional web applications.",
    siteName: "Ghifary Ahmad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghifary Ahmad - Front End Developer",
    description: "Front End Developer & UI/UX Designer. Creating beautiful and functional web applications.",
    creator: "@yourusername",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
