import { Box } from "@mui/material";

import Container from "@components/container";

import styles from "./styles";
import type { SectionProps } from "./types";

export default function Section({
  children,
  id,
  variant = "default",
  containerSize = "default",
  sx,
  contentSx,
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={[
        styles.root(variant),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Container
        size={containerSize}
        sx={contentSx}
      >
        {children}
      </Container>
    </Box>
  );
}