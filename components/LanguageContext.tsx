"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Les codes de langue supportés
export type LanguageCode = "fr" | "en" | "ln" | "sw" | "zh" | "ar";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<LanguageCode>("fr");

  // Lire la langue depuis localStorage au montage
  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored && ["fr", "en", "ln", "sw", "zh", "ar"].includes(stored)) {
      setLanguageState(stored as LanguageCode);
    }
  }, []);

  // Sauvegarder la langue à chaque changement
  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
