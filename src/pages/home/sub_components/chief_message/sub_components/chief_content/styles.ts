import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  maxWidth: 620,
  gap: 4,
  height: "100%",
  width: "100%",
};

const sectionTitle: SxProps<Theme> = {
  mb: 4,
  "& span": {
    display: "inline-block",
    marginBottom: "20px",
  },
  "& span + h2": {
    mt: 2,
  },
  "& h2": {
    fontSize: {
      xs: 36,
      md: 62,
    },
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
    fontWeight: 900,
  },
};

const description: SxProps<Theme> = {
  color: "text.secondary",
  lineHeight: 2,
  fontSize: 18,
  maxWidth: 620,
  letterSpacing: "0.01em",
  whiteSpace: "pre-line",
  mb: 4,
};

const description2: SxProps<Theme> = {
  color: "text.secondary",
  lineHeight: 1.9,
  fontSize: {
    xs: 16,
    md: 17,
  },
  maxWidth: 620,
  letterSpacing: "0.01em",
  whiteSpace: "pre-line",
  mb: 4,
};

const actionWrapper: SxProps<Theme> = {
  mt: 3.5,
  mb: 0,
};

export default {
  container,
  sectionTitle,
  description,
  description2,
  actionWrapper,
};
