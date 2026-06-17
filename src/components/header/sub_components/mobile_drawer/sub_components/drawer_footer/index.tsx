import { Box, Typography } from "@mui/material";

import { ORGANIZATION } from "@constants/organization";

import styles from "./styles";

export default function DrawerFooter() {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>
        {ORGANIZATION.copyright}
      </Typography>
    </Box>
  );
}