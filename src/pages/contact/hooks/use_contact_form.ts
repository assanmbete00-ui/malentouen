import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import type {
  ContactFormData,
  ContactFormErrors,
  ContactFormValues,
} from "../types";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function useContactForm(data: ContactFormData) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));
  };

  const validate = () => {
    const nextErrors: ContactFormErrors = {};

    if (!values.name.trim())
      nextErrors.name = data.requiredMessage;

    if (!values.email.trim()) {
      nextErrors.email = data.requiredMessage;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = data.invalidEmailMessage;
    }

    if (!values.subject.trim())
      nextErrors.subject = data.requiredMessage;

    if (!values.message.trim())
      nextErrors.message = data.requiredMessage;

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    /*
     * Le backend Contact sera branché ici.
     *
     * Exemple futur :
     * await submitContactMessage(values)
     */
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}