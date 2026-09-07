import type { FormEvent } from "react";

import type { LoginCredentials } from "@app-types/auth";
import type { LoginFormErrors, LoginFormValues } from "../../types";

export type LoginFormProps = {
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
  onChange: (field: keyof LoginCredentials, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onTogglePassword: () => void;
  passwordVisible: boolean;
};
