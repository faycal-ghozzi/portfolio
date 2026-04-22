"use client";

import Image from "next/image";
import { useLang } from "@/contexts/lang-context";
import { Reveal } from "@/components/reveal";

const dotColors = [
  { border: "var(--pg-primary)", glow: "var(--pg-primary-bg)", text: "var(--pg-primary)", bullet: "var(--pg-primary)" },
  { border: "var(--pg-teal)",    glow: "var(--pg-teal-bg)",    text: "var(--pg-teal)",    bullet: "var(--pg-teal)" },
  { border: "var(--pg-violet)",  glow: "var(--pg-violet-bg)",  text: "var(--pg-violet)",  bullet: "var(--pg-violet)" },
  { border: "var(--pg-primary)", glow: "var(--pg-primary-bg)", text: "var(--pg-primary)", bullet: "var(--pg-primary)" },
];


export function ExperienceSection() {
  const { DATA } = useLang();
  const s = DATA.sections;

  return (
    <section id="experience" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
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
            ◦ {s.expBadge}
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
            {s.expTitle}
          </h2>
          <p style={{ color: "var(--pg-text2)", maxWidth: "480px", marginBottom: "52px", fontSize: "16px" }}>
            {s.expSub}
          </p>
        </Reveal>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "23px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, var(--pg-primary), var(--pg-teal), var(--pg-violet))",
            }}
          />

          {DATA.work.map((job, i) => {
            const colors = dotColors[i % dotColors.length];
            return (
              <Reveal key={job.company} delay={`${i * 0.1}s`}>
                <div
                  style={{
                    display: "flex",
                    gap: "32px",
                    paddingBottom: i < DATA.work.length - 1 ? "48px" : "0",
                    position: "relative",
                  }}
                >
                  {/* Dot */}
                  <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "var(--pg-surface)",
                        border: `3px solid ${colors.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        boxShadow: `0 0 0 6px ${colors.glow}`,
                        transition: "all 0.3s var(--pg-ease)",
                      }}
                    >
                      {job.logoUrl ? (
                        <Image
                          src={job.logoUrl}
                          alt={job.company}
                          width={36}
                          height={36}
                          style={{ objectFit: "contain", borderRadius: "50%" }}
                        />
                      ) : (
                        <span style={{ fontSize: "18px" }}>🏢</span>
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    style={{
                      background: "var(--pg-surface)",
                      border: "1.5px solid var(--pg-border)",
                      borderRadius: "20px",
                      padding: "28px 32px",
                      flex: 1,
                      transition: "all 0.3s var(--pg-ease)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateX(6px)";
                      el.style.boxShadow = "var(--pg-shadow)";
                      el.style.borderColor = colors.border;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "none";
                      el.style.boxShadow = "none";
                      el.style.borderColor = "var(--pg-border)";
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: colors.text,
                        }}
                      >
                        {job.href ? (
                          <a
                            href={job.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "inherit", textDecoration: "none" }}
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
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
                        {job.start} - {job.end ?? s.present}
                      </div>
                    </div>

                    <div
                      className="font-display"
                      style={{ fontWeight: 900, fontSize: "20px", marginBottom: "14px", letterSpacing: "-0.3px" }}
                    >
                      {job.title}
                    </div>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
                      {((job as any).bullets as string[] | undefined)?.map((b) => (
                        <li
                          key={b}
                          style={{ fontSize: "13px", color: "var(--pg-text2)", display: "flex", gap: "10px", alignItems: "baseline" }}
                        >
                          <span style={{ color: colors.bullet, fontSize: "12px", flexShrink: 0, fontWeight: 700 }}>→</span>
                          {b}
                        </li>
                      )) ?? (
                        <li style={{ fontSize: "13px", color: "var(--pg-text2)" }}>
                          {job.description}
                        </li>
                      )}
                    </ul>

                    {(job as any).stack && (
                      <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid var(--pg-border)", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {((job as any).stack as string).split(" · ").map((tech: string) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: "11px",
                              fontWeight: 700,
                              padding: "3px 10px",
                              borderRadius: "100px",
                              background: "var(--pg-surface2)",
                              color: colors.text,
                              letterSpacing: "0.04em",
                              opacity: 0.85,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
