import { Box } from "@mui/material";

import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import SectionTitle from "@components/section_title";

import styles from "./styles";
import type { ProjectsOverviewProps } from "./types";

export default function ProjectsOverview({
  id,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
}: ProjectsOverviewProps) {
  return (
    <Section id={id} variant="default" containerSize="wide">
      <Box sx={styles.layout}>
        <Box sx={styles.media}>
          <MediaWithSkeleton
            src={image}
            alt={imageAlt}
            objectFit="cover"
            sx={styles.image}
          />
        </Box>

        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
          sx={styles.title}
        />
      </Box>
    </Section>
  );
}
