import { Building2, Calendar, MapPin, Award, CheckCircle, TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const jobs = [
  {
    role: "Administrative & Financial Assistant",
    company: "Ashfin Enterprises LLP",
    location: "Malappuram, Kerala, India",
    period: "Aug 2024 — Present",
    kpis: [
      { label: "Ledger Accuracy", val: "100%" },
      { label: "Invoice Processing", val: "500+/Mo" },
      { label: "Cycle Speed", val: "-20%" },
    ],
    bullets: [
      "Deliver comprehensive general ledger management with precise financial data entry, balance sheet updating, and double-entry bookkeeping control.",
      "Manage end-to-end invoicing processes for all business clients, ensuring zero reconciliation discrepancies across systems.",
      "Maintain meticulous document preparation, organizing sensitive accounting sheets and audit files for instant administrative retrieval.",
      "Enhance corporate communication by acting as the primary point of contact for customer and banking partner inquiries.",
    ],
    highlight: "Designed an automated digital ledger tracking framework that accelerated the month-end closing process by 4 business days.",
    tools: ["MS Excel", "Tally Prime", "QuickBooks Online", "Zoho Books"],
  },
  {
    role: "Office Administrator",
    company: "Enzyme Science Forum",
    location: "Malappuram, Kerala, India",
    period: "Feb 2023 — Feb 2024",
    kpis: [
      { label: "Admissions Handled", val: "150+" },
      { label: "Inquiry Turnaround", val: "<12 Hr" },
      { label: "Ledger Discrepancy", val: "0%" },
    ],
    bullets: [
      "Implemented organized administration workflows that eliminated administrative bottlenecks and improved overall office productivity by 30%.",
      "Oversaw all student academic admissions and fee collection ledger entries, generating weekly financial summaries for management review.",
      "Restructured physical and digital archives, ensuring complete compliance with the organization's high-security information protocols.",
      "Consulted with parents, students, and external partners to coordinate resolving operational inquiries with timely follow-through.",
    ],
    highlight: "Transformed student registration tracking into a centralized sheet, resulting in zero payment recording delays and saving 10 administrative hours weekly.",
    tools: ["MS Excel", "MS Word", "Outlook", "Internal DBMS", "Accounting Software"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Professional Experience"
          title="A history of driving operational clarity and financial order."
        />

        <div className="relative mt-16">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-16">
            {jobs.map((j, i) => (
              <div key={j.company} className={`relative grid md:grid-cols-2 gap-8 lg:gap-16 ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-5 w-5 rounded-full bg-primary border-4 border-background shadow-elegant z-10" />

                {/* Left side content (the card) */}
                <div className={`md:[direction:ltr] pl-12 md:pl-0 ${i % 2 ? "md:pl-8" : "md:pr-8"}`}>
                  <div className="group p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant hover:border-primary/30 transition-smooth">
                    {/* Meta info header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-border/60 pb-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider">
                        <Building2 className="h-4 w-4" />
                        {j.company}
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {j.period}
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-smooth">
                      {j.role}
                    </h3>
                    
                    <p className="flex items-center gap-1 text-xs text-muted-foreground mb-5">
                      <MapPin className="h-3.5 w-3.5" />
                      {j.location}
                    </p>

                    {/* KPI Metrics Highlight Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6 bg-secondary/40 p-3.5 rounded-xl border border-border/40">
                      {j.kpis.map((kpi) => (
                        <div key={kpi.label} className="text-center">
                          <div className="text-sm font-extrabold text-primary">{kpi.val}</div>
                          <div className="text-[9px] uppercase font-bold text-muted-foreground mt-0.5 tracking-wider leading-none">
                            {kpi.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Responsibilities list */}
                    <ul className="space-y-3 text-sm text-muted-foreground mb-5">
                      {j.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 items-start">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Key Achievement Highlight Box */}
                    <div className="p-4 bg-accent-soft text-accent-foreground border-l-3 border-accent rounded-r-xl text-xs leading-relaxed font-semibold mb-6 flex gap-2">
                      <TrendingUp className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
                      <div>
                        <span className="uppercase text-[9px] font-extrabold block text-accent tracking-wider mb-1">Key Operational Win</span>
                        {j.highlight}
                      </div>
                    </div>

                    {/* Tech & Tools badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                      {j.tools.map((t) => (
                        <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty column for offset layout */}
                <div className="hidden md:block md:[direction:ltr]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}