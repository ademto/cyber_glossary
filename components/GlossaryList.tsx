import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import Link from "next/link";


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

  // Extract title from frontmatter or use filename
  const terms = files.map(filename => {
    const filePath = path.join(contentsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    return {
      title: data.title || filename.replace(/\.mdx$/, ""),
      slug: filename.replace(/\.mdx$/, ""),
    };
  });

  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <ol className="flex text-[#a2a2a2] justify-between items-center gap-2 mt-4">
          {alphabetArray
            .filter(letter => 
                terms.some(term => term.title.toLowerCase().startsWith(letter))).map((letter, index) => (
            <li key={index} className="hover:text-white cursor-pointer">{letter.toUpperCase()}</li>
          ))}
        </ol>
      </div>
      <div>
        <ol>
          {alphabetArray
            .filter(letter =>
              terms.some(term => term.title.toLowerCase().startsWith(letter))
            )
            .map((letter, index) => (
              <li key={index} className="grid grid-cols-[1fr_3fr] py-10 border-t border-[#585858]">
                <h2 className="uppercase text-5xl">{letter}</h2>
                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {terms
                    .filter(term => term.title.toLowerCase().startsWith(letter))
                    .map((term, wordIndex) => (
                      <li key={wordIndex} className="text-lg hover:text-white cursor-pointer">
                        <Link href={term.slug}>{term.title}</Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ol>
      </div>
    </section>
  );
}