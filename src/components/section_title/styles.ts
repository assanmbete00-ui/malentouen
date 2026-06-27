import type { SxProps, Theme } from "@mui/material";

import type { SectionTitleAlign } from "./types";

const container = (align: SectionTitleAlign): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,

  mb: {
    xs: 5,
    md: 6,
  },

  alignItems: align === "center" ? "center" : "flex-start",

  textAlign: align === "center" ? "center" : "left",

  maxWidth: align === "center" ? 760 : "100%",
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

  fontSize: 13,

  fontWeight: 800,

  letterSpacing: ".14em",

  textTransform: "uppercase",

  mb: 1,
};

const title = (align: SectionTitleAlign): SxProps<Theme> => ({
  position: "relative",

  fontWeight: 900,

  lineHeight: 1.15,

  color: "text.primary",

  "&::after": {
    content: '""',

    display: "block",

    width: 44,

    height: 3,

    borderRadius: 999,

    bgcolor: "secondary.main",

    mt: 2,

    mx: align === "center" ? "auto" : 0,
  },
});

const subtitle: SxProps<Theme> = {
  mt: 2,

  color: "text.secondary",

  lineHeight: 1.8,

  fontSize: {
    xs: 15,
    md: 16,
  },

  maxWidth: 680,
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