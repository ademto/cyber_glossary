import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cyber Glossary - Comprehensive Cybersecurity Terms & Definitions",
    template: "%s | Cyber Glossary"
  },
  description: "Explore comprehensive cybersecurity terms, definitions, and concepts. Perfect for security professionals, students, and anyone interested in cybersecurity. Includes career paths, certifications, and detailed explanations.",
  keywords: [
    "cybersecurity",
    "cyber security",
    "information security",
    "security terms",
    "cyber glossary",
    "security definitions",
    "malware",
    "encryption",
    "firewall",
    "penetration testing",
    "security certifications",
    "cyber threats",
    "security concepts"
  ],
  authors: [{ name: "Emmanuel Adetoro" }],
  creator: "Emmanuel Adetoro",
  publisher: "Emmanuel Adetoro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cyber-glossary.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cyber-glossary.com",
    title: "Cyber Glossary - Comprehensive Cybersecurity Terms & Definitions",
    description: "Explore comprehensive cybersecurity terms, definitions, and concepts. Perfect for security professionals, students, and anyone interested in cybersecurity.",
    siteName: "Cyber Glossary",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cyber Glossary - Cybersecurity Terms and Definitions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Glossary - Comprehensive Cybersecurity Terms & Definitions",
    description: "Explore comprehensive cybersecurity terms, definitions, and concepts. Perfect for security professionals and students.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
