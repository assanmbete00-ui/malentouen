import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link as RouterLink } from "react-router-dom";

import Section from "@components/section";
import SectionTitle from "@components/section_title";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { OfficialUpdatesSectionProps } from "./types";

export default function OfficialUpdates({
  id,
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  items,
}: OfficialUpdatesSectionProps): ReactElement | null {
  if (!items.length) return null;

  return (
    <Section id={id} variant="default" containerSize="wide">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        action={
          <TextLink to={actionHref} sx={styles.headerAction}>
            {actionLabel}
          </TextLink>
        }
      />

      <Box sx={styles.list}>
        {items.map((item) => (
          <Box key={item.id} sx={styles.item}>
            <Typography component="time" dateTime={item.publishedAt} sx={styles.date}>
              {item.formattedDate}
            </Typography>

            <Box sx={styles.content}>
              <Typography component="h3" sx={styles.title}>
                {item.title}
              </Typography>

              <Typography sx={styles.excerpt}>
                {item.excerpt}
              </Typography>
            </Box>

            <Box component={RouterLink} to={item.href} sx={styles.link}>
              {actionLabel}
              <ArrowForwardRoundedIcon fontSize="small" />
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}