import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const chiefWrapper: SxProps<Theme> = {
  width: "100%",
  maxWidth: 680,
};

const chiefCard: SxProps<Theme> = {
  bgcolor: "primary.main",
  color: "primary.contrastText",
};

const chiefContent: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  p: {
    xs: 3,
    md: 4,
  },

  textAlign: "center",
};

const chiefTitle: SxProps<Theme> = {
  color: "inherit",
};

const chiefDescription: SxProps<Theme> = {
  mt: 1.5,
  maxWidth: 540,
  color: "inherit",
  opacity: 0.88,
};

const divider: SxProps<Theme> = {
  width: 2,
  height: {
    xs: 40,
    md: 52,
  },

  bgcolor: "secondary.main",
};

const grid: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    md: "repeat(3, minmax(0, 1fr))",
  },

  width: "100%",

  gap: {
    xs: 3,
    md: 4,
  },
};

const card: SxProps<Theme> = {
  height: "100%",
};

const cardContent: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  height: "100%",

  p: {
    xs: 3,
    md: 4,
  },

  textAlign: "center",
};

const cardTitle: SxProps<Theme> = {
  color: "text.primary",
};

const cardDescription: SxProps<Theme> = {
  mt: 1.5,
  color: "text.secondary",
};

export default {
  content,
  chiefWrapper,
  chiefCard,
  chiefContent,
  chiefTitle,
  chiefDescription,
  divider,
  grid,
  card,
  cardContent,
  cardTitle,
  cardDescription,
};