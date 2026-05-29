import { Building2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const jobs = [
  {
    role: "Administrative Assistant",
    company: "Ashfin Enterprises LLP",
    location: "Malappuram, Kerala, India",
    period: "Aug 2024 — Present",
    bullets: [
      "Deliver comprehensive general ledger management with precise financial data entry and bookkeeping.",
      "Manage end-to-end invoicing, ensuring seamless transactions and accurate record maintenance.",
      "Maintain meticulous document preparation and record-keeping for fast retrieval and operational efficiency.",
      "Enhance customer service by promptly addressing inquiries and ensuring positive client interactions.",
      "Coordinate professional email correspondence with internal and external stakeholders.",
    ],
    tools: ["MS Office", "Tally Prime", "QuickBooks", "Zoho Books"],
  },
  {
    role: "Office Administrator",
    company: "Enzyme Science Forum",
    location: "Malappuram, Kerala, India",
    period: "Feb 2023 — Feb 2024",
    bullets: [
      "Implemented organized workflows that improved overall office productivity.",
      "Oversaw student admissions and fee collection with accurate financial documentation.",
      "Maintained complete, well-structured records aligned with organizational protocols.",
      "Responded to student and parent inquiries with professionalism and timely follow-through.",
      "Proactively identified and resolved operational challenges to keep the office productive.",
    ],
    tools: ["MS Excel", "Word", "Outlook", "Accounting Software"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Professional Experience"
          title="A timeline of administrative and accounting impact."
        />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <div className="space-y-12">
            {jobs.map((j, i) => (
              <div key={j.company} className={`relative grid md:grid-cols-2 gap-8 ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-4 w-4 rounded-full bg-gradient-accent ring-4 ring-background shadow-glow" />
                <div className={`md:[direction:ltr] pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth">
                    <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                      <Building2 className="h-3.5 w-3.5" />
                      {j.period}
                    </div>
                    <h3 className="font-display text-xl font-bold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {j.company} · {j.location}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      {j.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-accent mt-1">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {j.tools.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/5 text-primary font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:[direction:ltr]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}