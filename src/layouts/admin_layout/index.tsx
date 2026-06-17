import { type ReactNode } from "react";
import { Box } from "@mui/material";

import BaseLayout from "@layouts/base_layout";

import styles from "./styles";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <BaseLayout bgColor="primary">
      <Box sx={styles.container}>{children}</Box>
    </BaseLayout>
  );
}
