import useTranslate from "@hooks/use_translate";

import { PARTNERS } from "@data/partners";
import { PARTNERS_ASSETS } from "../config/partners_assets";
import { PARTNERS_CONFIG } from "../config/partners_config";

export default function usePartners() {
  const { translate } = useTranslate();

  const content = {
    eyebrow: translate("HOME_PARTNERS_EYEBROW"),
    title: translate("HOME_PARTNERS_TITLE"),
    description: translate("HOME_PARTNERS_DESCRIPTION"),
  };

  const action = {
    label: translate("HOME_PARTNERS_ACTION"),
    href: PARTNERS_CONFIG.actionPath,
  };

  const items = PARTNERS.map((item) => ({
    id: item.id,
    image: PARTNERS_ASSETS[item.imageKey],
    name: translate(item.nameKey),
    type: translate(item.typeKey),
  }));
  const options = {
    showItems: PARTNERS_CONFIG.showItems,
    showAction: PARTNERS_CONFIG.showAction,
  };

  return {
    content,
    action,
    items,
    options,
  };
}