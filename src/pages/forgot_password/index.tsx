import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import useForgotPassword from "./hooks/use_forgot_password";
import styles from "./styles";

export default function ForgotPasswordPage() {
  const content = useForgotPassword();

  return (
    <Box sx={styles.container}>
      <Typography component="h1" variant="h4">
        {content.title}
      </Typography>
      <Typography sx={styles.description}>{content.description}</Typography>
      <Typography component={RouterLink} to="/admin/login" sx={styles.link}>
        {content.backLabel}
      </Typography>
    </Box>
  );
}
