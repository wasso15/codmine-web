"use client";

import CardArticle from "@/components/CardArticle";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";

export default function MinistryMinesWebsite() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/article")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  console.log("articles", articles);
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Main Content */}
      <main className="mx-auto sm:px-s6 py-12">
        {/* Images du secteur minier */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Articles
          </h2>
          <div className=" w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {articles.map((article) => (
              <CardArticle key={article._id} article={article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
