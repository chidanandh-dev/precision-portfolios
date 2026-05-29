import { GraduationCap, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const education = [
  { degree: "Master of Arts in Economics", school: "Calicut University, India", year: "2022", note: "Advanced economic theory, quantitative analysis, public finance." },
  { degree: "Bachelor of Arts in Economics", school: "Calicut University, India", year: "2020", note: "Microeconomics, macroeconomics, statistical methods." },
  { degree: "Diploma in Indian & Foreign Accounting", school: "G-Tec, India", year: "2023", note: "Tally, QuickBooks, Sage 50, Zoho Books, GST and financial reporting." },
];

const certs = [
  "Accounting Software Training — Tally Prime, QuickBooks, Sage 50",
  "MS Office Suite Proficiency — Excel, Word, PowerPoint, Outlook",
  "Cloud-Based Accounting Tools & ERP Systems",
  "Administrative Workflow & Records Management",
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Education & Training" title="Academic foundation and continuous learning." />
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth">
                <div className="h-11 w-11 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                    <span className="text-xs font-semibold text-accent">{e.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  <p className="text-sm text-muted-foreground mt-2">{e.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-2xl bg-gradient-hero text-primary-foreground shadow-elegant">
            <div className="flex items-center gap-2 mb-5">
              <Award className="h-5 w-5" />
              <h3 className="font-display text-xl font-semibold">Certifications & Training</h3>
            </div>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c} className="flex gap-3 text-sm border-b border-primary-foreground/10 pb-3 last:border-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="opacity-90">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}