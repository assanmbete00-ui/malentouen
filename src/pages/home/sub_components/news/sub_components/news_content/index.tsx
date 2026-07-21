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
      <Box sx={styles.heading}>
        <Box sx={styles.title}>
          <SectionTitle eyebrow={eyebrow} title={title} />
        </Box>

        {action && (
          <Box sx={styles.action}>
            <TextLink to={action.href} sx={styles.actionLink}>
              {action.label}
            </TextLink>
          </Box>
        )}
      </Box>

      <Typography sx={styles.description}>{description}</Typography>
    </Box>
  );
}