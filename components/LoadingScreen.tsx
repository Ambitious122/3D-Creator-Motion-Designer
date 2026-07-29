"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.sessionStorage.getItem("aryan-loaded")) {
      setDone(true);
      return;
    }
    const start = Date.now();
    const duration = 1600;
    let raf: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        window.sessionStorage.setItem("aryan-loaded", "1");
        setTimeout(() => setDone(true), 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--bg)]"
        >
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-kanit text-2xl tracking-wide text-[var(--ink)]"
          >
            ARYAN
          </motion.div>
          <div className="mt-6 h-px w-40 overflow-hidden bg-[var(--line)]">
            <motion.div
              className="h-full bg-[var(--accent)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 font-kanit text-sm text-[var(--sub)]">{progress}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
