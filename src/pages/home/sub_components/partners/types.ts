import type { ReactNode } from "react";

export type PartnersContent = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type PartnerItem = {
  id: string;
  image: string;
  type: ReactNode;
  name: ReactNode;
};

export type PartnersAction = {
  label: ReactNode;
  href: string;
};

export type PartnersOptions = {
  showItems: boolean;
  showAction: boolean;
};