import { Box } from "@mui/material";

import CultureCard from "@components/culture_card";

import styles from "./styles";
import type { CultureGridProps } from "./types";

export default function CultureGrid({
  items,
}: CultureGridProps) {
  return (
    <Box sx={styles.root}>
      {items.map((item) => (
        <CultureCard
          key={item.id}
          image={item.image}
          category={item.category}
          title={item.title}
          description={item.description}
          href={item.href}
        />
      ))}
    </Box>
  );
}