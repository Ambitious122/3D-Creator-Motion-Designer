import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="section-line border-t px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-kanit text-sm text-[var(--sub)]">
          © {new Date().getFullYear()} Aryan. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="font-kanit text-sm text-[var(--sub)] hover:text-[var(--ink)]">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 text-[var(--sub)]">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
            <Linkedin size={16} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
