"use client";

import Image from "next/image";
import { useLang } from "@/contexts/lang-context";
import { Reveal } from "@/components/reveal";

const cardColors = [
  { pc1: "#fff2ed", pc2: "#ffe8de", darkBg: "rgba(255,107,53,0.06)" },
  { pc1: "#e6faf8", pc2: "#d0f5f1", darkBg: "rgba(45,212,191,0.08)" },
  { pc1: "#f0eafb", pc2: "#e5d8f7", darkBg: "rgba(167,139,250,0.08)" },
  { pc1: "#fff2ed", pc2: "#ffe8de", darkBg: "rgba(255,107,53,0.06)" },
  { pc1: "#e6faf8", pc2: "#d0f5f1", darkBg: "rgba(45,212,191,0.08)" },
];

export function ProjectsSection() {
  const { DATA } = useLang();
  const s = DATA.sections;

  const [main, ...rest] = DATA.projects;

  return (
    <section
      id="projects"
      className="section-tinted"
      style={{ padding: "100px 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--pg-teal)",
              background: "var(--pg-teal-bg)",
              padding: "6px 16px",
              borderRadius: "100px",
              marginBottom: "18px",
            }}
          >
            ◦ {s.projectsLabel}
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 900,
              letterSpacing: "-1px",
              lineHeight: 1.1,
              marginBottom: "14px",
            }}
          >
            {s.projectsTitle}
          </h2>
          <p style={{ color: "var(--pg-text2)", maxWidth: "480px", marginBottom: "52px", fontSize: "16px" }}>
            {s.projectsDescription}
          </p>
        </Reveal>

        {/* Featured project - full width */}
        <Reveal className="projects-main">
          <ProjectCard project={main} colorIndex={0} />
        </Reveal>

        {/* Rest - 2 column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "22px",
            marginTop: "22px",
          }}
          className="projects-grid"
        >
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={`${(i % 2) * 0.1}s`}>
              <ProjectCard project={project} colorIndex={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({
  project,
  colorIndex,
}: {
  project: (typeof import("@/data/resume/en.json"))["projects"][0];
  colorIndex: number;
}) {
  const colors = cardColors[colorIndex % cardColors.length];

  return (
    <div
      style={{
        background: "var(--pg-surface)",
        border: "1.5px solid var(--pg-border)",
        borderRadius: "24px",
        padding: "36px",
        transition: "all 0.35s var(--pg-ease)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-8px)";
        el.style.boxShadow = "var(--pg-shadow-lg)";
        el.style.borderColor = "transparent";
        el.style.background = `linear-gradient(135deg, ${colors.pc1}, ${colors.pc2})`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "none";
        el.style.boxShadow = "none";
        el.style.borderColor = "var(--pg-border)";
        el.style.background = "var(--pg-surface)";
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "16px",
              background: "var(--pg-surface2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              flexShrink: 0,
              overflow: "hidden",
              padding: (project as any).logoUrl ? "6px" : "0",
            }}
          >
            {(project as any).logoUrl ? (
              <Image
                src={(project as any).logoUrl}
                alt={project.title}
                width={42}
                height={42}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            ) : (
              (project as any).icon ?? "💡"
            )}
          </div>
          {(project as any).badge && (
            <span
              style={{
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "100px",
                background: (project as any).badge === "Open Source"
                  ? "var(--pg-teal-bg)"
                  : "var(--pg-primary-bg)",
                color: (project as any).badge === "Open Source"
                  ? "var(--pg-teal)"
                  : "var(--pg-primary)",
                border: `1px solid ${(project as any).badge === "Open Source" ? "var(--pg-teal)" : "var(--pg-primary)"}`,
              }}
            >
              {(project as any).badge}
            </span>
          )}
        </div>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "var(--pg-surface2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              textDecoration: "none",
              color: "var(--pg-text2)",
              transition: "all 0.25s var(--pg-ease)",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--pg-primary)";
              (e.currentTarget as HTMLElement).style.color = "white";
              (e.currentTarget as HTMLElement).style.transform = "rotate(-45deg)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--pg-surface2)";
              (e.currentTarget as HTMLElement).style.color = "var(--pg-text2)";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            ↗
          </a>
        ) : null}
      </div>

      <h3
        className="font-display"
        style={{ fontWeight: 900, fontSize: "20px", marginBottom: "10px", letterSpacing: "-0.3px" }}
      >
        {project.title}
      </h3>
      <p style={{ color: "var(--pg-text2)", fontSize: "14px", lineHeight: 1.8, marginBottom: "22px" }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: project.links.length ? "16px" : 0 }}>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: "11px",
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: "100px",
              background: "var(--pg-surface2)",
              color: "var(--pg-text2)",
              letterSpacing: "0.04em",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.links.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "16px",
            paddingTop: "16px",
            borderTop: "1px solid var(--pg-border)",
          }}
        >
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--pg-text2)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--pg-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--pg-text2)";
              }}
            >
              🔗 {link.type}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
