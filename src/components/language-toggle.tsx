"use client";

import { useLang } from "@/contexts/lang-context";

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
      className="px-2 py-1 text-sm border rounded-md hover:bg-muted"
    >
      {lang === "en" ? "FR" : "EN"}
    </button>
  );
}
