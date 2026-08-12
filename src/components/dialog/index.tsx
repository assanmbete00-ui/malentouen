import {
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";

import styles from "./styles";
import type { DialogProps } from "./types";
export default function Dialog({
  open,
  onClose,
  title,
  children,
  actions,
  size = "medium",
  dividers = false,
  id,
  labelledBy,
  describedBy,
  sx,
}: DialogProps) {
  const titleId =
    labelledBy ??
    (id && title
      ? `${id}-title`
      : undefined);

  return (
    <MuiDialog
      id={id}
      open={open}
      onClose={onClose}
      aria-labelledby={titleId}
      aria-describedby={describedBy}
      fullWidth
      maxWidth={false}
      sx={[
        styles.root,
        ...(Array.isArray(sx)
          ? sx
          : sx
            ? [sx]
            : []),
      ]}
      PaperProps={{
        sx: styles.paper(size),
      }}
    >
      {title && (
        <>
          <DialogTitle
            id={titleId}
            sx={styles.title}
          >
            {title}
          </DialogTitle>

          {dividers && <Divider />}
        </>
      )}

      <DialogContent
        sx={[
          styles.content,
          ...(!title
            ? [styles.contentWithoutTitle]
            : []),
        ]}
      >
        {children}
      </DialogContent>

      {actions && (
        <>
          {dividers && <Divider />}

          <DialogActions sx={styles.actions}>
            {actions}
          </DialogActions>
        </>
      )}
    </MuiDialog>
  );
}