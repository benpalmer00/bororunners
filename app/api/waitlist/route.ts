import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { google } from "googleapis";

async function appendToSheet(data: {
  name: string;
  email: string;
  phone: string;
  sessions: string[];
  ability: string;
  heardFrom: string;
  submittedAt: string;
}) {
  const spreadsheetId = process.env.WAITLIST_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!spreadsheetId || !clientEmail || !privateKey) {
    console.warn("Google Sheets env vars not set — skipping sheet append");
    return;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Waitlist!A:H",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          data.submittedAt,
          data.name,
          data.email,
          data.phone,
          data.sessions.join(", "),
          data.ability,
          data.heardFrom,
          "Pending",
        ],
      ],
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, sessions, ability, heardFrom } = body;

    if (!name || !email || !sessions || sessions.length === 0) {
      return NextResponse.json({ error: "Name, email, and at least one session are required" }, { status: 400 });
    }

    const submittedAt = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });

    let emailOk = false;
    let sheetOk = false;

    // Append to Google Sheet first (so a Resend failure can't block it)
    try {
      await appendToSheet({ name, email, phone: phone || "", sessions, ability: ability || "", heardFrom: heardFrom || "", submittedAt });
      sheetOk = true;
    } catch (err) {
      console.error("Waitlist Google Sheet error:", err);
    }

    // Email Ben
    try {
      const resend = getResend();
      await resend.emails.send({
        from: "Bororunners Website <contact@seahorseltd.co.uk>",
        to: "ben.palmer3@hotmail.com",
        replyTo: email,
        subject: `[Waitlist] New Request — ${name}`,
        text: `
New waiting list request from the Bororunners website.

Name:      ${name}
Email:     ${email}
Phone:     ${phone || "Not provided"}
Sessions:  ${sessions.join(", ")}
Ability:   ${ability || "Not specified"}
How heard: ${heardFrom || "Not specified"}
Submitted: ${submittedAt}

---
Sent from bororunners.co.uk
        `.trim(),
      });
      emailOk = true;
    } catch (err) {
      console.error("Waitlist Resend error:", err);
    }

    if (!emailOk && !sheetOk) {
      return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true, emailOk, sheetOk });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
