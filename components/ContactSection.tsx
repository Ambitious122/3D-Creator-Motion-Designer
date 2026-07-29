"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sent");
  };

  return (
    <section id="contact" className="section-line border-t px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2">
        <FadeIn>
          <p className="eyebrow mb-2">Contact</p>
          <h2 className="font-kanit text-3xl md:text-5xl">Let's build something</h2>
          <p className="mt-4 max-w-sm text-sm text-[var(--sub)]">
            Have a project in mind? Tell me about it — I usually reply within a day.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:hello@aryan.dev" data-cursor="link" className="flex items-center gap-3 text-sm hover:text-[var(--accent)]">
              <Mail size={16} className="text-[var(--accent)]" /> hello@aryan.dev
            </a>
            <a href="tel:+10000000000" data-cursor="link" className="flex items-center gap-3 text-sm hover:text-[var(--accent)]">
              <Phone size={16} className="text-[var(--accent)]" /> +1 (000) 000-0000
            </a>
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={16} className="text-[var(--accent)]" /> Remote · Worldwide
            </div>
          </div>

          <div className="mt-10 flex gap-3">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <Magnet key={i}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Icon size={16} />
                </a>
              </Magnet>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="eyebrow mb-2 block">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="eyebrow mb-2 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="eyebrow mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full rounded-lg border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              data-cursor="link"
              className="w-full rounded-full bg-[var(--accent)] px-6 py-3 font-kanit text-sm font-medium text-[#0c0c0c] transition-transform hover:scale-[1.01] active:scale-95"
            >
              {status === "sent" ? "Message sent ✓" : "Send Message"}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
