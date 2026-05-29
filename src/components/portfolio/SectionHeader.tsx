export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl mb-14">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-3">{eyebrow}</div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}