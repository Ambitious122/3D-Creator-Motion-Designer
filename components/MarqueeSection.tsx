const rowA = [
  "React", "Three.js", "Blender", "Figma", "Next.js", "TypeScript",
  "Framer Motion", "WebGL", "Cinema 4D", "After Effects",
];
const rowB = [
  "Tailwind CSS", "Node.js", "GSAP", "Git", "Docker", "Spline",
  "PostgreSQL", "Redux", "REST APIs", "Vercel",
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 gap-8 whitespace-nowrap pr-8 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-kanit text-4xl font-medium text-[var(--sub)] md:text-6xl"
          >
            {item} <span className="text-[var(--accent)]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="section-line border-t py-16">
      <div className="space-y-6">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}
