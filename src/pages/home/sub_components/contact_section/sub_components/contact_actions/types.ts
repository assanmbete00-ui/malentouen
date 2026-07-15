import type { ReactNode } from "react";

export type ContactActionsProps = {
  action: {
    label: ReactNode;
    href: string;
  };
};