"use client";

import { useLang } from "@/contexts/lang-context";
import { CountUp } from "@/components/count-up";
import Link from "next/link";
import { GiGuitar, GiSteeringWheel, GiRaceCar } from "react-icons/gi";
import { FaPlane, FaGamepad, FaWrench } from "react-icons/fa";
import type { IconType } from "react-icons";

const PILL_ICONS: { Icon: IconType; color: string }[] = [
  { Icon: GiGuitar,        color: "#f59e0b" },
  { Icon: GiSteeringWheel, color: "#ef4444" },
  { Icon: FaPlane,         color: "#38bdf8" },
  { Icon: FaGamepad,       color: "#a78bfa" },
  { Icon: FaWrench,        color: "#94a3b8" },
  { Icon: GiRaceCar,       color: "#f97316" },
];

export function HeroSection() {
  const { DATA } = useLang();
  const s = DATA.sections;

  const pillDelays =    ["0s", "-2s", "-1s", "-3s", "-0.5s", "-1.5s"];
  const pillDurations = ["5s", "6s", "4.5s", "5.5s", "7s",   "5.2s"];
  const pillMargins =   ["0", "20px", "0", "16px", "0",      "24px"];

  return (
    <div
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "70px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 40px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "60px",
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left */}
        <div>
          {/* Eyebrow */}
          <div
            className="pg-fade-up"
            style={{
              animationDelay: "0.1s",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--pg-primary-bg)",
              color: "var(--pg-primary)",
              fontSize: "13px",
              fontWeight: 700,
              padding: "8px 18px",
              borderRadius: "100px",
              marginBottom: "28px",
            }}
          >
            <span
              className="pg-pulse-dot"
              style={{
                width: "7px",
                height: "7px",
                background: "var(--pg-primary)",
                borderRadius: "50%",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {s.heroEyebrow}
          </div>

          {/* Heading */}
          <h1
            className="pg-fade-up font-display"
            style={{
              animationDelay: "0.25s",
              fontSize: "clamp(44px, 6.5vw, 82px)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginBottom: "24px",
            }}
          >
            Hey!{" "}
            <span className="wave-emoji">👋</span>
            <br />
            {s.heroH1a}{" "}
            <span
              style={{
                position: "relative",
                display: "inline-block",
                color: "var(--pg-primary)",
              }}
            >
              {s.heroH1b}
              <span
                style={{
                  content: "''",
                  position: "absolute",
                  left: 0,
                  bottom: "6px",
                  right: 0,
                  height: "10px",
                  background: "var(--pg-yellow)",
                  zIndex: -1,
                  borderRadius: "4px",
                  transform: "skewX(-3deg)",
                  opacity: 0.45,
                  display: "block",
                }}
              />
            </span>
            <br />
            {s.heroH1c}
          </h1>

          {/* Subtitle */}
          <p
            className="pg-fade-up"
            style={{
              animationDelay: "0.4s",
              fontSize: "17px",
              color: "var(--pg-text2)",
              maxWidth: "520px",
              lineHeight: 1.85,
              marginBottom: "40px",
            }}
            dangerouslySetInnerHTML={{ __html: DATA.description }}
          />

          {/* CTA buttons */}
          <div
            className="pg-fade-up"
            style={{
              animationDelay: "0.55s",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#projects"
              style={{
                background: "var(--pg-primary)",
                color: "white",
                padding: "15px 30px",
                borderRadius: "100px",
                fontWeight: 800,
                fontSize: "15px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 8px 24px rgba(255,107,53,0.35)",
                transition: "all 0.25s var(--pg-ease)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.02)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 32px rgba(255,107,53,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(255,107,53,0.35)";
              }}
            >
              {s.heroCta1}
            </a>
            <a
              href="#contact"
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
              {s.heroCta2}
            </a>
          </div>

          {/* Stats */}
          <div
            className="pg-fade-up"
            style={{
              animationDelay: "0.7s",
              display: "flex",
              gap: "32px",
              marginTop: "52px",
              paddingTop: "36px",
              borderTop: "1px solid var(--pg-border)",
              flexWrap: "wrap",
            }}
          >
            {DATA.heroStats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display"
                  style={{
                    fontSize: "34px",
                    fontWeight: 900,
                    color: "var(--pg-primary)",
                    lineHeight: 1,
                  }}
                >
                  <CountUp target={stat.count} suffix={stat.suffix} />
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--pg-text2)",
                    marginTop: "4px",
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - floating pills */}
        <div
          className="pg-fade-up hidden lg:flex"
          style={{
            animationDelay: "0.8s",
            flexDirection: "column",
            gap: "14px",
            alignItems: "flex-start",
          }}
        >
          {DATA.heroPills.map((pill, i) => (
            <div
              key={pill}
              style={{
                background: "var(--pg-surface)",
                border: "1.5px solid var(--pg-border)",
                borderRadius: "100px",
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "var(--pg-shadow)",
                transition: "all 0.3s var(--pg-ease)",
                whiteSpace: "nowrap",
                animation: `pillFloat ${pillDurations[i]} linear infinite`,
                animationDelay: pillDelays[i],
                marginLeft: pillMargins[i],
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateX(-8px) scale(1.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-primary)";
                (e.currentTarget as HTMLElement).style.color = "var(--pg-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-border)";
                (e.currentTarget as HTMLElement).style.color = "";
              }}
            >
              {(() => {
                const entry = PILL_ICONS[i];
                if (!entry) return null;
                const Icon = entry.Icon;
                return <Icon size={18} color={entry.color} style={{ flexShrink: 0 }} />;
              })()}
              {pill}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
