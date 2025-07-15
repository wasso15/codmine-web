import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Article from "@/model/article";

export async function GET(request: Request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "";
  if (!query || query.length < 2) {
    return NextResponse.json([]);
  }
  // Recherche insensible à la casse dans tous les champs multilingues pertinents
  const regex = new RegExp(query, "i");
  const articles = await Article.find({
    $or: [
      { "title.fr": regex },
      { "title.en": regex },
      { "title.zh": regex },
      { "title.ar": regex },
      { "title.ln": regex },
      { "title.sw": regex },
      { "decree.fr": regex },
      { "decree.en": regex },
      { "decree.zh": regex },
      { "decree.ar": regex },
      { "decree.ln": regex },
      { "decree.sw": regex },
      { "content.title.fr": regex },
      { "content.title.en": regex },
      { "content.title.zh": regex },
      { "content.title.ar": regex },
      { "content.title.ln": regex },
      { "content.title.sw": regex },
      { "content.texte.fr": regex },
      { "content.texte.en": regex },
      { "content.texte.zh": regex },
      { "content.texte.ar": regex },
      { "content.texte.ln": regex },
      { "content.texte.sw": regex },
      { "content.reference.fr": regex },
      { "content.reference.en": regex },
      { "content.reference.zh": regex },
      { "content.reference.ar": regex },
      { "content.reference.ln": regex },
      { "content.reference.sw": regex },
    ],
  }).limit(10); // Limite à 10 suggestions
  return NextResponse.json(articles);
}
