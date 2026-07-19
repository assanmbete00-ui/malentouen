import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ScheduleIcon from "@mui/icons-material/Schedule";

import styles from "./styles";
import type { ContactInformationProps } from "./types";
import type { ContactItemIcon } from "../../types";

function getIcon(icon: ContactItemIcon) {
  const icons = {
    location: <LocationOnIcon fontSize="small" />,
    phone: <PhoneIcon fontSize="small" />,
    email: <EmailIcon fontSize="small" />,
    hours: <ScheduleIcon fontSize="small" />,
  };

  return icons[icon];
}

export default function ContactInformation({
  items,
}: ContactInformationProps) {
  if (!items.length) return null;

  return (
    <Box sx={styles.grid}>
      {items.map((item) => (
        <Box key={item.id} sx={styles.item}>
          <Box sx={styles.iconBox}>
            {getIcon(item.icon)}
          </Box>

          <Box>
            <Typography sx={styles.label}>
              {item.label}
            </Typography>

            <Typography sx={styles.value}>
              {item.value}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}