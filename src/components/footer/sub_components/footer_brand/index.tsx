import { Box, Typography } from "@mui/material";

import FooterSocials from "../footer_socials";
import { ORGANIZATION } from "@constants/organization";

import styles from "./styles";

export default function FooterBrand() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.identityRow}>
        <Box sx={styles.emblem}>
          {ORGANIZATION.brandInitial}
        </Box>

        <Box sx={styles.identityText}>
          <Typography component="span" sx={styles.eyebrow}>
            Chefferie Traditionnelle
          </Typography>

          <Typography component="span" sx={styles.title}>
            Malentouen
          </Typography>
        </Box>
      </Box>

      <Typography sx={styles.slogan}>
        {ORGANIZATION.slogan}
      </Typography>

      <Typography sx={styles.description}>
        {ORGANIZATION.description}
      </Typography>

      <FooterSocials />
    </Box>
  );
}