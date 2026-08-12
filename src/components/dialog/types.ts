import type { ReactNode } from "react";
import type {
  DialogProps as MuiDialogProps,
  SxProps,
  Theme,
} from "@mui/material";

export type DialogSize =
  | "small"
  | "medium"
  | "large";

export type DialogProps = {
  open: boolean;
  onClose?: MuiDialogProps["onClose"];
  title?: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  size?: DialogSize;
  dividers?: boolean;
  id?: string;
  labelledBy?: string;
  describedBy?: string;
  sx?: SxProps<Theme>;
};