import type { SxProps, Theme } from "@mui/material";

const layout: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "1.15fr 0.85fr",
  },
  gap: {
    xs: 4,
    md: 8,
  },
  alignItems: "center",
};

const content: SxProps<Theme> = {
  maxWidth: 720,
};

const title: SxProps<Theme> = {
  "& h2": {
    fontSize: {
      xs: "2rem",
      sm: "2.35rem",
      md: "2.65rem",
    },
    lineHeight: 1.12,
  },
};

const description: SxProps<Theme> = {
  mt: {
    xs: 2.5,
    md: 3,
  },
  color: "text.secondary",
  lineHeight: 1.8,
};

const note: SxProps<Theme> = {
  position: "relative",
  pl: {
    xs: 2.5,
    md: 4,
  },
  py: 1,
  color: "text.secondary",
  fontSize: {
    xs: "0.95rem",
    md: "1.05rem",
  },
  lineHeight: 1.8,

  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    borderRadius: 1,
    bgcolor: "primary.main",
  },
};

export default {
  layout,
  content,
  title,
  description,
  note,
};