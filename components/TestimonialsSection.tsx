"use client";

import { Star } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "Aryan translated our brand into motion better than we could have described it ourselves. The site converts noticeably better than our last one.",
    name: "Maya Chen",
    company: "Founder, Lumen Goods",
    rating: 5,
  },
  {
    quote:
      "Communicative, fast, and genuinely good taste. The 3D configurator he built is still our most-used feature.",
    name: "Daniel Osei",
    company: "Product Lead, Northwind",
    rating: 5,
  },
  {
    quote:
      "He caught details in the design we'd missed ourselves and shipped ahead of schedule.",
    name: "Priya Raman",
    company: "CEO, Ferro Labs",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="border-t border-[var(--line)] bg-[var(--card)] px-6 py-28 md:px-10">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="eyebrow mb-2">Testimonials</p>
          <h2 className="font-kanit text-3xl md:text-5xl">Client feedback</h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <div className="card-surface flex h-full flex-col rounded-2xl p-6">
                <div className="mb-4 flex gap-1 text-[var(--accent)]">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-[var(--sub)]">“{t.quote}”</p>
                <div className="mt-6">
                  <p className="font-kanit text-sm">{t.name}</p>
                  <p className="text-xs text-[var(--sub)]">{t.company}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
