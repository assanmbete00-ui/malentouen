import type { SxProps, Theme } from "@mui/material";
import type { LogoVariant } from "./types";

const container = (variant: LogoVariant): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  gap: variant === "compact" ? 1 : 1.5,
  textDecoration: "none",
  color: "inherit",
});

const emblem = (variant: LogoVariant): SxProps<Theme> => ({
  width: variant === "compact" ? 42 : 54,
  height: variant === "compact" ? 42 : 54,
  borderRadius: "50%",
  bgcolor: "secondary.main",
  color: "primary.main",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  fontSize: variant === "compact" ? 18 : 22,
  flexShrink: 0,
});

const textWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  lineHeight: 1.1,
};

const eyebrow: SxProps<Theme> = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "secondary.main",
};

const title = (variant: LogoVariant): SxProps<Theme> => ({
  fontSize: variant === "compact" ? 18 : 22,
  fontWeight: 900,
  color: "primary.main",
});

const subtitle = (variant: LogoVariant): SxProps<Theme> => ({
  mt: 0.4,
  fontSize: variant === "compact" ? 10 : 12,
  fontWeight: 500,
  color: "text.secondary",
  display: variant === "compact" ? "none" : "block",
});

export default {
  container,
  emblem,
  textWrapper,
  eyebrow,
  title,
  subtitle,
};