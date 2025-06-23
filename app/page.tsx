import GlossaryList from "@/components/GlossaryList";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Hero />
      <GlossaryList />
    </main>
  );
}
