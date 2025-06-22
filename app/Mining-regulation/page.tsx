"use client";

import CardArticle from "@/components/CardArticle";
import Hero from "@/components/Hero";

export default function MiningRegulationPage() {
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
          <div className=" w-full  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <CardArticle />
          </div>
        </section>
      </main>
    </div>
  );
}
