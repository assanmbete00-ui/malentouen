import { Box, Typography } from "@mui/material";

import * as styles from "./styles";
import type { RecentContentItem } from "../../types";

type RecentContentProps = {
  title: string;
  emptyLabel: string;
  typeLabel: string;
  statusLabel: string;
  dateLabel: string;
  items: RecentContentItem[];
};

export default function RecentContent({
  title,
  emptyLabel,
  typeLabel,
  statusLabel,
  dateLabel,
  items,
}: RecentContentProps) {
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.sectionTitle}>{title}</Typography>

      {items.length === 0 ? (
        <Box sx={styles.emptyState}>
          <Typography>{emptyLabel}</Typography>
        </Box>
      ) : (
        <>
          <Box sx={styles.header}>
            <Typography sx={styles.headerCell}>{title}</Typography>
            <Typography sx={styles.headerCell}>{typeLabel}</Typography>
            <Typography sx={styles.headerCell}>{statusLabel}</Typography>
            <Typography sx={styles.headerCell}>{dateLabel}</Typography>
          </Box>

          {items.map((item) => (
            <Box key={item.id} sx={styles.row}>
              <Typography sx={styles.rowTitle}>{item.title}</Typography>
              <Typography sx={styles.rowCell}>{item.type}</Typography>
              <Typography sx={styles.rowCell}>{item.status}</Typography>
              <Typography sx={styles.rowCell}>{item.updatedAt ?? "—"}</Typography>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
}
