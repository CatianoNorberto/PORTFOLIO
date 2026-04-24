import { NextResponse } from "next/server";
import { buildContactEmail } from "@/lib/contact-email";
import { siteConfig } from "@/lib/site";
import type { ContactPayload } from "@/types/contact";

const RESEND_API_URL = "https://api.resend.com/emails";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: Partial<ContactPayload>;

  try {
    payload = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json(
      { error: "invalid_payload" },
      { status: 400 }
    );
  }

  const contactData: ContactPayload = {
    name: payload.name?.trim() ?? "",
    email: payload.email?.trim() ?? "",
    message: payload.message?.trim() ?? "",
  };

  if (
    !contactData.name ||
    !contactData.email ||
    !contactData.message ||
    !isValidEmail(contactData.email)
  ) {
    return NextResponse.json(
      { error: "invalid_contact_data" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio Catiano <onboarding@resend.dev>";
  const destinationEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

  if (!apiKey) {
    console.warn("[portfolio-contact] Missing RESEND_API_KEY");

    return NextResponse.json(
      { error: "email_not_configured" },
      { status: 500 }
    );
  }

  const emailContent = buildContactEmail(contactData);

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [destinationEmail],
        subject: emailContent.subject,
        html: emailContent.html,
        text: emailContent.text,
        reply_to: contactData.email,
      }),
    });

    if (!response.ok) {
      const errorPayload = (await response.json().catch(() => null)) as
        | { message?: string; name?: string }
        | null;

      console.error("[portfolio-contact] Resend error", {
        status: response.status,
        error: errorPayload,
      });

      return NextResponse.json(
        { error: "email_delivery_failed" },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[portfolio-contact] Request failed", error);

    return NextResponse.json(
      { error: "email_delivery_failed" },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
