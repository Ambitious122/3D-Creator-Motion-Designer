"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const skills = [
  { name: "HTML / CSS", level: 95 },
  { name: "JavaScript", level: 92 },
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 93 },
  { name: "Node.js", level: 78 },
  { name: "Git / GitHub", level: 88 },
  { name: "Databases", level: 74 },
  { name: "Figma", level: 82 },
  { name: "Three.js / WebGL", level: 80 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-line border-t px-6 py-28 md:px-10">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="eyebrow mb-2">Skills</p>
          <h2 className="font-kanit text-3xl md:text-5xl">What I work with</h2>
        </FadeIn>

        <div className="mt-14 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {skills.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.04}>
              <div className="flex items-baseline justify-between font-kanit text-sm">
                <span>{s.name}</span>
                <span className="text-[var(--sub)]">{s.level}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--line)]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className="h-full rounded-full bg-[var(--accent)]"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
