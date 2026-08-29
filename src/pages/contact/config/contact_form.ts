export const CONTACT_FORM = {
  id: "contact-form",

  eyebrowKey: "CONTACT_FORM_EYEBROW",
  titleKey: "CONTACT_FORM_TITLE",
  descriptionKey: "CONTACT_FORM_DESCRIPTION",

  fields: {
    name: {
      labelKey: "CONTACT_FORM_NAME_LABEL",
      placeholderKey: "CONTACT_FORM_NAME_PLACEHOLDER",
    },
    email: {
      labelKey: "CONTACT_FORM_EMAIL_LABEL",
      placeholderKey: "CONTACT_FORM_EMAIL_PLACEHOLDER",
    },
    phone: {
      labelKey: "CONTACT_FORM_PHONE_LABEL",
      placeholderKey: "CONTACT_FORM_PHONE_PLACEHOLDER",
    },
    subject: {
      labelKey: "CONTACT_FORM_SUBJECT_LABEL",
      placeholderKey: "CONTACT_FORM_SUBJECT_PLACEHOLDER",
    },
    message: {
      labelKey: "CONTACT_FORM_MESSAGE_LABEL",
      placeholderKey: "CONTACT_FORM_MESSAGE_PLACEHOLDER",
    },
  },

  submitKey: "CONTACT_FORM_SUBMIT",
  requiredKey: "CONTACT_FORM_REQUIRED",
  invalidEmailKey: "CONTACT_FORM_INVALID_EMAIL",
} as const;