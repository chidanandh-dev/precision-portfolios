import { GraduationCap, Award, Calendar, Landmark, CheckCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const education = [
  { 
    degree: "Master of Arts in Economics", 
    school: "Calicut University, India", 
    year: "2022", 
    note: "Specialized in advanced econometrics, public finance, monetary policy, and statistical data analysis." 
  },
  { 
    degree: "Bachelor of Arts in Economics", 
    school: "Calicut University, India", 
    year: "2020", 
    note: "Focused on micro/macroeconomic models, business math, and regional economic development statistics." 
  },
  { 
    degree: "Diploma in Indian & Foreign Accounting", 
    school: "G-Tec Education, India", 
    year: "2023", 
    note: "Professional training in Tally Prime, QuickBooks, Sage 50, Zoho Books, GST compliance, and Indian tax ledgers." 
  },
];

const certifications = [
  {
    title: "Advanced Accounting Software Accreditation",
    provider: "G-Tec Certified — Tally Prime, QuickBooks Online, Sage 50",
    type: "Professional Credential"
  },
  {
    title: "Executive Office Workflow & Document Controls",
    provider: "Office Productivity Suite — Word, Advanced Excel (Pivot & Macros)",
    type: "Operational Competency"
  },
  {
    title: "GST, VAT & Statutory Compliance Practices",
    provider: "Taxation & Financial Reporting Compliance Seminars",
    type: "Workshops"
  },
  {
    title: "Digital Archiving & Modern Information Security",
    provider: "Corporate Database Security Protocols & GDPR Best Practices",
    type: "Training Seminar"
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Education & Training" title="Academic foundation and verified professional expertise." />
        
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 mt-12">
          {/* Left Column: Academic Display */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-border mb-4">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <h3 className="font-display text-base font-bold text-primary">Academic & Accounting Diplomas</h3>
            </div>

            <div className="space-y-5">
              {education.map((e) => (
                <div 
                  key={e.degree} 
                  className="group relative p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant hover:border-primary/30 transition-smooth"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary-foreground/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground grid place-items-center shrink-0 transition-smooth">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                        <h4 className="font-display font-bold text-foreground text-base group-hover:text-primary transition-smooth">
                          {e.degree}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent-soft text-accent border border-accent/20 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {e.year}
                        </span>
                      </div>
                      
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5 mb-3 font-semibold">
                        <Landmark className="h-3.5 w-3.5" />
                        {e.school}
                      </p>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {e.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-border mb-4">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <h3 className="font-display text-base font-bold text-primary">Accreditations & Professional Training</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((c) => (
                <div 
                  key={c.title} 
                  className="group p-5 rounded-2xl bg-card border border-border/80 shadow-card-soft hover:shadow-elegant hover:border-accent/40 transition-smooth"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-accent-soft text-accent grid place-items-center shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                      <Award className="h-4.5 w-4.5" />
                    </div>
                    
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-extrabold text-accent block mb-1">
                        {c.type}
                      </span>
                      <h4 className="font-display font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-smooth">
                        {c.title}
                      </h4>
                      <p className="text-[10px] text-muted-foreground font-medium">
                        {c.provider}
                      </p>
                    </div>
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