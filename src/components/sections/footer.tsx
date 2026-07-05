"use client";

import { useLang } from "@/contexts/lang-context";

export function Footer() {
  const { DATA } = useLang();
  const s = DATA.sections;

  return (
    <footer
      style={{
        padding: "36px 40px",
        borderTop: "1px solid var(--pg-border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "13px",
        color: "var(--pg-text2)",
        position: "relative",
        zIndex: 1,
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        © 2026 Fayçal Ghozzi · Made with{" "}
        <span className="pg-heartbeat" style={{ color: "var(--pg-primary)" }}>❤️</span>
        {" "}in Strasbourg
      </div>
      {/* <div>
        <a
          href="https://github.com/faycal-ghozzi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--pg-primary)",
            textDecoration: "none",
            fontWeight: 700,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.8"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
        >
          {s.footerBuilt}
        </a>
      </div> */}
    </footer>
  );
}
