import type { CSSProperties } from "react";

import type {
  SxProps,
  Theme,
} from "@mui/material";

const root: SxProps<Theme> = {
  position: "relative",

  overflow: "hidden",

  bgcolor: "background.paper",
};

const loadingBox: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: 2,

  overflow: "hidden",
};

const skeleton: SxProps<Theme> = {
  width: "100%",
  height: "100%",
};

const iconWrapper: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: 1,

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
  isLoading: boolean,
  clickable: boolean,
): SxProps<Theme> => ({
  display: "block",

  width: "100%",
  height: "100%",

  objectFit,
  objectPosition,

  opacity: isLoading
    ? 0
    : 1,

  cursor: clickable
    ? "pointer"
    : "default",

  transition: "opacity .3s ease",
});

const errorBox = (
  clickable: boolean,
): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",

  px: 3,

  bgcolor: "background.default",

  cursor: clickable
    ? "pointer"
    : "default",

  textAlign: "center",
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
  root,
  loadingBox,
  skeleton,
  iconWrapper,
  loadingIcon,
  media,
  errorBox,
  errorIcon,
  errorContent,
};