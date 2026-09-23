import { NextResponse } from "next/server";
import { toInternationalPhone } from "@/lib/phone";

export const runtime = "nodejs";

type LeadPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  website?: unknown;
  planDuration?: unknown;
};

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
  }

  const name = text(payload.name, 120);
  const company = text(payload.company, 160);
  const email = text(payload.email, 254).toLowerCase();
  const phone = toInternationalPhone(text(payload.phone, 60));
  const website = text(payload.website, 200);
  const planDuration = payload.planDuration;

  if (website) {
    return NextResponse.json({ accepted: true }, { status: 202 });
  }

  if (
    !name ||
    !company ||
    !phone ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    ![1, 3, 6].includes(planDuration as number)
  ) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_ADVERTISERS_WEBHOOK_URL;
  const webhookSecret = process.env.N8N_ADVERTISERS_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json(
      { error: "Servicio de contacto no configurado" },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-webhook-secret": webhookSecret,
      },
      body: JSON.stringify({
        name,
        company,
        email,
        phone,
        planDuration,
        source: "anunciantes.noticiascol.com",
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "No se pudo registrar" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "No se pudo registrar" }, { status: 502 });
  }

  return NextResponse.json({ accepted: true }, { status: 202 });
}
