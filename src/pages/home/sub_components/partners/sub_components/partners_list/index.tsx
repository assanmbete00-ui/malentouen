import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import styles from "./styles";
import type { PartnersListProps } from "./types";

export default function PartnersList({ items }: PartnersListProps) {
  if (!items.length) return null;

  return (
    <Box sx={styles.grid}>
      {items.map((item) => (
        <Box
          key={item.id}
          component={RouterLink}
          to={item.href || "/contact"}
          className="partner-item"
          sx={styles.item}
        >
          <Box
            component="img"
            src={item.image}
            alt={typeof item.name === "string" ? item.name : "Partenaire"}
            sx={styles.logo}
          />

          <Typography sx={styles.name}>
            {item.name}
          </Typography>

          <Typography sx={styles.type}>
            {item.type}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
