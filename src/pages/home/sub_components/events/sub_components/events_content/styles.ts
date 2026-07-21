import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(0, 720px) auto",
  },
  gridTemplateAreas: {
    xs: `
      "title"
      "description"
      "action"
    `,
    md: `
      "title action"
      "description description"
    `,
  },
  columnGap: {
    md: 6,
    lg: 10,
  },
  rowGap: {
    xs: 3,
    md: 0,
  },
  alignItems: {
    xs: "start",
    md: "end",
  },
};

const heading: SxProps<Theme> = {
  display: "contents",
};

const title: SxProps<Theme> = {
  gridArea: "title",
  minWidth: 0,
};

const action: SxProps<Theme> = {
  gridArea: "action",
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
  gridArea: "description",
  mt: {
    xs: 0,
    md: 3,
  },
  maxWidth: 720,
  color: "text.secondary",
  lineHeight: 1.8,
  fontSize: {
    xs: 16,
    md: 17,
  },
};

export default {
  container,
  heading,
  title,
  action,
  actionLink,
  description,
};