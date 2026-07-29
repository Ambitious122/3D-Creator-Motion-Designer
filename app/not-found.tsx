"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import ContactButton from "@/components/ContactButton";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Compass size={40} className="mx-auto mb-6 text-[var(--accent)]" strokeWidth={1.25} />
        <h1 className="hero-heading font-kanit text-7xl font-semibold md:text-9xl">404</h1>
        <p className="mt-4 font-kanit text-xl text-[var(--sub)] md:text-2xl">
          This page drifted off the grid.
        </p>
        <p className="mx-auto mt-3 max-w-sm text-sm text-[var(--sub)]">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ContactButton href="/">Back Home</ContactButton>
        </div>
      </motion.div>
    </main>
  );
}
