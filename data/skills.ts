import type { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    description:
      "Interfaces responsivas e experiências mobile construídas com foco em UX, performance e reutilização.",
    items: [
      "React",
      "React Native",
      "Angular",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Styled Components",
      "Storybook",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Construção de APIs e regras de negócio com foco em padronização, autenticação e evolução contínua.",
    items: ["Node.js", "Express", "Fastify", "TSOA", "REST APIs", "Autenticação"],
  },
  {
    title: "Banco de Dados & Cloud",
    description:
      "Persistência, mensageria e infraestrutura utilizadas em produtos financeiros e fluxos assíncronos.",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "AWS SNS",
      "AWS SQS",
      "AWS Lambda",
      "RDS",
      "Aurora",
      "S3",
    ],
  },
  {
    title: "Qualidade & Fluxo",
    description:
      "Ferramentas e práticas para manter qualidade, colaboração e entregas consistentes em times ágeis.",
    items: ["Jest", "Git", "GitHub", "Bitbucket", "Jira", "Trello", "Figma"],
  },
];
