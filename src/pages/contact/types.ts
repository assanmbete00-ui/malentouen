import type { ReactNode } from "react";
import type { PageBannerProps } from "@components/page_banner/types";

export type ContactOverviewData = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  note: ReactNode;
};

export type ContactChannelIcon =
  | "location"
  | "phone"
  | "email"
  | "hours"
  | "website";

export type ContactChannelItem = {
  id: string;
  icon: ContactChannelIcon;
  label: ReactNode;
  value: ReactNode;
  href?: string;
};

export type ContactChannelsData = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  items: ContactChannelItem[];
};

export type ContactFormField = {
  label: string;
  placeholder: string;
};

export type ContactFormData = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  fields: {
    name: ContactFormField;
    email: ContactFormField;
    phone: ContactFormField;
    subject: ContactFormField;
    message: ContactFormField;
  };
  submitLabel: string;
  requiredMessage: string;
  invalidEmailMessage: string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

export type ContactLocationData = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  addressLabel: ReactNode;
  address: ReactNode;
};

export type ContactPageData = {
  banner: PageBannerProps;
  overview: ContactOverviewData;
  channels: ContactChannelsData;
  form: ContactFormData;
  location: ContactLocationData;
};