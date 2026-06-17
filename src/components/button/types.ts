import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export type ButtonProps = Omit<MuiButtonProps, "variant" | "color"> & {
  appVariant?: ButtonVariant;
  target?: string;
  rel?: string;
};