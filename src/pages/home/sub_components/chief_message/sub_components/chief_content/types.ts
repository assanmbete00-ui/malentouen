import type { ReactNode } from "react";

export type ChiefContentProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  quote: ReactNode;
  description: ReactNode;

  signature: {
    name: ReactNode;
    title: ReactNode;
  };

  action?: {
    label: ReactNode;
    href: string;
  };

  showQuote: boolean;
  showSignature: boolean;
  showAction: boolean;
};