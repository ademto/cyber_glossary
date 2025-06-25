import type { Metadata } from "next"
import GlossaryList from "@/components/GlossaryList";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Cyber Glossary - Comprehensive Cybersecurity Terms & Definitions",
  description: "Explore comprehensive cybersecurity terms, definitions, and concepts. Perfect for security professionals, students, and anyone interested in cybersecurity. Includes career paths, certifications, and detailed explanations.",
  keywords: [
    "cybersecurity glossary",
    "cyber security terms",
    "information security definitions",
    "security concepts",
    "malware types",
    "encryption methods",
    "security certifications",
    "cyber threats",
    "security best practices",
    "penetration testing",
    "firewall",
    "vulnerability assessment"
  ],
  openGraph: {
    title: "Cyber Glossary - Comprehensive Cybersecurity Terms & Definitions",
    description: "Explore comprehensive cybersecurity terms, definitions, and concepts. Perfect for security professionals, students, and anyone interested in cybersecurity.",
    type: "website",
    url: "https://cyber-glossary.com",
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
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Hero />
      <GlossaryList />
    </div>
  );
}
