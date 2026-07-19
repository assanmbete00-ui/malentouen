import useTranslate from "@hooks/use_translate";

import { CTA_CONFIG } from "../config/cta_config";

export default function useCTA() {
  const { translate } = useTranslate();

  const content = {
    title: translate("HOME_CTA_TITLE"),
    description: translate("HOME_CTA_DESCRIPTION"),
  };

  const primaryAction = {
    label: translate("HOME_CTA_PRIMARY_ACTION"),
    href: CTA_CONFIG.primaryActionPath,
  };

  const secondaryAction = {
    label: translate("HOME_CTA_SECONDARY_ACTION"),
    href: CTA_CONFIG.secondaryActionPath,
  };

  const options = {
    showPrimaryAction: CTA_CONFIG.showPrimaryAction,
    showSecondaryAction: CTA_CONFIG.showSecondaryAction,
  };

  return {
    content,
    primaryAction,
    secondaryAction,
    options,
  };
}