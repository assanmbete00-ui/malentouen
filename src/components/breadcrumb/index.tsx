import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import styles from "./styles";
import type { BreadcrumbProps } from "./types";

export default function Breadcrumb({
  items,
  separator = "/",
  sx,
}: BreadcrumbProps) {
  return (
    <Box
      component="nav"
      aria-label="breadcrumb"
      sx={[
        styles.root,
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        const content = (
          <Box sx={styles.item}>
            {item.icon && (
              <Box
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.icon}
              </Box>
            )}

            <Typography
              component="span"
              sx={isLast ? styles.current : styles.linkText}
            >
              {item.label}
            </Typography>
          </Box>
        );

        return (
          <Box
            key={item.href ?? String(item.label)}
            sx={styles.itemWrapper}
          >
            {item.href && !isLast ? (
              <Link
                component={RouterLink}
                to={item.href}
                underline="none"
                sx={styles.link}
              >
                {content}
              </Link>
            ) : (
              content
            )}

            {!isLast && (
              <Typography
                component="span"
                sx={styles.separator}
              >
                {separator}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
}