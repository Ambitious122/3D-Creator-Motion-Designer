"use client";

import { motion } from "framer-motion";

export default function AnimatedText({
  text,
  className = "",
  mode = "word",
  once = true,
  stagger = 0.03,
}: {
  text: string;
  className?: string;
  mode?: "word" | "char";
  once?: boolean;
  stagger?: number;
}) {
  const units = mode === "word" ? text.split(" ") : text.split("");

  return (
    <span className={className} aria-label={text}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once, amount: 0.6 }}
          transition={{ duration: 0.5, delay: i * stagger, ease: "easeOut" }}
          className="inline-block"
          aria-hidden="true"
        >
          {unit === " " ? "\u00A0" : unit}
          {mode === "word" && i !== units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
