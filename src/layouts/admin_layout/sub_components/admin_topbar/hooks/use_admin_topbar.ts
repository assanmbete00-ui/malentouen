import { useAdminTheme } from "@theme/AdminThemeProvider";
import useTranslate from "@hooks/use_translate";

type UseAdminTopbarReturn = {
  isLightMode: boolean;
  toggleTheme: () => void;
  menuLabel: string;
  menuAriaLabel: string;
  themeLabel: string;
  themeAriaLabel: string;
};

export default function useAdminTopbar(): UseAdminTopbarReturn {
  const { mode, toggleTheme } = useAdminTheme();
  const { translate } = useTranslate();

  const isLightMode = mode === "light";

  return {
    isLightMode,
    toggleTheme,
    menuLabel: translate("ADMIN_TOPBAR_MENU"),
    menuAriaLabel: translate("ADMIN_TOPBAR_OPEN_MENU"),
    themeLabel: isLightMode
      ? translate("ADMIN_TOPBAR_DARK_MODE")
      : translate("ADMIN_TOPBAR_LIGHT_MODE"),
    themeAriaLabel: isLightMode
      ? translate("ADMIN_TOPBAR_ENABLE_DARK")
      : translate("ADMIN_TOPBAR_ENABLE_LIGHT"),
  };
}
