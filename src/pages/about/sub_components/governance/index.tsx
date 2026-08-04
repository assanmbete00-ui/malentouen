import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import Card from "@components/card";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { GovernanceSectionProps } from "./types";

export default function Governance({
  id,
  eyebrow,
  title,
  description,
  items,
}: GovernanceSectionProps): ReactElement | null {
  if (!items.length) return null;

  const [chief, ...secondaryItems] = items;

  return (
    <Section
      id={id}
      variant="default"
      containerSize="wide"
    >
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        align="center"
      />

      <Box sx={styles.content}>
        <Box sx={styles.chiefWrapper}>
          <Card
            variant="default"
            sx={styles.chiefCard}
          >
            <Box sx={styles.chiefContent}>
              <Typography
                component="h3"
                variant="h4"
                sx={styles.chiefTitle}
              >
                {chief.title}
              </Typography>

              <Typography
                variant="body1"
                sx={styles.chiefDescription}
              >
                {chief.description}
              </Typography>
            </Box>
          </Card>
        </Box>

        {secondaryItems.length > 0 && (
          <>
            <Box
              aria-hidden="true"
              sx={styles.divider}
            />

            <Box sx={styles.grid}>
              {secondaryItems.map((item) => (
                <Card
                  key={item.id}
                  variant="default"
                  sx={styles.card}
                >
                  <Box sx={styles.cardContent}>
                    <Typography
                      component="h3"
                      variant="h5"
                      sx={styles.cardTitle}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={styles.cardDescription}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Section>
  );
}