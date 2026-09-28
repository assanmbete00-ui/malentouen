import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

import { ORGANIZATION } from "@constants/organization";

import styles from "./styles";
import type { LogoProps } from "./types";

export default function Logo({
  variant = "default",
  transparent = false,
}: LogoProps) {
  return (
    <Box
      component={RouterLink}
      to="/"
      aria-label={ORGANIZATION.logoAlt}
      sx={styles.container(variant, transparent)}
    >
      <Box
        component="img"
        src={ORGANIZATION.brand.logo}
        alt=""
        aria-hidden="true"
        draggable={false}
        sx={styles.image(variant)}
      />
    </Box>
  );
}