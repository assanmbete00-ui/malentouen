import { Box, Typography } from "@mui/material";

import { ORGANIZATION } from "@constants/organization";

import styles from "./styles";

export default function FooterBottom() {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>
        {ORGANIZATION.copyright}
      </Typography>

      <Typography sx={styles.credit}>
        Préserver le patrimoine • Valoriser la tradition • Servir la communauté
      </Typography>
    </Box>
  );
}