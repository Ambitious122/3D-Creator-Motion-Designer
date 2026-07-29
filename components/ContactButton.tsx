"use client";

import Link from "next/link";
import Magnet from "./Magnet";

export default function ContactButton({
  href = "#contact",
  children = "Hire Me",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Magnet>
      <Link
        href={href}
        data-cursor="link"
        className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-kanit text-sm font-medium text-[#0c0c0c] transition-transform hover:scale-[1.03] active:scale-95"
      >
        {children}
      </Link>
    </Magnet>
  );
}
