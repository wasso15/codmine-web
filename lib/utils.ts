import { Article } from "@/types/Article";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Multilingual } from "@/types/Article";
import { LanguageCode } from "@/components/LanguageContext";
import { locales } from "@/components/locales";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortArticles(articles: Article[]) {
  // Dictionnaire des suffixes latins et leur valeur numérique
  const suffixValues: Record<string, number> = {
    bis: 1,
    ter: 2,
    quater: 3,
    quinquies: 4,
    sexies: 5,
    septies: 6,
    octies: 7,
    nonies: 8,
    decies: 9,
    undecies: 10,
    duodecies: 11,
    terdecies: 12,
    quaterdecies: 13,
    quindecies: 14,
    sexdecies: 15,
  };

  // Fonction pour extraire le numéro de l'article et le convertir en nombre
  const extractArticleNumber = (article: Article) => {
    const numberText = article.number.fr.replace("Article ", "").trim();

    // Séparer le numéro principal et le suffixe
    const parts = numberText.split(" ");
    const mainNumber = parseFloat(parts[0]);
    const suffix = parts[1]?.toLowerCase() || ""; // Convertir en minuscules pour la comparaison

    // Trouver la valeur du suffixe ou 0 si non reconnu
    const suffixValue = suffixValues[suffix] || 0;

    // Retourner une valeur numérique pour le tri (suffixe comme décimale)
    return mainNumber + suffixValue * 0.01; // Ex: "7 quater" → 7.03
  };

  // Trier les articles en fonction du numéro extrait
  return articles.sort((a: Article, b: Article) => {
    const numA = extractArticleNumber(a);
    const numB = extractArticleNumber(b);
    return numA - numB;
  });
}

export function getMultilingualText(
  multilingual: Multilingual | undefined,
  language: LanguageCode
): string {
  if (!multilingual) return "";
  return multilingual[language] || multilingual.fr || "";
}

interface LocaleStrings {
  [key: string]: string;
}

export function t(key: string, language: LanguageCode): string {
  const langStrings = locales[language] as LocaleStrings;
  const frStrings = locales.fr as LocaleStrings;
  return langStrings?.[key] || frStrings?.[key] || key;
}

// Exemple d'utilisation
