import type { FooterData } from "../../hooks/use_footer";

export type FooterBrandProps = {
  description: string;
  showSocials: boolean;
  socials: FooterData["socials"];
};