import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

const heading: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(0, 680px) auto",
  },
  alignItems: {
    xs: "start",
    md: "end",
  },
  columnGap: {
    md: 6,
    lg: 10,
  },
  rowGap: {
    xs: 3,
  },
};

const title: SxProps<Theme> = {
  minWidth: 0,
};

const action: SxProps<Theme> = {
  display: "flex",
  justifyContent: {
    xs: "flex-start",
    md: "flex-end",
  },
  alignItems: "center",
  pb: {
    md: 0.75,
  },
  whiteSpace: "nowrap",
};

const actionLink: SxProps<Theme> = {
  color: "text.secondary",
};

const description: SxProps<Theme> = {
  mt: {
    xs: 4,
    md: 5,
  },
  maxWidth: 760,
  color: "text.secondary",
  lineHeight: 1.8,
};

export default {
  container,
  heading,
  title,
  action,
  actionLink,
  description,
};