import { Box } from "@mui/material";

import StatCard from "@components/stat_card";

import * as styles from "./styles";
import type { StatsGridProps } from "./types";

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <Box sx={styles.grid}>
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <StatCard
            key={stat.id}
            value={stat.value}
            label={stat.label}
            description={stat.description}
            icon={<Icon size={22} />}
          />
        );
      })}
    </Box>
  );
}
