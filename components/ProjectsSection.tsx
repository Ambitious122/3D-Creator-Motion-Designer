"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import FadeIn from "./FadeIn";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  category: string;
  status: "Completed" | "In Progress";
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "Nimbus — 3D Product Configurator",
    desc: "A WebGL-based configurator letting customers rotate, recolor, and inspect a product in real time before checkout.",
    tags: ["Three.js", "React", "Zustand"],
    category: "3D",
    status: "Completed",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Fieldnotes — Motion Blog Platform",
    desc: "A publishing platform with scroll-driven page transitions and a custom MDX rendering pipeline.",
    tags: ["Next.js", "MDX", "Framer Motion"],
    category: "Web App",
    status: "Completed",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Orbit — Freelancer Dashboard",
    desc: "An invoicing and time-tracking dashboard for independent creatives with live analytics.",
    tags: ["TypeScript", "PostgreSQL", "Node.js"],
    category: "Dashboard",
    status: "In Progress",
    github: "https://github.com",
    live: "https://example.com",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-line border-t px-6 py-28 md:px-10">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="mb-4 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-2">Featured Projects</p>
            <h2 className="font-kanit text-3xl md:text-5xl">Selected work</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                data-cursor="link"
                className={`rounded-full border px-4 py-1.5 font-kanit text-xs transition-colors ${
                  filter === c
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-[var(--line)] text-[var(--sub)] hover:text-[var(--ink)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-10 space-y-10">
          {visible.map((p, i) => (
            <div key={p.title} className="sticky" style={{ top: `${96 + i * 24}px` }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="card-surface grid gap-8 rounded-3xl p-8 md:grid-cols-[1fr_1.1fr] md:p-10"
              >
                <div className="flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)]/25 to-transparent">
                  <span className="font-kanit text-6xl text-[var(--accent)]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-kanit ${
                        p.status === "Completed"
                          ? "bg-[var(--accent)]/15 text-[var(--accent)]"
                          : "bg-[var(--line)] text-[var(--sub)]"
                      }`}
                    >
                      {p.status}
                    </span>
                    <span className="eyebrow">{p.category}</span>
                  </div>
                  <h3 className="font-kanit text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--sub)]">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--sub)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="inline-flex items-center gap-2 font-kanit text-sm text-[var(--ink)] hover:text-[var(--accent)]"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="inline-flex items-center gap-2 font-kanit text-sm text-[var(--ink)] hover:text-[var(--accent)]"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
