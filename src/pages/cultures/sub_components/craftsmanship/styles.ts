import type {
  SxProps,
  Theme,
} from "@mui/material";

const gallery: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "1.15fr 0.85fr",
  },

  gap: {
    xs: 3,
    md: 4,
  },
};

const featured: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  minWidth: 0,
};

const featuredMedia: SxProps<Theme> = {
  width: "100%",

  aspectRatio: {
    xs: "4 / 3",
    sm: "16 / 11",
    lg: "4 / 5",
  },

  borderRadius: 1.5,

  border: "1px solid",
  borderColor: "divider",
};

const featuredContent: SxProps<Theme> = {
  pt: {
    xs: 2.5,
    md: 3,
  },
};

const secondary: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "1fr",
  },

  gap: {
    xs: 3,
    md: 4,
  },
};

const secondaryItem: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "0.85fr 1.15fr",
    sm: "1fr",
    lg: "0.85fr 1.15fr",
  },

  alignItems: "center",

  gap: {
    xs: 2,
    md: 3,
  },

  minWidth: 0,
};

const secondaryMedia: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "1 / 1",

  borderRadius: 1,

  border: "1px solid",
  borderColor: "divider",
};

const category: SxProps<Theme> = {
  color: "secondary.main",

  fontSize: 12,
  fontWeight: 800,

  letterSpacing: ".12em",
  textTransform: "uppercase",
};

const title: SxProps<Theme> = {
  mt: 1,

  color: "text.primary",
};

const description: SxProps<Theme> = {
  mt: 1.5,

  color: "text.secondary",
};

const closing: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    md: "0.9fr 1.1fr",
  },

  alignItems: "stretch",

  gap: {
    xs: 3,
    md: 5,
  },

  mt: {
    xs: 4,
    md: 5,
  },

  p: {
    xs: 3,
    md: 4,
  },

  bgcolor: "background.paper",

  border: "1px solid",
  borderColor: "divider",

  borderRadius: 1,
};

const closingMedia: SxProps<Theme> = {
  width: "100%",

  aspectRatio: {
    xs: "4 / 3",
    md: "16 / 10",
  },

  borderRadius: 1,
};

const closingContent: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  py: {
    md: 2,
  },
};

export default {
  gallery,

  featured,
  featuredMedia,
  featuredContent,

  secondary,
  secondaryItem,
  secondaryMedia,

  category,
  title,
  description,

  closing,
  closingMedia,
  closingContent,
};