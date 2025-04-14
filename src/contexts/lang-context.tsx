"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import enData from "@/data/resume/en.json";
import frData from "@/data/resume/fr.json";

type Lang = "en" | "fr";

const LANG_DATA = {
  en: enData,
  fr: frData,
};

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  DATA: typeof enData;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const DATA = LANG_DATA[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, DATA }}>
      {children}
    </LangContext.Provider>
  );
};

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LangProvider");
  return context;
}
