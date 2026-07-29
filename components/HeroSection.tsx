"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import LiveProjectButton from "./LiveProjectButton";

export default function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 md:px-10">
      <div className="pointer-events-none absolute -right-40 top-24 h-[420px] w-[420px] animate-blob bg-[var(--accent)]/20 blur-3xl md:h-[560px] md:w-[560px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
            <span className="eyebrow">Available for freelance</span>
          </motion.div>

          <h1 className="font-kanit text-[15vw] font-semibold leading-[0.92] tracking-tight md:text-[6.4rem]">
            <AnimatedText text="I'M ARYAN" mode="char" stagger={0.028} className="hero-heading block" />
          </h1>

          <div className="mt-4 font-kanit text-2xl text-[var(--sub)] md:text-3xl">
            <AnimatedText text="3D Creator & Motion Designer" mode="word" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-md text-[var(--sub)]"
          >
            I design and build immersive 3D visuals, motion-first websites, and interactive
            experiences for brands who want their product to feel alive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <ContactButton>Hire Me</ContactButton>
            <LiveProjectButton>View Projects</LiveProjectButton>
            <a
              href="/resume.pdf"
              download
              data-cursor="link"
              className="font-kanit text-sm text-[var(--sub)] underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--ink)]"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 animate-blob bg-gradient-to-br from-[var(--accent)] to-transparent opacity-30" />
          <div className="card-surface absolute inset-6 flex animate-blob items-center justify-center rounded-[2rem]">
            <Sparkles size={64} strokeWidth={1} className="text-[var(--accent)]" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.6 }}
        className="mx-auto mt-16 flex flex-col items-center gap-2 text-[var(--sub)]"
      >
        <span className="eyebrow">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}
