import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gator Accelerator - Backing the Boldest Student Builders",
  description: "Starting a company is tough. And lonely. We've been there. Gator Accelerator is designed to give you an edge from the very beginning with Capital, Code, and Conviction.",
  keywords: ["accelerator", "startup", "entrepreneurship", "university of florida", "student", "innovation"],
  authors: [{ name: "Gator Accelerator" }],
  openGraph: {
    title: "Gator Accelerator - Backing the Boldest Student Builders",
    description: "Starting a company is tough. And lonely. We've been there. Gator Accelerator is designed to give you an edge from the very beginning.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gator Accelerator - Backing the Boldest Student Builders",
    description: "Starting a company is tough. And lonely. We've been there. Gator Accelerator is designed to give you an edge from the very beginning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
