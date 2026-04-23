import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "Delta Investor / Keeper / Delta Global Banking",
    role: "Desenvolvedor Fullstack Pleno",
    period: "Out/2023 - Atual",
    description:
      "Desenvolvimento de aplicações web e mobile com React, React Native, Angular e TypeScript, com foco em interfaces responsivas, UX e produtos financeiros.",
    outcomes: [
      "Desenvolvi o KeeperAppBanking do zero, incluindo PIX, transferências, gestão de faturas e camadas de segurança.",
      "Construí o backend do zero com Node.js, PostgreSQL e TSOA para documentação e padronização da API.",
      "Arquitetei integrações em AWS com SNS, SQS, Lambda, RDS, Aurora e S3.",
      "Migrei o fluxo de pagamento de síncrono (~10-12s) para assíncrono (~2-4s), aumentando resiliência e melhorando performance.",
    ],
    stack: [
      "React",
      "React Native",
      "Angular",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "TSOA",
      "AWS",
    ],
  },
  {
    company: "Firgun",
    role: "Desenvolvedor Fullstack",
    period: "Jul/2020 - Mar/2023",
    description:
      "Desenvolvimento de aplicações web e mobile com React e React Native, além da criação e manutenção de APIs REST com Node.js e Express.",
    outcomes: [
      "Implementei regras de negócio, integrações com banco de dados e autenticação.",
      "Participei de refinamentos técnicos, correções de bugs e evolução contínua do produto.",
      "Atuei em times ágeis com versionamento de código e entregas contínuas.",
    ],
    stack: ["React", "React Native", "Node.js", "Express", "REST APIs"],
  },
  {
    company: "Grupo Meza Tecnologias",
    role: "Desenvolvedor Frontend",
    period: "Fev/2019 - Mai/2020",
    description:
      "Criação de interfaces web responsivas e componentes reutilizáveis com React, integrando layouts do Figma com APIs e evoluindo funcionalidades existentes.",
    outcomes: [
      "Implementei layouts a partir de Figma com foco em consistência visual e boa experiência de uso.",
      "Mantive e evoluí funcionalidades existentes com atenção a UX e performance.",
      "Colaborei com designers e backend na entrega de novas features.",
    ],
    stack: ["React", "TypeScript", "Figma", "APIs", "CSS3"],
  },
];
