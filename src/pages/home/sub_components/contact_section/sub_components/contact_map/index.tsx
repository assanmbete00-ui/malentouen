import { Box } from "@mui/material";

import styles from "./styles";
import type { ContactMapProps } from "./types";

export default function ContactMap({
  title = "Carte de localisation",
}: ContactMapProps) {
  return <Box sx={styles.container}>{title}</Box>;
}