"use client";

import { useLang } from "@/contexts/lang-context";
import { Reveal } from "@/components/reveal";

export function SkillsSection() {
  const { DATA } = useLang();
  const s = DATA.sections;

  const accentColors = {
    "sk-orange": "var(--pg-primary)",
    "sk-teal":   "var(--pg-teal)",
    "sk-violet": "var(--pg-violet)",
  } as Record<string, string>;

  const accentBgs = {
    "sk-orange": "var(--pg-primary-bg)",
    "sk-teal":   "var(--pg-teal-bg)",
    "sk-violet": "var(--pg-violet-bg)",
  } as Record<string, string>;

  return (
    <section id="skills" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
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
            ◦ {s.skillsBadge}
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
            {s.skillsTitle}
          </h2>
          <p
            style={{
              color: "var(--pg-text2)",
              maxWidth: "480px",
              marginBottom: "52px",
              fontSize: "16px",
            }}
          >
            {s.skillsSub}
          </p>
        </Reveal>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
          className="skills-grid"
        >
          {DATA.skillCategories.map((cat, i) => {
            const color = accentColors[cat.colorClass] ?? "var(--pg-primary)";
            const bg = accentBgs[cat.colorClass] ?? "var(--pg-primary-bg)";
            return (
              <Reveal key={cat.label} delay={`${(i + 1) * 0.1}s`}>
                <div
                  className={cat.colorClass}
                  style={{
                    background: "var(--pg-surface)",
                    border: "1.5px solid var(--pg-border)",
                    borderRadius: "24px",
                    padding: "32px",
                    transition: "all 0.3s var(--pg-ease)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = "var(--pg-shadow-lg)";
                    el.style.borderColor = "transparent";
                    el.style.background = `linear-gradient(135deg, var(--sk-c1), var(--sk-c2))`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "none";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "var(--pg-border)";
                    el.style.background = "var(--pg-surface)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      width: "54px",
                      height: "54px",
                      borderRadius: "16px",
                      background: "var(--pg-surface2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3
                    className="font-display"
                    style={{ fontWeight: 800, marginBottom: "16px", fontSize: "17px" }}
                  >
                    {cat.label}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          padding: "7px 14px",
                          borderRadius: "100px",
                          background: "var(--pg-surface2)",
                          color: "var(--pg-text2)",
                          border: "1.5px solid var(--pg-border)",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = bg;
                          (e.currentTarget as HTMLElement).style.color = color;
                          (e.currentTarget as HTMLElement).style.borderColor = color;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "var(--pg-surface2)";
                          (e.currentTarget as HTMLElement).style.color = "var(--pg-text2)";
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-border)";
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
