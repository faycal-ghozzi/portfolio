"use client";

import { useLang } from "@/contexts/lang-context";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

export function EducationSection() {
  const { DATA } = useLang();
  const s = DATA.sections;

  return (
    <section
      id="education"
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
            ◦ {s.eduBadge}
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
            {s.eduTitle}
          </h2>
          <p style={{ color: "var(--pg-text2)", maxWidth: "480px", marginBottom: "52px", fontSize: "16px" }}>
            {s.eduSub}
          </p>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {DATA.education.map((edu, i) => (
            <Reveal key={edu.school} delay={`${i * 0.1}s`}>
              <div
                style={{
                  background: "var(--pg-surface)",
                  border: "1.5px solid var(--pg-border)",
                  borderRadius: "20px",
                  padding: "28px 32px",
                  display: "flex",
                  gap: "24px",
                  alignItems: "center",
                  transition: "all 0.3s var(--pg-ease)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateX(6px)";
                  el.style.boxShadow = "var(--pg-shadow)";
                  el.style.borderColor = "var(--pg-violet)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "var(--pg-border)";
                }}
              >
                {edu.logoUrl && (
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      overflow: "hidden",
                      background: "var(--pg-surface2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: "1px solid var(--pg-border)",
                    }}
                  >
                    <Image
                      src={edu.logoUrl}
                      alt={edu.school}
                      width={48}
                      height={48}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px", flexWrap: "wrap", gap: "8px" }}>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--pg-violet)",
                      }}
                    >
                      {edu.href ? (
                        <a href={edu.href} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                          {edu.school}
                        </a>
                      ) : (
                        edu.school
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--pg-text3)",
                        background: "var(--pg-surface2)",
                        padding: "4px 12px",
                        borderRadius: "100px",
                      }}
                    >
                      {edu.start} - {edu.end}
                    </div>
                  </div>
                  <div
                    className="font-display"
                    style={{ fontWeight: 900, fontSize: "18px", letterSpacing: "-0.3px" }}
                  >
                    {edu.degree}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
