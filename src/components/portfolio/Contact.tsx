import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("harikrishna.k7899@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const contactDetails = [
    { 
      icon: Mail, 
      label: "Email Address", 
      value: "harikrishna.k7899@gmail.com", 
      href: "mailto:harikrishna.k7899@gmail.com",
      action: {
        label: "Copy Email",
        onClick: (e: React.MouseEvent) => {
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
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative corporate grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-accent-soft/20 blur-3xl -z-10 animate-pulse" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <SectionHeader 
            eyebrow="Get in Touch" 
            title="Let's bring administrative order and financial control to your team." 
            description="Open to permanent corporate administrative, office management, and accounting support roles." 
          />
        </div>
        
        {/* Centered 2x2 Grid of Premium Contact Details */}
        <div className="grid sm:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto text-left">
          {contactDetails.map((detail) => {
            const Icon = detail.iconElement || detail.icon;
            const CardContent = (
              <div className="flex items-center gap-4.5 p-5.5 rounded-2xl bg-card border border-border/80 shadow-card-soft hover:shadow-elegant hover:border-primary/30 transition-smooth h-full">
                <div className="h-11 w-11 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div className="flex-grow">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{detail.label}</div>
                  <div className="text-sm font-bold text-foreground mt-0.5">{detail.value}</div>
                </div>
                {detail.action && (
                  <button 
                    onClick={detail.action.onClick}
                    className="p-2 rounded-lg bg-secondary text-primary hover:bg-accent hover:text-accent-foreground transition-smooth shrink-0 border border-border/40"
                    title={detail.action.label}
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                )}
              </div>
            );

            return detail.href ? (
              <a 
                key={detail.label} 
                href={detail.href} 
                target={detail.href.startsWith("http") ? "_blank" : undefined} 
                rel="noreferrer"
                className="block group"
              >
                {CardContent}
              </a>
            ) : (
              <div key={detail.label} className="block">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Dummy icon constant just to satisfy indexing type safety
const OperationalBaseIcon = MapPin;