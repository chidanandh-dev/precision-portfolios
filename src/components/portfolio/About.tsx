import { CheckCircle2, Award, Users, BookOpen, Clock, HeartHandshake, Landmark } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const competencies = [
  {
    title: "Administrative Excellence",
    desc: "Overseeing day-to-day operations, filing systems, vendor coordination, and executive support with meticulous planning.",
    icon: Award,
  },
  {
    title: "Financial Accuracy",
    desc: "Proficient in general ledger oversight, balance sheets, quick bookkeeping, audit support, and strict compliance.",
    icon: Landmark,
  },
  {
    title: "Office Coordination",
    desc: "Building structured record-keeping environments that speed up response times and keep teams synchronized.",
    icon: Clock,
  },
  {
    title: "Professional Communication",
    desc: "A trusted liaison handling corporate correspondence and customer relations with poise and empathy.",
    icon: HeartHandshake,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card border-y border-border/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-40 h-80 w-80 rounded-full bg-accent-soft/10 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Executive Profile" title="Commitment to absolute organization, accuracy, and operational trust." />
        
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
          {/* Executive Narrative */}
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base">
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              Providing backbone administrative and financial support for growing businesses.
            </h3>
            
            <p>
              I am a dedicated **Administrative Assistant and Accounting Specialist** with a proven history of 
              handling complex administrative environments. My professional journey is grounded in delivering 
              flawless operational assistance, ensuring corporate standards are not just met, but exceeded daily.
            </p>
            
            <p>
              From managing general ledger records and coordinating tax document filing to answering high-priority 
              client queries, I blend administrative agility with accounting precision. I have built structured 
              systems that enhance data integrity, reduce processing times for invoices, and coordinate internal 
              stakeholders seamlessly.
            </p>
            
            <p>
              My operational philosophy is built on absolute reliability, organizational transparency, and a continuous 
              drive to optimize standard office workflows. I take pride in being the dependable support structure 
              that enables executives and financial teams to execute their goals with complete confidence.
            </p>

            {/* Micro counters / operational metrics */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/60">
              {[
                { v: "100%", k: "Accuracy Rate" },
                { v: "1,200+", k: "Invoices Audited" },
              ].map((metric) => (
                <div key={metric.k} className="p-3 bg-background rounded-xl border border-border/40 shadow-card-soft text-center">
                  <div className="text-xl font-display font-extrabold text-primary">{metric.v}</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground mt-0.5">{metric.k}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Competencies Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {competencies.map((comp) => {
              const Icon = comp.icon;
              return (
                <div 
                  key={comp.title} 
                  className="group p-6 rounded-2xl bg-background border border-border shadow-card-soft hover:shadow-elegant hover:border-accent/40 transition-smooth"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-accent-foreground grid place-items-center transition-smooth mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-foreground text-sm mb-2 group-hover:text-primary transition-smooth">
                    {comp.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}