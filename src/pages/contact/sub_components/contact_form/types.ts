import type {
  ChangeEvent,
  FormEvent,
} from "react";

import type {
  ContactFormData,
  ContactFormErrors,
  ContactFormValues,
} from "../../types";

export type ContactFormProps = ContactFormData & {
  values: ContactFormValues;
  errors: ContactFormErrors;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};