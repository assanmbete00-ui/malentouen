import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

import FooterSection from "../footer_section";
import { ORGANIZATION } from "@constants/organization";

import styles from "./styles";
import type { FooterContactProps } from "./types";

export default function FooterContact({
  title,
  address,
  phone,
  email,
  website,
  websiteLabel,
}: FooterContactProps) {
  return (
    <FooterSection title={title}>
      <Typography sx={styles.item}>
        <LocationOnOutlinedIcon sx={styles.icon} />
        {address}
      </Typography>

      <Link href={`tel:${phone}`} underline="none" sx={styles.item}>
        <PhoneOutlinedIcon sx={styles.icon} />
        {phone}
      </Link>

      <Link href={`mailto:${email}`} underline="none" sx={styles.item}>
        <MailOutlineOutlinedIcon sx={styles.icon} />
        {email}
      </Link>

      <Link
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        sx={styles.item}
      >
        <LanguageOutlinedIcon sx={styles.icon} />
        {websiteLabel}
      </Link>
    </FooterSection>
  );
}
