import { useState, type FormEvent } from "react";
import useTranslate from "@hooks/use_translate";

import type { LoginCredentials } from "@app-types/auth";
import type { LoginFormErrors, LoginPageData } from "../types";

const initialValues: LoginCredentials = {
  email: "",
  password: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function useLogin(): LoginPageData {
  const { translate } = useTranslate();

  const [values, setValues] = useState<LoginCredentials>(initialValues);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const nextErrors: LoginFormErrors = {};
    const email = values.email.trim();

    if (!email) {
      nextErrors.email = translate("LOGIN_EMAIL_REQUIRED");
    } else if (!EMAIL_PATTERN.test(email)) {
      nextErrors.email = translate("LOGIN_EMAIL_INVALID");
    }

    if (!values.password) {
      nextErrors.password = translate("LOGIN_PASSWORD_REQUIRED");
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof LoginCredentials, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleTogglePassword = () => {
    setPasswordVisible((visible) => !visible);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    const credentials: LoginCredentials = {
      email: values.email.trim().toLowerCase(),
      password: values.password,
    };

    try {
      setIsSubmitting(true);

      // Future authentication request:
      // await login(credentials);

      console.log("Login credentials:", credentials);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    branding: {
      eyebrow: translate("LOGIN_BRAND_EYEBROW"),
      title: translate("LOGIN_BRAND_TITLE"),
      description: translate("LOGIN_BRAND_DESCRIPTION"),
      backLabel: translate("LOGIN_BACK_TO_SITE"),
    },
    form: {
      eyebrow: translate("LOGIN_EYEBROW"),
      title: translate("LOGIN_TITLE"),
      description: translate("LOGIN_DESCRIPTION"),
      forgotPasswordLabel: translate("LOGIN_FORGOT_PASSWORD"),
      emailLabel: translate("LOGIN_EMAIL_LABEL"),
      passwordLabel: translate("LOGIN_PASSWORD_LABEL"),
      submitLabel: translate("LOGIN_SUBMIT"),
      showPasswordLabel: translate("LOGIN_SHOW_PASSWORD"),
      hidePasswordLabel: translate("LOGIN_HIDE_PASSWORD"),
      values,
      errors,
      isSubmitting,
      passwordVisible,
      onChange: handleChange,
      onSubmit: handleSubmit,
      onTogglePassword: handleTogglePassword,
    },
    footer: {
      copyright: translate("LOGIN_COPYRIGHT"),
      privacyLabel: translate("LOGIN_PRIVACY_POLICY"),
    },
  };
}