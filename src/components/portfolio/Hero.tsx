import { Download, Mail, Sparkles, ArrowRight, ShieldCheck, FileSpreadsheet, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/harikrishna-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-subtle">
      {/* Premium Corporate Grid & Floating Glow Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-[30rem] w-[30rem] rounded-full bg-accent-soft/30 blur-3xl animate-float" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-20 items-center">
        {/* Left Column: Premium Typography & Content */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-6 border border-accent/20">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-accent" />
            Executive Office & Financial Support
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-4 text-foreground">
            Harikrishna <span className="text-primary font-extrabold relative">K<span className="absolute bottom-1.5 left-0 w-full h-1 bg-accent/60 rounded-full" /></span>
          </h1>

          <div className="text-lg md:text-xl font-sans font-semibold text-primary mb-5 flex flex-wrap items-center gap-2">
            <span>Administrative Assistant</span>
            <span className="text-accent/60 font-light">|</span>
            <span>Accounting Support Specialist</span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed font-normal">
            Delivering efficient administrative and financial support with accuracy, meticulous organization, and absolute professionalism.
          </p>

          {/* Premium Call-to-Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center mb-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant px-7 py-6 rounded-xl font-medium transition-smooth">
              <a href="/Harikrishna_K_CV.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-card hover:text-primary px-7 py-6 rounded-xl font-medium shadow-card-soft transition-smooth">
              <a href="#contact">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </a>
            </Button>

            <Button asChild variant="link" className="text-primary hover:text-accent font-semibold flex items-center gap-1 group py-2">
              <a href="#experience">
                View Experience
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Clean Executive Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl border-t border-border/80 pt-8">
            {[
              { 
                n: "2+", 
                l: "Years Experience",
                icon: Briefcase,
                desc: "Corporate administration"
              },
              { 
                n: "150+", 
                l: "Reports Managed",
                icon: FileSpreadsheet,
                desc: "Financial sheets & ledgers"
              },
              { 
                n: "50+", 
                l: "Projects Lead",
                icon: ShieldCheck,
                desc: "Office audits & reviews"
              },
              { 
                n: "100%", 
                l: "Accuracy Focus",
                icon: Award,
                desc: "Zero-error policy"
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.l} className="group p-4 rounded-2xl bg-card border border-border/60 shadow-card-soft hover:shadow-elegant hover:border-accent/40 transition-smooth">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-accent-soft text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="text-2xl font-display font-bold text-primary">{s.n}</div>
                  </div>
                  <div className="text-xs font-semibold text-foreground">{s.l}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{s.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Premium Executive Portrait Container */}
        <div className="relative animate-fade-in-soft max-w-[360px] lg:max-w-[380px] lg:ml-auto mx-auto w-full">
          {/* Subtle elegant corporate background glows */}
          <div className="absolute -inset-4 bg-gradient-accent rounded-3xl blur-2xl opacity-20 animate-float" />
          
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border bg-card p-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-muted group">
              <img 
                src={portrait} 
                alt="Portrait of Harikrishna K" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-102 group-hover:grayscale-0 transition-smooth" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Float badge detailing role & based */}
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-md rounded-xl p-4 border border-border shadow-elegant animate-float">
              <div className="flex items-center gap-2.5">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Based in</p>
                  <p className="text-xs font-bold text-foreground">Malappuram, Kerala · India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}