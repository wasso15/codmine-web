"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
// import { useSearchParams } from "next/navigation";

export default function ArticlePage() {
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");
//   const from = searchParams.get("from");

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Main Content */}
      <main className="mx-auto sm:px-s6">
        <section className=" flex flex-col gap-4 mt-6">
          <div
            className="relative bg-cover bg-center rounded-xl py-2 "
            style={{
              backgroundImage: "url(/img/bg.png)",
            }}
          >
            <div className=" w-full flex justify-between items-center px-12">
              <h1 className="text-white font-light leading-tight">
                L’Assemblée nationale et le Sénat ont adopté ; Le Président de
                la République promulgue la Loi dont la teneur suit :
              </h1>
              <div className="hidden lg:block">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={"/img/min-logo.png"}
                    height={45}
                    width={45}
                    alt="Armoirie RDC"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative bg-cover bg-center rounded-xl py-2 "
            style={{
              backgroundImage: "url(/img/bg2.png)",
            }}
          >
            <div className=" w-full flex justify-between items-center px-12">
              <h1 className="text-white text-sm font-light leading-tight">
                Article 1er Les articles 1er, 2, 3, 4, 5, 6, 7 du Chapitre Ier
                et 16 du Chapitre II du Titre Ier de la loi n°007/2002 du
                11juillet 2002 portant Code minier sont modifiés comme suit :
              </h1>
              <div className="hidden lg:block">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={"/img/min-logo.png"}
                    height={45}
                    width={45}
                    alt="Armoirie RDC"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative bg-cover bg-center rounded-xl py-2 "
            style={{
              backgroundImage: "url(/img/bg.png)",
            }}
          >
            <div className=" w-full flex justify-between items-center px-12">
              <h1 className="text-white font-light leading-tight">
                « TITRE Ier : DES GENERALITES CHAPITRE Ier : DES DEFINITIONS DES
                TERMES, DU CHAMP D’APPLICATION ET DES PRINCIPES FONDAMENTAUX
              </h1>
              <div className="hidden lg:block">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={"/img/min-logo.png"}
                    height={45}
                    width={45}
                    alt="Armoirie RDC"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative bg-cover bg-center rounded-xl py-2 "
            style={{
              backgroundImage: "url(/img/bg.png)",
            }}
          >
            <div className=" w-full flex justify-between items-center px-12">
              <div>
                <h1 className="text-white font-light leading-tight">
                  Article 1 : Des définitions
                </h1>
                <p className="text-white text-xs font-light leading-tight">
                  Aux termes du présent Code, on entend par :
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={"/img/min-logo.png"}
                    height={45}
                    width={45}
                    alt="Armoirie RDC"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" flex flex-col gap-4 mt-6">
          <div className="relative  rounded-xl py-4 bg-white  shadow-md">
            <div className=" w-full flex justify-between  items-center px-12">
              <h1 className=" text-gray-400 font-light leading-tight">
                1. acheteur : tout employé agréé d’un comptoir d’achat, d’une
                entité de traitement d’or, de diamant et d’autres substances
                minérales d’exploitation artisanale, qui exerce ses activités
                conformément aux dispositions du présent Code ;
              </h1>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
