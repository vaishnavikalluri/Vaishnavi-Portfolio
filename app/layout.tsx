import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});



export const metadata: Metadata = {
  metadataBase: new URL('https://vaishnavikalluri.vercel.app'),
  title: "Vaishnavi Kalluri | Full Stack Developer & AI/ML Engineer",
  description: "Portfolio of Vaishnavi Kalluri, a Full Stack Developer, Python enthusiast, and AI/ML Engineer building scalable web applications with React, Node.js, and Machine Learning.",
  keywords: ["Vaishnavi Kalluri", "Full Stack Developer", "AI/ML Engineer", "Python", "Portfolio", "Web Development", "React", "Node.js", "Machine Learning", "MERN Stack"],
  authors: [{ name: "Vaishnavi Kalluri", url: "https://vaishnavikalluri.vercel.app" }],
  creator: "Vaishnavi Kalluri",
  publisher: "Vaishnavi Kalluri",
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
    title: "Vaishnavi Kalluri | Full Stack Developer & AI/ML Engineer",
    description: "Portfolio showcasing projects in web development, AI/ML, and full-stack applications using modern technologies.",
    url: "https://vaishnavikalluri.vercel.app",
    siteName: "Vaishnavi Kalluri Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/pp2.png",
        width: 1200,
        height: 630,
        alt: "Vaishnavi Kalluri - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishnavi Kalluri | Full Stack Developer",
    description: "Full Stack Developer & AI/ML Engineer building scalable applications",
    images: ["/pp2.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}

