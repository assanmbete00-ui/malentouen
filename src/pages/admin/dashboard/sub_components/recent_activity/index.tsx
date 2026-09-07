import { Box, Typography } from "@mui/material";

import * as styles from "./styles";
import type { RecentActivityItem } from "../../types";

type RecentActivityProps = {
  title: string;
  emptyLabel: string;
  items: RecentActivityItem[];
};

export default function RecentActivity({ title, emptyLabel, items }: RecentActivityProps) {
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>{title}</Typography>

      {items.length === 0 ? (
        <Box sx={styles.emptyState}>
          <Typography>{emptyLabel}</Typography>
        </Box>
      ) : (
        items.map((item) => (
          <Box key={item.id} sx={styles.row}>
            <Typography sx={styles.rowTitle}>{item.title}</Typography>
            {item.description && (
              <Typography sx={styles.rowMeta}>{item.description}</Typography>
            )}
          </Box>
        ))
      )}
    </Box>
  );
}
