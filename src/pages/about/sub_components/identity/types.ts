import type { ReactNode } from "react";

export type IdentityHighlight = {
  id: string;

  title: ReactNode;

  description: ReactNode;
};

export type IdentitySectionProps = {
  id: string;

  image: string;

  imageAlt: string;

  eyebrow: ReactNode;

  title: ReactNode;

  description: ReactNode;

  descriptionSecondary?: ReactNode;

  highlights: IdentityHighlight[];
};