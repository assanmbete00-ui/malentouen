import { Box, Typography } from "@mui/material";

import * as styles from "./styles";
import type { PendingAction } from "../../types";

type PendingActionsProps = {
  title: string;
  actions: PendingAction[];
};

export default function PendingActions({ title, actions }: PendingActionsProps) {
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>{title}</Typography>

      {actions.map((action) => (
        <Box key={action.id} sx={styles.row}>
          <Typography sx={styles.rowLabel}>{action.label}</Typography>
          <Typography sx={styles.rowCount}>{action.count}</Typography>
        </Box>
      ))}
    </Box>
  );
}
