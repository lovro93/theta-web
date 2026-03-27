import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


// Jednostavan in-memory rate limiter: max 3 zahtjeva po IP-u u 10 minuta
const attempts = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 3;
const WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);

  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= LIMIT) return true;

  entry.count++;
  return false;
}

function sanitize(str: string): string {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Previše zahtjeva. Pokušajte ponovo za 10 minuta." },
        { status: 429 }
      );
    }

    const { ime, email, poruka } = await req.json();

    if (!ime || !email || !poruka) {
      return NextResponse.json({ error: "Sva polja su obavezna." }, { status: 400 });
    }

    if (typeof ime !== "string" || typeof email !== "string" || typeof poruka !== "string") {
      return NextResponse.json({ error: "Neispravan format podataka." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Neispravna e-mail adresa." }, { status: 400 });
    }

    const safeName    = sanitize(ime);
    const safeEmail   = sanitize(email);
    const safeMessage = sanitize(poruka);

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Theta Web <noreply@theta-knjigovodstvo.com.hr>",
      to: "dora@theta.hr",
      subject: `Nova poruka s web stranice – ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c9a84c; border-bottom: 1px solid #eee; padding-bottom: 12px;">
            Nova poruka s kontakt forme
          </h2>
          <p><strong>Ime:</strong> ${safeName}</p>
          <p><strong>E-mail:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Poruka:</strong></p>
          <p style="background: #f9f9f9; padding: 16px; border-left: 3px solid #c9a84c; white-space: pre-wrap;">
            ${safeMessage}
          </p>
          <hr style="margin-top: 32px;" />
          <p style="color: #999; font-size: 12px;">Poruka poslana s theta.hr kontakt forme</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend greška:", error);
      return NextResponse.json({ error: "Greška pri slanju." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server greška:", err);
    return NextResponse.json({ error: "Greška na serveru." }, { status: 500 });
  }
}
