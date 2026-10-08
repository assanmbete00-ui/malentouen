import type { SxProps, Theme } from "@mui/material";
import type { SectionTitleAlign } from "./types";

const container = (align: SectionTitleAlign): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  mb: { xs: 4, md: 5 },
  width: "100%",
  maxWidth: align === "center" ? 760 : 880,
  alignItems: align === "center" ? "center" : "flex-start",
  textAlign: align === "center" ? "center" : "left",
  mx: align === "center" ? "auto" : 0,
});

const top: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: { xs: "flex-start", sm: "space-between" },
  alignItems: { xs: "flex-start", sm: "flex-end" },
  gap: { xs: 2.5, sm: 3 },
  flexWrap: "wrap",
};

const textContent = (align: SectionTitleAlign): SxProps<Theme> => ({
  flex: 1,
  minWidth: 0,
  width: "100%",
  maxWidth: 880,
  textAlign: align === "center" ? "center" : "left",
});

const eyebrow: SxProps<Theme> = {
  display: "inline-block",
  color: "secondary.main",
  fontSize: { xs: 11, md: 12 },
  fontWeight: 800,
  lineHeight: 1.4,
  letterSpacing: ".18em",
  textTransform: "uppercase",
  mb: 1,
};

const title = (align: SectionTitleAlign): SxProps<Theme> => ({
  position: "relative",
  width: "100%",
  maxWidth: 820,
  color: "text.primary",
  fontSize: {
    xs: "clamp(2rem, 7.5vw, 2.5rem)",
    md: "clamp(2.4rem, 4vw, 3.2rem)",
    lg: "clamp(2.8rem, 3vw, 3.6rem)",
  },
  fontWeight: 900,
  lineHeight: 1.18,
  letterSpacing: "-0.025em",

  "&::after": {
    content: '""',
    display: "block",
    width: 44,
    height: 3,
    mt: 2,
    mx: align === "center" ? "auto" : 0,
    borderRadius: 999,
    bgcolor: "secondary.main",
  },
});

const subtitle: SxProps<Theme> = {
  maxWidth: 720,
  mt: 2,
  color: "text.secondary",
  fontSize: { xs: 15, md: 16 },
  lineHeight: 1.7,
};

const action: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

export default {
  container,
  top,
  textContent,
  eyebrow,
  title,
  subtitle,
  action,
};
