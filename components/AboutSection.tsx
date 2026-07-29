"use client";

import { motion } from "framer-motion";
import { Box, CircleDot, Hexagon, Triangle } from "lucide-react";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

const corners = [
  { Icon: Box, pos: "left-0 top-0 -translate-x-4 -translate-y-4" },
  { Icon: Triangle, pos: "right-0 top-0 translate-x-4 -translate-y-4" },
  { Icon: Hexagon, pos: "left-0 bottom-0 -translate-x-4 translate-y-4" },
  { Icon: CircleDot, pos: "right-0 bottom-0 translate-x-4 translate-y-4" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-line border-t px-6 py-28 md:px-10">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="eyebrow mb-4 text-center">About Me</p>
        </FadeIn>

        <div className="relative mx-auto">
          {corners.map(({ Icon, pos }, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.5, y: [0, -8, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              className={`absolute hidden text-[var(--accent)] md:block ${pos}`}
            >
              <Icon size={28} strokeWidth={1.25} />
            </motion.span>
          ))}

          <p className="text-center font-kanit text-2xl leading-relaxed text-[var(--ink)] md:text-4xl">
            <AnimatedText
              text="I'm a self-taught 3D creator and frontend developer who believes the web should feel tactile. Over the last five years I've moved from static layouts to fully animated, dimensional experiences — chasing the moment a scroll, a hover, or a shape suddenly feels alive."
              mode="word"
              stagger={0.012}
            />
          </p>
        </div>

        <FadeIn delay={0.2} className="mt-14 grid gap-8 text-[var(--sub)] md:grid-cols-3">
          <div>
            <h3 className="mb-2 font-kanit text-sm text-[var(--ink)]">Background</h3>
            <p className="text-sm leading-relaxed">
              Started in graphic design, moved into motion, then taught myself to code so nothing
              was lost in translation between design and build.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-kanit text-sm text-[var(--ink)]">Passion</h3>
            <p className="text-sm leading-relaxed">
              Interactive 3D, generative motion, and interfaces that reward curiosity instead of
              just displaying information.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-kanit text-sm text-[var(--ink)]">Career Goal</h3>
            <p className="text-sm leading-relaxed">
              Building a small studio that partners with founders on launch sites people actually
              remember.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
