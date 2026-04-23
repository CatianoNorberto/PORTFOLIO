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
      { message: "Payload invalido. Verifique os dados enviados." },
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
      { message: "Preencha nome, email valido e mensagem antes de enviar." },
      { status: 400 }
    );
  }

  console.log("[portfolio-contact]", {
    name: contactData.name,
    email: contactData.email,
    messagePreview: contactData.message.slice(0, 120),
  });

  return NextResponse.json({
    message:
      "Mensagem recebida com sucesso. Este envio esta mockado e pronto para integrar com um provedor real.",
  });
}
