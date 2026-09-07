import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import * as styles from "./styles";
import type { QuickActionItem } from "../../types";

type QuickActionsProps = {
  title: string;
  actions: QuickActionItem[];
};

export default function QuickActions({ title, actions }: QuickActionsProps) {
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>{title}</Typography>

      <Box sx={styles.list}>
        {actions.map(({ id, label, icon: Icon, path }) => {
          const content = (
            <>
              <Box sx={styles.actionIcon}>
                <Icon size={16} />
              </Box>
              <Typography sx={styles.actionLabel}>{label}</Typography>
            </>
          );

          return path ? (
            <Box key={id} component={Link} to={path} sx={styles.actionItem}>
              {content}
            </Box>
          ) : (
            <Box key={id} sx={styles.actionItem}>
              {content}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
