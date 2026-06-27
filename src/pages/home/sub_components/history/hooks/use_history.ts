import useTranslate from "@hooks/use_translate";

import { HISTORY_ASSETS } from "../config/history_assets";
import { HISTORY_CONFIG } from "../config/history_config";
import { HISTORY_TIMELINE } from "../config/history_timeline";

export default function useHistory() {
  const { translate } = useTranslate();

  const content = {
    eyebrow: translate("HOME_HISTORY_EYEBROW"),

    title: translate("HOME_HISTORY_TITLE"),

    description: translate("HOME_HISTORY_DESCRIPTION"),
  };

  const media = {
    image: HISTORY_ASSETS.image,
  };

  const action = {
    label: translate("HOME_HISTORY_ACTION"),

    href: HISTORY_CONFIG.actionPath,
  };

  const timeline = HISTORY_TIMELINE.map((item) => ({
    id: item.id,

    period: translate(item.periodKey),

    title: translate(item.titleKey),
  }));

  const options = {
    showImage: HISTORY_CONFIG.showImage,

    showTimeline: HISTORY_CONFIG.showTimeline,

    showAction: HISTORY_CONFIG.showAction,
  };

  return {
    content,
    media,
    action,
    timeline,
    options,
  };
}