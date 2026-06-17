import { Link as RouterLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import styles from "./styles";
import type { LogoProps } from "./types";

export default function Logo({ variant = "default" }: LogoProps) {
  return (
    <Box component={RouterLink} to="/" sx={styles.container(variant)}>
      <Box sx={styles.emblem(variant)}>M</Box>

      <Box sx={styles.textWrapper}>
        <Typography component="span" sx={styles.eyebrow}>
          Chefferie Traditionnelle
        </Typography>

        <Typography component="span" sx={styles.title(variant)}>
          Malentouen
        </Typography>

        <Typography component="span" sx={styles.subtitle(variant)}>
          Patrimoine • Tradition • Développement
        </Typography>
      </Box>
    </Box>
  );
}