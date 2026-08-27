import { Box, Typography } from "@mui/material";

import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { EventsAgendaProps } from "./types";

export default function EventsAgenda({
  id,
  eyebrow,
  title,
  description,
  items,
}: EventsAgendaProps) {
  if (!items.length) return null;

  return (
    <Section id={id} variant="paper" containerSize="wide">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        align="left"
      />

      <Box sx={styles.list}>
        {items.map((item) => (
          <Box component="article" key={item.id} sx={styles.item}>
            <Box sx={styles.dateColumn}>
              <Typography
                component="time"
                dateTime={item.dateTime}
                sx={styles.date}
              >
                {item.date}
              </Typography>

              <Typography component="span" sx={styles.category}>
                {item.category}
              </Typography>
            </Box>

            <Box sx={styles.content}>
              <Typography component="h3" sx={styles.title}>
                {item.title}
              </Typography>
            </Box>

            <Box sx={styles.meta}>
              <Typography component="span" sx={styles.time}>
                {item.time}
              </Typography>

              <Typography component="span" sx={styles.location}>
                {item.location}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
