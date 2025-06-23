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
    <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-semibold text-gray-900 mb-2">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
  ul: ({ children }: { children: React.ReactNode }) => <ul className="space-y-2 text-gray-700 mb-4">{children}</ul>,
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-2">
      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">{children}</code>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r mb-4">{children}</blockquote>
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
    if (severity >= 8) return "text-red-600"
    if (severity >= 6) return "text-orange-600"
    if (severity >= 4) return "text-yellow-600"
    return "text-green-600"
  }

  const getSeverityBg = (severity: number) => {
    if (severity >= 8) return "bg-red-100"
    if (severity >= 6) return "bg-orange-100"
    if (severity >= 4) return "bg-yellow-100"
    return "bg-green-100"
  }

  const getRiskBadgeColor = (riskLevel: string) => {
    switch (riskLevel.toLowerCase()) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
      case "high risk":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
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
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Tag className="h-3 w-3 mr-1" />
                {frontmatter.category}
              </Badge>
              <Badge variant="secondary" className={getRiskBadgeColor(frontmatter.riskLevel)}>
                {frontmatter.riskLevel}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {frontmatter.title} {frontmatter.acronym && `(${frontmatter.acronym})`}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{frontmatter.description}</p>

            {/* Career Path Indicators */}
            <div className="space-y-3">
              {frontmatter.skillPath && frontmatter.skillPath.length > 0 && (
                <div>
                  <span className="text-sm font-medium text-gray-500 mr-2">Skill Paths:</span>
                  <div className="inline-flex flex-wrap gap-1">
                    {frontmatter.skillPath.map((skill: string) => (
                      <Badge key={skill} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {frontmatter.jobPath && frontmatter.jobPath.length > 0 && (
                <div>
                  <span className="text-sm font-medium text-gray-500 mr-2">Job Paths:</span>
                  <div className="inline-flex flex-wrap gap-1">
                    {frontmatter.jobPath.map((job: string) => (
                      <Badge key={job} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {job}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {frontmatter.certsPath && frontmatter.certsPath.length > 0 && (
                <div>
                  <span className="text-sm font-medium text-gray-500 mr-2">Relevant Certifications:</span>
                  <div className="inline-flex flex-wrap gap-1">
                    {frontmatter.certsPath.map((cert: string) => (
                      <Badge key={cert} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
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
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
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
                    <span className="text-sm font-medium text-gray-500">Severity Level</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i <= Math.ceil(frontmatter.severity / 2)
                                ? getSeverityBg(frontmatter.severity)
                                : "bg-gray-200"
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
                        <span className="text-sm font-medium text-gray-500">{key}</span>
                        <p className="text-sm text-gray-900 mt-1">{value as string}</p>
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
                          className="block p-2 rounded hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-blue-600 hover:text-blue-800 font-medium">{term.name}</span>
                          <p className="text-xs text-gray-500 mt-1">{term.description}</p>
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
                          className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                          <span className="text-blue-600 hover:text-blue-800">{resource.title}</span>
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
