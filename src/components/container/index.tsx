import { Container as MuiContainer } from "@mui/material";

import styles from "./styles";
import type { ContainerProps } from "./types";

export default function Container({
  children,
  sx,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <MuiContainer
      maxWidth={false}
      disableGutters
      {...props}
      sx={[
        styles.root(size),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </MuiContainer>
  );
}