import { Box, Typography } from "@mui/material";

import TextLink from "@components/text_link";

import styles from "./styles";
import type { CultureHighlightProps } from "./types";

export default function CultureHighlight({
  image,
  title,
  description,
  action,
  showAction,
}: CultureHighlightProps) {
  return (
    <Box sx={styles.container}>
      <Box
        component="img"
        src={image}
        alt={typeof title === "string" ? title : "Culture de Malentouen"}
        sx={styles.image}
      />

      <Box sx={styles.overlay} />

      <Box sx={styles.content}>
        <Typography component="h3" sx={styles.title}>
          {title}
        </Typography>

        <Typography sx={styles.description}>
          {description}
        </Typography>

        {showAction && action && (
          <Box sx={styles.actionWrapper}>
            <TextLink to={action.href}>{action.label}</TextLink>
          </Box>
        )}
      </Box>
    </Box>
  );
}