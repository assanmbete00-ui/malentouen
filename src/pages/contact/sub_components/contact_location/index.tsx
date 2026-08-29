import { Box, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { ContactLocationProps } from "./types";

export default function ContactLocation({
  id,
  eyebrow,
  title,
  description,
  addressLabel,
  address,
}: ContactLocationProps) {
  return (
    <Section
      id={id}
      variant="secondary"
      spacing="spacious"
    >
      <Box sx={styles.layout}>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
        />

        <Box sx={styles.addressBox}>
          <Box sx={styles.iconBox}>
            <LocationOnOutlinedIcon sx={styles.icon} />
          </Box>

          <Typography sx={styles.label}>
            {addressLabel}
          </Typography>

          <Typography sx={styles.address}>
            {address}
          </Typography>
        </Box>
      </Box>
    </Section>
  );
}