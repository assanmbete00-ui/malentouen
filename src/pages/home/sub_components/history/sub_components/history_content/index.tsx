import { Box, Typography } from "@mui/material";

import SectionTitle from "@components/section_title";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { HistoryContentProps } from "./types";

export default function HistoryContent({
  eyebrow,
  title,
  description,
  description2,
  action,
  showAction,
}: HistoryContentProps) {
  return (
    <Box sx={styles.container}>
      <SectionTitle eyebrow={eyebrow} title={title} />

      <Typography sx={styles.description}>{description}</Typography>

      <Typography sx={styles.description2}>{description2}</Typography>

      {showAction && action && (
        <Box sx={styles.action}>
          <TextLink
            to={action.href}
            sx={{
              color: "primary.main",
            }}
          >
            {action.label}
          </TextLink>
        </Box>
      )}
    </Box>
  );
}
