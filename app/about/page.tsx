import type { Metadata } from "next"
import { ArrowLeft, Github, Linkedin, Twitter, Mail, Shield, BookOpen, Users, Award, Zap, Cloud, Code } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "About - Cyber Glossary",
  description: "Learn about Emmanuel Adetoro, a Cybersecurity Professional with expertise in penetration testing, cloud security, and software development. Discover the story behind this comprehensive cybersecurity resource.",
  keywords: ["about", "creator", "Emmanuel Adetoro", "cybersecurity professional", "penetration testing", "cloud security", "software development"],
  openGraph: {
    title: "About - Cyber Glossary",
    description: "Learn about Emmanuel Adetoro, a Cybersecurity Professional with expertise in penetration testing, cloud security, and software development.",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="border-b backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Glossary
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">About Cyber Glossary</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive cybersecurity resource created by a cybersecurity professional with 
              real-world experience in penetration testing, cloud security, and software development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Creator Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    About the Creator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">EA</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Emmanuel Adetoro</h3>
                      <p className="text-muted-foreground">Cybersecurity Professional</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Hi! I&apos;m Emmanuel Adetoro, a cybersecurity professional with hands-on experience 
                    in penetration testing, cloud security, and software development. I created 
                    Cyber Glossary to share my knowledge and help bridge the gap between complex 
                    security concepts and practical understanding.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    With real-world experience in the field, I understand the challenges that 
                    security professionals face daily. This glossary is my contribution to the 
                    cybersecurity community, designed to be a comprehensive, practical resource 
                    that goes beyond textbook definitions to include real-world context and 
                    career guidance.
                  </p>

                  {/* Expertise Areas */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Zap className="h-5 w-5 text-orange-500" />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">Penetration Testing</h4>
                        <p className="text-xs text-muted-foreground">Hands-on experience</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Cloud className="h-5 w-5 text-blue-500" />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">Cloud Security</h4>
                        <p className="text-xs text-muted-foreground">Real-world expertise</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Code className="h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">Software Development</h4>
                        <p className="text-xs text-muted-foreground">Technical background</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <a 
                      href="https://github.com/ademto" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/emmanuel-adetoro" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="https://twitter.com/emmanuel_adetoro" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                      <span>Twitter</span>
                    </a>
                    <a 
                      href="mailto:emmanueladetoro@proton.me" 
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Email</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Project Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    About the Project
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Cyber Glossary was created from real-world experience in the cybersecurity field. 
                    Having worked hands-on with penetration testing, cloud security, and software 
                    development, I understand the practical challenges and knowledge gaps that exist 
                    in the industry.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    This glossary goes beyond theoretical definitions to include practical context, 
                    real-world examples, and career guidance based on actual industry experience. 
                    Each term includes risk assessments, career path information, and relevant 
                    certifications that reflect current industry standards and practices.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-foreground">For Professionals</h4>
                      <p className="text-sm text-muted-foreground">Based on real-world experience</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-foreground">Practical Focus</h4>
                      <p className="text-sm text-muted-foreground">Hands-on insights and context</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-foreground">Career Guidance</h4>
                      <p className="text-sm text-muted-foreground">Industry-relevant paths and certs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Project Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Terms</span>
                    <Badge variant="secondary">80+</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Categories</span>
                    <Badge variant="secondary">15+</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Certifications</span>
                    <Badge variant="secondary">20+</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Last Updated</span>
                    <Badge variant="outline">Dec 2024</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Technology Stack */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Built With</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Framework</span>
                    <Badge variant="outline">Next.js 15</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Styling</span>
                    <Badge variant="outline">Tailwind CSS</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Content</span>
                    <Badge variant="outline">MDX</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Deployment</span>
                    <Badge variant="outline">Vercel</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Have suggestions, found an error, or want to discuss cybersecurity topics? 
                    I&apos;d love to hear from you!
                  </p>
                  <a 
                    href="mailto:emmanueladetoro@proton.me" 
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send Email</span>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 