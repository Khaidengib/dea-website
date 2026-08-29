import { NextRequest, NextResponse } from "next/server";

// TODO: wire this up to real email delivery / a database once deployed.
// See README.md "Connecting form submissions to email".
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, school, gradYear, interest, why } = body;

    if (!name || !email || !school || !why) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("[DEA join application]", { name, email, school, gradYear, interest, why });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
