"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import LinkCard from "@/components/LinkCard";
import MenuCard from "@/components/MenuCard";
import GridGallery from "@/components/GridGallery";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { getMultilingualText } from "@/lib/utils";
import type { Article } from "@/types/Article";

export default function MinistryMinesWebsite() {
  const { language } = useLanguage();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<Article[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const inputRef = useRef(null);
  const linkData = [
    {
      id: "1",
      title: t("ministereMines", language),
      url: "https://mines.gouv.cd/fr/",
    },
    { id: "2", title: t("camiRDC", language), url: "https://cami.cd/" },
    {
      id: "3",
      title: t("domaineMinierConcede", language),
      url: "https://drclicences.cami.cd/fr/?_gl=1*1pgaija*_ga*NzkyODYzMzgzLjE3NDk1ODY5MTQ.*_ga_N6W36RJ8TK*czE3NTAxOTMzMTEkbzUkZzEkdDE3NTAxOTM5NDIkajU5JGwwJGgw",
    },
    {
      id: "4",
      title: t("cartesTitresMinieres", language),
      url: "https://www.arcgis.com/apps/instant/sidebar/index.html?appid=5f33862234ff4d46b238524c095096ac",
    },
    { id: "5", title: t("ctcpm", language), url: "https://ctcpm.cd/fr/" },
    { id: "6", title: t("ceec", language), url: "https://ceec.cd/" },
    { id: "7", title: t("saemape", language), url: "https://saemape.cd/" },
  ];

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

  console.log("Suggestion", suggestions);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: "url(/img/dump.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-3xl "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center">
          <div className=" w-full flex justify-between items-center">
            <h1 className="text-white text-2xl md:text-4xl font-light leading-tight mb-8">
              {/* Texte principal à traduire, à découper en plusieurs clés si besoin */}
              {t("heroLigne1", language)}
              <br />
              {t("heroLigne2", language)}
              <br />
              {t("heroLigne3", language)}
              <br />
              {t("heroLigne4", language)}
              <br />
              {t("heroLigne5", language)}
            </h1>
            <div className="hidden lg:block">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/img/min-logo.png"}
                  height={90}
                  width={90}
                  alt="Armoirie RDC"
                />
              </div>
            </div>
          </div>
          {/* Search Bar */}
          <div className="flex items-center space-x-4 w-full relative">
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
                className=" pl-10 md:pl-24  bg-black bg-opacity-30  border-transparent text-white placeholder-white"
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

      {/* Main Content */}
      <main className="mx-auto sm:px-s6 py-12">
        {/* Useful Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t("liensUtiles", language)}
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {linkData.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Code et Règlement minier */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t("codeEtReglement", language)}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MenuCard
              item={{ title: t("codeMinier", language), stats: "326" }}
            />
            <MenuCard
              item={{ title: t("reglementMinier", language), stats: "527" }}
            />
          </div>
        </section>

        {/* Images du secteur minier */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t("imagesSecteur", language)}
          </h2>

          <GridGallery />
        </section>
      </main>
    </div>
  );
}
