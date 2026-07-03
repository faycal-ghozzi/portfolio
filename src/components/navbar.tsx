"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLang } from "@/contexts/lang-context";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { DATA, lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 60);
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setProgress(Math.min(pct, 1));
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const s = DATA.sections;

  return (
    <>
      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          zIndex: 9999,
          background: "linear-gradient(to right, var(--pg-primary), var(--pg-teal), var(--pg-violet))",
          transformOrigin: "left",
          transform: `scaleX(${progress})`,
          transition: "transform 0.1s linear",
          pointerEvents: "none",
        }}
      />

      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          transition: "background 0.4s, box-shadow 0.4s",
          background: scrolled
            ? theme === "dark"
              ? "rgba(19,17,26,0.88)"
              : "rgba(250,249,246,0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 0 var(--pg-border)" : "none",
        }}
      >
        {/* Logo */}
        <Link
          href="#home"
          style={{
            fontFamily: "var(--font-display), Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "22px",
            color: "var(--pg-primary)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Image src="/logo.png" alt="logo" width={28} height={28} className="pg-logo-pulse" style={{ display: "block" }} />
        </Link>

        {/* Nav links - hidden on mobile */}
        <ul
          className="hidden sm:flex"
          style={{ gap: "4px", listStyle: "none", margin: 0, padding: 0 }}
        >
          {[
            { href: "#about",       label: s.about },
            { href: "#skills",      label: s.skillsBadge },
            { href: "#projects",    label: s.projectsLabel },
            { href: "#experience",  label: s.expBadge },
            { href: "#contact",     label: s.hireMe, cta: true },
          ].map(({ href, label, cta }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  color: cta ? "white" : "var(--pg-text2)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "7px 14px",
                  borderRadius: "100px",
                  transition: "all 0.2s",
                  background: cta ? "var(--pg-primary)" : "transparent",
                  boxShadow: cta ? "0 4px 14px rgba(255,107,53,0.3)" : "none",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  if (!cta) {
                    (e.currentTarget as HTMLElement).style.color = "var(--pg-text)";
                    (e.currentTarget as HTMLElement).style.background = "var(--pg-surface2)";
                  } else {
                    (e.currentTarget as HTMLElement).style.opacity = "0.9";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!cta) {
                    (e.currentTarget as HTMLElement).style.color = "var(--pg-text2)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  } else {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Lang switcher */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              background: "var(--pg-surface)",
              border: "1.5px solid var(--pg-border)",
              borderRadius: "100px",
              padding: "4px",
            }}
          >
            {(["en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: "5px 12px",
                  borderRadius: "100px",
                  border: "none",
                  background: lang === l ? "var(--pg-primary)" : "transparent",
                  color: lang === l ? "white" : "var(--pg-text2)",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 700,
                  transition: "all 0.2s",
                  boxShadow: lang === l ? "0 2px 8px rgba(255,107,53,0.3)" : "none",
                }}
              >
                {l === "en" ? "🇬🇧 EN" : "🇫🇷 FR"}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "2px solid var(--pg-border)",
              background: "var(--pg-surface)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "rotate(20deg) scale(1.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--pg-border)";
            }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </>
  );
}
