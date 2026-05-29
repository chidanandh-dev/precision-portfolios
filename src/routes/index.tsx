import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { Tools } from "@/components/portfolio/Tools";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harikrishna K — Administrative & Accounting Specialist" },
      { name: "description", content: "Portfolio of Harikrishna K — Administrative Assistant and Accounting Specialist delivering efficient office and financial support with accuracy and professionalism." },
      { property: "og:title", content: "Harikrishna K — Administrative & Accounting Specialist" },
      { property: "og:description", content: "Dedicated Administrative Assistant with expertise in bookkeeping, general ledger, and office administration." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Education />
        <Tools />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
