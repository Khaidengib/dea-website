import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

// Turns off draft mode (called when you exit Presentation / leave preview).
export async function GET() {
  (await draftMode()).disable();
  return NextResponse.redirect(new URL("/", process.env.NEXT_PUBLIC_SITE_URL || "https://dallasea.com"));
}
