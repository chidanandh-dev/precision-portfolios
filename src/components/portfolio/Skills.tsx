import { Briefcase, Calculator, FileBarChart, BookOpen, FileText, Users, Database, Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const categories = [
  { icon: Briefcase, title: "Office Administration", level: 95, items: ["Workflow Coordination", "Document Preparation", "Email Correspondence"] },
  { icon: Calculator, title: "Accounting & Bookkeeping", level: 92, items: ["Invoicing", "AP & AR", "Bank Reconciliation"] },
  { icon: FileBarChart, title: "Financial Reporting", level: 88, items: ["Report Preparation", "Cash Flow", "Budget Tracking"] },
  { icon: BookOpen, title: "General Ledger Management", level: 90, items: ["Journal Entries", "Audit Preparation", "Forecasting"] },
  { icon: FileText, title: "MS Office Suite", level: 95, items: ["Excel", "Word", "PowerPoint", "Outlook"] },
  { icon: Users, title: "Customer Service", level: 90, items: ["Inquiry Handling", "Issue Resolution", "Stakeholder Comms"] },
  { icon: Database, title: "Record Keeping & Docs", level: 93, items: ["Database Management", "Data Entry", "Archiving"] },
  { icon: Clock, title: "Organization & Time Mgmt", level: 94, items: ["Prioritization", "Multitasking", "Deadline Delivery"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Core Competencies"
          title="Skills that keep the office and the books in order."
          description="A blended toolkit of administrative discipline and financial precision."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {categories.map(({ icon: Icon, title, level, items }) => (
            <div key={title} className="group p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{title}</h3>
                </div>
                <span className="text-sm font-semibold text-accent">{level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden mb-4">
                <div className="h-full bg-gradient-accent animate-grow-bar" style={{ width: `${level}%` }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}