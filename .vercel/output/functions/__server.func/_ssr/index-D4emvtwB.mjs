import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { p as Sun, n as Moon, X, l as Menu, o as Sparkles, g as Download, M as Mail, e as CircleCheck, c as Briefcase, C as Calculator, F as FileChartColumnIncreasing, B as BookOpen, i as FileText, U as Users, D as Database, f as Clock, d as Building2, h as FileCheck, A as Archive, m as MessagesSquare, T as TrendingUp, W as Wallet, L as Lightbulb, G as GraduationCap, b as Award, P as Phone, k as MapPin, j as Linkedin, S as Send, a as ArrowUp } from "../_libs/lucide-react.mjs";
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
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className: `fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border shadow-card-soft" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-6xl mx-auto flex items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2 font-display text-xl font-bold tracking-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-md bg-gradient-hero text-primary-foreground grid place-items-center text-sm", children: "HK" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Harikrishna K" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "hover:text-foreground transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all", children: l.label }) }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => setDark((d) => !d), "aria-label": "Toggle theme", children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "hidden sm:inline-flex bg-gradient-hero hover:opacity-90", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", children: "Hire Me" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "lg:hidden", onClick: () => setOpen((o) => !o), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) })
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden bg-background/95 backdrop-blur-md border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "px-6 py-4 space-y-3", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setOpen(false), className: "block py-1 text-sm font-medium text-muted-foreground hover:text-foreground", children: l.label }) }, l.href)) }) })
      ]
    }
  );
}
const portrait = "/assets/harikrishna-portrait-DMSAjOZ1.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative pt-32 pb-24 overflow-hidden bg-gradient-subtle", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10 opacity-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent-foreground text-xs font-medium mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          "Available for new opportunities"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5", children: [
          "Harikrishna ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "K" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg md:text-xl text-muted-foreground font-medium mb-3", children: [
          "Administrative Assistant ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "·" }),
          " Office Administrator ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "·" }),
          " Accounting Assistant"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed", children: "Delivering efficient administrative and financial support with accuracy, organization, and professionalism." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-hero hover:opacity-90 shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/Harikrishna_K_CV.pdf", download: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4 mr-2" }),
            "Download CV"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-primary/30 hover:bg-primary/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mr-2" }),
            "Contact Me"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-6 max-w-md", children: [
          { n: "2+", l: "Years Experience" },
          { n: "8+", l: "Accounting Tools" },
          { n: "100%", l: "Accuracy Focus" }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold text-gradient", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.l })
        ] }, s.l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-fade-in-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gradient-accent rounded-3xl blur-2xl opacity-30 animate-float" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-elegant border border-border bg-card aspect-[4/5]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Portrait of Harikrishna K", className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md rounded-xl p-4 border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Based in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Malappuram, Kerala · India" })
          ] })
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
const points = [
  "Strong background in accounting and office administration",
  "Expertise across general ledger, bookkeeping, and financial reporting",
  "Proactive communicator with a track record of resolving inquiries",
  "Passionate about streamlined, accurate, and efficient operations"
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "About Me", title: "A career built on accuracy, order, and trust." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I'm a dedicated Administrative Assistant with a strong background in accounting and office administration. My work spans general ledger management, bookkeeping, invoicing, and financial reporting — paired with the day-to-day organization that keeps an office running smoothly." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "From my time as an Office Administrator at Enzyme Science Forum to my current role at Ashfin Enterprises LLP, I've built systems that improve record-keeping accuracy, accelerate inquiry response times, and bring clarity to financial documentation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "My approach is simple: be reliable, be precise, and make every process a little more efficient than I found it." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-4", children: points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 p-5 rounded-xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-accent shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: p })
      ] }, p)) })
    ] })
  ] }) });
}
const categories = [
  { icon: Briefcase, title: "Office Administration", level: 95, items: ["Workflow Coordination", "Document Preparation", "Email Correspondence"] },
  { icon: Calculator, title: "Accounting & Bookkeeping", level: 92, items: ["Invoicing", "AP & AR", "Bank Reconciliation"] },
  { icon: FileChartColumnIncreasing, title: "Financial Reporting", level: 88, items: ["Report Preparation", "Cash Flow", "Budget Tracking"] },
  { icon: BookOpen, title: "General Ledger Management", level: 90, items: ["Journal Entries", "Audit Preparation", "Forecasting"] },
  { icon: FileText, title: "MS Office Suite", level: 95, items: ["Excel", "Word", "PowerPoint", "Outlook"] },
  { icon: Users, title: "Customer Service", level: 90, items: ["Inquiry Handling", "Issue Resolution", "Stakeholder Comms"] },
  { icon: Database, title: "Record Keeping & Docs", level: 93, items: ["Database Management", "Data Entry", "Archiving"] },
  { icon: Clock, title: "Organization & Time Mgmt", level: 94, items: ["Prioritization", "Multitasking", "Deadline Delivery"] }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "py-24 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Core Competencies",
        title: "Skills that keep the office and the books in order.",
        description: "A blended toolkit of administrative discipline and financial precision."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5", children: categories.map(({ icon: Icon, title, level, items }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-accent", children: [
          level,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-accent animate-grow-bar", style: { width: `${level}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground", children: i }, i)) })
    ] }, title)) })
  ] }) });
}
const jobs = [
  {
    role: "Administrative Assistant",
    company: "Ashfin Enterprises LLP",
    location: "Malappuram, Kerala, India",
    period: "Aug 2024 — Present",
    bullets: [
      "Deliver comprehensive general ledger management with precise financial data entry and bookkeeping.",
      "Manage end-to-end invoicing, ensuring seamless transactions and accurate record maintenance.",
      "Maintain meticulous document preparation and record-keeping for fast retrieval and operational efficiency.",
      "Enhance customer service by promptly addressing inquiries and ensuring positive client interactions.",
      "Coordinate professional email correspondence with internal and external stakeholders."
    ],
    tools: ["MS Office", "Tally Prime", "QuickBooks", "Zoho Books"]
  },
  {
    role: "Office Administrator",
    company: "Enzyme Science Forum",
    location: "Malappuram, Kerala, India",
    period: "Feb 2023 — Feb 2024",
    bullets: [
      "Implemented organized workflows that improved overall office productivity.",
      "Oversaw student admissions and fee collection with accurate financial documentation.",
      "Maintained complete, well-structured records aligned with organizational protocols.",
      "Responded to student and parent inquiries with professionalism and timely follow-through.",
      "Proactively identified and resolved operational challenges to keep the office productive."
    ],
    tools: ["MS Excel", "Word", "Outlook", "Accounting Software"]
  }
];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Professional Experience",
        title: "A timeline of administrative and accounting impact."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: jobs.map((j, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative grid md:grid-cols-2 gap-8 ${i % 2 ? "md:[direction:rtl]" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-4 w-4 rounded-full bg-gradient-accent ring-4 ring-background shadow-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `md:[direction:ltr] pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5" }),
            j.period
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: j.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: [
            j.company,
            " · ",
            j.location
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-muted-foreground mb-4", children: j.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent mt-1", children: "▸" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
          ] }, b)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-4 border-t border-border", children: j.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2.5 py-1 rounded-md bg-primary/5 text-primary font-medium", children: t }, t)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block md:[direction:ltr]" })
      ] }, j.company)) })
    ] })
  ] }) });
}
const cards = [
  { icon: FileCheck, title: "Improved Bookkeeping System", text: "Enhanced accuracy and reduced reporting errors through a refined bookkeeping workflow." },
  { icon: Archive, title: "Streamlined Document Management", text: "Reorganized records to improve retrieval speed and storage efficiency across the office." },
  { icon: MessagesSquare, title: "Faster Inquiry Response", text: "Cut customer inquiry response time with proactive engagement and clearer communication." },
  { icon: TrendingUp, title: "Comprehensive Record-Keeping", text: "Built a record system ensuring data accuracy and easy accessibility for audits." },
  { icon: Wallet, title: "Better Fee Collection", text: "Introduced improved collection procedures, reducing discrepancies and strengthening cash flow." },
  { icon: Lightbulb, title: "Operational Problem Solving", text: "Proactively identified and resolved process bottlenecks, improving overall productivity." }
];
function Achievements() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "achievements", className: "py-24 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Key Responsibilities & Achievements",
        title: "Outcomes that reflect organization and efficiency."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: cards.map(({ icon: Icon, title, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative p-6 rounded-2xl bg-card border border-border overflow-hidden hover:-translate-y-1 transition-smooth shadow-card-soft hover:shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/10 group-hover:scale-150 transition-smooth" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center mb-4 shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-accent-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold mb-2", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: text })
      ] })
    ] }, title)) })
  ] }) });
}
const education = [
  { degree: "Master of Arts in Economics", school: "Calicut University, India", year: "2022", note: "Advanced economic theory, quantitative analysis, public finance." },
  { degree: "Bachelor of Arts in Economics", school: "Calicut University, India", year: "2020", note: "Microeconomics, macroeconomics, statistical methods." },
  { degree: "Diploma in Indian & Foreign Accounting", school: "G-Tec, India", year: "2023", note: "Tally, QuickBooks, Sage 50, Zoho Books, GST and financial reporting." }
];
const certs = [
  "Accounting Software Training — Tally Prime, QuickBooks, Sage 50",
  "MS Office Suite Proficiency — Excel, Word, PowerPoint, Outlook",
  "Cloud-Based Accounting Tools & ERP Systems",
  "Administrative Workflow & Records Management"
];
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "education", className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Education & Training", title: "Academic foundation and continuous learning." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.3fr_1fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: education.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-smooth", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: e.degree }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-accent", children: e.year })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: e.school }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: e.note })
        ] })
      ] }, e.degree)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-gradient-hero text-primary-foreground shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: "Certifications & Training" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: certs.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm border-b border-primary-foreground/10 pb-3 last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-90", children: c })
        ] }, c)) })
      ] })
    ] })
  ] }) });
}
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
  { name: "Cloud Accounting", level: 85 }
];
const soft = ["Communication", "Attention to Detail", "Multitasking", "Critical Thinking", "Adaptability", "Teamwork", "Problem Solving", "Organization"];
const languages = [
  { lang: "Malayalam", level: "Native" },
  { lang: "English", level: "Full Proficiency" },
  { lang: "Hindi", level: "Working" },
  { lang: "Tamil", level: "Working" }
];
function Tools() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Software & Tools", title: "The toolkit behind clean books and tidy operations." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 p-6 rounded-2xl bg-card border border-border shadow-card-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-5", children: "Software Proficiency" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              t.level,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-hero animate-grow-bar", style: { width: `${t.level}%` } }) })
        ] }, t.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border shadow-card-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-4", children: "Soft Skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: soft.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-3 py-1.5 rounded-full bg-accent-soft text-accent-foreground font-medium", children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border shadow-card-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-4", children: "Languages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm", children: languages.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-border pb-2 last:border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: l.lang }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: l.level })
          ] }, l.lang)) })
        ] })
      ] })
    ] })
  ] }) });
}
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function Contact() {
  const [form, setForm] = reactExports.useState({ name: "", email: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}

— ${form.name}
${form.email}`);
    window.location.href = `mailto:harikrishna.k7899@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client...");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Get in Touch", title: "Let's bring order to your operations.", description: "Open to administrative, office management, and accounting support roles." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.2fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
        { icon: Mail, label: "Email", value: "harikrishna.k7899@gmail.com", href: "mailto:harikrishna.k7899@gmail.com" },
        { icon: Phone, label: "Phone", value: "+91 98461 48011", href: "tel:+919846148011" },
        { icon: MapPin, label: "Location", value: "Malappuram, Kerala, India" },
        { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/" }
      ].map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href,
          target: href?.startsWith("http") ? "_blank" : void 0,
          rel: "noreferrer",
          className: "flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: value })
            ] })
          ]
        },
        label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "p-7 rounded-2xl bg-card border border-border shadow-elegant space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground mb-1.5 block", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, value: form.name, onChange: (e) => setForm({ ...form, name: e.target.value }), placeholder: "Your name" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground mb-1.5 block", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "email", value: form.email, onChange: (e) => setForm({ ...form, email: e.target.value }), placeholder: "you@company.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground mb-1.5 block", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { required: true, rows: 6, value: form.message, onChange: (e) => setForm({ ...form, message: e.target.value }), placeholder: "Tell me about the role or project..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", size: "lg", className: "w-full bg-gradient-hero hover:opacity-90", children: [
          "Send Message",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 ml-2" })
        ] })
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-primary text-primary-foreground py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold mb-2", children: "Harikrishna K" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-80", children: "Administrative & Accounting Specialist" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 md:justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:harikrishna.k7899@gmail.com", className: "h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919846148011", className: "h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/", target: "_blank", rel: "noreferrer", className: "h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", children: [
        "Back to Top ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-4 w-4 ml-2" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-primary-foreground/10 text-xs opacity-70 text-center", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Harikrishna K. Crafted with care for clarity and precision."
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
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
