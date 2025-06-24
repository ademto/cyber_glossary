"use client";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Shield } from "lucide-react"

function ThemeToggle() {
  const [dark, setDark] = useState(true);

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

  return (
    <nav className="border-b border-[#585858] px-4">
        <div className="container mx-auto flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-900">CyberSec Glossary</span>
            </div>
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