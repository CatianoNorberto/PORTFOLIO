# Portfolio Profissional

Portfolio profissional construido com Next.js App Router, TypeScript e Tailwind CSS, pronto para deploy na Vercel.

## Stack

- Next.js 16 com App Router
- TypeScript
- Tailwind CSS 4
- `next-intl` para `pt`, `en` e `es`
- Route Handlers para API de contato

## Estrutura

```text
app/
components/
components/ui/
components/sections/
data/
i18n/
lib/
messages/
public/
types/
```

## Paginas

- `/`
- `/about`
- `/projects`
- `/experience`
- `/contact`
- `/en`
- `/es`

## Como rodar

```bash
npm install
npm run dev
```

## Email real

O formulario de contato pode enviar emails reais usando a API HTTP do Resend.

1. Crie uma API key no Resend.
2. Configure as variaveis abaixo em `.env.local` ou na Vercel:

```bash
RESEND_API_KEY=
RESEND_FROM_EMAIL="Portfolio Catiano <onboarding@resend.dev>"
CONTACT_TO_EMAIL="catianonorberto@gmail.com"
```

Para producao, o ideal e usar um dominio verificado no `RESEND_FROM_EMAIL`.

## Qualidade

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy

O projeto esta preparado para deploy direto na Vercel com as configuracoes padrao do Next.js.
