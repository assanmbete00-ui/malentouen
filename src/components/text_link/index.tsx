import { Link as RouterLink } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Link from "@mui/material/Link";

import styles from "./styles";
import type { TextLinkProps } from "./types";

export default function TextLink({ children, to, sx }: TextLinkProps) {
  return (
    <Link
      component={RouterLink}
      to={to}
      underline="none"
      sx={[
        styles.root,
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
      <ArrowForwardRoundedIcon sx={styles.arrow} />
    </Link>
  );
}