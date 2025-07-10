"use client";

import CardArticle from "@/components/CardArticle";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import { Article } from "@/types/Article";
import { sortArticles } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/lib/utils";

// Exemple d'utilisation

export default function MinistryMinesWebsite() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    fetch("/api/article")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  const sortedArticles = sortArticles(articles);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Main Content */}
      <main className="mx-auto sm:px-s6 py-12">
        {/* Images du secteur minier */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t("articles", language)}
          </h2>
          {loading ? (
            <div className="w-full flex justify-center items-center py-12">
              <span className="text-lg text-gray-500">
                {t("chargement", language)}
              </span>
            </div>
          ) : (
            <div className=" w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {sortedArticles.map((article) => (
                <CardArticle key={article._id} article={article} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
