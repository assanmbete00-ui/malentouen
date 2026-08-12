import { Box } from "@mui/material";
import ProjectsCard from "@components/projects_card";

import styles from "./styles";
import type { ProjectsListProps } from "./types";

export default function ProjectsList({
  items,
}: ProjectsListProps) {
  if (!items.length) {
    return null;
  }

  return (
    <Box sx={styles.grid}>
      {items.map((item) => (
        <ProjectsCard
          key={item.id}
          image={item.image}
          imageAlt={item.imageAlt}
          title={item.title}
          description={item.description}
          href={item.href}
        />
      ))}
    </Box>
  );
}