import MuiTextField from "@mui/material/TextField";

import styles from "./styles";
import type { TextFieldProps } from "./types";

export default function TextField({ sx, ...props }: TextFieldProps) {
  return (
    <MuiTextField
      fullWidth
      variant="outlined"
      {...props}
      sx={[
        styles.root,
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  );
}