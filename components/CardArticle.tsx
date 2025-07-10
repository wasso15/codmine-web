import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Article } from "@/types/Article";
import { useLanguage } from "./LanguageContext";
import { getMultilingualText } from "@/lib/utils";

function CardArticle({ article }: { article: Article }) {
  const pathname = usePathname();
  const { language } = useLanguage();

  // Pour l'extrait, on prend le premier item du contenu

  return (
    <Link
      href={{
        pathname: "/article",
        query: { id: article._id, from: pathname },
      }}
    >
      <div
        className={`h-[260px] border-b-8 bg-white shadow-md rounded-2xl flex flex-col items-center justify-center p-4 ${
          pathname === "/mining-code" ? "border-[#2691F8]" : "border-[#D02335]"
        }`}
      >
        <div className="w-20 h-20 shadow-md bg-white rounded-full flex items-center justify-center mb-2">
          <Image
            src={"/img/min-logo.png"}
            height={70}
            width={70}
            alt="Armoirie RDC"
          />
        </div>
        <p className="font-bold text-gray-600">
          {getMultilingualText(article.number, language)}
        </p>
      </div>
    </Link>
  );
}

export default CardArticle;
