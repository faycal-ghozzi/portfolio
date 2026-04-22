"use client";

import { useLang } from "@/contexts/lang-context";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

export function AboutSection() {
  const { DATA } = useLang();
  const s = DATA.sections;

  const chips = [
    s.aboutChip1, s.aboutChip2, s.aboutChip3, s.aboutChip4, s.aboutChip5,
  ];
  const chipEmojis = ["🐱", "🌿", "🏦", "🤖", "⚡"];

  return (
    <section
      id="about"
      className="section-tinted"
      style={{ padding: "100px 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left — photo in morphing blob */}
          <Reveal>
            <div style={{ position: "relative", width: "300px" }}>
              {/* Outer glow ring */}
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
                  background: "linear-gradient(135deg, var(--pg-primary), var(--pg-violet))",
                  padding: "4px",
                  boxShadow: "var(--pg-glow)",
                  animation: "morphBlob 6s ease-in-out infinite",
                }}
              >
                {/* Photo container — clips to the morphing shape */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/me.png"
                    alt="Fayçal Ghozzi"
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                  {/* Subtle warm tint at bottom */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(255,107,53,0.12) 0%, transparent 50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              {/* Available badge */}
              <div
                className="badge-float"
                style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "-10px",
                  background: "var(--pg-surface)",
                  border: "2px solid var(--pg-border)",
                  borderRadius: "16px",
                  padding: "12px 18px",
                  boxShadow: "var(--pg-shadow-lg)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: 700,
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#22c55e",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 3px rgba(34,197,94,0.25)",
                    display: "inline-block",
                    flexShrink: 0,
                    animation: "pgPulse 1.5s ease-in-out infinite",
                  }}
                />
                {s.aboutAvailable}
              </div>
            </div>
          </Reveal>

          {/* Right — text */}
          <Reveal delay="0.1s">
            {/* Badge */}
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
              ◦ {s.about}
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
              {s.aboutTitle}
            </h2>

            <div style={{ marginBottom: "24px" }}>
              {([s.aboutP1, s.aboutP2, s.aboutP3, s.aboutP4] as string[]).map((p, i) => (
                <p
                  key={i}
                  style={{
                    color: "var(--pg-text2)",
                    lineHeight: 1.9,
                    marginBottom: "18px",
                    fontSize: "15px",
                  }}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>

            {/* Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {chips.map((chip, i) => (
                <span
                  key={chip}
                  style={{
                    background: "var(--pg-surface)",
                    border: "1.5px solid var(--pg-border)",
                    borderRadius: "100px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "default",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-primary)";
                    (e.currentTarget as HTMLElement).style.color = "var(--pg-primary)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-border)";
                    (e.currentTarget as HTMLElement).style.color = "";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  {chipEmojis[i]} {chip}
                </span>
              ))}
            </div>

            {/* Resume button */}
            <div style={{ marginTop: "32px" }}>
              <a
                href="/CV_Faycal_GHOZZI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--pg-surface)",
                  color: "var(--pg-text)",
                  padding: "15px 30px",
                  borderRadius: "100px",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "2px solid var(--pg-border)",
                  transition: "all 0.25s var(--pg-ease)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-primary)";
                  (e.currentTarget as HTMLElement).style.color = "var(--pg-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--pg-text)";
                }}
              >
                {s.aboutResume}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
