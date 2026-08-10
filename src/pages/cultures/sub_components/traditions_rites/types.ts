import type { ReactNode } from "react";

export type TraditionRiteItem = {
  id: string;
  image: string;
  imageAlt: string;
  category: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type TraditionsRitesSectionProps = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: TraditionRiteItem[];
};