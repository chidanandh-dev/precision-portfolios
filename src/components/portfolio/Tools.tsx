import { SectionHeader } from "./SectionHeader";
import { Laptop, Cpu, Globe, CheckCircle2, Star } from "lucide-react";

const accountingTools = [
  { name: "Tally Prime", level: 90, desc: "SME financial auditing & VAT ledger control" },
  { name: "QuickBooks Online", level: 88, desc: "SaaS bookkeeping, AP/AR, & vendor reports" },
  { name: "Zoho Books", level: 85, desc: "Automated business invoicing & bank matching" },
  { name: "Sage 50 & ERP Systems", level: 82, desc: "Multi-department resource and inventory ledgers" },
];

const productivityTools = [
  { name: "MS Excel (Advanced)", level: 95, desc: "Pivot tables, complex VLOOKUPs, data formulas" },
  { name: "MS Word & Docs", level: 95, desc: "Meticulous corporate summaries & reporting" },
  { name: "PowerPoint & Slides", level: 88, desc: "Executive presentation layouts & briefings" },
  { name: "Google Workspace / Outlook", level: 92, desc: "High-priority inbox delegation & schedules" },
];

const softSkills = [
  "Strict Attention to Detail",
  "Multitasking under pressure",
  "Critical Conflict Resolution",
  "Proactive Process Optimization",
  "High Adaptability",
  "Clear Interpersonal Comm",
  "Database Organization",
  "Zero-Error Auditing"
];

const languages = [
  { lang: "English", level: "Full Professional", note: "Primary business language" },
  { lang: "Malayalam", level: "Native / Bilingual", note: "Primary regional language" },
  { lang: "Hindi", level: "Professional Working", note: "National communication" },
  { lang: "Tamil", level: "Professional Working", note: "Southern region coverage" },
];

export function Tools() {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Software & Tools" title="An executive technology stack built for speed and absolute accuracy." />
        
        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-8 mt-12">
          {/* Left Column: Software Ledger Tables */}
          <div className="space-y-8">
            {/* Accounting Core Ledger */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth">
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-border/80">
                <div className="p-1.5 bg-accent-soft text-accent rounded-lg">
                  <Cpu className="h-4 w-4" />
                </div>
                <h3 className="font-display text-base font-bold text-primary">Financial & Accounting Platforms</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {accountingTools.map((t) => (
                  <div key={t.name} className="p-4 rounded-xl bg-background border border-border/60 hover:border-accent/40 transition-smooth group">
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-foreground">{t.name}</span>
                      <span className="text-accent">{t.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-2.5">
                      <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${t.level}%` }} />
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-snug">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Productivity Core Ledger */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth">
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-border/80">
                <div className="p-1.5 bg-primary-foreground/10 text-primary rounded-lg">
                  <Laptop className="h-4 w-4" />
                </div>
                <h3 className="font-display text-base font-bold text-primary">Office Operations & Productivity</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {productivityTools.map((t) => (
                  <div key={t.name} className="p-4 rounded-xl bg-background border border-border/60 hover:border-primary/40 transition-smooth group">
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-foreground">{t.name}</span>
                      <span className="text-primary">{t.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-2.5">
                      <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${t.level}%` }} />
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-snug">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Soft Skills & Languages */}
          <div className="space-y-8">
            {/* Soft Skills Card */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-border/80">
                <div className="p-1.5 bg-accent-soft text-accent rounded-lg">
                  <Star className="h-4 w-4 animate-spin-slow" />
                </div>
                <h3 className="font-display text-base font-bold text-primary">Operational Strengths</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span 
                    key={s} 
                    className="text-[10px] font-semibold px-3 py-1.5 rounded-lg bg-background border border-border text-foreground hover:border-accent/40 transition-smooth cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-border/80">
                <div className="p-1.5 bg-primary-foreground/10 text-primary rounded-lg">
                  <Globe className="h-4 w-4" />
                </div>
                <h3 className="font-display text-base font-bold text-primary">Multilingual Capability</h3>
              </div>
              <ul className="space-y-4">
                {languages.map((l) => (
                  <li key={l.lang} className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-xs font-semibold text-foreground block">{l.lang}</span>
                      <span className="text-[10px] text-muted-foreground block mt-0.5">{l.note}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-secondary text-primary border border-border/40 shrink-0">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}