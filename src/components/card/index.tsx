import { Card as MuiCard } from "@mui/material";

import styles from "./styles";
import type { CardProps } from "./types";

export default function Card({
  children,
  variant = "default",
  onClick,
  sx,
}: CardProps) {
  return (
    <MuiCard
      onClick={onClick}
      sx={[
        styles.root(variant),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </MuiCard>
  );
}