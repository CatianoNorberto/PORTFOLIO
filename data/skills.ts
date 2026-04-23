import type { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontendMobile",
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
    id: "backendApis",
    items: ["Node.js", "Express", "Fastify", "TSOA", "REST APIs", "Autenticação"],
  },
  {
    id: "dataCloud",
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
    id: "qualityFlow",
    items: ["Jest", "Git", "GitHub", "Bitbucket", "Jira", "Trello", "Figma"],
  },
];
