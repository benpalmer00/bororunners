import { google } from "googleapis";

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheets() {
  return google.sheets({ version: "v4", auth: getAuth() });
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;

async function ensureTab(tabName: string): Promise<void> {
  const sheets = getSheets();

  // Check if tab already exists
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID,
  });

  const existingTabs = spreadsheet.data.sheets?.map((s) => s.properties?.title) ?? [];

  if (existingTabs.includes(tabName)) return;

  // Create the tab
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: { title: tabName },
          },
        },
      ],
    },
  });

  // Add header row
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: `'${tabName}'!A1:B1`,
    valueInputOption: "RAW",
    requestBody: {
      values: [["Name", "Signed Up At"]],
    },
  });
}

export async function addSignUp(data: {
  eventTitle: string;
  eventDate: string;
  name: string;
}): Promise<void> {
  const tabName = `${data.eventTitle} - ${data.eventDate}`.slice(0, 100);

  await ensureTab(tabName);

  const sheets = getSheets();
  const now = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `'${tabName}'!A:B`,
    valueInputOption: "RAW",
    requestBody: {
      values: [[data.name, now]],
    },
  });
}
