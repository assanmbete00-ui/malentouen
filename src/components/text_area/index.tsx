import TextField from "@components/text_field";

import styles from "./styles";
import type { TextAreaProps } from "./types";

export default function TextArea({
  rows = 6,
  sx,
  ...props
}: TextAreaProps) {
  return (
    <TextField
      multiline
      rows={rows}
      {...props}
      sx={[
        styles.root,
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  );
}