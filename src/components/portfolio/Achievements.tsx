import { TrendingUp, FileCheck, MessagesSquare, Archive, Wallet, Lightbulb } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { icon: FileCheck, title: "Improved Bookkeeping System", text: "Enhanced accuracy and reduced reporting errors through a refined bookkeeping workflow." },
  { icon: Archive, title: "Streamlined Document Management", text: "Reorganized records to improve retrieval speed and storage efficiency across the office." },
  { icon: MessagesSquare, title: "Faster Inquiry Response", text: "Cut customer inquiry response time with proactive engagement and clearer communication." },
  { icon: TrendingUp, title: "Comprehensive Record-Keeping", text: "Built a record system ensuring data accuracy and easy accessibility for audits." },
  { icon: Wallet, title: "Better Fee Collection", text: "Introduced improved collection procedures, reducing discrepancies and strengthening cash flow." },
  { icon: Lightbulb, title: "Operational Problem Solving", text: "Proactively identified and resolved process bottlenecks, improving overall productivity." },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Key Responsibilities & Achievements"
          title="Outcomes that reflect organization and efficiency."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group relative p-6 rounded-2xl bg-card border border-border overflow-hidden hover:-translate-y-1 transition-smooth shadow-card-soft hover:shadow-elegant">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/10 group-hover:scale-150 transition-smooth" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center mb-4 shadow-glow">
                  <Icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}