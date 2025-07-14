import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

interface LinkCardProps {
  item: {
    title: string;
    stats: string;
  };
}

const imageList = {
  bg: "url(/img/bg.png)",
  bg2: "url(/img/bg2.png)",
};

function MenuCard({ item }: LinkCardProps) {
  console.log("item ", item);
  return (
    <Link
      href={
        item.title === "Code minier" ? "/mining-code" : "/Mining-regulation"
      }
    >
      <Card
        className="  bg-cover bg-center rounded-3xl px-5"
        style={{
          backgroundImage:
            item.title === "Code minier" ? imageList.bg : imageList.bg2,
        }}
      >
        <CardContent className="p-8 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              {item.title}
            </h3>
            <p className="text-blue-100">{item.stats} Articles</p>
          </div>
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
        </CardContent>
      </Card>
    </Link>
  );
}

export default MenuCard;
