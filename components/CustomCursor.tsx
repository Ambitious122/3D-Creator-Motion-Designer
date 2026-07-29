"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
      }
    };

    let raf: number;
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const grow = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor='link']")) {
        ringRef.current?.style.setProperty("width", "56px");
        ringRef.current?.style.setProperty("height", "56px");
        ringRef.current?.style.setProperty("opacity", "0.6");
      }
    };
    const shrink = () => {
      ringRef.current?.style.setProperty("width", "36px");
      ringRef.current?.style.setProperty("height", "36px");
      ringRef.current?.style.setProperty("opacity", "1");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", grow);
    window.addEventListener("mouseout", shrink);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", grow);
      window.removeEventListener("mouseout", shrink);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cursor-ring transition-[width,height,opacity] duration-200" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
