"use client";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Shield } from "lucide-react"

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded border dark:bg-zinc-800 dark:text-white"
      aria-label="Toggle theme"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your search logic here
    alert(`Searching for: ${search}`);
  };

  return (
    <nav className="border-b border-[#585858] px-4">
        <div className="container mx-auto flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-900">CyberSec Glossary</span>
            </div>
        <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search glossary..."
            className="px-2 py-1 rounded border border-zinc-400 dark:bg-zinc-800 dark:text-white"
            />
            <button
            type="submit"
            className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 dark:text-white"
            >
            Search
            </button>
        </form>
        <div className="icons flex items-center gap-4">
            <ThemeToggle />
            <a
            className="text-xl hover:text-zinc-600"
            href="https://github.com/ademto"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaGithub />
            <span className="sr-only">GitHub</span>
            </a>
            <a
            className="text-xl hover:text-zinc-600"
            href="https://www.linkedin.com/in/emmanuel-adetoro/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaLinkedin />
            <span className="sr-only">LinkedIn</span>
            </a>
            <a
            className="text-xl hover:text-zinc-600"
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaXTwitter />
            <span className="sr-only">Twitter</span>
            </a>
        </div>
        </div>
    </nav>
  );
}