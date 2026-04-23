export type SkillGroupId =
  | "frontendMobile"
  | "backendApis"
  | "dataCloud"
  | "qualityFlow";

export type SkillGroup = {
  id: SkillGroupId;
  items: string[];
};
