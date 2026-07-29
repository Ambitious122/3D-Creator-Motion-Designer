"use client";

import Link from "next/link";
import Magnet from "./Magnet";

export default function LiveProjectButton({
  href = "#projects",
  children = "View Projects",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Magnet>
      <Link
        href={href}
        data-cursor="link"
        className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-6 py-3 font-kanit text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        {children}
      </Link>
    </Magnet>
  );
}
