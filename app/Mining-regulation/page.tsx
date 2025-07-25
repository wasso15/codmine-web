"use client";

import CardArticle from "@/components/CardArticle";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import { Rule } from "@/types/Rule";
import { sortArticles } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/lib/utils";

// Exemple d'utilisation

export default function MinistryMinesWebsite() {
  const [rules, setRules] = useState<Rule[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    fetch("/api/rules")
      .then((res) => res.json())
      .then((data) => {
        setRules(data);
        console.log("Data", data);
        setLoading(false);
      });
  }, []);

  const sortedRules = sortArticles(rules);

  return (
    <div className="min-h-screen">
      <Hero isRule={true} />
      {/* Main Content */}
      <main className="mx-auto sm:px-s6 py-12">
        {/* Images du secteur minier */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t("reglementMinier", language)}
          </h2>
          {loading ? (
            <div className="w-full flex justify-center items-center py-12">
              <span className="text-lg text-gray-500">
                {t("chargement", language)}
              </span>
            </div>
          ) : (
            <div className=" w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {sortedRules.map((rule) => (
                <CardArticle key={rule._id} article={rule} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
