import { Box, Typography } from "@mui/material";

import Logo from "../../../header/sub_components/logo";
import { ORGANIZATION } from "@constants/organization";

import styles from "./styles";
import type { FooterBrandProps } from "./types";

export default function FooterBrand({}: FooterBrandProps) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.logo}>
        <Logo />
      </Box>

      <Typography variant="h6" sx={styles.title}>
        {ORGANIZATION.fullName}
      </Typography>

      <Typography sx={styles.slogan}>
        {ORGANIZATION.slogan}
      </Typography>

      <Typography sx={styles.description}>
        {ORGANIZATION.description}
      </Typography>
    </Box>
  );
}