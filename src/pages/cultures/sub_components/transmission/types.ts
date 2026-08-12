import type { ReactNode } from "react";
export type TransmissionSectionProps = {
  id: string;
  image: string;
  imageAlt: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  descriptionSecondary?: ReactNode;
};