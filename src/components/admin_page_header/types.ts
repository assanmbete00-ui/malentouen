import type { BreadcrumbItem } from "@components/breadcrumb/types";
import type { ButtonProps } from "@components/button/types";

export type AdminPageHeaderAction = Pick<
  ButtonProps,
  "onClick" | "href" | "disabled" | "startIcon" | "endIcon"
> & {
  label: string;
};

export type AdminPageHeaderProps = {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryAction?: AdminPageHeaderAction;
  secondaryActions?: AdminPageHeaderAction[];
};
