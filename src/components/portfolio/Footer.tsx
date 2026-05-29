import { ArrowUp, Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <div className="font-display text-2xl font-bold mb-2">Harikrishna K</div>
          <p className="text-sm opacity-80">Administrative & Accounting Specialist</p>
        </div>
        <div className="flex gap-3 md:justify-center">
          <a href="mailto:harikrishna.k7899@gmail.com" className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth">
            <Mail className="h-4 w-4" />
          </a>
          <a href="tel:+919846148011" className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth">
            <Phone className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <div className="md:text-right">
          <Button asChild variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href="#home">
              Back to Top <ArrowUp className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-primary-foreground/10 text-xs opacity-70 text-center">
        © {new Date().getFullYear()} Harikrishna K. Crafted with care for clarity and precision.
      </div>
    </footer>
  );
}