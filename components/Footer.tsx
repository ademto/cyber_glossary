import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">Cyber Glossary</h3>
            <p className="text-muted-foreground mb-4">
              A comprehensive cybersecurity glossary created by a cybersecurity professional with 
              hands-on experience in penetration testing, cloud security, and software development. 
              Designed to help security professionals, students, and enthusiasts understand key 
              concepts in the ever-evolving world of cybersecurity.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span>by Emmanuel Adetoro</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="mailto:emmanueladetoro@proton.me" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  emmanueladetoro@proton.me
                </a>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href="https://github.com/ademto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/emmanuel-adetoro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/emmanuel_adetoro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>&copy; 2024 Emmanuel Adetoro. All rights reserved.</span>
            <span>•</span>
            <span>Cyber Glossary v1.0</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span>Built with Next.js & Tailwind CSS</span>
            <span>•</span>
            <a 
              href="https://github.com/ademto/cyber_glossary" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              View Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 