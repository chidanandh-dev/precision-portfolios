import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:harikrishna.k7899@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client...");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Get in Touch" title="Let's bring order to your operations." description="Open to administrative, office management, and accounting support roles." />
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "harikrishna.k7899@gmail.com", href: "mailto:harikrishna.k7899@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 98461 48011", href: "tel:+919846148011" },
              { icon: MapPin, label: "Location", value: "Malappuram, Kerala, India" },
              { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="text-sm font-semibold">{value}</div>
                </div>
              </a>
            ))}
          </div>
          <form onSubmit={submit} className="p-7 rounded-2xl bg-card border border-border shadow-elegant space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Name</label>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
                <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
              <Textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the role or project..." />
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-hero hover:opacity-90">
              Send Message
              <Send className="h-4 w-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}