import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { FAQSection } from "@/sections/FAQ";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main>
        <HeroSection />
        <ProjectsSection />
        <TapeSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
}
