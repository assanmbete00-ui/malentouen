import type { PartnerSource } from "./types";

export const PARTNERS = [
  {
    id: "localInstitution",
    nameKey: "HOME_PARTNERS_LOCAL_INSTITUTIONS_NAME",
    typeKey: "HOME_PARTNERS_LOCAL_INSTITUTIONS_TYPE",
    imageKey: "localInstitution",
  },
  {
    id: "culturalAssociation",
    nameKey: "HOME_PARTNERS_CULTURAL_ASSOCIATIONS_NAME",
    typeKey: "HOME_PARTNERS_CULTURAL_ASSOCIATIONS_TYPE",
    imageKey: "culturalAssociation",
  },
  {
    id: "communityLeader",
    nameKey: "HOME_PARTNERS_COMMUNITY_LEADERS_NAME",
    typeKey: "HOME_PARTNERS_COMMUNITY_LEADERS_TYPE",
    imageKey: "communityLeader",
  },
  {
    id: "developmentActor",
    nameKey: "HOME_PARTNERS_DEVELOPMENT_ACTORS_NAME",
    typeKey: "HOME_PARTNERS_DEVELOPMENT_ACTORS_TYPE",
    imageKey: "developmentActor",
  },
  {
    id: "clvPartner",
    nameKey: "HOME_PARTNERS_CLV_FRANCE_NAME",
    typeKey: "HOME_PARTNERS_CLV_FRANCE_TYPE",
    imageKey: "clvPartner",
  },
] satisfies PartnerSource[];
