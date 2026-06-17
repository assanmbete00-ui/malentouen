import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import styles from "./styles";
import type { BreadcrumbProps } from "./types";

export default function Breadcrumb({ links }: BreadcrumbProps) {
  return (
    <Breadcrumbs separator="›" sx={styles.container}>
      {links.map((item, index) => {
        const isLast = index === links.length - 1;

        if (isLast || !item.href) {
          return (
            <Typography key={item.label} sx={styles.link(true)}>
              {item.label}
            </Typography>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            underline="hover"
            sx={styles.link(false)}
          >
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}