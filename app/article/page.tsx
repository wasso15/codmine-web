"use client";

import Hero from "@/components/Hero";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { Article } from "@/types/Article";
import { useLanguage } from "@/components/LanguageContext";
import { getMultilingualText, t } from "@/lib/utils";

function ArticlePageContent() {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { language } = useLanguage();

  useEffect(() => {
    if (!id) return;
    fetch(`/api/article?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {t("chargement", language)}
      </div>
    );
  }
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {t("articleNonTrouve", language)}
      </div>
    );
  }

  return (
    <main className="mx-auto sm:px-s6 py-12">
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {getMultilingualText(article.number, language)} -{" "}
          {getMultilingualText(article.title, language)}
        </h2>
        <div className="mb-4 text-gray-500 italic">
          {getMultilingualText(article.decree, language)}
        </div>
        <ul className="space-y-4">
          {Array.isArray(article.content) &&
            article.content.map((item) => (
              <li key={item._id} className="bg-white rounded shadow p-4">
                <h3 className="font-bold text-blue-700 mb-1">
                  {getMultilingualText(item.title, language)}
                </h3>
                <p className="text-gray-700">
                  {getMultilingualText(item.texte, language)}
                </p>
                {item.reference && (
                  <div className="text-xs text-gray-500 mt-2">
                    {getMultilingualText(item.reference, language)}
                  </div>
                )}
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

export default function ArticlePage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen">
      <Hero />
      <Suspense fallback={<div>{t("chargement", language)}</div>}>
        <ArticlePageContent />
      </Suspense>
    </div>
  );
}
