import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(0, 1.4fr) minmax(0, 1fr)",
  },
  gap: {
    xs: 3,
    md: 4,
  },
  mt: {
    xs: 5,
    md: 6,
  },
};

const featured: SxProps<Theme> = {
  minWidth: 0,
};

const secondary: SxProps<Theme> = {
  display: "grid",
  gridTemplateRows: {
    xs: "none",
    md: "repeat(2, minmax(0, 1fr))",
  },
  gap: {
    xs: 3,
    md: 4,
  },
  minWidth: 0,
};

const additional: SxProps<Theme> = {
  display: "grid",
  gridColumn: {
    xs: "auto",
    md: "1 / -1",
  },
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "repeat(3, minmax(0, 1fr))",
  },
  gap: {
    xs: 3,
    md: 4,
  },
  minWidth: 0,
};

const card = (isFeatured: boolean): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  borderRadius: 1.5,
  overflow: "hidden",
  ...(isFeatured ? { minHeight: { md: "100%" } } : {}),
});

const media = (isFeatured: boolean): SxProps<Theme> => ({
  width: "100%",
  aspectRatio: isFeatured ? { xs: "4 / 3", md: "4 / 3" } : "16 / 9",
  overflow: "hidden",
  bgcolor: "background.default",
});

const image: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  display: "block",
};

const content = (isFeatured: boolean): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  p: {
    xs: 2.5,
    md: isFeatured ? 4 : 3,
  },
});

const cardTitle = (isFeatured: boolean): SxProps<Theme> => ({
  color: "text.primary",
  fontSize: isFeatured ? { xs: 22, md: 28 } : { xs: 19, md: 21 },
  fontWeight: 900,
  lineHeight: 1.35,
});

const description: SxProps<Theme> = {
  mt: 1.5,
  color: "text.secondary",
  fontSize: {
    xs: 15,
    md: 16,
  },
  lineHeight: 1.75,
};

export default {
  grid,
  featured,
  secondary,
  additional,
  card,
  media,
  image,
  content,
  cardTitle,
  description,
};
