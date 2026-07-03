"use client";

import { useState, useRef } from "react";
import { useLang } from "@/contexts/lang-context";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  const { DATA } = useLang();
  const s = DATA.sections;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const nameRef    = useRef<HTMLInputElement>(null);
  const emailRef   = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const msgRef     = useRef<HTMLTextAreaElement>(null);

  const handleSend = async () => {
    const name    = nameRef.current?.value ?? "";
    const email   = emailRef.current?.value ?? "";
    const subject = subjectRef.current?.value ?? "";
    const message = msgRef.current?.value ?? "";

    if (!name || !email || !message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (subjectRef.current) subjectRef.current.value = "";
      if (msgRef.current) msgRef.current.value = "";
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const sent = status === "sent";

  const contactLinks = [
    { icon: "✉️", label: DATA.contact.email, href: `mailto:${DATA.contact.email}` },
    { icon: "💻", label: "github.com/faycal-ghozzi", href: DATA.contact.social.GitHub.url },
    { icon: "🔗", label: "linkedin.com/in/faycal-ghozzi", href: DATA.contact.social.LinkedIn.url },
    { icon: "𝕏",  label: "@fayghz", href: DATA.contact.social.X.url },
  ];

  const inputStyle = {
    background: "var(--pg-surface2)",
    border: "1.5px solid var(--pg-border)",
    borderRadius: "12px",
    padding: "13px 16px",
    fontFamily: "var(--font-sans)",
    fontSize: "14px",
    color: "var(--pg-text)",
    outline: "none",
    resize: "none" as const,
    transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
    width: "100%",
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--pg-primary)";
    e.currentTarget.style.boxShadow = "0 0 0 4px rgba(255,107,53,0.1)";
    e.currentTarget.style.background = "var(--pg-surface)";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--pg-border)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "var(--pg-surface2)";
  };

  return (
    <section
      id="contact"
      className="section-tinted"
      style={{ padding: "100px 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <Reveal>
          <div
            style={{
              background: "var(--pg-surface)",
              borderRadius: "32px",
              padding: "64px",
              border: "1.5px solid var(--pg-border)",
              boxShadow: "var(--pg-shadow-lg)",
              position: "relative",
              overflow: "hidden",
            }}
            className="contact-card"
          >
            {/* Decorative glow */}
            <div
              style={{
                position: "absolute",
                top: "-30%",
                right: "-15%",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, var(--pg-primary-bg), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                position: "relative",
                zIndex: 1,
              }}
              className="contact-grid"
            >
              {/* Left */}
              <div>
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
                  ◦ {s.contact}
                </div>

                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    fontWeight: 900,
                    letterSpacing: "-1px",
                    lineHeight: 1.15,
                    marginBottom: "14px",
                  }}
                  dangerouslySetInnerHTML={{ __html: s.contactTitle }}
                />

                <p style={{ color: "var(--pg-text2)", lineHeight: 1.85, marginBottom: "32px", fontSize: "15px" }}>
                  {s.contactSub}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {contactLinks.map(({ icon, label, href }) => (
                    <a
                      key={href}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "16px 20px",
                        background: "var(--pg-surface2)",
                        borderRadius: "14px",
                        border: "1.5px solid var(--pg-border)",
                        textDecoration: "none",
                        color: "var(--pg-text)",
                        fontWeight: 600,
                        fontSize: "14px",
                        transition: "all 0.25s var(--pg-ease)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "translateX(6px)";
                        el.style.borderColor = "var(--pg-primary)";
                        el.style.background = "var(--pg-primary-bg)";
                        el.style.color = "var(--pg-primary)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "none";
                        el.style.borderColor = "var(--pg-border)";
                        el.style.background = "var(--pg-surface2)";
                        el.style.color = "var(--pg-text)";
                      }}
                    >
                      <span style={{ fontSize: "16px" }}>{icon}</span>
                      <span style={{ flex: 1 }}>{label}</span>
                      <span style={{ color: "var(--pg-text3)", transition: "transform 0.2s" }}>→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right - form */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="form-row">
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pg-text2)" }}>
                      {s.contactNameLabel}
                    </label>
                    <input ref={nameRef} type="text" placeholder={s.contactNamePh} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pg-text2)" }}>
                      {s.contactEmailLabel}
                    </label>
                    <input ref={emailRef} type="email" placeholder="you@example.com" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pg-text2)" }}>
                    {s.contactSubjectLabel}
                  </label>
                  <input ref={subjectRef} type="text" placeholder={s.contactSubjectPh} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pg-text2)" }}>
                    {s.contactMessageLabel}
                  </label>
                  <textarea
                    ref={msgRef}
                    placeholder={s.contactMessagePh}
                    style={{ ...inputStyle, minHeight: "120px" }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>

                <button
                  onClick={handleSend}
                  disabled={status === "sending"}
                  style={{
                    background: sent
                      ? "linear-gradient(135deg, #22c55e, #16a34a)"
                      : status === "error"
                      ? "linear-gradient(135deg, #ef4444, #dc2626)"
                      : "linear-gradient(135deg, var(--pg-primary), #ff4500)",
                    color: "white",
                    padding: "15px 30px",
                    borderRadius: "100px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    fontWeight: 800,
                    border: "none",
                    cursor: status === "sending" ? "default" : "pointer",
                    opacity: status === "sending" ? 0.7 : 1,
                    alignSelf: "flex-start",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: sent
                      ? "0 8px 24px rgba(34,197,94,0.35)"
                      : status === "error"
                      ? "0 8px 24px rgba(239,68,68,0.35)"
                      : "0 8px 24px rgba(255,107,53,0.35)",
                    transition: "all 0.25s var(--pg-ease)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = sent
                      ? "0 14px 36px rgba(34,197,94,0.5)"
                      : status === "error"
                      ? "0 14px 36px rgba(239,68,68,0.5)"
                      : "0 14px 36px rgba(255,107,53,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "none";
                    (e.currentTarget as HTMLElement).style.boxShadow = sent
                      ? "0 8px 24px rgba(34,197,94,0.35)"
                      : status === "error"
                      ? "0 8px 24px rgba(239,68,68,0.35)"
                      : "0 8px 24px rgba(255,107,53,0.35)";
                  }}
                >
                  {status === "sending"
                    ? "..."
                    : status === "error"
                    ? "Error - try again"
                    : sent
                    ? s.contactSent
                    : s.contactSend}
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-card { padding: 36px 24px !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
