import { Box, Typography } from "@mui/material";

import SectionTitle from "@components/section_title";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { NewsContentProps } from "./types";

export default function NewsContent({
  eyebrow,
  title,
  description,
  action,
}: NewsContentProps) {
  return (
    <Box sx={styles.container}>
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        action={
          action ? (
            <TextLink to={action.href} sx={{ color: "text.secondary" }}>
              {action.label}
            </TextLink>
          ) : undefined
        }
      />

      <Typography sx={styles.description}>{description}</Typography>
    </Box>
  );
}
