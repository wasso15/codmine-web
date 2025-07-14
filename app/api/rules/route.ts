import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Rule from "@/model/rule";
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
      const rule = await Rule.findById(id);
      if (!rule) {
        return NextResponse.json(
          { error: "Règle non trouvée." },
          { status: 404 }
        );
      }
      return NextResponse.json(rule);
    } else {
      const rules = await Rule.find({});
      return NextResponse.json(rules);
    }
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des règles." },
      { status: 500 }
    );
  }
}
