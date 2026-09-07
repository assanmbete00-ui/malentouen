import { useLocation } from "react-router-dom";

import useTranslate from "@hooks/use_translate";
import { ORGANIZATION } from "@constants/organization";
import { ADMIN_NAV_GROUPS } from "../../../config/admin_nav_config";

type NavItemView = {
  id: string;
  label: string;
  path: string;
  Icon: React.ElementType;
  active: boolean;
};

type NavGroupView = {
  id: string;
  label: string;
  items: NavItemView[];
};

type UseAdminSidebarReturn = {
  brandInitial: string;
  brandName: string;
  brandSubtitle: string;
  navAriaLabel: string;
  groups: NavGroupView[];
};

export default function useAdminSidebar(): UseAdminSidebarReturn {
  const { translate } = useTranslate();
  const { pathname } = useLocation();

  const isActive = (path: string) =>
    path === "/admin" ? pathname === "/admin" : pathname.startsWith(path);

  const groups: NavGroupView[] = ADMIN_NAV_GROUPS.map((group) => ({
    id: group.id,
    label: translate(group.labelKey),
    items: group.items.map(({ id, labelKey, path, Icon }) => ({
      id,
      label: translate(labelKey),
      path,
      Icon,
      active: isActive(path),
    })),
  }));

  return {
    brandInitial: ORGANIZATION.brandInitial,
    brandName: ORGANIZATION.shortName.split(" ").pop() ?? ORGANIZATION.shortName,
    brandSubtitle: translate("HEADER_ADMINISTRATION"),
    navAriaLabel: translate("ADMIN_SIDEBAR_NAV_ARIA_LABEL"),
    groups,
  };
}
