import { Analytics, AnalyticsProps } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from 'nuqs/adapters/next/app';


import { Suspense } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domain = 'https://justify-dev.vercel.app';

export const metadata: Metadata = {
  title: "justify.dev - Professional Excuses for Developers",
  description: "Generate professional, funny, and believable excuses for missed deadlines, bugs in production, delayed replies, and postponed features. Perfect for developers who need a quick explanation.",
  keywords: [
    "developer excuses",
    "programming humor",
    "tech excuses",
    "developer tools",
    "funny excuses",
    "missed deadline excuses",
    "bug excuses",
    "developer humor",
    "software engineering",
    "justification generator",
    "excuse generator",
    "dev tools",
    "productivity humor",
  ],
  authors: [{ name: "justify.dev" }],
  creator: "justify.dev",
  publisher: "justify.dev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: domain,
    title: "justify.dev - Professional Excuses for Developers",
    description: "Generate professional, funny, and believable excuses for missed deadlines, bugs in production, delayed replies, and postponed features.",
    siteName: "justify.dev",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "justify.dev - Professional Excuses for Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "justify.dev - Professional Excuses for Developers",
    description: "Generate professional, funny, and believable excuses for missed deadlines, bugs, and delays.",
    images: ["/og-image.webp"],
    creator: "@yayadeveloppeur",
  },
  metadataBase: new URL(domain),
  alternates: {
    canonical: domain,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={domain} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>
          <Suspense fallback={null}>
            {children}
          </Suspense>
          <Analytics mode={process.env.NODE_ENV as AnalyticsProps["mode"]} />
          <SpeedInsights debug={process.env.NODE_ENV === 'development'} />
        </NuqsAdapter>
      </body>
    </html>
  );
}
