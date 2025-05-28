import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { CertificatesSection } from "@/components/certificates-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
    </main>
  );
}
