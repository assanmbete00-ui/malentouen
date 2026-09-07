import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  alignItems: {
    xs: "stretch",
    md: "center",
  },
  justifyContent: "space-between",
  gap: {
    xs: 3,
    md: 6,
  },
  pt: {
    xs: 4,
    md: 5,
  },
  borderTop: "1px solid",
  borderColor: "divider",
};

const content: SxProps<Theme> = {
  maxWidth: {
    xs: "100%",
    md: "680px",
  },
};

const title: SxProps<Theme> = {
  fontSize: {
    xs: "1.6rem",
    sm: "1.9rem",
    md: "2.15rem",
  },
  fontWeight: 700,
  mb: 2,
};

const description: SxProps<Theme> = {
  fontSize: {
    xs: "0.95rem",
    md: "1.1rem",
  },
  color: "text.secondary",
  mb: {
    xs: 0,
    md: 1,
  },
  maxWidth: {
    xs: "100%",
    md: "600px",
  },
  lineHeight: 1.7,
};

const actionBox: SxProps<Theme> = {
  flexShrink: 0,
};

const button: SxProps<Theme> = {
  px: {
    xs: 3,
    md: 3.5,
  },
  py: {
    xs: 1.2,
    md: 1.3,
  },
  fontSize: {
    xs: "0.95rem",
    md: "1rem",
  },
};

export default {
  container,
  content,
  title,
  description,
  actionBox,
  button,
};
