export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  impact: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
};
