"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import type { ContactPayload } from "@/types/contact";
import { siteConfig } from "@/lib/site";
import { buildEmailComposeUrl } from "@/lib/utils";
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

function buildEmailFallbackUrl(form: ContactPayload) {
  const subject = `Contato via portfolio - ${form.name}`.trim();
  const body = [
    `Nome: ${form.name}`,
    `Email: ${form.email}`,
    "",
    "Mensagem:",
    form.message,
  ].join("\n");

  return buildEmailComposeUrl({
    to: siteConfig.email,
    subject,
    body,
  });
}

function resolveErrorMessage(errorCode: string | undefined, t: ReturnType<typeof useTranslations>) {
  switch (errorCode) {
    case "invalid_contact_data":
      return t("validationError");
    case "email_not_configured":
      return t("configError");
    default:
      return t("sendError");
  }
}

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations("ContactForm");
  const tCommon = useTranslations("Common");

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

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        if (result.error === "email_not_configured") {
          const fallbackUrl = buildEmailFallbackUrl(form);
          const newTab = window.open(fallbackUrl, "_blank", "noopener,noreferrer");

          if (!newTab) {
            window.location.href = fallbackUrl;
          }

          setStatus({
            type: "success",
            message: t("configFallbackNotice"),
          });
          return;
        }

        throw new Error(resolveErrorMessage(result.error, t));
      }

      setStatus({
        type: "success",
        message: t("success"),
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : t("genericError"),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          {t("nameLabel")}
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            className="h-12 rounded-3xl border border-line bg-background/50 px-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-cyan/40"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          {t("emailLabel")}
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
            className="h-12 rounded-3xl border border-line bg-background/50 px-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-cyan/40"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        {t("messageLabel")}
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t("messagePlaceholder")}
          rows={6}
          className="rounded-[1.75rem] border border-line bg-background/50 px-4 py-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-cyan/40"
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isSubmitting} size="lg">
          {isSubmitting ? tCommon("sending") : tCommon("sendMessage")}
        </Button>
        <p className="text-sm text-muted-foreground">
          {t("directEmailPrefix")}{" "}
          <a
            href={siteConfig.emailComposeUrl}
            className="font-medium text-foreground transition-colors duration-300 hover:text-accent"
            target="_blank"
            rel="noreferrer noopener"
          >
            {siteConfig.email}
          </a>
          .
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
