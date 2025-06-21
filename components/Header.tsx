"use client";
import { usePathname } from "next/navigation";
import { Globe, Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState("Français");

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/mining-code", label: "Code minier" },
    { href: "/mining-regulation", label: "Règlement minier" },
  ];

  const languages = ["Anglais", "Lingala", "Swahili", "普通话", "عربي"];

  return (
    <header className="bg-[#FEFEFE] h-20  rounded-3xl my-6 flex flex-row  items-center  sha shadow-lg">
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
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="flex items-center space-x-2 text-sm">
            <DropdownMenu>
              <DropdownMenuTrigger className=" flex flex-row space-x-2">
                <Languages className="w-5 h-5" />
                <span>{selectedLanguage}</span>
              </DropdownMenuTrigger>

              <DropdownMenuContent className=" p-6 border-b-0">
                <DropdownMenuLabel className="border-b-0">
                  Veuillez Séléctionner la langue
                </DropdownMenuLabel>
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language}
                    onSelect={() => setSelectedLanguage(language)}
                    className={
                      selectedLanguage === language
                        ? "bg-[#D02335] text-amber-50"
                        : ""
                    }
                  >
                    {language}
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
