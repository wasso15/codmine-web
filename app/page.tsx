import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import LinkCard from "@/components/LinkCard";
import MenuCard from "@/components/MenuCard";
import GridGallery from "@/components/GridGallery";

export default function MinistryMinesWebsite() {
  const linkData = [
    { id: "1", title: "Ministère des mines", url: "https://mines.gouv.cd/fr/" },
    { id: "2", title: "Cami RDC", url: "https://cami.cd/" },
    {
      id: "3",
      title: "Domaine minier concédé",
      url: "https://drclicences.cami.cd/fr/?_gl=1*1pgaija*_ga*NzkyODYzMzgzLjE3NDk1ODY5MTQ.*_ga_N6W36RJ8TK*czE3NTAxOTMzMTEkbzUkZzEkdDE3NTAxOTM5NDIkajU5JGwwJGgw",
    },
    {
      id: "4",
      title: "Cartes des titres miniers et des occurences minieres",
      url: "https://www.arcgis.com/apps/instant/sidebar/index.html?appid=5f33862234ff4d46b238524c095096ac",
    },
    { id: "5", title: "CTCPM", url: "https://ctcpm.cd/fr/" },
    { id: "6", title: "CEEC", url: "https://ceec.cd/" },
    { id: "7", title: "SAEMAPE", url: "https://saemape.cd/" },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: "url(/img/dump.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-3xl "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center">
          <div className=" w-full flex justify-between items-center">
            <h1 className="text-white text-2xl md:text-4xl font-light leading-tight mb-8">
              Accédez facilement aux textes
              <br />
              légaux miniers officiels de la RDC.
              <br />
              Naviguez, téléchargez, ou
              <br />
              explorez les articles et
              <br />
              amendements.
            </h1>
            <div className="hidden lg:block">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/img/min-logo.png"}
                  height={90}
                  width={90}
                  alt="Armoirie RDC"
                />
              </div>
            </div>
          </div>
          {/* Search Bar */}
          <div className="flex items-center space-x-4 w-full ">
            <div className="flex-1 flex h-12 rounded-2xl items-center p-1  bg-white/30 relative w-full px-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-8 h-8" />
              <Input
                placeholder="Faites une recherche par mot-clé"
                className="pl-24  bg-black bg-opacity-30  border-transparent text-white placeholder-white"
              />

              <Button className="bg-white text-xs text-gray-900 h-full hover:bg-gray-100 px-6 rounded-2xl">
                Rechercher
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto sm:px-s6 py-12">
        {/* Useful Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Liens utiles
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {linkData.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Code et Règlement minier */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Code et Règlement minier
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MenuCard item={{ title: "Code Minier", stats: "326" }} />
            <MenuCard item={{ title: "Règlement Minier", stats: "527" }} />
          </div>
        </section>

        {/* Images du secteur minier */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Images du secteur minier
          </h2>
      
          <GridGallery />
        </section>
      </main>
    </div>
  );
}
