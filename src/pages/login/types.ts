import type { FormEvent } from "react";
import type { LoginCredentials } from "@app-types/auth";

export type LoginFormValues = LoginCredentials;

export type LoginFormErrors = Partial<Record<keyof LoginCredentials, string>> & {
  form?: string;
};

export type LoginPageData = {
  branding: {
    eyebrow: string;
    title: string;
    description: string;
    backLabel: string;
  };

  form: {
    eyebrow: string;
    title: string;
    description: string;
    forgotPasswordLabel: string;
    emailLabel: string;
    passwordLabel: string;
    submitLabel: string;
    showPasswordLabel: string;
    hidePasswordLabel: string;

    values: LoginFormValues;
    errors: LoginFormErrors;

    isSubmitting: boolean;
    passwordVisible: boolean;

    onChange: (field: keyof LoginCredentials, value: string) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onTogglePassword: () => void;
  };

  footer: {
    copyright: string;
    privacyLabel: string;
  };
};
