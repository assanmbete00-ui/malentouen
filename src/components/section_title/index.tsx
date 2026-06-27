import { Box, Typography } from "@mui/material";

import styles from "./styles";
import type { SectionTitleProps } from "./types";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  action,
  align = "left",
  sx,
}: SectionTitleProps) {
  return (
    <Box
      sx={[
        styles.container(align),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Box sx={styles.top}>
        <Box sx={styles.textContent(align)}>
          {eyebrow && (
            <Typography component="span" sx={styles.eyebrow}>
              {eyebrow}
            </Typography>
          )}

          <Typography variant="h2" sx={styles.title(align)}>
            {title}
          </Typography>

          {subtitle && (
            <Typography sx={styles.subtitle}>
              {subtitle}
            </Typography>
          )}
        </Box>

        {action && (
          <Box sx={styles.action}>
            {action}
          </Box>
        )}
      </Box>
    </Box>
  );
}