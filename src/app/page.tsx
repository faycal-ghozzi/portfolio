"use client";

import { HeroSection }          from "@/components/sections/hero";
import { AboutSection }         from "@/components/sections/about";
import { SkillsSection }        from "@/components/sections/skills";
import { ProjectsSection }      from "@/components/sections/projects";
import { ExperienceSection }    from "@/components/sections/experience";
import { EducationSection }     from "@/components/sections/education";
import { CertificationsSection} from "@/components/sections/certifications";
import { ContactSection }       from "@/components/sections/contact";
import { Footer }               from "@/components/sections/footer";

export default function Page() {
  return (
    <>
      {/* Animated background blobs */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          className="pg-blob"
          style={{
            width: "520px",
            height: "520px",
            background: "var(--pg-primary)",
            top: "-150px",
            right: "-100px",
            animationDelay: "0s",
          }}
        />
        <div
          className="pg-blob"
          style={{
            width: "420px",
            height: "420px",
            background: "var(--pg-teal)",
            bottom: "15%",
            left: "-100px",
            animationDelay: "-4s",
          }}
        />
        <div
          className="pg-blob"
          style={{
            width: "360px",
            height: "360px",
            background: "var(--pg-violet)",
            top: "55%",
            right: "5%",
            animationDelay: "-8s",
          }}
        />
      </div>

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
