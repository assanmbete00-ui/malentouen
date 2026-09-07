import { Box, Typography } from "@mui/material";

import Button from "@components/button";
import Section from "@components/section";

import styles from "./styles";
import type { PartnershipCTAProps } from "./types";

export default function PartnershipCTA({
  id,
  title,
  description,
  action,
}: PartnershipCTAProps) {
  return (
    <Section id={id} variant="default" containerSize="default">
      <Box sx={styles.container}>
        <Box sx={styles.content}>
          <Typography component="h2" sx={styles.title}>
            {title}
          </Typography>
          <Typography sx={styles.description}>{description}</Typography>
        </Box>

        <Box sx={styles.actionBox}>
          <Button appVariant="primary" href={action.href} sx={styles.button}>
            {action.label}
          </Button>
        </Box>
      </Box>
    </Section>
  );
}
