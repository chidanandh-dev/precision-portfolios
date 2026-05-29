import { SectionHeader } from "./SectionHeader";

const tools = [
  { name: "MS Excel", level: 95 },
  { name: "MS Word", level: 95 },
  { name: "PowerPoint", level: 88 },
  { name: "Outlook", level: 92 },
  { name: "Tally Prime", level: 90 },
  { name: "QuickBooks", level: 88 },
  { name: "Zoho Books", level: 85 },
  { name: "Sage 50", level: 82 },
  { name: "ERP Systems", level: 80 },
  { name: "Cloud Accounting", level: 85 },
];

const soft = ["Communication", "Attention to Detail", "Multitasking", "Critical Thinking", "Adaptability", "Teamwork", "Problem Solving", "Organization"];
const languages = [
  { lang: "Malayalam", level: "Native" },
  { lang: "English", level: "Full Proficiency" },
  { lang: "Hindi", level: "Working" },
  { lang: "Tamil", level: "Working" },
];

export function Tools() {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Software & Tools" title="The toolkit behind clean books and tidy operations." />
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-2xl bg-card border border-border shadow-card-soft">
            <h3 className="font-display text-lg font-semibold mb-5">Software Proficiency</h3>
            <div className="space-y-4">
              {tools.map((t) => (
                <div key={t.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{t.name}</span>
                    <span className="text-muted-foreground">{t.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-gradient-hero animate-grow-bar" style={{ width: `${t.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card-soft">
              <h3 className="font-display text-lg font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {soft.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-accent-soft text-accent-foreground font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card-soft">
              <h3 className="font-display text-lg font-semibold mb-4">Languages</h3>
              <ul className="space-y-2.5 text-sm">
                {languages.map((l) => (
                  <li key={l.lang} className="flex justify-between border-b border-border pb-2 last:border-0">
                    <span className="font-medium">{l.lang}</span>
                    <span className="text-muted-foreground">{l.level}</span>
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