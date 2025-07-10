import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/lib/utils";

function Hero() {
  const pathname = usePathname();
  const { language } = useLanguage();

  return (
    <section
      className="relative h-[400px] bg-cover bg-center rounded-3xl"
      style={{
        backgroundImage:
          pathname === "/mining-code"
            ? "url(/img/bg.png)"
            : "url(/img/bg2.png)",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center">
        <div className=" w-full flex justify-between items-center">
          <h1 className="text-white text-2xl md:text-4xl font-light leading-tight mb-8">
            {pathname === "/mining-code"
              ? t("codeMinier", language)
              : t("reglementMinier", language)}
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
              placeholder={t("recherchePlaceholder", language)}
              className="pl-24  bg-black bg-opacity-30  border-transparent text-white placeholder-white"
            />

            <Button className="bg-white text-xs text-gray-900 h-full hover:bg-gray-100 px-6 rounded-2xl">
              {t("rechercher", language)}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
