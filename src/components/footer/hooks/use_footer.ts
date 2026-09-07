import { useLocation } from "react-router-dom";
import useTranslate from "@hooks/use_translate";
import {
  NAVIGATION_ITEMS,
  isNavigationItemActive,
  type PreparedNavigationItem,
} from "@constants/navigation";
import { ORGANIZATION } from "@constants/organization";
import { SOCIALS } from "@constants/socials";
import { FOOTER_CONFIG } from "../config/footer_config";

export type FooterData = {
  navigation: PreparedNavigationItem[];
  navigationTitle: string;
  patrimony: {
    title: string;
    items: Array<{ id: string; label: string; path: string }>;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    websiteLabel: string;
  };
  brand: {
    slogan: string;
    description: string;
  };
  socials: {
    title: string;
    items: typeof SOCIALS;
  };
  bottom: {
    copyright: string;
    motto: string;
  };
};

export default function useFooter(): FooterData {
  const { pathname } = useLocation();
  const { translate } = useTranslate();

  return {
    navigation: NAVIGATION_ITEMS.filter((item) => item.visible !== false).map(
      (item) => ({
        ...item,
        label: translate(item.labelKey),
        active: isNavigationItemActive(pathname, item.path),
      }),
    ),
    navigationTitle: translate("FOOTER_NAVIGATION_TITLE"),
    patrimony: {
      title: translate("FOOTER_PATRIMONY_TITLE"),
      items: FOOTER_CONFIG.PATRIMONY_LINKS.map((item) => ({
        ...item,
        label: translate(item.labelKey),
      })),
    },
    contact: {
      title: translate("FOOTER_CONTACT_TITLE"),
      address: ORGANIZATION.address,
      phone: ORGANIZATION.phone,
      email: ORGANIZATION.email,
      website: ORGANIZATION.website,
      websiteLabel: translate("FOOTER_WEBSITE"),
    },
    brand: {
      slogan: ORGANIZATION.slogan,
      description: ORGANIZATION.description,
    },
    socials: {
      title: translate("FOOTER_SOCIALS_TITLE"),
      items: SOCIALS,
    },
    bottom: {
      copyright: ORGANIZATION.copyright,
      motto: translate("FOOTER_MOTTO"),
    },
  };
}
