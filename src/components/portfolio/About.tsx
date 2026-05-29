import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const points = [
  "Strong background in accounting and office administration",
  "Expertise across general ledger, bookkeeping, and financial reporting",
  "Proactive communicator with a track record of resolving inquiries",
  "Passionate about streamlined, accurate, and efficient operations",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="About Me" title="A career built on accuracy, order, and trust." />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a dedicated Administrative Assistant with a strong background in accounting
              and office administration. My work spans general ledger management, bookkeeping,
              invoicing, and financial reporting — paired with the day-to-day organization that
              keeps an office running smoothly.
            </p>
            <p>
              From my time as an Office Administrator at Enzyme Science Forum to my current
              role at Ashfin Enterprises LLP, I've built systems that improve record-keeping
              accuracy, accelerate inquiry response times, and bring clarity to financial
              documentation.
            </p>
            <p>
              My approach is simple: be reliable, be precise, and make every process a little
              more efficient than I found it.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3 p-5 rounded-xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}