import { Shield, BookOpen, TrendingUp } from "lucide-react";

export default function Hero() {
    return (
        <section className="max-w-4xl mx-auto text-center pt-16 pb-12 px-4">
            <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Shield className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Cyber Glossary
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    All definitions in cybersecurity, clearly explained. Browse definitions and sharpen your understanding to advance your skills and career.
                </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="flex flex-col items-center p-6 rounded-lg border border-border bg-card">
                    <BookOpen className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Comprehensive Definitions</h3>
                    <p className="text-sm text-muted-foreground text-center">
                        Clear, accurate explanations of cybersecurity terms and concepts
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 rounded-lg border border-border bg-card">
                    <TrendingUp className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Career Focused</h3>
                    <p className="text-sm text-muted-foreground text-center">
                        Learn skills and certifications relevant to your career path
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 rounded-lg border border-border bg-card">
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Security First</h3>
                    <p className="text-sm text-muted-foreground text-center">
                        Stay updated with the latest security practices and threats
                    </p>
                </div>
            </div>
        </section>
    )
}