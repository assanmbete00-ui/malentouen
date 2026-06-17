import type { SxProps, Theme } from "@mui/material";

const container = (
  width: number | string,
  height: number | string,
  borderRadius: number | string
): SxProps<Theme> => ({
  position: "relative",
  width,
  height,
  borderRadius,
  overflow: "hidden",
  bgcolor: "background.paper",
});

const loadingBox: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
};

const skeleton: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: 1,
};

const iconWrapper: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const loadingIcon: SxProps<Theme> = {
  fontSize: 40,
  opacity: 0.5,
};

const media = (
  objectFit: React.CSSProperties["objectFit"],
  borderRadius: number | string,
  isLoading: boolean,
  clickable: boolean
): SxProps<Theme> => ({
  width: "100%",
  height: "100%",
  objectFit,
  borderRadius,
  display: isLoading ? "none" : "block",
  cursor: clickable ? "pointer" : "default",
});

const errorBox = (borderRadius: number | string): SxProps<Theme> => ({
  width: "100%",
  height: "100%",
  borderRadius,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "background.default",
  border: "1px solid",
  borderColor: "divider",
});

const errorIcon: SxProps<Theme> = {
  fontSize: 42,
  color: "text.disabled",
};

const errorText: SxProps<Theme> = {
  mt: 1,
  px: 2,
  textAlign: "center",
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
  errorText,
};