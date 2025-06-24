import type React from "react"
import { ArrowLeft, BookOpen, ExternalLink, Search, Share2, Tag } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getTermBySlug, getAllTermSlugs } from "@/lib/mdx-utils"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// MDX Components for custom rendering
const mdxComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold text-foreground mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-semibold text-foreground mb-2">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>,
  ul: ({ children }: { children: React.ReactNode }) => <ul className="space-y-2 text-muted-foreground mb-4">{children}</ul>,
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-2">
      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground">{children}</code>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r mb-4">{children}</blockquote>
  ),
}

export async function generateStaticParams() {
  const slugs = getAllTermSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function TermPage({ params }: { params: { slug: string } }) {
  const termData = await getTermBySlug(params.slug)

  if (!termData) {
    notFound()
  }

  const { frontmatter, content } = termData

  const getSeverityColor = (severity: number) => {
    if (severity >= 8) return "text-red-600 dark:text-red-400"
    if (severity >= 6) return "text-orange-600 dark:text-orange-400"
    if (severity >= 4) return "text-yellow-600 dark:text-yellow-400"
    return "text-green-600 dark:text-green-400"
  }

  const getSeverityBg = (severity: number) => {
    if (severity >= 8) return "bg-red-100 dark:bg-red-900/20"
    if (severity >= 6) return "bg-orange-100 dark:bg-orange-900/20"
    if (severity >= 4) return "bg-yellow-100 dark:bg-yellow-900/20"
    return "bg-green-100 dark:bg-green-900/20"
  }

  const getRiskBadgeColor = (riskLevel: string) => {
    switch (riskLevel.toLowerCase()) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800"
      case "high":
      case "high risk":
        return "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800"
      case "low":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="border-b backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Glossary
              </Link>
              <Separator orientation="vertical" className="h-6" />  
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Term Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Tag className="h-3 w-3 mr-1" />
                {frontmatter.category}
              </Badge>
              <Badge variant="secondary" className={getRiskBadgeColor(frontmatter.riskLevel)}>
                {frontmatter.riskLevel}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {frontmatter.title} {frontmatter.acronym && `(${frontmatter.acronym})`}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">{frontmatter.description}</p>

            {/* Career Path Indicators */}
            <div className="space-y-3">
              {frontmatter.skillPath && frontmatter.skillPath.length > 0 && (
                <div>
                  <span className="text-sm font-medium text-muted-foreground mr-2">Skill Paths:</span>
                  <div className="inline-flex flex-wrap gap-1">
                    {frontmatter.skillPath.map((skill: string) => (
                      <Badge key={skill} variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {frontmatter.jobPath && frontmatter.jobPath.length > 0 && (
                <div>
                  <span className="text-sm font-medium text-muted-foreground mr-2">Job Paths:</span>
                  <div className="inline-flex flex-wrap gap-1">
                    {frontmatter.jobPath.map((job: string) => (
                      <Badge key={job} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800">
                        {job}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {frontmatter.certsPath && frontmatter.certsPath.length > 0 && (
                <div>
                  <span className="text-sm font-medium text-muted-foreground mr-2">Relevant Certifications:</span>
                  <div className="inline-flex flex-wrap gap-1">
                    {frontmatter.certsPath.map((cert: string) => (
                      <Badge key={cert} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* MDX Content */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <MDXRemote source={content} components={mdxComponents} />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Severity Level</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i <= Math.ceil(frontmatter.severity / 2)
                                ? getSeverityBg(frontmatter.severity)
                                : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`text-sm font-medium ${getSeverityColor(frontmatter.severity)}`}>
                        {frontmatter.severity}/10
                      </span>
                    </div>
                  </div>
                  <Separator />
                  {frontmatter.quickFacts &&
                    Object.entries(frontmatter.quickFacts).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-sm font-medium text-muted-foreground">{key}</span>
                        <p className="text-sm text-foreground mt-1">{value as string}</p>
                        <Separator className="mt-2" />
                      </div>
                    ))}
                </CardContent>
              </Card>

              {/* Related Terms */}
              {frontmatter.relatedTerms && frontmatter.relatedTerms.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {frontmatter.relatedTerms.map((term: any, index: number) => (
                        <Link
                          key={index}
                          href={`/term/${term.slug}`}
                          className="block p-2 rounded hover:bg-muted transition-colors"
                        >
                          <span className="text-primary hover:text-primary/80 font-medium">{term.name}</span>
                          <p className="text-xs text-muted-foreground mt-1">{term.description}</p>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* External Resources */}
              {frontmatter.resources && frontmatter.resources.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Learn More</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {frontmatter.resources.map((resource: any, index: number) => (
                        <a
                          key={index}
                          href={resource.url}
                          className="flex items-center gap-2 p-2 rounded hover:bg-muted transition-colors text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          <span className="text-primary hover:text-primary/80">{resource.title}</span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
