import { createContext, useContext, useState, ReactNode } from "react";
import { en } from "./en";
import { fil } from "./fil";
import type { Translations } from "./en";

export type Lang = "en" | "fil";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "fil" : "en"));
  const t = lang === "en" ? en : fil;

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
