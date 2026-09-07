import { Box } from "@mui/material";

import MediaWithSkeleton from "@components/media_with_skeleton";

import styles from "./styles";
import type { PartnersLogosProps } from "./types";

export default function PartnersLogos({
  items,
}: PartnersLogosProps) {
  if (!items.length) return null;

  const sequence = (suffix: string) => (
    <Box sx={styles.sequence}>
      {items.map((item) => (
        <Box
          key={`${item.id}-${suffix}`}
          className="partner-logo"
          sx={styles.item}
        >
          <MediaWithSkeleton
            src={item.image}
            alt={typeof item.name === "string" ? item.name : ""}
            sx={styles.logo}
          />
        </Box>
      ))}
    </Box>
  );

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.rail}>
        {sequence("primary")}
        <Box aria-hidden="true">{sequence("duplicate")}</Box>
      </Box>
    </Box>
  );
}