"use client";

import { Award, GraduationCap, Trophy } from "lucide-react";
import FadeIn from "./FadeIn";

const education = [
  {
    degree: "B.Sc. in Computer Science",
    school: "State University",
    year: "2021",
  },
];

const certifications = [
  "Meta Front-End Developer Professional Certificate",
  "Three.js Journey — Advanced 3D on the Web",
];

const achievements = [
  { icon: Trophy, label: "2× Hackathon Winner" },
  { icon: Award, label: "Top 5, National UI/UX Awards" },
  { icon: GraduationCap, label: "Open-source contributor, 8 repos" },
];

const stats = [
  { value: "40+", label: "Projects" },
  { value: "25+", label: "Clients" },
  { value: "5", label: "Years Experience" },
  { value: "12", label: "Awards & Certs" },
];

export default function EducationSection() {
  return (
    <section id="education" className="section-line border-t px-6 py-28 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-14 md:grid-cols-2">
          <FadeIn>
            <p className="eyebrow mb-2">Education</p>
            <h2 className="font-kanit text-2xl md:text-3xl">Academic background</h2>
            <div className="mt-6 space-y-4">
              {education.map((e) => (
                <div key={e.degree}>
                  <h3 className="font-kanit text-lg">{e.degree}</h3>
                  <p className="text-sm text-[var(--sub)]">
                    {e.school} · {e.year}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              {certifications.map((c) => (
                <p key={c} className="text-sm text-[var(--sub)]">
                  — {c}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="eyebrow mb-2">Achievements</p>
            <h2 className="font-kanit text-2xl md:text-3xl">Recognition</h2>
            <div className="mt-6 space-y-4">
              {achievements.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={18} className="text-[var(--accent)]" />
                  <span className="text-sm text-[var(--sub)]">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="mt-20 grid grid-cols-2 gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-kanit text-3xl text-[var(--accent)] md:text-5xl">{s.value}</div>
              <div className="eyebrow mt-2">{s.label}</div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
