import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function POST(req: NextRequest) {
  try {
    const { pin } = await req.json();

    if (!pin) {
      return NextResponse.json({ error: "PIN is required" }, { status: 400 });
    }

    if (!client) {
      // Fallback: accept PIN "0000" when Sanity is not configured (dev only)
      return NextResponse.json({ valid: pin === "0000" });
    }

    const settings = await client.fetch<{ signUpPin: string | null }>(
      groq`*[_type == "siteSettings"][0]{ signUpPin }`
    );

    if (!settings || !settings.signUpPin) {
      // No PIN configured — allow access
      return NextResponse.json({ valid: true });
    }

    return NextResponse.json({ valid: settings.signUpPin === pin });
  } catch (error) {
    console.error("PIN verification error:", error);
    return NextResponse.json({ error: "Failed to verify PIN" }, { status: 500 });
  }
}
