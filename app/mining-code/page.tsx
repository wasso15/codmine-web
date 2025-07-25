"use client";

import CardArticle from "@/components/CardArticle";
import Hero from "@/components/Hero";
import { Article } from "@/types/Article";
import { useLanguage } from "@/components/LanguageContext";
import { t, sortArticles } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

// Exemple d'utilisation

export default function MinistryMinesWebsite() {
  const { language } = useLanguage();

  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await fetch("/api/article");
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    },
    staleTime: 24 * 60 * 60 * 1000, // Données considérées fraîches pendant 24h
    refetchOnWindowFocus: false, // Ne pas recharger quand la fenêtre reprend le focus
    refetchOnReconnect: false, // Ne pas recharger lors de reconnexion réseau
  });

  const sortedArticles = articles ? sortArticles(articles) : [];

  return (
    <div className="min-h-screen">
      <Hero isRule={false} />

      {/* Main Content */}
      <main className="mx-auto sm:px-s6 py-12">
        {/* Images du secteur minier */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t("articles", language)}
          </h2>
          {isLoading ? (
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
