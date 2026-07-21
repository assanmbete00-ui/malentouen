import useTranslate from "@hooks/use_translate";

import { CONTACT_CONFIG } from "../config/contact_config";
import { CONTACT_ITEMS } from "../config/contact_items";

export default function useContact() {
  const { translate } = useTranslate();

  const content = {
    eyebrow: translate("HOME_CONTACT_EYEBROW"),
    title: translate("HOME_CONTACT_TITLE"),
    description: translate("HOME_CONTACT_DESCRIPTION"),
  };

  const action = {
    label: translate("HOME_CONTACT_ACTION"),
    href: CONTACT_CONFIG.actionPath,
  };

  const items = CONTACT_ITEMS.map((item) => ({
    id: item.id,
    icon: item.icon,
    label: translate(item.labelKey),
    value: translate(item.valueKey),
  }));

  const map = {
    query: CONTACT_CONFIG.map.query,
    title: CONTACT_CONFIG.map.title,
  };

  const options = {
    showInformation: CONTACT_CONFIG.showInformation,
    showAction: CONTACT_CONFIG.showAction,
  };

  return {
    content,
    action,
    items,
    map,
    options,
  };
}