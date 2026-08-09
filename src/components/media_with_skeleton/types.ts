import type {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
} from "react";

import type {
  SxProps,
  Theme,
} from "@mui/material";

export type MediaType = "image" | "video";

export type MediaWithSkeletonProps = {
  src: string;
  alt: string;

  type?: MediaType;
  poster?: string;

  objectFit?: CSSProperties["objectFit"];
  objectPosition?: CSSProperties["objectPosition"];

  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;

  errorContent?: ReactNode;

  sx?: SxProps<Theme>;

  onLoad?: () => void;
  onError?: () => void;
  onClick?: MouseEventHandler<HTMLElement>;
};