"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, X } from "lucide-react";

interface Term {
  title: string;
  slug: string;
  description: string;
  category: string;
  skillPath: string[];
  jobPath: string[];
  certsPath: string[];
  riskLevel: string;
  severity: number;
}

interface GlossaryListClientProps {
  terms: Term[];
  alphabetArray: string[];
}

export default function GlossaryListClient({ terms, alphabetArray }: GlossaryListClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSkillPath, setSelectedSkillPath] = useState("");
  const [selectedJobPath, setSelectedJobPath] = useState("");
  const [selectedCertPath, setSelectedCertPath] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique values for filters
  const categories = useMemo(() => 
    [...new Set(terms.map(term => term.category))].sort(), [terms]
  );
  
  const skillPaths = useMemo(() => 
    [...new Set(terms.flatMap(term => term.skillPath))].sort(), [terms]
  );
  
  const jobPaths = useMemo(() => 
    [...new Set(terms.flatMap(term => term.jobPath))].sort(), [terms]
  );
  
  const certPaths = useMemo(() => 
    [...new Set(terms.flatMap(term => term.certsPath))].sort(), [terms]
  );

  // Filter terms based on selected criteria
  const filteredTerms = useMemo(() => {
    return terms.filter(term => {
      const matchesSearch = searchTerm === "" || 
        term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "" || term.category === selectedCategory;
      
      const matchesSkillPath = selectedSkillPath === "" || 
        term.skillPath.includes(selectedSkillPath);
      
      const matchesJobPath = selectedJobPath === "" || 
        term.jobPath.includes(selectedJobPath);
      
      const matchesCertPath = selectedCertPath === "" || 
        term.certsPath.includes(selectedCertPath);
      
      return matchesSearch && matchesCategory && matchesSkillPath && matchesJobPath && matchesCertPath;
    });
  }, [terms, searchTerm, selectedCategory, selectedSkillPath, selectedJobPath, selectedCertPath]);

  // Get letters that have terms after filtering
  const lettersWithTerms = alphabetArray.filter(letter => 
    filteredTerms.some(term => term.title.toLowerCase().startsWith(letter))
  );

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedSkillPath("");
    setSelectedJobPath("");
    setSelectedCertPath("");
  };

  const hasActiveFilters = searchTerm || selectedCategory || selectedSkillPath || selectedJobPath || selectedCertPath;

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Cyber Security Terms</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search cybersecurity terms..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-lg border border-border bg-card mb-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Skill Path Filter */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Skill Path</label>
                <select
                  value={selectedSkillPath}
                  onChange={(e) => setSelectedSkillPath(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">All Skill Paths</option>
                  {skillPaths.map(skill => (
                    <option key={skill} value={skill}>{skill}</option>
                  ))}
                </select>
              </div>

              {/* Job Path Filter */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Job Path</label>
                <select
                  value={selectedJobPath}
                  onChange={(e) => setSelectedJobPath(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">All Job Paths</option>
                  {jobPaths.map(job => (
                    <option key={job} value={job}>{job}</option>
                  ))}
                </select>
              </div>

              {/* Certification Path Filter */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Certification</label>
                <select
                  value={selectedCertPath}
                  onChange={(e) => setSelectedCertPath(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">All Certifications</option>
                  {certPaths.map(cert => (
                    <option key={cert} value={cert}>{cert}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredTerms.length} of {terms.length} terms
            </p>
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2">
                {searchTerm && (
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                    Search: "{searchTerm}"
                  </span>
                )}
                {selectedCategory && (
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                    Category: {selectedCategory}
                  </span>
                )}
                {selectedSkillPath && (
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                    Skill: {selectedSkillPath}
                  </span>
                )}
                {selectedJobPath && (
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                    Job: {selectedJobPath}
                  </span>
                )}
                {selectedCertPath && (
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                    Cert: {selectedCertPath}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Alphabet Navigation */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Browse by Letter</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {alphabetArray.map((letter) => {
              const hasTerms = filteredTerms.some(term => term.title.toLowerCase().startsWith(letter));
              return (
                <a
                  key={letter}
                  href={hasTerms ? `#${letter}` : undefined}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg border transition-colors text-sm font-medium ${
                    hasTerms 
                      ? 'border-border bg-background hover:bg-muted hover:border-primary text-foreground hover:text-primary cursor-pointer' 
                      : 'border-border/50 bg-muted/50 text-muted-foreground cursor-not-allowed pointer-events-none'
                  }`}
                >
                  {letter.toUpperCase()}
                </a>
              );
            })}
          </div>
        </div>

        {/* Terms by Letter */}
        <div className="space-y-12">
          {lettersWithTerms.map((letter, index) => (
            <div key={index} id={letter} className="scroll-mt-20">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-primary uppercase">{letter}</h2>
                <div className="flex-1 h-px bg-border"></div>
                <span className="text-sm text-muted-foreground">
                  {filteredTerms.filter(term => term.title.toLowerCase().startsWith(letter)).length} terms
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTerms
                  .filter(term => term.title.toLowerCase().startsWith(letter))
                  .map((term, wordIndex) => (
                    <Link
                      key={wordIndex}
                      href={`/${term.slug}`}
                      className="group p-4 rounded-lg border border-border bg-card hover:bg-muted hover:border-primary transition-all duration-200"
                    >
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                        {term.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {term.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                          {term.category}
                        </span>
                        {term.riskLevel && (
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            term.riskLevel.toLowerCase() === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300' :
                            term.riskLevel.toLowerCase() === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
                            'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                          }`}>
                            {term.riskLevel}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No terms found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 