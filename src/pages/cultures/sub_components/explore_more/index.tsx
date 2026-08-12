import type { ReactElement } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { ExploreMoreSectionProps } from "./types";

export default function ExploreMore({
  id,
  eyebrow,
  title,
  description,
  actionLabel,
  items,
}: ExploreMoreSectionProps):
  ReactElement | null {
  if (!items.length) {
    return null;
  }

  return (
    <Section
      id={id}
      variant="paper"
      containerSize="wide"
    >
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        align="left"
      />

      <Box sx={styles.list}>
        {items.map((item) => (
          <Box
            key={item.id}
            sx={styles.item}
          >
            <Box sx={styles.content}>
              <Typography
                component="h3"
                variant="h5"
                sx={styles.title}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body1"
                sx={styles.description}
              >
                {item.description}
              </Typography>
            </Box>

            <Box
              component={RouterLink}
              to={item.href}
              sx={styles.link}
            >
              {actionLabel}

              <ArrowForwardRoundedIcon
                aria-hidden="true"
                sx={styles.icon}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}