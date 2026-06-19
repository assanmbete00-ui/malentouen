import { Typography } from "@mui/material";
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
      <Typography sx={styles.item}>
        <LocationOnOutlinedIcon sx={styles.icon} />
        {ORGANIZATION.address}
      </Typography>

      <Typography sx={styles.item}>
        <PhoneOutlinedIcon sx={styles.icon} />
        {ORGANIZATION.phone}
      </Typography>

      <Typography sx={styles.item}>
        <MailOutlineOutlinedIcon sx={styles.icon} />
        {ORGANIZATION.email}
      </Typography>

      <Typography sx={styles.item}>
        <LanguageOutlinedIcon sx={styles.icon} />
        {ORGANIZATION.website}
      </Typography>
    </FooterSection>
  );
}