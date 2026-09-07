import type { FooterData } from "../../hooks/use_footer";

export type FooterBrandProps = {
  slogan: string;
  description: string;
  showSocials: boolean;
  socials: FooterData["socials"];
};
