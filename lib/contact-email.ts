import type { ContactPayload } from "@/types/contact";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildContactEmail(contact: ContactPayload) {
  const name = escapeHtml(contact.name);
  const email = escapeHtml(contact.email);
  const message = escapeHtml(contact.message).replace(/\n/g, "<br />");
  const subject = `Novo contato via portfolio: ${contact.name}`;

  return {
    subject,
    text: [
      "Novo contato via portfolio",
      "",
      `Nome: ${contact.name}`,
      `Email: ${contact.email}`,
      "",
      "Mensagem:",
      contact.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; background: #f5f7fb; padding: 32px;">
        <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 24px; border: 1px solid rgba(9, 18, 33, 0.08); overflow: hidden;">
          <div style="padding: 28px 32px; background: linear-gradient(135deg, #07111f 0%, #12233b 100%); color: #eef5ff;">
            <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; color: #56d8ff;">Portfolio contact</p>
            <h1 style="margin: 0; font-size: 28px; line-height: 1.2;">Nova mensagem recebida</h1>
          </div>
          <div style="padding: 32px;">
            <p style="margin: 0 0 20px; font-size: 16px; color: #5c6878; line-height: 1.7;">
              Alguém entrou em contato pelo formulário do portfólio.
            </p>
            <div style="display: grid; gap: 12px; margin-bottom: 24px;">
              <div style="padding: 16px 18px; border-radius: 18px; background: #f5f7fb;">
                <strong style="display: block; margin-bottom: 4px; color: #091221;">Nome</strong>
                <span style="color: #5c6878;">${name}</span>
              </div>
              <div style="padding: 16px 18px; border-radius: 18px; background: #f5f7fb;">
                <strong style="display: block; margin-bottom: 4px; color: #091221;">Email</strong>
                <span style="color: #5c6878;">${email}</span>
              </div>
            </div>
            <div style="padding: 20px; border-radius: 20px; background: #fff8f4; border: 1px solid rgba(255, 140, 66, 0.18);">
              <strong style="display: block; margin-bottom: 10px; color: #091221;">Mensagem</strong>
              <p style="margin: 0; color: #364152; line-height: 1.8;">${message}</p>
            </div>
          </div>
        </div>
      </div>
    `,
  };
}
