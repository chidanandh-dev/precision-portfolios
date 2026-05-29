import { FileCheck, Archive, Wallet, ClipboardCheck, MessageSquareCheck, Database } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { 
    icon: FileCheck, 
    title: "Financial Accuracy Improvements", 
    text: "Achieved 100% reconciliation match across complex general ledgers, reducing monthly discrepancies to absolute zero.",
    tag: "Audit-Ready"
  },
  { 
    icon: Archive, 
    title: "Record Management Efficiency", 
    text: "Engineered high-security physical and digital filing vaults, boosting internal file retrieval speeds by over 40%.",
    tag: "Compliance"
  },
  { 
    icon: Wallet, 
    title: "Invoice Processing Speed", 
    text: "Overhauled Accounts Payable and Receivable pipelines, cutting vendor billing cycle times down to under 24 hours.",
    tag: "Optimization"
  },
  { 
    icon: ClipboardCheck, 
    title: "Administrative Coordination", 
    text: "Implemented a central administrative dashboard that eliminated meeting conflicts and accelerated executive communications.",
    tag: "Operations"
  },
  { 
    icon: MessageSquareCheck, 
    title: "Customer Service Turnaround", 
    text: "Cut client inquiry response delays by 35% using a proactive ticketing structure and professional template guidelines.",
    tag: "Relations"
  },
  { 
    icon: Database, 
    title: "Data Management & Quality", 
    text: "Led the audit and cleanup of internal databases with 1,500+ active records, verifying data integrity and quality.",
    tag: "Database Control"
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-card border-y border-border/40 relative overflow-hidden">
      {/* Decorative corporate blur */}
      <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-primary-glow/5 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Key Responsibilities & Achievements"
          title="Tangible outcomes that reflect absolute administrative discipline."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cards.map(({ icon: Icon, title, text, tag }) => (
            <div 
              key={title} 
              className="group relative p-6.5 rounded-2xl bg-background border border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-1.5 transition-smooth overflow-hidden"
            >
              {/* Subtle top background highlight */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-smooth" />

              <div className="relative flex flex-col h-full">
                {/* Icon box */}
                <div className="h-11 w-11 rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-accent-foreground grid place-items-center mb-4.5 transition-smooth">
                  <Icon className="h-5 w-5" />
                </div>
                
                {/* Tag */}
                <span className="text-[9px] uppercase tracking-widest font-extrabold text-accent mb-2">{tag}</span>

                <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {title}
                </h3>
                
                <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}