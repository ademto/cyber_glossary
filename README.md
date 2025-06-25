# Cyber Glossary

A comprehensive cybersecurity glossary built with Next.js, MDX, and Tailwind CSS. This project provides clear, accurate definitions of cybersecurity terms with career-focused metadata and advanced filtering capabilities.

## 🚀 Features

### Core Functionality
- **Comprehensive Term Database**: 80+ cybersecurity terms with detailed definitions
- **Advanced Search & Filtering**: Search by term name, filter by category, skill path, job path, and certifications
- **Alphabetical Navigation**: Browse terms by letter for easy discovery
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Career-Focused Content
- **Skill Paths**: Terms tagged with relevant skill areas (Network Security, Application Security, etc.)
- **Job Paths**: Career-specific categorizations (Security Analyst, Penetration Tester, etc.)
- **Certification Mapping**: Links to relevant certifications (CISSP, CEH, CompTIA Security+, etc.)
- **Risk Assessment**: Severity levels and risk classifications for each term

### Technical Features
- **Dark Mode Support**: Full dark/light theme toggle with system preference detection
- **MDX Content**: Rich markdown content with custom components
- **Static Generation**: Fast, SEO-friendly static site generation
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## 📚 Content Categories

The glossary covers key cybersecurity areas including:

- **Malware & Threats**: Ransomware, Trojans, Worms, Spyware, etc.
- **Security Controls**: Firewalls, Encryption, Access Control, etc.
- **Attack Methods**: Phishing, DDoS, Social Engineering, etc.
- **Security Frameworks**: Zero Trust, Compliance, Risk Assessment, etc.
- **Tools & Technologies**: VPN, EDR/XDR, SIEM, etc.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) for consistent design
- **Content**: [MDX](https://mdxjs.com/) for rich markdown content
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful icons
- **Deployment**: [Vercel](https://vercel.com/) for seamless deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ademto/cyber_glossary.git
   cd cyber_glossary
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
cyber_glossary/
├── app/                    # Next.js App Router
│   ├── [slug]/            # Dynamic term pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── GlossaryList.tsx  # Main glossary component
│   ├── Hero.tsx          # Hero section
│   └── Navbar.tsx        # Navigation component
├── contents/             # MDX content files
│   ├── malware.mdx       # Malware terms
│   ├── encryption.mdx    # Encryption terms
│   └── ...               # Other term files
├── lib/                  # Utility functions
│   ├── mdx-utils.tsx     # MDX processing utilities
│   └── utils.ts          # General utilities
└── public/               # Static assets
```

## 🎨 Customization

### Adding New Terms

1. Create a new `.mdx` file in the `contents/` directory
2. Use the following frontmatter structure:

```mdx
---
title: "Term Name"
slug: "term-slug"
description: "Brief description of the term"
category: "Category Name"
skillPath: ["Skill Path 1", "Skill Path 2"]
jobPath: ["Job Title 1", "Job Title 2"]
certsPath: ["Certification 1", "Certification 2"]
riskLevel: "High/Medium/Low"
severity: 8
quickFacts:
  "Fact 1": "Value 1"
  "Fact 2": "Value 2"
relatedTerms:
  - name: "Related Term"
    slug: "related-term-slug"
    description: "Brief description"
resources:
  - title: "Resource Title"
    url: "https://example.com"
---

Your term content here...
```

### Styling

The project uses Tailwind CSS with a custom design system. Key color variables are defined in `app/globals.css` and can be customized for your brand.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js static exports:

```bash
npm run build
npm run export
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Contributing Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Lucide](https://lucide.dev/) for the icon set
- The cybersecurity community for the valuable content and feedback

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or reach out to the maintainers.

---

Built with ❤️ for the cybersecurity community 