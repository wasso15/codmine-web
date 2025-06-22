import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

interface LinkCardProps {
  item: {
    title: string;
    url: string;
    id: string;
  };
}

const imageList = {
  bg: "url(/img/bg.png)",
  bg2: "url(/img/bg2.png)",
  globe: "url(/img/globe.png)",
  game: "url(/img/game.png)",
};

const iconList = {
  game: "/img/game.png", // Remplacez par vos chemins d'icônes réels
  globe: "/img/globe.png",
};

console.log("Icon", iconList);

function LinkCard({ item }: LinkCardProps) {
  console.log("item", item);
  return (
    <Link href={item.url} passHref legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Card
          className="relative w-[300px] h-20  bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage:
              parseInt(item.id) % 2 !== 0 ? imageList.bg : imageList.bg2,
          }}
        >
          <CardContent className=" flex items-center space-x-3">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Image
                height={22}
                width={22}
                src={
                  parseInt(item.id) % 2 !== 0 ? iconList.globe : iconList.game
                }
                alt="icon"
              />
            </div>
            <div>
              <div className="text-xs text-white">{item.title}</div>
            </div>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}

export default LinkCard;
