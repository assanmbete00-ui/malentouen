import MuiAlert from "@mui/material/Alert";

import styles from "./styles";
import type { AlertProps } from "./types";

export default function Alert({ sx, ...props }: AlertProps) {
  return (
    <MuiAlert
      {...props}
      sx={[
        styles.root,
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  );
}