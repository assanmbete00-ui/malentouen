import { Box, Typography } from "@mui/material";

import { ORGANIZATION } from "@constants/organization";

import styles from "./styles";

export default function FooterBottom() {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.copyright}>
        {ORGANIZATION.copyright}
      </Typography>

      <Typography sx={styles.motto}>
        Préserver notre héritage • Valoriser notre culture • Construire notre avenir
      </Typography>
    </Box>
  );
}