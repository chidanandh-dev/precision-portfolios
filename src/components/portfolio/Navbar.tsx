import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Scroll spy active section indicator
      const scrollPosition = window.scrollY + 160; // offset for navbar height
      let currentSection = "";
      
      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = link.href;
          }
        }
      }
      setActiveSection(currentSection);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-primary">
          <span className="h-9 w-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-display font-extrabold shadow-elegant">
            HK
          </span>
          <span className="hidden sm:inline font-semibold">Harikrishna K</span>
        </a>

        {/* Desktop Links with Active State */}
        <ul className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {links.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <li key={l.href}>
                <a 
                  href={l.href} 
                  className={`hover:text-primary transition-smooth relative py-1.5 ${
                    isActive ? "text-primary font-bold" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all ${
                      isActive ? "w-full" : "w-0"
                    }`} 
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setDark((d) => !d)} aria-label="Toggle theme" className="rounded-xl">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/95 text-primary-foreground shadow-elegant rounded-xl text-xs font-semibold px-4.5 py-5.5 transition-smooth group">
            <a href="#contact" className="flex items-center gap-1.5">
              Contact Me
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" className="lg:hidden rounded-xl" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-elegant">
          <ul className="px-6 py-5 space-y-4">
            {links.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <li key={l.href}>
                  <a 
                    href={l.href} 
                    onClick={() => setOpen(false)} 
                    className={`block py-1.5 text-sm font-semibold uppercase tracking-wider hover:text-primary transition-smooth ${
                      isActive ? "text-primary border-l-2 border-accent pl-3 font-bold" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}