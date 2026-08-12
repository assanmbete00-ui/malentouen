import useTranslate from "@hooks/use_translate";

import { GALLERY_ASSETS } from "../config/gallery_assets";
import { GALLERY_CONFIG } from "../config/gallery_config";
import { GALLERY_ITEMS } from "../config/gallery_items";

export default function useGallery() {
  const { translate } = useTranslate();

  const content = {
    eyebrow: translate("HOME_GALLERY_EYEBROW"),
    title: translate("HOME_GALLERY_TITLE"),
    description: translate("HOME_GALLERY_DESCRIPTION"),
  };

  const action = {
    label: translate("HOME_GALLERY_ACTION"),
    href: GALLERY_CONFIG.actionPath,
  };

  const items = GALLERY_ITEMS.map((item) => ({
    id: item.id,
    image: GALLERY_ASSETS[item.imageKey],
    imageAlt: translate(item.imageAltKey),
    title: translate(item.titleKey),
    href: GALLERY_CONFIG.actionPath,
  }));

  const options = {
    showItems: GALLERY_CONFIG.showItems,
    showAction: GALLERY_CONFIG.showAction,
  };

  return {
    content,
    action,
    items,
    options,
  };
}