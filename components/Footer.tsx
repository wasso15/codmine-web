"use client";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/lib/utils";

export default function Footer({ year }: { year: number }) {
  const { language } = useLanguage();
  return (
    <footer className="bg-blue-600 w-full text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          {t("ministereDesMines", language)} © {year}.{" "}
          {t("tousDroitsReserves", language)}
        </p>
      </div>
    </footer>
  );
}
