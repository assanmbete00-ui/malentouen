import type { ReactNode } from "react";

export type ContactContent = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type ContactItemIcon = "location" | "phone" | "email" | "hours";

export type ContactItem = {
  id: string;
  icon: ContactItemIcon;
  label: ReactNode;
  value: ReactNode;
};

export type ContactAction = {
  label: ReactNode;
  href: string;
};

export type ContactOptions = {
  showInformation: boolean;
  showAction: boolean;
};

export type ContactProps = {};