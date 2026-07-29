"use client";

import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
  none: {},
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.7,
  className = "",
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const offset = offsets[direction];
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
