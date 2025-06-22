import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function CardArticle() {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <Link href={{ pathname: "/article", query: { id: "123", from: pathname } }}>
      <div
        className={` h-[220px]  border-b-8 bg-white shadow-md rounded-2xl flex  flex-col items-center justify-center  ${
          pathname === "/mining-code" ? " border-[#2691F8]" : "border-[#D02335]"
        }`}
      >
        <div className="w-24 h-24 shadow-md bg-white rounded-full flex items-center gap-4 justify-center">
          <Image
            src={"/img/min-logo.png"}
            height={90}
            width={90}
            alt="Armoirie RDC"
          />
        </div>
        <p>Article 1</p>
      </div>
    </Link>
  );
}

export default CardArticle;
