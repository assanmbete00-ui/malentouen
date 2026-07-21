import { Box } from "@mui/material";

import styles from "./styles";
import type { ContactMapProps } from "./types";

export default function ContactMap({
  query,
  title,
}: ContactMapProps) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    query,
  )}&output=embed`;

  return (
    <Box sx={styles.container}>
      <Box
        component="iframe"
        title={title}
        src={mapUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        sx={styles.map}
      />
    </Box>
  );
}