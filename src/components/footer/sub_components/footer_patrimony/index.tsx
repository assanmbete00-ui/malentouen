import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import FooterSection from "../footer_section";

import styles from "./styles";
import type { FooterPatrimonyProps } from "./types";

export default function FooterPatrimony({
  title,
  items,
}: FooterPatrimonyProps) {
  return (
    <FooterSection title={title}>
      {items.map((item) => (
        <Link
          key={item.id}
          component={RouterLink}
          to={item.path}
          underline="none"
          sx={styles.link}
        >
          <ChevronRightRoundedIcon sx={styles.icon} />
          {item.label}
        </Link>
      ))}
    </FooterSection>
  );
}
