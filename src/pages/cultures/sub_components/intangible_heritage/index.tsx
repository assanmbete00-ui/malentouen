import type { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { IntangibleHeritageSectionProps } from "./types";

export default function IntangibleHeritage({
  id,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  items,
}: IntangibleHeritageSectionProps):
  ReactElement | null {
  if (!items.length) {
    return null;
  }

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
        align="left"
      />

      <Box sx={styles.content}>
        <Box sx={styles.list}>
          {items.map((item, index) => {
            const order = String(index + 1)
              .padStart(2, "0");

            return (
              <Box
                key={item.id}
                sx={styles.item}
              >
                <Typography
                  component="span"
                  sx={styles.number}
                >
                  {order}
                </Typography>

                <Box sx={styles.itemContent}>
                  <Typography
                    component="h3"
                    variant="h5"
                    sx={styles.itemTitle}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={styles.itemDescription}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        {image && (
          <Box sx={styles.visual}>
            <MediaWithSkeleton
              src={image}
              alt={imageAlt ?? ""}
              objectFit="cover"
              objectPosition="center"
              sx={styles.media}
            />
          </Box>
        )}
      </Box>
    </Section>
  );
}