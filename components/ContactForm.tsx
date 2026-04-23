"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import type { ContactPayload } from "@/types/contact";
import { Button } from "@/components/ui/Button";

const initialForm: ContactPayload = {
  name: "",
  email: "",
  message: "",
};

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Nao foi possivel enviar a mensagem.");
      }

      setStatus({
        type: "success",
        message:
          result.message ??
          "Mensagem enviada com sucesso. Em producao, basta conectar a um provedor real.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Ocorreu um erro ao enviar sua mensagem.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Nome
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder="Seu nome"
            className="h-12 rounded-3xl border border-line bg-background/50 px-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-cyan/40"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="voce@empresa.com"
            className="h-12 rounded-3xl border border-line bg-background/50 px-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-cyan/40"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        Mensagem
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Conte um pouco sobre o projeto, contexto ou oportunidade."
          rows={6}
          className="rounded-[1.75rem] border border-line bg-background/50 px-4 py-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-cyan/40"
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isSubmitting} size="lg">
          {isSubmitting ? "Enviando..." : "Enviar mensagem"}
        </Button>
        <p className="text-sm text-muted-foreground">
          Route handler mockada pronta para integrar com Resend, Formspree ou SMTP.
        </p>
      </div>

      {status.type !== "idle" ? (
        <p
          className={`rounded-3xl border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-cyan/25 bg-cyan-soft text-foreground"
              : "border-accent/25 bg-accent-soft text-foreground"
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
