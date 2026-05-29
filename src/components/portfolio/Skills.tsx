import { Briefcase, Calculator, FileBarChart, BookOpen, FileText, Users, Database, Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const financialSkills = [
  { icon: Calculator, title: "Accounting & Bookkeeping", level: 92, items: ["Double-entry", "AP/AR Processing", "Bank Reconciliation", "Tax Prep Support"] },
  { icon: FileBarChart, title: "Financial Reporting", level: 88, items: ["P&L Statements", "Cash Flow Audits", "Budget Tracking", "Variance Analysis"] },
  { icon: BookOpen, title: "General Ledger Management", level: 90, items: ["Journal Entries", "Audit Schedules", "Accruals & Prepayments", "Month-end Closing"] },
  { icon: Database, title: "Record Keeping & Compliance", level: 93, items: ["Digital Archiving", "Document Audit Trails", "Data Entry Control", "GDPR Awareness"] },
];

const adminSkills = [
  { icon: Briefcase, title: "Office Administration", level: 95, items: ["Workflow Planning", "Meeting Minutes", "Vendor Relations", "Executive Calendar"] },
  { icon: FileText, title: "MS Office & Tech Suite", level: 95, items: ["Advanced Excel (VLOOKUP, Pivot)", "Word Documentation", "PowerPoint Layouts", "Google Apps"] },
  { icon: Users, title: "Customer & Client Relations", level: 90, items: ["Professional Correspondence", "Escalation Handling", "Inquiry Routing", "Team Liaison"] },
  { icon: Clock, title: "Operational Productivity", level: 94, items: ["Multi-priority Tasking", "Deadline Compliance", "Procurement Oversight", "Resource Allocation"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-subtle relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Core Competencies"
          title="A dual capability in office coordination and financial support."
          description="Rigorously trained in maintaining error-free accounts while streamlining day-to-day business operations."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Column 1: Financial Control */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-border">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <h3 className="font-display text-lg font-bold tracking-tight text-primary">Financial & Accounting Control</h3>
            </div>
            
            <div className="space-y-4">
              {financialSkills.map(({ icon: Icon, title, level, items }) => (
                <div key={title} className="group p-5 rounded-2xl bg-card border border-border/80 shadow-card-soft hover:shadow-elegant hover:border-accent/40 transition-smooth">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-accent-foreground grid place-items-center transition-smooth">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h4 className="font-display font-semibold text-foreground text-sm">{title}</h4>
                    </div>
                    <span className="text-xs font-bold text-accent">{level}%</span>
                  </div>
                  
                  {/* Premium Progress Bar */}
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-3">
                    <div className="h-full bg-accent transition-all duration-1000 ease-out" style={{ width: `${level}%` }} />
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Administrative Strategy */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-border">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <h3 className="font-display text-lg font-bold tracking-tight text-primary">Administrative & Operational Support</h3>
            </div>

            <div className="space-y-4">
              {adminSkills.map(({ icon: Icon, title, level, items }) => (
                <div key={title} className="group p-5 rounded-2xl bg-card border border-border/80 shadow-card-soft hover:shadow-elegant hover:border-primary/40 transition-smooth">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-primary-foreground/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground grid place-items-center transition-smooth">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h4 className="font-display font-semibold text-foreground text-sm">{title}</h4>
                    </div>
                    <span className="text-xs font-bold text-primary">{level}%</span>
                  </div>

                  {/* Premium Progress Bar */}
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-3">
                    <div className="h-full bg-primary transition-all duration-1000 ease-out" style={{ width: `${level}%` }} />
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}