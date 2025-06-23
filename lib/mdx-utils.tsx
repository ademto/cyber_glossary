import fs from "fs"
import path from "path"
import matter from "gray-matter"

const termsDirectory = path.join(process.cwd(), "contents")

export interface TermFrontmatter {
  title: string
  acronym?: string
  description: string
  category: string
  riskLevel: string
  severity: number
  firstRecorded?: string
  avgDuration?: string
  dailyAttacks?: string
  lastUpdated: string
  threatLevel: string
  skillPath?: string[]
  jobPath?: string[]
  certsPath?: string[]
  relatedTerms?: Array<{
    name: string
    slug: string
    description: string
  }>
  resources?: Array<{
    title: string
    url: string
  }>
  quickFacts?: Record<string, string>
}

export interface TermData {
  slug: string
  frontmatter: TermFrontmatter
  content: string
}

export async function getTermBySlug(slug: string): Promise<TermData | null> {
  try {
    const fullPath = path.join(termsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as TermFrontmatter,
      content,
    }
  } catch (error) {
    console.error(`Error loading term ${slug}:`, error)
    return null
  }
}

export function getAllTermSlugs(): string[] {
  try {
    if (!fs.existsSync(termsDirectory)) {
      console.warn(`Terms directory does not exist: ${termsDirectory}`)
      return []
    }

    const fileNames = fs.readdirSync(termsDirectory)
    return fileNames.filter((name) => name.endsWith(".mdx")).map((name) => name.replace(/\.mdx$/, ""))
  } catch (error) {
    console.error("Error reading terms directory:", error)
    return []
  }
}

export async function getAllTerms(): Promise<TermData[]> {
  const slugs = getAllTermSlugs()
  const allTerms = await Promise.all(
    slugs.map(async (slug) => {
      const term = await getTermBySlug(slug)
      return term
    }),
  )

  return allTerms.filter((term): term is TermData => term !== null)
}

// Helper function to group terms alphabetically
export function groupTermsAlphabetically(terms: TermData[]) {
  const grouped: Record<string, TermData[]> = {}

  terms.forEach((term) => {
    const firstLetter = term.frontmatter.title.charAt(0).toUpperCase()
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = []
    }
    grouped[firstLetter].push(term)
  })

  // Sort terms within each letter group
  Object.keys(grouped).forEach((letter) => {
    grouped[letter].sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))
  })

  return grouped
}

// Helper function to get available letters
export function getAvailableLetters(terms: TermData[]): string[] {
  const letters = new Set(terms.map((term) => term.frontmatter.title.charAt(0).toUpperCase()))
  return Array.from(letters).sort()
}

// Filter functions
export function filterTerms(
  terms: TermData[],
  filters: {
    skillPath: string
    jobPath: string
    certsPath: string
    search: string
  },
): TermData[] {
  return terms.filter((term) => {
    if (
      filters.search &&
      !term.frontmatter.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      !term.frontmatter.description.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false
    }

    if (filters.skillPath && (!term.frontmatter.skillPath || !term.frontmatter.skillPath.includes(filters.skillPath))) {
      return false
    }

    if (filters.jobPath && (!term.frontmatter.jobPath || !term.frontmatter.jobPath.includes(filters.jobPath))) {
      return false
    }

    if (filters.certsPath && (!term.frontmatter.certsPath || !term.frontmatter.certsPath.includes(filters.certsPath))) {
      return false
    }

    return true
  })
}

// Get unique values for filters
export function getUniqueSkillPaths(terms: TermData[]): string[] {
  const skillPaths = new Set<string>()
  terms.forEach((term) => {
    if (term.frontmatter.skillPath) {
      term.frontmatter.skillPath.forEach((skill) => skillPaths.add(skill))
    }
  })
  return Array.from(skillPaths).sort()
}

export function getUniqueJobPaths(terms: TermData[]): string[] {
  const jobPaths = new Set<string>()
  terms.forEach((term) => {
    if (term.frontmatter.jobPath) {
      term.frontmatter.jobPath.forEach((job) => jobPaths.add(job))
    }
  })
  return Array.from(jobPaths).sort()
}

export function getUniqueCertsPaths(terms: TermData[]): string[] {
  const certsPaths = new Set<string>()
  terms.forEach((term) => {
    if (term.frontmatter.certsPath) {
      term.frontmatter.certsPath.forEach((cert) => certsPaths.add(cert))
    }
  })
  return Array.from(certsPaths).sort()
}
