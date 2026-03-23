import { NextRequest, NextResponse } from "next/server";
import { addSignUp } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, eventTitle, eventDate } = body;

    if (!name || !eventTitle || !eventDate) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    await addSignUp({ eventTitle, eventDate, name });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Event sign-up error:", error);
    return NextResponse.json({ error: "Failed to process sign-up" }, { status: 500 });
  }
}
