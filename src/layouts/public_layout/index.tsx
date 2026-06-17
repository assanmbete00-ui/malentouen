import { type ReactNode } from "react";
import { Box } from "@mui/material";

import BaseLayout from "@layouts/base_layout";

import styles from "./styles";

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <BaseLayout bgColor="secondary">
      <Box sx={styles.container}>{children}</Box>
    </BaseLayout>
  );
}
