"use client";

import FadeIn from "./FadeIn";

const services = [
  {
    n: "01",
    title: "Web Development",
    desc: "Full-stack builds on Next.js with clean, maintainable architecture.",
  },
  {
    n: "02",
    title: "Frontend Development",
    desc: "Pixel-accurate, animation-rich interfaces built for performance.",
  },
  {
    n: "03",
    title: "UI / UX Design",
    desc: "Wireframes to hi-fi Figma prototypes with a clear design system.",
  },
  {
    n: "04",
    title: "3D & Motion Design",
    desc: "Interactive WebGL scenes and scroll-driven motion sequences.",
  },
  {
    n: "05",
    title: "API Integration",
    desc: "Connecting products to payments, CMS, auth, and third-party data.",
  },
  {
    n: "06",
    title: "Website Maintenance",
    desc: "Ongoing performance, content, and dependency upkeep.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="border-t border-[var(--line)] bg-[var(--card)] px-6 py-28 md:px-10">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="eyebrow mb-2">Services</p>
          <h2 className="font-kanit text-3xl md:text-5xl">How I can help</h2>
        </FadeIn>

        <div className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {services.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.05}>
              <div className="group flex flex-col gap-2 py-6 transition-colors md:flex-row md:items-center md:gap-8 md:py-7">
                <span className="font-kanit text-sm text-[var(--accent)]">{s.n}</span>
                <h3 className="font-kanit text-xl transition-transform group-hover:translate-x-2 md:w-72 md:text-2xl">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--sub)] md:flex-1">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
