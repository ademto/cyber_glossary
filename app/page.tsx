import GlossaryList from "@/components/GlossaryList";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Hero />
      <GlossaryList />
    </div>
  );
}
