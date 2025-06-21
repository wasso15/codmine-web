import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function MinistryMinesWebsite() {
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
                className="pl-24 bg-black bg-opacity-30  border-transparent text-white placeholder-white"
              />

              <Button className="bg-white text-xs text-gray-900 h-full hover:bg-gray-100 px-6">
                Rechercher
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Useful Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Liens utiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="bg-blue-500 text-white">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs">⚙</span>
                </div>
                <div>
                  <div className="text-xs">Ministère des mines</div>
                  <div className="text-xs opacity-80">Site Web</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-500 text-white">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs">📄</span>
                </div>
                <div>
                  <div className="text-xs">Cami RDC</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-500 text-white">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs">⚙</span>
                </div>
                <div>
                  <div className="text-xs">Ministère des mines</div>
                  <div className="text-xs opacity-80">Site Web</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-500 text-white">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs">📄</span>
                </div>
                <div>
                  <div className="text-xs">Cami RDC</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-500 text-white">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs">⚙</span>
                </div>
                <div>
                  <div className="text-xs">Ministère des mines</div>
                  <div className="text-xs opacity-80">Site Web</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-500 text-white">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs">📄</span>
                </div>
                <div>
                  <div className="text-xs">Cami RDC</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Code et Règlement minier */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Code et Règlement minier
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-blue-500 text-white">
              <CardContent className="p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Code Minier</h3>
                  <p className="text-blue-100">326 Articles</p>
                </div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚖</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-500 text-white">
              <CardContent className="p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Règlement Minier
                  </h3>
                  <p className="text-red-100">527 Articles</p>
                </div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Images du secteur minier */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Images du secteur minier
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <Image
                src="/placeholder.svg?height=256&width=400"
                alt="Grande mine industrielle de Kamoa"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white z-20">
                <h3 className="font-semibold">
                  Grande mine industrielle de Kamoa
                </h3>
                <p className="text-sm opacity-80">
                  La troisième plus grande mine de cuivre au monde...
                </p>
              </div>
            </Card>

            <Card className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <Image
                src="/placeholder.svg?height=256&width=400"
                alt="Ministre Kizito Kapinga Mulume"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white z-20">
                <h3 className="font-semibold">
                  Ministre Kizito Kapinga Mulume
                </h3>
                <p className="text-sm opacity-80">
                  Son Excellence politique et Ministre...
                </p>
              </div>
            </Card>

            <Card className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <Image
                src="/placeholder.svg?height=256&width=400"
                alt="DRC AFRICA BATTERY METALS"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white z-20">
                <h3 className="font-semibold">DRC AFRICA BATTERY METALS</h3>
                <p className="text-sm opacity-80">
                  Le premier centre de gouvernance minière...
                </p>
              </div>
            </Card>

            <Card className="relative h-64 overflow-hidden md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <Image
                src="/placeholder.svg?height=256&width=800"
                alt="Grande mine industrielle de Kamoa"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white z-20">
                <h3 className="font-semibold">
                  Grande mine industrielle de Kamoa
                </h3>
                <p className="text-sm opacity-80">
                  La troisième plus grande mine de cuivre au monde, sa démarrage
                  par son engagement à être parmi les producteurs de cuivre à
                  faibles coûts au monde.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
