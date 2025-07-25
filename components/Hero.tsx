import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { getMultilingualText } from "@/lib/utils";
import type { Article } from "@/types/Article";

function Hero({ isRule = false }: { isRule?: boolean }) {
  const { language } = useLanguage();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<Article[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const inputRef = useRef(null);

  useEffect(() => {
    if (search.length < 2) {
      setSuggestions([]);
      return;
    }
    const timeout = setTimeout(() => {
      fetch(`/api/search-articles?query=${encodeURIComponent(search)}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data));
    }, 300);
    return () => clearTimeout(timeout);
  }, [search]);

  const handleSuggestionClick = (article: Article) => {
    setShowSuggestions(false);
    setSearch("");
    router.push(`/article?id=${article._id}`);
  };

  return (
    <section
      className="relative h-[400px] bg-cover bg-center rounded-3xl"
      style={{
        backgroundImage: isRule ? "url(/img/bg2.png)" : "url(/img/bg.png)",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center">
        <div className=" w-full flex justify-between items-center">
          <h1 className="text-white text-2xl md:text-4xl font-light leading-tight mb-8">
            {isRule
              ? t("reglementMinier", language)
              : t("codeMinier", language)}
            {" de la République"}
            <br />
            {"Démocratique du Congo"} <br />
          </h1>
          <div className="hidden lg:block">
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
              <Image
                src={"/img/min-logo.png"}
                height={100}
                width={100}
                alt="Armoirie RDC"
              />
            </div>
          </div>
        </div>
        {/* Search Bar */}
        <div className="flex items-center space-x-4 w-full mt-2 ">
          <div className="flex-1 flex h-12 rounded-2xl items-center p-1  bg-white/30 relative w-full px-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-8 h-8" />
            <Input
              ref={inputRef}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onFocus={() => setShowSuggestions(true)}
              placeholder={t("recherchePlaceholder", language)}
              className="pl-24  bg-black bg-opacity-30  border-transparent text-white placeholder-white"
            />

            <Button
              className="bg-white text-xs text-gray-900 h-full hover:bg-gray-100 px-6 rounded-2xl"
              onClick={() => {
                if (suggestions.length > 0) {
                  handleSuggestionClick(suggestions[0]);
                }
              }}
            >
              {t("rechercher", language)}
            </Button>
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute top-14 left-0 w-full bg-white rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                {suggestions.map((article) => (
                  <li
                    key={article._id}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onMouseDown={() => handleSuggestionClick(article)}
                  >
                    <span className="font-semibold">
                      {getMultilingualText(article.title, language)}
                    </span>
                    <span className="ml-2 text-xs text-gray-500">
                      {getMultilingualText(article.decree, language)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
