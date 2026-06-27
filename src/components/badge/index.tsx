import { Box } from "@mui/material";

import styles from "./styles";
import type { BadgeProps } from "./types";

export default function Badge({
  children,
  variant = "secondary",
  sx,
}: BadgeProps) {
  return (
    <Box
      component="span"
      sx={[
        styles.root(variant),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </Box>
  );
}