import type { ReactNode } from "react";

export type ChiefMessageContent = {
  eyebrow: ReactNode;
  title: ReactNode;
  quote: ReactNode;
  description: ReactNode;
  signature: {
    name: ReactNode;
    title: ReactNode;
  };
};

export type ChiefMessageMedia = {
  portrait: string;
};

export type ChiefMessageAction = {
  label: ReactNode;
  href: string;
};

export type ChiefMessageOptions = {
  showPortrait: boolean;
  showQuote: boolean;
  showSignature: boolean;
  showAction: boolean;
};

export type ChiefMessageProps = {};