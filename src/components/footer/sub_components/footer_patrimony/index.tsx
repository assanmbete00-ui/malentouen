import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import FooterSection from "../footer_section";

import styles from "./styles";

const PATRIMONY_LINKS = [
  {
    id: "history",
    label: "Histoire",
    path: "/about",
  },
  {
    id: "culture",
    label: "Culture",
    path: "/cultures",
  },
  {
    id: "traditions",
    label: "Traditions",
    path: "/cultures",
  },
  {
    id: "gallery",
    label: "Galerie",
    path: "/gallery",
  },
];

export default function FooterPatrimony() {
  return (
    <FooterSection title="Notre patrimoine">
      {PATRIMONY_LINKS.map((item) => (
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