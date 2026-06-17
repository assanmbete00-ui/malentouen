import { Box, Typography } from "@mui/material";

import Logo from "../../../logo";
import { ORGANIZATION } from "@constants/organization";

import styles from "./styles";
import type { DrawerHeaderProps } from "./types";

export default function DrawerHeader({}: DrawerHeaderProps) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.logo}>
        <Logo />
      </Box>

      <Typography variant="h6" sx={styles.title}>
        {ORGANIZATION.fullName}
      </Typography>

      <Typography sx={styles.subtitle}>
        {ORGANIZATION.slogan}
      </Typography>
    </Box>
  );
}