import { NextResponse } from "next/server";
import type { ContactPayload } from "@/types/contact";

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

  console.log("[portfolio-contact]", {
    name: contactData.name,
    email: contactData.email,
    messagePreview: contactData.message.slice(0, 120),
  });

  return NextResponse.json({ success: true });
}
