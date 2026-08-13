import type { SxProps, Theme } from "@mui/material";
import type { SectionTitleAlign } from "./types";

const container = (align: SectionTitleAlign): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  mb: { xs: 4, md: 5 },
  alignItems: align === "center" ? "center" : "flex-start",
  textAlign: align === "center" ? "center" : "left",
  maxWidth: align === "center" ? 760 : "100%",
  mx: align === "center" ? "auto" : 0,
});

const top: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: 3,
  flexWrap: "wrap",
};

const textContent = (align: SectionTitleAlign): SxProps<Theme> => ({
  flex: 1,
  minWidth: 280,
  textAlign: align === "center" ? "center" : "left",
});

const eyebrow: SxProps<Theme> = {
  display: "inline-block",
  color: "secondary.main",
  fontSize: 14,
  fontWeight: 800,
  lineHeight: 1.4,
  letterSpacing: ".18em",
  textTransform: "uppercase",
  mb: 1,
};

const title = (align: SectionTitleAlign): SxProps<Theme> => ({
  position: "relative",
  color: "text.primary",
  fontWeight: 900,
  lineHeight: 1.15,

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
  maxWidth: 680,
  mt: 2,
  color: "text.secondary",
  fontSize: { xs: 15, md: 16 },
  lineHeight: 1.8,
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