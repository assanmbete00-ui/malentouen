import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

import styles from "./styles";
import type { LoginFooterProps } from "./types";

export default function LoginFooter({
  copyright,
  privacyLabel,
}: LoginFooterProps) {
  return (
    <Typography component="footer" sx={styles.container}>
      <span>{copyright}</span>
      <Link component={RouterLink} to="/policy" sx={styles.link}>
        {privacyLabel}
      </Link>
    </Typography>
  );
}
