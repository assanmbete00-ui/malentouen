import { type ReactNode } from "react";
import { Box, Stack } from "@mui/material";

import styles from "./styles";

type BaseLayoutProps = {
  children: ReactNode;
  bgColor?: "primary" | "secondary";
};

export default function BaseLayout({ children, bgColor }: BaseLayoutProps) {
  return (
    <Box sx={styles.container(bgColor)}>
      <Stack width="100%" minHeight="100vh">
        {children}
      </Stack>
    </Box>
  );
}