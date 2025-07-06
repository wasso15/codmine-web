"use client";

import Hero from "@/components/Hero";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type ArticleContent = {
  _id: string;
  title: { fr: string };
  texte: { fr: string };
};
type Article = {
  _id: string;
  number: { fr: string };
  title: { fr: string };
  decree: { fr: string };
  content: ArticleContent[];
};

export default function ArticlePage() {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

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
        Chargement...
      </div>
    );
  }
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Article non trouvé.
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <main className="mx-auto sm:px-s6 py-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {article.number?.fr} - {article.title?.fr}
          </h2>
          <div className="mb-4 text-gray-500 italic">{article.decree?.fr}</div>
          <ul className="space-y-4">
            {Array.isArray(article.content) &&
              article.content.map((item) => (
                <li key={item._id} className="bg-white rounded shadow p-4">
                  <h3 className="font-bold text-blue-700 mb-1">
                    {item.title?.fr}
                  </h3>
                  <p className="text-gray-700">{item.texte?.fr}</p>
                </li>
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
