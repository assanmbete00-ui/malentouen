import useTranslate from "@hooks/use_translate";

import { CHIEF_MESSAGE_ASSETS } from "../config/chief_message_assets";
import { CHIEF_MESSAGE_CONFIG } from "../config/chief_message_config";

export default function useChiefMessage() {
  const { translate } = useTranslate();

  const content = {
    eyebrow: translate("HOME_CHIEF_MESSAGE_EYEBROW"),

    title: translate("HOME_CHIEF_MESSAGE_TITLE"),

    quote: translate("HOME_CHIEF_MESSAGE_QUOTE"),

    description: translate("HOME_CHIEF_MESSAGE_TEXT"),

    signature: {
      name: translate("HOME_CHIEF_MESSAGE_SIGNATURE_NAME"),

      title: translate("HOME_CHIEF_MESSAGE_SIGNATURE_TITLE"),
    },
  };

  const media = {
    portrait: CHIEF_MESSAGE_ASSETS.portrait,
  };

  const action = {
    label: translate("HOME_CHIEF_MESSAGE_ACTION"),

    href: CHIEF_MESSAGE_CONFIG.actionPath,
  };

  const options = {
    showPortrait: CHIEF_MESSAGE_CONFIG.showPortrait,

    showQuote: CHIEF_MESSAGE_CONFIG.showQuote,

    showSignature: CHIEF_MESSAGE_CONFIG.showSignature,

    showAction: CHIEF_MESSAGE_CONFIG.showAction,
  };

  return {
    content,
    media,
    action,
    options,
  };
}