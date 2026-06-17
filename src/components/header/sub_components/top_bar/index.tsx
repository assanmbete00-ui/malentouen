import { Box, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import { ORGANIZATION } from "@constants/organization";

import styles from "./styles";
import type { TopBarProps } from "./types";

export default function TopBar({ showSocials = false }: TopBarProps) {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.inner}>
        <Box sx={styles.left}>
          <Typography sx={styles.infoItem}>
            <LocationOnOutlinedIcon sx={styles.icon} />
            {ORGANIZATION.address}
          </Typography>

          <Typography sx={styles.infoItem}>
            <PhoneOutlinedIcon sx={styles.icon} />
            {ORGANIZATION.phone}
          </Typography>

          <Typography sx={styles.infoItem}>
            <MailOutlineOutlinedIcon sx={styles.icon} />
            {ORGANIZATION.email}
          </Typography>
        </Box>

        <Box sx={styles.right}>
          <Typography sx={styles.language}>FR</Typography>
          <Typography sx={{ opacity: 0.5 }}>|</Typography>
          <Typography sx={styles.language}>EN</Typography>
        </Box>
      </Box>
    </Box>
  );
}