import { Box } from "@mui/material";

import { HERO_ASSETS } from "../../config/hero_assets";

import styles from "./styles";

export default function HeroBackground() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.image(HERO_ASSETS.background)} />
    </Box>
  );
}