import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

import FooterSection from "../footer_section";

import { NAVIGATION_ITEMS } from "@constants/navigation";

import styles from "./styles";

export default function FooterNavigation() {
  return (
    <FooterSection title="Découvrir">
      {NAVIGATION_ITEMS.filter((item) => item.visible).map((item) => (
        <Link
          key={item.id}
          component={RouterLink}
          to={item.path}
          underline="none"
          sx={styles.link}
        >
          {item.label}
        </Link>
      ))}
    </FooterSection>
  );
}