"use client";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { t } from "@/lib/utils";
import { LanguageCode, useLanguage } from "./LanguageContext";

function Header() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  const navLinks = [
    { href: "/", labelKey: "accueil" },
    { href: "/mining-code", labelKey: "codeMinier" },
    { href: "/mining-regulation", labelKey: "reglementMinier" },
  ];

  // Map code langue -> label
  const languageLabels: Record<LanguageCode, string> = {
    fr: "Français",
    en: "Anglais",
    ln: "Lingala",
    sw: "Swahili",
    zh: "普通话",
    ar: "عربي",
  };
  const languages = Object.keys(languageLabels) as LanguageCode[];

  return (
    <header className="bg-[#FEFEFE] h-20 rounded-3xl flex flex-row items-center shadow-lg fixed top-6 w-[90%]  lg:w-[80%] left-1/2 -translate-x-1/2 z-50">
      <div className=" grow mx-auto px-6 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/img/logo.png"
                width={156}
                height={56}
                alt="Logo Ministère des Mines"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? " border-b-3  border-[#2691F8] text-sm font-medium"
                    : "text-gray-600 hover:text-gray-900 pb-1  text-sm font-medium"
                }
              >
                {t(link.labelKey, language)}
              </Link>
            ))}
          </nav>
          {/* Language Selector */}
          <div className="flex items-center space-x-2 text-sm">
            <DropdownMenu>
              <DropdownMenuTrigger className=" flex flex-row space-x-2">
                <Languages className="w-5 h-5" />
                <span>{languageLabels[language]}</span>
              </DropdownMenuTrigger>

              <DropdownMenuContent className=" p-6 border-b-0">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onSelect={() => setLanguage(lang)}
                    className={
                      language === lang ? "bg-[#D02335] text-amber-50" : ""
                    }
                  >
                    {languageLabels[lang]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
