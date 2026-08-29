export const CONTACT_CHANNELS = {
  id: "contact-channels",
  eyebrowKey: "CONTACT_CHANNELS_EYEBROW",
  titleKey: "CONTACT_CHANNELS_TITLE",
  descriptionKey: "CONTACT_CHANNELS_DESCRIPTION",
  items: [
    {
      id: "location",
      icon: "location",
      labelKey: "CONTACT_CHANNEL_LOCATION_LABEL",
    },
    {
      id: "phone",
      icon: "phone",
      labelKey: "CONTACT_CHANNEL_PHONE_LABEL",
    },
    {
      id: "email",
      icon: "email",
      labelKey: "CONTACT_CHANNEL_EMAIL_LABEL",
    },
    
  ],
} as const;