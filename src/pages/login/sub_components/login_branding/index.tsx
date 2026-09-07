import { Box, Typography } from "@mui/material";

import Logo from "@components/logo";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { LoginBrandingProps } from "./types";

export default function LoginBranding({
  eyebrow,
  title,
  description,
  backLabel,
}: LoginBrandingProps) {
  return (
    <Box sx={styles.container}>
      <Box>
        <Logo variant="footer" />

        <Typography component="span" sx={styles.eyebrow}>
          {eyebrow}
        </Typography>

        <Typography component="h1" sx={styles.title}>
          {title}
        </Typography>

        <Typography sx={styles.description}>{description}</Typography>
      </Box>

      <TextLink to="/" sx={styles.backLink}>
        {backLabel}
      </TextLink>
    </Box>
  );
}
