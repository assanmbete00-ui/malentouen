import type {
  CSSProperties,
} from "react";

import type {
  SxProps,
  Theme,
} from "@mui/material";

type MediaSize = number | string;

const container = (
  width: MediaSize,
  height: MediaSize | undefined,
  aspectRatio: CSSProperties["aspectRatio"],
  borderRadius: MediaSize,
): SxProps<Theme> => ({
  position: "relative",

  width,
  height,
  aspectRatio,

  overflow: "hidden",

  borderRadius,

  bgcolor: "background.paper",
});

const loadingBox: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: 2,
};

const skeleton: SxProps<Theme> = {
  width: "100%",
  height: "100%",
};

const iconWrapper: SxProps<Theme> = {
  position: "absolute",
  inset: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  pointerEvents: "none",
};

const loadingIcon: SxProps<Theme> = {
  color: "text.disabled",
  fontSize: 40,
};

const media = (
  objectFit: CSSProperties["objectFit"],
  objectPosition: CSSProperties["objectPosition"],
  borderRadius: MediaSize,
  isLoading: boolean,
  clickable: boolean,
): SxProps<Theme> => ({
  display: "block",

  width: "100%",
  height: "100%",

  objectFit,
  objectPosition,

  borderRadius,

  opacity: isLoading ? 0 : 1,

  cursor: clickable
    ? "pointer"
    : "default",

  transition: "opacity .3s ease",
});

const errorBox = (
  borderRadius: MediaSize,
  clickable: boolean,
): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",

  px: 3,

  border: "1px solid",
  borderColor: "divider",
  borderRadius,

  bgcolor: "background.default",

  textAlign: "center",

  cursor: clickable
    ? "pointer"
    : "default",
});

const errorIcon: SxProps<Theme> = {
  color: "text.disabled",
  fontSize: 42,
};

const errorContent: SxProps<Theme> = {
  mt: 1.5,
  color: "text.secondary",
};

export default {
  container,
  loadingBox,
  skeleton,
  iconWrapper,
  loadingIcon,
  media,
  errorBox,
  errorIcon,
  errorContent,
};