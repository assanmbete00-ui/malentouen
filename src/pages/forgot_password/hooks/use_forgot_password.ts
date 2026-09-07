import useTranslate from "@hooks/use_translate";

export default function useForgotPassword() {
  const { translate } = useTranslate();

  return {
    title: translate("LOGIN_FORGOT_TITLE"),
    description: translate("LOGIN_FORGOT_DESCRIPTION"),
    backLabel: translate("LOGIN_FORGOT_BACK"),
  };
}
