import { NextRequest, NextResponse } from "next/server";

// TODO: wire this up to real email delivery once deployed. The simplest
// options are Resend (resend.com, generous free tier) or Formspree — both
// just need an API key added as a Vercel environment variable. See README.md
// "Connecting form submissions to email".
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, organization, reason, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Logged server-side for now so submissions are visible in Vercel's
    // function logs until email delivery is connected.
    console.log("[DEA contact form]", { name, email, organization, reason, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
