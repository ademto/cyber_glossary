import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GlossaryListClient from "./GlossaryListClient";

export default function GlossaryList() {
  const alphabetArray = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
  ];

  // Read all .mdx files from the contents directory
  const contentsDir = path.join(process.cwd(), "contents");
  const files = fs.readdirSync(contentsDir).filter(f => f.endsWith(".mdx"));

  // Extract data from frontmatter
  const terms = files.map(filename => {
    const filePath = path.join(contentsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    return {
      title: data.title || filename.replace(/\.mdx$/, ""),
      slug: filename.replace(/\.mdx$/, ""),
      description: data.description || "",
      category: data.category || "Uncategorized",
      skillPath: data.skillPath || [],
      jobPath: data.jobPath || [],
      certsPath: data.certsPath || [],
      riskLevel: data.riskLevel || "Unknown",
      severity: data.severity || 0,
    };
  });

  return <GlossaryListClient terms={terms} alphabetArray={alphabetArray} />;
}