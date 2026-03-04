import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "SmartReply | AI WhatsApp Automation",
  description:
    "SmartReply helps businesses automatically respond to WhatsApp customers with AI and capture more leads around the clock.",
  icons: {
    icon: [
      { url: "/favicon-16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64.png?v=2", sizes: "64x64", type: "image/png" },
      { url: "/favicon-192.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png?v=2", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/favicon-32.png?v=2",
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-white font-sans text-slate-900 antialiased`}>{children}</body>
    </html>
  );
}
