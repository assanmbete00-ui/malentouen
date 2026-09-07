import { Box, Typography } from "@mui/material";

import FooterSocials from "../footer_socials";
import Logo from "@components/logo";

import styles from "./styles";
import type { FooterBrandProps } from "./types";

export default function FooterBrand({
  slogan,
  description,
  showSocials,
  socials,
}: FooterBrandProps) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.identityRow}>
        <Logo variant="footer" />
      </Box>

      <Typography sx={styles.slogan}>{slogan}</Typography>

      <Typography sx={styles.description}>{description}</Typography>

      {showSocials && <FooterSocials {...socials} />}
    </Box>
  );
}
