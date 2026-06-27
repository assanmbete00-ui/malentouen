import useTranslate from "@hooks/use_translate";

import { HERO_CONFIG } from "../config/hero_config";
import { HERO_STATISTICS } from "../config/hero_statistics";

export default function useHero() {
  const { translate } = useTranslate();

  const badge = translate("HOME_HERO_BADGE");
  const title = translate("HOME_HERO_TITLE");
  const description = translate("HOME_HERO_DESCRIPTION");

  const primaryAction = {
    label: translate("HOME_HERO_PRIMARY_ACTION"),
    href: HERO_CONFIG.primaryActionPath,
  };

  const secondaryAction = HERO_CONFIG.showSecondaryAction
    ? {
        label: translate("HOME_HERO_SECONDARY_ACTION"),
        href: HERO_CONFIG.secondaryActionPath,
      }
    : undefined;

  const statistics = HERO_STATISTICS.map((item) => ({
    value: item.value,
    label: translate(item.labelKey),
  }));

  return {
    content: {
      badge,
      title,
      description,
      primaryAction,
      secondaryAction,
    },
    statistics,
    showStatistics: HERO_CONFIG.showStatistics,
  };
}