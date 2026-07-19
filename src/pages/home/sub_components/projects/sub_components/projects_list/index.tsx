import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import styles from "./styles";
import type { ProjectsListProps } from "./types";

export default function ProjectsList({
  items,
}: ProjectsListProps) {
  if (!items.length) return null;

  return (
    <Box sx={styles.grid}>
      {items.map((item) => (
        <Box
          key={item.id}
          component={RouterLink}
          to={item.href ?? "/projects"}
          sx={{
            ...styles.item,
            textDecoration: "none",
            color: "inherit",
          }}
        >
     <Box sx={styles.mediaContainer}>
        <Box
          component="img"
          src={item.image}
          alt={typeof item.title === "string" ? item.title : ""}
          sx={styles.image}
        />
     </Box>

          <Typography variant="h6" sx={styles.title}>
            {item.title}
          </Typography>

          <Typography sx={styles.description}>
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}