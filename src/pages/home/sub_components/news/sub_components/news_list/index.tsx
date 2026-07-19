import { Box } from "@mui/material";
import NewsCard from "@components/news_card";

import styles from "./styles";
import type { NewsListProps } from "./types";

export default function NewsList({ items }: NewsListProps) {
  if (!items.length) return null;

  return (
    <Box sx={styles.grid}>
      {items.map((item) => (
        <NewsCard
          key={item.id}
          image={item.image}
          category={item.category}
          date={item.date}
          title={item.title}
          description={item.description}
          href={item.href}
        />
      ))}
    </Box>
  );
}