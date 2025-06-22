import React from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryCard = ({
  className,
  imgSrc,
  title,
  subtitle,
  href,
}: {
  className?: string;
  imgSrc: string;
  title: string;
  subtitle: string;
  href?: string;
}) => {
  const content = (
    <div
      className={`h-full w-full rounded-3xl overflow-hidden relative group ${className}`}
    >
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white z-10">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {subtitle && <p className="text-base">{subtitle}</p>}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="h-full w-full">
        {content}
      </Link>
    );
  }

  return content;
};

const GridGallery = () => {
  const items = [
    {
      className: "lg:col-span-2 lg:row-span-2",
      imgSrc: "/img/mine1.jpg",
      title: "Grande mini industrielle de Kamoa",
      subtitle:
        "la troisième plus grande mine de cuivre au monde, se distingue par son engagement à être parmi les producteurs de cuivre à faibles",
    },
    {
      className: "lg:col-span-2",
      imgSrc: "/img/kizito.jpg",
      title: "Ministre Kizito Kapinga Mulume",
      subtitle:
        "est un homme politique de la république démocratique du Congo. Il est ministre chargé des mines du gouvernement Suminwa depuis le 29 mai (2024)",
    },
    {
      className: "lg:col-span-2",
      imgSrc: "/img/cobalt.jpg",
      title: "DRC - AFRICA BATTERY METALS",
      subtitle:
        "est un homme politique de la république démocratique du Congo. Il est ministre chargé des mines du gouvernement Suminwa depuis le 29 mai (2024)",
    },
    {
      className: "lg:col-span-4",
      imgSrc: "/img/mine.jpg",
      title: "Grande mini industrielle de Kamoa",
      subtitle:
        "la troisième plus grande mine de cuivre au monde, se distingue par son engagement à être parmi les producteurs de cuivre à faibles",
    },
  ];

  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-4">
          {items.map((item, index) => (
            <GalleryCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridGallery;
