import { Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/harikrishna-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent-foreground text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5">
            Harikrishna <span className="text-gradient">K</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-3">
            Administrative Assistant <span className="text-accent">·</span> Office Administrator <span className="text-accent">·</span> Accounting Assistant
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Delivering efficient administrative and financial support with accuracy, organization, and professionalism.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 shadow-elegant">
              <a href="/Harikrishna_K_CV.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
              <a href="#contact">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "2+", l: "Years Experience" },
              { n: "8+", l: "Accounting Tools" },
              { n: "100%", l: "Accuracy Focus" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-display font-bold text-gradient">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-in-soft">
          <div className="absolute -inset-4 bg-gradient-accent rounded-3xl blur-2xl opacity-30 animate-float" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border bg-card aspect-[4/5]">
            <img src={portrait} alt="Portrait of Harikrishna K" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground">Based in</p>
              <p className="text-sm font-semibold">Malappuram, Kerala · India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}