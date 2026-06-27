import { Box, Typography } from "@mui/material";

import SectionTitle from "@components/section_title";
import TextLink from "@components/text_link";

import ChiefQuote from "./sub_components/chief_quote";
import ChiefSignature from "./sub_components/chief_signature";

import styles from "./styles";
import type { ChiefContentProps } from "./types";

export default function ChiefContent({
  eyebrow,
  title,
  quote,
  description,
  signature,
  action,
  showQuote,
  showSignature,
  showAction,
}: ChiefContentProps) {
  return (
    <Box sx={styles.container}>
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        sx={{ mb: 3 }}
      />

      {showQuote && <ChiefQuote>{quote}</ChiefQuote>}

      <Typography sx={styles.description}>
        {description}
      </Typography>

      {showSignature && (
        <ChiefSignature
          name={signature.name}
          title={signature.title}
        />
      )}

      {showAction && action && (
        <Box sx={styles.actionWrapper}>
          <TextLink to={action.href} sx={{ color: "primary.main" }}>
            {action.label}
          </TextLink>
        </Box>
      )}
    </Box>
  );
}