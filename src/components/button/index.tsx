import MuiButton from "@mui/material/Button";

import styles from "./styles";
import type { ButtonProps } from "./types";

export default function Button({
  appVariant = "primary",
  sx,
  children,
  ...props
}: ButtonProps) {
  return (
    <MuiButton
      variant="contained"
      disableElevation
      {...props}
      sx={[
        styles.button(appVariant),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </MuiButton>
  );
}