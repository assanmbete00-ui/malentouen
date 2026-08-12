import type { KeyboardEvent } from "react";
import { Card as MuiCard } from "@mui/material";

import styles from "./styles";
import type { CardProps } from "./types";

export default function Card({
  children,
  variant = "default",
  onClick,
  onKeyDown,
  sx,
}: CardProps) {
  const isClickable = Boolean(onClick);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (onKeyDown) {
      onKeyDown(e);
      return;
    }
    if (isClickable && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <MuiCard
      onClick={onClick}
      onKeyDown={isClickable ? handleKeyDown : undefined}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      sx={[
        styles.root(variant, isClickable),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </MuiCard>
  );
}