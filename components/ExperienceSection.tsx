"use client";

import FadeIn from "./FadeIn";

const experience = [
  {
    company: "Studio Halcyon",
    role: "Frontend & 3D Developer",
    duration: "2023 — Present",
    points: [
      "Led motion and 3D direction for six client launch sites.",
      "Cut average page load by 38% through asset and animation optimization.",
    ],
  },
  {
    company: "Pixel & Co.",
    role: "Frontend Developer",
    duration: "2021 — 2023",
    points: [
      "Built and maintained design systems used across 12 product surfaces.",
      "Partnered directly with design to prototype interaction ideas in code.",
    ],
  },
  {
    company: "Freelance",
    role: "Web Designer",
    duration: "2019 — 2021",
    points: [
      "Delivered 20+ small-business websites end to end, design through deploy.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-line border-t px-6 py-28 md:px-10">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="eyebrow mb-2">Experience</p>
          <h2 className="font-kanit text-3xl md:text-5xl">Where I've worked</h2>
        </FadeIn>

        <div className="mt-14 space-y-0 border-l border-[var(--line)]">
          {experience.map((e, i) => (
            <FadeIn key={e.company} delay={i * 0.08} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-kanit text-xl">{e.role}</h3>
                <span className="eyebrow">{e.duration}</span>
              </div>
              <p className="mt-1 font-kanit text-sm text-[var(--accent)]">{e.company}</p>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((pt) => (
                  <li key={pt} className="text-sm text-[var(--sub)]">
                    — {pt}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
