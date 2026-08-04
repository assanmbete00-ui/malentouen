import type { ReactElement } from "react";
import { Box, Typography,} from "@mui/material";

import Card from "@components/card";
import Section from "@components/section";
import SectionTitle from "@components/section_title";
import styles from "./styles";
import type { ValuesSectionProps } from "./types";

export default function Values({
  id,
  eyebrow,
  title,
  description,
  items,
}: ValuesSectionProps): ReactElement {
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
        align="center"
      />

      <Box sx={styles.grid}>
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.id}
              variant="default"
              sx={styles.card}
            >
              <Box sx={styles.content}>
                <Box sx={styles.iconWrapper}>
                  <Icon sx={styles.icon} />
                </Box>

                <Typography
                  component="h3"
                  variant="h5"
                  sx={styles.title}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={styles.description}
                >
                  {item.description}
                </Typography>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Section>
  );
}