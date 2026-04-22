"use client";

import { useLang } from "@/contexts/lang-context";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

export function CertificationsSection() {
  const { DATA } = useLang();
  const s = DATA.sections;

  return (
    <section id="certifications" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
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
            ◦ {s.certBadge}
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
            {s.certTitle}
          </h2>
          <p style={{ color: "var(--pg-text2)", maxWidth: "480px", marginBottom: "52px", fontSize: "16px" }}>
            {s.certSub}
          </p>
        </Reveal>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}
          className="certs-grid"
        >
          {DATA.certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={`${(i % 2) * 0.1}s`}>
              <div
                style={{
                  background: "var(--pg-surface)",
                  border: "1.5px solid var(--pg-border)",
                  borderRadius: "20px",
                  padding: "28px",
                  display: "flex",
                  gap: "20px",
                  transition: "all 0.3s var(--pg-ease)",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "var(--pg-shadow)";
                  el.style.borderColor = "var(--pg-primary)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "var(--pg-border)";
                }}
              >
                {cert.image && (
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
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
                      src={cert.image}
                      alt={cert.title}
                      width={40}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}
                <div style={{ flex: 1 }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", gap: "8px" }}
                  >
                    <h3
                      className="font-display"
                      style={{ fontWeight: 800, fontSize: "15px", letterSpacing: "-0.2px", lineHeight: 1.3 }}
                    >
                      {cert.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--pg-text3)",
                        background: "var(--pg-surface2)",
                        padding: "3px 10px",
                        borderRadius: "100px",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {cert.date}
                    </span>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--pg-text2)", lineHeight: 1.7 }}>
                    {cert.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
