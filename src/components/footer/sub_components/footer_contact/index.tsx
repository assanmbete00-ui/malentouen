import Link from "@mui/material/Link";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

import FooterSection from "../footer_section";
import { ORGANIZATION } from "@constants/organization";

import styles from "./styles";

export default function FooterContact() {
  return (
    <FooterSection title="Contact">
      <Link href="#" underline="none" sx={styles.item}>
        <LocationOnOutlinedIcon sx={styles.icon} />
        {ORGANIZATION.address}
      </Link>

      <Link
        href={`tel:${ORGANIZATION.phone}`}
        underline="none"
        sx={styles.item}
      >
        <PhoneOutlinedIcon sx={styles.icon} />
        {ORGANIZATION.phone}
      </Link>

      <Link
        href={`mailto:${ORGANIZATION.email}`}
        underline="none"
        sx={styles.item}
      >
        <MailOutlineOutlinedIcon sx={styles.icon} />
        {ORGANIZATION.email}
      </Link>

      <Link
        href={ORGANIZATION.website}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        sx={styles.item}
      >
        <LanguageOutlinedIcon sx={styles.icon} />
        Site officiel
      </Link>
    </FooterSection>
  );
}
