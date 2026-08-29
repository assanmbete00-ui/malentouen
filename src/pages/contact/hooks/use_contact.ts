import useTranslate from "@hooks/use_translate";
import { ORGANIZATION } from "@constants/organization";

import {
  CONTACT_BANNER,
  CONTACT_OVERVIEW,
  CONTACT_CHANNELS,
  CONTACT_FORM,
  CONTACT_LOCATION,
} from "../config";
import type {
  ContactChannelItem,
  ContactPageData,
} from "../types";

export default function useContact(): ContactPageData {
  const { translate } = useTranslate();

  const channelValues: Record<string, { value: string; href?: string }> = {
    location: { value: ORGANIZATION.address },
    phone: {
      value: ORGANIZATION.phone,
      href: `tel:${ORGANIZATION.phone}`,
    },
    email: {
      value: ORGANIZATION.email,
      href: `mailto:${ORGANIZATION.email}`,
    },
  };

  const channels = CONTACT_CHANNELS.items
    .filter((item) => item.id in channelValues)
    .map<ContactChannelItem>((item) => ({
      id: item.id,
      icon: item.icon,
      label: translate(item.labelKey),
      ...channelValues[item.id],
    }));

  return {
    banner: {
      background: {
        image: CONTACT_BANNER.image,
        alt: translate(CONTACT_BANNER.imageAltKey),
        position: CONTACT_BANNER.imagePosition,
      },
      breadcrumb: CONTACT_BANNER.breadcrumb.map((item) => ({
        label: translate(item.labelKey),
        href: "href" in item ? item.href : undefined,
      })),
      eyebrow: translate(CONTACT_BANNER.eyebrowKey),
      title: translate(CONTACT_BANNER.titleKey),
      description: translate(CONTACT_BANNER.descriptionKey),
    },

    overview: {
      id: CONTACT_OVERVIEW.id,
      eyebrow: translate(CONTACT_OVERVIEW.eyebrowKey),
      title: translate(CONTACT_OVERVIEW.titleKey),
      description: translate(CONTACT_OVERVIEW.descriptionKey),
      note: translate(CONTACT_OVERVIEW.noteKey),
    },

    channels: {
      id: CONTACT_CHANNELS.id,
      eyebrow: translate(CONTACT_CHANNELS.eyebrowKey),
      title: translate(CONTACT_CHANNELS.titleKey),
      description: translate(CONTACT_CHANNELS.descriptionKey),
      items: channels,
    },

form: {
  id: CONTACT_FORM.id,
  eyebrow: translate(CONTACT_FORM.eyebrowKey),
  title: translate(CONTACT_FORM.titleKey),
  description: translate(CONTACT_FORM.descriptionKey),

  fields: {
    name: {
      label: translate(CONTACT_FORM.fields.name.labelKey),
      placeholder: translate(CONTACT_FORM.fields.name.placeholderKey),
    },
    email: {
      label: translate(CONTACT_FORM.fields.email.labelKey),
      placeholder: translate(CONTACT_FORM.fields.email.placeholderKey),
    },
    phone: {
      label: translate(CONTACT_FORM.fields.phone.labelKey),
      placeholder: translate(CONTACT_FORM.fields.phone.placeholderKey),
    },
    subject: {
      label: translate(CONTACT_FORM.fields.subject.labelKey),
      placeholder: translate(CONTACT_FORM.fields.subject.placeholderKey),
    },
    message: {
      label: translate(CONTACT_FORM.fields.message.labelKey),
      placeholder: translate(CONTACT_FORM.fields.message.placeholderKey),
    },
  },

  submitLabel: translate(CONTACT_FORM.submitKey),
  requiredMessage: translate(CONTACT_FORM.requiredKey),
  invalidEmailMessage: translate(CONTACT_FORM.invalidEmailKey),
},

location: {
  id: CONTACT_LOCATION.id,
  eyebrow: translate(CONTACT_LOCATION.eyebrowKey),
  title: translate(CONTACT_LOCATION.titleKey),
  description: translate(CONTACT_LOCATION.descriptionKey),
  addressLabel: translate(CONTACT_LOCATION.addressLabelKey),
  address: ORGANIZATION.address,
},
  };
}