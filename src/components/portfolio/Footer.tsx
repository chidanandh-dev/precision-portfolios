import { ArrowUp, Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-border/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
        {/* Branding Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
            <span className="h-9 w-9 rounded-xl bg-primary-foreground text-primary grid place-items-center font-display font-extrabold shadow-elegant">
              HK
            </span>
            <span className="font-semibold text-primary-foreground">Harikrishna K</span>
          </div>
          <p className="text-xs opacity-70 max-w-xs leading-relaxed">
            Delivering high-end administrative support and accounting operations oversight to corporations with zero-error accuracy.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-extrabold opacity-60">Corporate Navigation</h4>
          <ul className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="opacity-80 hover:opacity-100 hover:text-accent transition-smooth block py-1">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials & Actions Column */}
        <div className="space-y-4 md:text-right md:flex md:flex-col md:items-end">
          <h4 className="text-xs uppercase tracking-widest font-extrabold opacity-60 mb-2">Connect & Relocate</h4>
          <div className="flex gap-2 mb-4">
            <a 
              href="mailto:harikrishna.k7899@gmail.com" 
              className="h-9 w-9 rounded-xl bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth"
              aria-label="Email Address"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a 
              href="tel:+919846148011" 
              className="h-9 w-9 rounded-xl bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth"
              aria-label="Telephone"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="h-9 w-9 rounded-xl bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth"
              aria-label="LinkedIn Network"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <div>
            <Button asChild variant="outline" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-xl text-xs font-semibold px-4.5 py-4 transition-smooth">
              <a href="#home">
                Back to Top <ArrowUp className="h-3.5 w-3.5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Sub-footer metadata */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] opacity-60">
        <div>
          © {new Date().getFullYear()} Harikrishna K. All professional rights reserved.
        </div>
        <div className="font-semibold uppercase tracking-wider">
          Built with React · Tailwind CSS · TanStack Start
        </div>
      </div>
    </footer>
  );
}