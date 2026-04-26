# Catiano Norberto | Portfolio

Portfolio profissional desenvolvido com Next.js, TypeScript e Tailwind CSS, com foco em apresentacao pessoal, projetos, experiencia, contato e preparo para deploy em producao.

## Overview

Este projeto foi estruturado para funcionar como um portfolio moderno de desenvolvedor Full Stack, com navegacao multilingue, layout responsivo, SEO basico, dark mode e formulario de contato preparado para envio real de email.

## Stack

- Next.js 16 com App Router
- TypeScript
- Tailwind CSS 4
- `next-intl` para internacionalizacao
- Route Handlers com API de contato
- Resend para entrega real de emails

## Features

- Home com hero, tecnologias, projetos em destaque, experiencia resumida e call to action
- Paginas dedicadas de About, Projects, Experience e Contact
- Internacionalizacao em Portugues, English e Espanol
- Dark mode
- SEO com metadata, Open Graph, robots e sitemap
- Foto de perfil integrada ao layout
- Formulario com fallback local e suporte a envio real via Resend
- Estrutura organizada para evolucao e deploy na Vercel

## Project Structure

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

## Routes

- `/`
- `/about`
- `/projects`
- `/experience`
- `/contact`
- `/en`
- `/es`

## Local Development

```bash
npm install
npm run dev
```

Aplicacao disponivel por padrao em `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment Variables

Para envio real de mensagens pelo formulario, crie um arquivo `.env.local` com:

```bash
RESEND_API_KEY=
RESEND_FROM_EMAIL="Portfolio Catiano <onboarding@resend.dev>"
CONTACT_TO_EMAIL="catianonorberto@gmail.com"
```

### Notes

- `RESEND_API_KEY`: chave da sua conta no Resend
- `RESEND_FROM_EMAIL`: remetente tecnico autorizado
- `CONTACT_TO_EMAIL`: email que recebe as mensagens do formulario

Sem a chave configurada, o formulario usa fallback para abrir o app de email do visitante com a mensagem preenchida.

## Production Email Delivery

Para producao, o ideal e:

1. Verificar um dominio no Resend
2. Usar esse dominio no `RESEND_FROM_EMAIL`
3. Configurar as mesmas variaveis na Vercel

Exemplo:

```bash
RESEND_FROM_EMAIL="Catiano Norberto <contato@seudominio.com>"
```

## Deployment

O projeto esta preparado para deploy na Vercel.

Passos recomendados:

1. Conectar o repositorio ao projeto na Vercel
2. Configurar variaveis de ambiente
3. Fazer o deploy da branch principal

## Repository

- GitHub: `https://github.com/CatianoNorberto/PORTFOLIO`
