import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Article from "@/model/article";
import { Types } from "mongoose";

export async function GET(request: Request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    if (id) {
      if (!Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: "ID invalide." }, { status: 400 });
      }
      const article = await Article.findById(id);
      if (!article) {
        return NextResponse.json(
          { error: "Article non trouvé." },
          { status: 404 }
        );
      }
      return NextResponse.json(article);
    } else {
      const articles = await Article.find({});
      return NextResponse.json(articles);
    }
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des articles." },
      { status: 500 }
    );
  }
}
