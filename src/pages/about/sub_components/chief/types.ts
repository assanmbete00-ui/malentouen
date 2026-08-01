import type { ReactNode } from "react";

export type ChiefSignature = {
  name: ReactNode;
  title: ReactNode;
};

export type ChiefSectionProps = {
  id: string;
  image: string;
  imageAlt: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  descriptionSecondary?: ReactNode;
  signature: ChiefSignature;
};
