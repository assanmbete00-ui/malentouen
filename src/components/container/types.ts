import type { ContainerProps as MuiContainerProps } from "@mui/material/Container";

export type ContainerSize = "default" | "narrow" | "wide" | "full";

export type ContainerProps = MuiContainerProps & {
  size?: ContainerSize;
};