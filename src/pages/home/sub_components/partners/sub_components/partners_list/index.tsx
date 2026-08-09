import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import MediaWithSkeleton from "@components/media_with_skeleton";
import styles from "./styles";
import type { PartnersListProps } from "./types";

export default function PartnersList({ items }: PartnersListProps) {
  if (!items.length) {
    return null;
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.grid}>
        {items.map((item) => {
          const content = (
            <>
              <Box sx={styles.logoWrapper}>
                <MediaWithSkeleton
                  src={item.image}
                  alt={
                    typeof item.name === "string"
                      ? item.name
                      : "Partenaire de la Chefferie"
                  }
                  sx={styles.logo}
                />
              </Box>

              <Box sx={styles.content}>
                <Typography component="h3" sx={styles.name}>
                  {item.name}
                </Typography>

                <Typography sx={styles.type}>{item.type}</Typography>
              </Box>
            </>
          );

          if (!item.href) {
            return (
              <Box key={item.id} sx={styles.item}>
                {content}
              </Box>
            );
          }

          return (
            <Box
              key={item.id}
              component={RouterLink}
              to={item.href}
              sx={styles.item}
            >
              {content}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
