export type PartnerImageKey =
  | "localInstitution"
  | "culturalAssociation"
  | "communityLeader"
  | "developmentActor"
  | "clvPartner";

export type PartnerSource = {
  id: string;
  nameKey: string;
  typeKey: string;
  imageKey: PartnerImageKey;
};
