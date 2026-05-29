import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { z as Sun, w as Moon, a as ArrowRight, X, u as Menu, x as Sparkles, m as Download, M as Mail, d as Briefcase, o as FileSpreadsheet, S as ShieldCheck, c as Award, L as Landmark, j as Clock, H as HeartHandshake, C as Calculator, F as FileChartColumnIncreasing, B as BookOpen, D as Database, p as FileText, U as Users, e as Building2, f as Calendar, t as MapPin, h as CircleCheckBig, T as TrendingUp, n as FileCheck, A as Archive, W as Wallet, i as ClipboardCheck, v as MessageSquareCheck, q as GraduationCap, l as Cpu, r as Laptop, y as Star, G as Globe, P as Phone, s as Linkedin, g as Check, k as Copy, b as ArrowUp } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [dark, setDark] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [activeSection, setActiveSection] = reactExports.useState("");
  reactExports.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 160;
      let currentSection = "";
      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
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
  reactExports.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-6xl mx-auto flex items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-display font-extrabold shadow-elegant", children: "HK" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline font-semibold", children: "Harikrishna K" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: links.map((l) => {
            const isActive = activeSection === l.href;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: l.href,
                className: `hover:text-primary transition-smooth relative py-1.5 ${isActive ? "text-primary font-bold" : "text-muted-foreground"}`,
                children: [
                  l.label,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `absolute bottom-0 left-0 h-0.5 bg-accent transition-all ${isActive ? "w-full" : "w-0"}`
                    }
                  )
                ]
              }
            ) }, l.href);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => setDark((d) => !d), "aria-label": "Toggle theme", className: "rounded-xl", children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "hidden sm:inline-flex bg-primary hover:bg-primary/95 text-primary-foreground shadow-elegant rounded-xl text-xs font-semibold px-4.5 py-5.5 transition-smooth group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "flex items-center gap-1.5", children: [
              "Contact Me",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "lg:hidden rounded-xl", onClick: () => setOpen((o) => !o), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) })
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "px-6 py-5 space-y-4", children: links.map((l) => {
          const isActive = activeSection === l.href;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: `block py-1.5 text-sm font-semibold uppercase tracking-wider hover:text-primary transition-smooth ${isActive ? "text-primary border-l-2 border-accent pl-3 font-bold" : "text-muted-foreground"}`,
              children: l.label
            }
          ) }, l.href);
        }) }) })
      ]
    }
  );
}
const portrait = "/assets/harikrishna-portrait-CdwkoJ95.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-subtle", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10 opacity-30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 right-10 h-[30rem] w-[30rem] rounded-full bg-accent-soft/30 blur-3xl animate-float" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up text-center lg:text-left flex flex-col items-center lg:items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-6 border border-accent/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 animate-pulse text-accent" }),
          "Executive Office & Financial Support"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-4 text-foreground", children: [
          "Harikrishna ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-extrabold relative", children: [
            "K",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-1.5 left-0 w-full h-1 bg-accent/60 rounded-full" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base sm:text-lg md:text-xl font-sans font-semibold text-primary mb-5 flex flex-wrap justify-center lg:justify-start items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Administrative Assistant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent/60 font-light", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Accounting Support Specialist" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed font-normal", children: "Delivering efficient administrative and financial support with accuracy, meticulous organization, and absolute professionalism." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center justify-center lg:justify-start mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-primary text-primary-foreground hover:bg-primary/95 shadow-elegant px-7 py-6 rounded-xl font-medium transition-smooth w-full sm:w-auto text-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/Harikrishna_K_CV.pdf", download: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4 mr-2" }),
            "Download CV"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-border hover:bg-card hover:text-primary px-7 py-6 rounded-xl font-medium shadow-card-soft transition-smooth w-full sm:w-auto text-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mr-2" }),
            "Contact Me"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "link", className: "text-primary hover:text-accent font-semibold flex items-center justify-center gap-1 group py-2 w-full sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#experience", className: "inline-flex items-center", children: [
            "View Experience",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 ml-1" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl border-t border-border/80 pt-8 text-left", children: [
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
          }
        ].map((s) => {
          const Icon = s.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group p-4 rounded-2xl bg-card border border-border/60 shadow-card-soft hover:shadow-elegant hover:border-accent/40 transition-smooth", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-lg bg-accent-soft text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-primary", children: s.n })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground", children: s.l }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5 leading-snug", children: s.desc })
          ] }, s.l);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-fade-in-soft max-w-[360px] lg:max-w-[380px] lg:ml-auto mx-auto w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gradient-accent rounded-3xl blur-2xl opacity-20 animate-float" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-elegant border border-border bg-card p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden aspect-[4/5] bg-muted group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: portrait,
                alt: "Portrait of Harikrishna K",
                className: "w-full h-full object-cover grayscale-[20%] group-hover:scale-102 group-hover:grayscale-0 transition-smooth"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-md rounded-xl p-4 border border-border shadow-elegant animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-widest font-bold", children: "Based in" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground", children: "Malappuram, Kerala · India" })
            ] })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
function SectionHeader({ eyebrow, title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-3", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: description })
  ] });
}
const competencies = [
  {
    title: "Administrative Excellence",
    desc: "Overseeing day-to-day operations, filing systems, vendor coordination, and executive support with meticulous planning.",
    icon: Award
  },
  {
    title: "Financial Accuracy",
    desc: "Proficient in general ledger oversight, balance sheets, quick bookkeeping, audit support, and strict compliance.",
    icon: Landmark
  },
  {
    title: "Office Coordination",
    desc: "Building structured record-keeping environments that speed up response times and keep teams synchronized.",
    icon: Clock
  },
  {
    title: "Professional Communication",
    desc: "A trusted liaison handling corporate correspondence and customer relations with poise and empathy.",
    icon: HeartHandshake
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "py-24 bg-card border-y border-border/40 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -right-40 h-80 w-80 rounded-full bg-accent-soft/10 blur-3xl -z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Executive Profile", title: "Commitment to absolute organization, accuracy, and operational trust." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-4", children: "Providing backbone administrative and financial support for growing businesses." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I am a dedicated **Administrative Assistant and Accounting Specialist** with a proven history of handling complex administrative environments. My professional journey is grounded in delivering flawless operational assistance, ensuring corporate standards are not just met, but exceeded daily." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "From managing general ledger records and coordinating tax document filing to answering high-priority client queries, I blend administrative agility with accounting precision. I have built structured systems that enhance data integrity, reduce processing times for invoices, and coordinate internal stakeholders seamlessly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "My operational philosophy is built on absolute reliability, organizational transparency, and a continuous drive to optimize standard office workflows. I take pride in being the dependable support structure that enables executives and financial teams to execute their goals with complete confidence." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-6 pt-6 border-t border-border/60", children: [
            { v: "100%", k: "Accuracy Rate" },
            { v: "1,200+", k: "Invoices Audited" }
          ].map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-background rounded-xl border border-border/40 shadow-card-soft text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-display font-extrabold text-primary", children: metric.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase font-bold tracking-wider text-muted-foreground mt-0.5", children: metric.k })
          ] }, metric.k)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: competencies.map((comp) => {
          const Icon = comp.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "group p-6 rounded-2xl bg-background border border-border shadow-card-soft hover:shadow-elegant hover:border-accent/40 transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-accent-foreground grid place-items-center transition-smooth mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground text-sm mb-2 group-hover:text-primary transition-smooth", children: comp.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: comp.desc })
              ]
            },
            comp.title
          );
        }) })
      ] })
    ] })
  ] });
}
const financialSkills = [
  { icon: Calculator, title: "Accounting & Bookkeeping", level: 92, items: ["Double-entry", "AP/AR Processing", "Bank Reconciliation", "Tax Prep Support"] },
  { icon: FileChartColumnIncreasing, title: "Financial Reporting", level: 88, items: ["P&L Statements", "Cash Flow Audits", "Budget Tracking", "Variance Analysis"] },
  { icon: BookOpen, title: "General Ledger Management", level: 90, items: ["Journal Entries", "Audit Schedules", "Accruals & Prepayments", "Month-end Closing"] },
  { icon: Database, title: "Record Keeping & Compliance", level: 93, items: ["Digital Archiving", "Document Audit Trails", "Data Entry Control", "GDPR Awareness"] }
];
const adminSkills = [
  { icon: Briefcase, title: "Office Administration", level: 95, items: ["Workflow Planning", "Meeting Minutes", "Vendor Relations", "Executive Calendar"] },
  { icon: FileText, title: "MS Office & Tech Suite", level: 95, items: ["Advanced Excel (VLOOKUP, Pivot)", "Word Documentation", "PowerPoint Layouts", "Google Apps"] },
  { icon: Users, title: "Customer & Client Relations", level: 90, items: ["Professional Correspondence", "Escalation Handling", "Inquiry Routing", "Team Liaison"] },
  { icon: Clock, title: "Operational Productivity", level: 94, items: ["Multi-priority Tasking", "Deadline Compliance", "Procurement Oversight", "Resource Allocation"] }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "py-24 bg-gradient-subtle relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Core Competencies",
        title: "A dual capability in office coordination and financial support.",
        description: "Rigorously trained in maintaining error-free accounts while streamlining day-to-day business operations."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold tracking-tight text-primary", children: "Financial & Accounting Control" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: financialSkills.map(({ icon: Icon, title, level, items }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group p-5 rounded-2xl bg-card border border-border/80 shadow-card-soft hover:shadow-elegant hover:border-accent/40 transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-accent-foreground grid place-items-center transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground text-sm", children: title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-accent", children: [
              level,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-accent transition-all duration-1000 ease-out", style: { width: `${level}%` } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground", children: item }, item)) })
        ] }, title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold tracking-tight text-primary", children: "Administrative & Operational Support" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: adminSkills.map(({ icon: Icon, title, level, items }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group p-5 rounded-2xl bg-card border border-border/80 shadow-card-soft hover:shadow-elegant hover:border-primary/40 transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-primary-foreground/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground grid place-items-center transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground text-sm", children: title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-primary", children: [
              level,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary transition-all duration-1000 ease-out", style: { width: `${level}%` } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground", children: item }, item)) })
        ] }, title)) })
      ] })
    ] })
  ] }) });
}
const jobs = [
  {
    role: "Administrative & Financial Assistant",
    company: "Ashfin Enterprises LLP",
    location: "Malappuram, Kerala, India",
    period: "Aug 2024 — Present",
    kpis: [
      { label: "Ledger Accuracy", val: "100%" },
      { label: "Invoice Processing", val: "500+/Mo" },
      { label: "Cycle Speed", val: "-20%" }
    ],
    bullets: [
      "Deliver comprehensive general ledger management with precise financial data entry, balance sheet updating, and double-entry bookkeeping control.",
      "Manage end-to-end invoicing processes for all business clients, ensuring zero reconciliation discrepancies across systems.",
      "Maintain meticulous document preparation, organizing sensitive accounting sheets and audit files for instant administrative retrieval.",
      "Enhance corporate communication by acting as the primary point of contact for customer and banking partner inquiries."
    ],
    highlight: "Designed an automated digital ledger tracking framework that accelerated the month-end closing process by 4 business days.",
    tools: ["MS Excel", "Tally Prime", "QuickBooks Online", "Zoho Books"]
  },
  {
    role: "Office Administrator",
    company: "Enzyme Science Forum",
    location: "Malappuram, Kerala, India",
    period: "Feb 2023 — Feb 2024",
    kpis: [
      { label: "Admissions Handled", val: "150+" },
      { label: "Inquiry Turnaround", val: "<12 Hr" },
      { label: "Ledger Discrepancy", val: "0%" }
    ],
    bullets: [
      "Implemented organized administration workflows that eliminated administrative bottlenecks and improved overall office productivity by 30%.",
      "Oversaw all student academic admissions and fee collection ledger entries, generating weekly financial summaries for management review.",
      "Restructured physical and digital archives, ensuring complete compliance with the organization's high-security information protocols.",
      "Consulted with parents, students, and external partners to coordinate resolving operational inquiries with timely follow-through."
    ],
    highlight: "Transformed student registration tracking into a centralized sheet, resulting in zero payment recording delays and saving 10 administrative hours weekly.",
    tools: ["MS Excel", "MS Word", "Outlook", "Internal DBMS", "Accounting Software"]
  }
];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "py-24 bg-background relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Professional Experience",
        title: "A history of driving operational clarity and financial order."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16", children: jobs.map((j, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative grid md:grid-cols-2 gap-8 lg:gap-16 ${i % 2 ? "md:[direction:rtl]" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-5 w-5 rounded-full bg-primary border-4 border-background shadow-elegant z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `md:[direction:ltr] pl-12 md:pl-0 ${i % 2 ? "md:pl-8" : "md:pr-8"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant hover:border-primary/30 transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-border/60 pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
              j.company
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
              j.period
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-smooth", children: j.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1 text-xs text-muted-foreground mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
            j.location
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-6 bg-secondary/40 p-3.5 rounded-xl border border-border/40", children: j.kpis.map((kpi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-extrabold text-primary", children: kpi.val }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase font-bold text-muted-foreground mt-0.5 tracking-wider leading-none", children: kpi.label })
          ] }, kpi.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm text-muted-foreground mb-5", children: j.bullets.map((bullet) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-accent shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: bullet })
          ] }, bullet)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-accent-soft text-accent-foreground border-l-3 border-accent rounded-r-xl text-xs leading-relaxed font-semibold mb-6 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 shrink-0 mt-0.5 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase text-[9px] font-extrabold block text-accent tracking-wider mb-1", children: "Key Operational Win" }),
              j.highlight
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-4 border-t border-border/60", children: j.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/40", children: t }, t)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block md:[direction:ltr]" })
      ] }, j.company)) })
    ] })
  ] }) });
}
const cards = [
  {
    icon: FileCheck,
    title: "Financial Accuracy Improvements",
    text: "Achieved 100% reconciliation match across complex general ledgers, reducing monthly discrepancies to absolute zero.",
    tag: "Audit-Ready"
  },
  {
    icon: Archive,
    title: "Record Management Efficiency",
    text: "Engineered high-security physical and digital filing vaults, boosting internal file retrieval speeds by over 40%.",
    tag: "Compliance"
  },
  {
    icon: Wallet,
    title: "Invoice Processing Speed",
    text: "Overhauled Accounts Payable and Receivable pipelines, cutting vendor billing cycle times down to under 24 hours.",
    tag: "Optimization"
  },
  {
    icon: ClipboardCheck,
    title: "Administrative Coordination",
    text: "Implemented a central administrative dashboard that eliminated meeting conflicts and accelerated executive communications.",
    tag: "Operations"
  },
  {
    icon: MessageSquareCheck,
    title: "Customer Service Turnaround",
    text: "Cut client inquiry response delays by 35% using a proactive ticketing structure and professional template guidelines.",
    tag: "Relations"
  },
  {
    icon: Database,
    title: "Data Management & Quality",
    text: "Led the audit and cleanup of internal databases with 1,500+ active records, verifying data integrity and quality.",
    tag: "Database Control"
  }
];
function Achievements() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "achievements", className: "py-24 bg-card border-y border-border/40 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-10 h-72 w-72 rounded-full bg-primary-glow/5 blur-3xl -z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "Key Responsibilities & Achievements",
          title: "Tangible outcomes that reflect absolute administrative discipline."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12", children: cards.map(({ icon: Icon, title, text, tag }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative p-6.5 rounded-2xl bg-background border border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-1.5 transition-smooth overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-smooth" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col h-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-accent-foreground grid place-items-center mb-4.5 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase tracking-widest font-extrabold text-accent mb-2", children: tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-smooth", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed flex-grow", children: text })
            ] })
          ]
        },
        title
      )) })
    ] })
  ] });
}
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
  }
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
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "education", className: "py-24 bg-background relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Education & Training", title: "Academic foundation and verified professional expertise." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.2fr_1fr] gap-12 mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-border mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold text-primary", children: "Academic & Accounting Diplomas" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: education.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group relative p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant hover:border-primary/30 transition-smooth",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-primary-foreground/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground grid place-items-center shrink-0 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground text-base group-hover:text-primary transition-smooth", children: e.degree }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent-soft text-accent border border-accent/20 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
                    e.year
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1.5 mb-3 font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className: "h-3.5 w-3.5" }),
                  e.school
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: e.note })
              ] })
            ] })
          },
          e.degree
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-border mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold text-primary", children: "Accreditations & Professional Training" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: certifications.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "group p-5 rounded-2xl bg-card border border-border/80 shadow-card-soft hover:shadow-elegant hover:border-accent/40 transition-smooth",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-accent-soft text-accent grid place-items-center shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase tracking-wider font-extrabold text-accent block mb-1", children: c.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-smooth", children: c.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-medium", children: c.provider })
              ] })
            ] })
          },
          c.title
        )) })
      ] })
    ] })
  ] }) });
}
const accountingTools = [
  { name: "Tally Prime", level: 90, desc: "SME financial auditing & VAT ledger control" },
  { name: "QuickBooks Online", level: 88, desc: "SaaS bookkeeping, AP/AR, & vendor reports" },
  { name: "Zoho Books", level: 85, desc: "Automated business invoicing & bank matching" },
  { name: "Sage 50 & ERP Systems", level: 82, desc: "Multi-department resource and inventory ledgers" }
];
const productivityTools = [
  { name: "MS Excel (Advanced)", level: 95, desc: "Pivot tables, complex VLOOKUPs, data formulas" },
  { name: "MS Word & Docs", level: 95, desc: "Meticulous corporate summaries & reporting" },
  { name: "PowerPoint & Slides", level: 88, desc: "Executive presentation layouts & briefings" },
  { name: "Google Workspace / Outlook", level: 92, desc: "High-priority inbox delegation & schedules" }
];
const softSkills = [
  "Strict Attention to Detail",
  "Multitasking under pressure",
  "Critical Conflict Resolution",
  "Proactive Process Optimization",
  "High Adaptability",
  "Clear Interpersonal Comm",
  "Database Organization",
  "Zero-Error Auditing"
];
const languages = [
  { lang: "English", level: "Full Professional", note: "Primary business language" },
  { lang: "Malayalam", level: "Native / Bilingual", note: "Primary regional language" },
  { lang: "Hindi", level: "Professional Working", note: "National communication" },
  { lang: "Tamil", level: "Professional Working", note: "Southern region coverage" }
];
function Tools() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-gradient-subtle relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Software & Tools", title: "An executive technology stack built for speed and absolute accuracy." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.8fr_1fr] gap-8 mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-6 pb-3 border-b border-border/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-accent-soft text-accent rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold text-primary", children: "Financial & Accounting Platforms" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: accountingTools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-background border border-border/60 hover:border-accent/40 transition-smooth group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-semibold mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent", children: [
                t.level,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden mb-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-accent transition-all duration-1000", style: { width: `${t.level}%` } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground leading-snug", children: t.desc })
          ] }, t.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-6 pb-3 border-b border-border/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-primary-foreground/10 text-primary rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Laptop, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold text-primary", children: "Office Operations & Productivity" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: productivityTools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-background border border-border/60 hover:border-primary/40 transition-smooth group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-semibold mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                t.level,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden mb-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary transition-all duration-1000", style: { width: `${t.level}%` } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground leading-snug", children: t.desc })
          ] }, t.name)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-5 pb-3 border-b border-border/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-accent-soft text-accent rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 animate-spin-slow" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold text-primary", children: "Operational Strengths" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: softSkills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] font-semibold px-3 py-1.5 rounded-lg bg-background border border-border text-foreground hover:border-accent/40 transition-smooth cursor-default",
              children: s
            },
            s
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-5 pb-3 border-b border-border/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-primary-foreground/10 text-primary rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold text-primary", children: "Multilingual Capability" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: languages.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground block", children: l.lang }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground block mt-0.5", children: l.note })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-md bg-secondary text-primary border border-border/40 shrink-0", children: l.level })
          ] }, l.lang)) })
        ] })
      ] })
    ] })
  ] }) });
}
function Contact() {
  const [copied, setCopied] = reactExports.useState(false);
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("harikrishna.k7899@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2e3);
  };
  const contactDetails = [
    {
      icon: Mail,
      label: "Email Address",
      value: "harikrishna.k7899@gmail.com",
      href: "mailto:harikrishna.k7899@gmail.com",
      action: {
        label: "Copy Email",
        onClick: (e) => {
          e.preventDefault();
          copyEmailToClipboard();
        }
      }
    },
    {
      icon: Phone,
      label: "Direct Telephone",
      value: "+91 98461 48011",
      href: "tel:+919846148011"
    },
    {
      icon: OperationalBaseIcon,
      iconElement: MapPin,
      label: "Operational Base",
      value: "Malappuram, Kerala, India"
    },
    {
      icon: Linkedin,
      label: "Corporate Network",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "py-24 bg-background relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-accent-soft/20 blur-3xl -z-10 animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "Get in Touch",
          title: "Let's bring administrative order and financial control to your team.",
          description: "Open to permanent corporate administrative, office management, and accounting support roles."
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto text-left", children: contactDetails.map((detail) => {
        const Icon = detail.iconElement || detail.icon;
        const CardContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4.5 p-5.5 rounded-2xl bg-card border border-border/80 shadow-card-soft hover:shadow-elegant hover:border-primary/30 transition-smooth h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4.5 w-4.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase font-bold tracking-widest text-muted-foreground", children: detail.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground mt-0.5", children: detail.value })
          ] }),
          detail.action && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: detail.action.onClick,
              className: "p-2 rounded-lg bg-secondary text-primary hover:bg-accent hover:text-accent-foreground transition-smooth shrink-0 border border-border/40",
              title: detail.action.label,
              children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-emerald-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5" })
            }
          )
        ] });
        return detail.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: detail.href,
            target: detail.href.startsWith("http") ? "_blank" : void 0,
            rel: "noreferrer",
            className: "block group",
            children: CardContent
          },
          detail.label
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block", children: CardContent }, detail.label);
      }) })
    ] })
  ] });
}
const OperationalBaseIcon = MapPin;
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-primary text-primary-foreground py-16 border-t border-border/10 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 font-display text-lg font-bold tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-xl bg-primary-foreground text-primary grid place-items-center font-display font-extrabold shadow-elegant", children: "HK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary-foreground", children: "Harikrishna K" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-70 max-w-xs leading-relaxed", children: "Delivering high-end administrative support and accounting operations oversight to corporations with zero-error accuracy." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-widest font-extrabold opacity-60", children: "Corporate Navigation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-2 text-xs font-semibold", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "opacity-80 hover:opacity-100 hover:text-accent transition-smooth block py-1", children: l.label }) }, l.href)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:text-right md:flex md:flex-col md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-widest font-extrabold opacity-60 mb-2", children: "Connect & Relocate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:harikrishna.k7899@gmail.com",
              className: "h-9 w-9 rounded-xl bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth",
              "aria-label": "Email Address",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "tel:+919846148011",
              className: "h-9 w-9 rounded-xl bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth",
              "aria-label": "Telephone",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.linkedin.com/",
              target: "_blank",
              rel: "noreferrer",
              className: "h-9 w-9 rounded-xl bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth",
              "aria-label": "LinkedIn Network",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-xl text-xs font-semibold px-4.5 py-4 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", children: [
          "Back to Top ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-3.5 w-3.5 ml-2" })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] opacity-60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Harikrishna K. All professional rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold uppercase tracking-wider", children: "Built with React · Tailwind CSS · TanStack Start" })
    ] })
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background overflow-x-hidden w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Achievements, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tools, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
  ] });
}
export {
  Index as component
};
