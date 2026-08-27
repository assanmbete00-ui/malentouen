import type { SxProps, Theme } from "@mui/material";

const card = (featured: boolean): SxProps<Theme> => ({
  display: "grid",
  gridTemplateRows: featured ? "minmax(280px, 1fr) auto" : "auto auto",
  height: "100%",
});

const media = (featured: boolean): SxProps<Theme> => ({
  width: "100%",
  aspectRatio: featured ? { xs: "16 / 10", md: "16 / 9" } : "4 / 3",
});

const content = (featured: boolean): SxProps<Theme> => ({
  p: { xs: 2.5, md: featured ? 3.5 : 3 },
});

const meta: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 1,
};

const date: SxProps<Theme> = {
  color: "text.primary",
  fontSize: 13,
  fontWeight: 800,
};

const category: SxProps<Theme> = {
  color: "secondary.main",
  fontSize: 11,
  fontWeight: 900,
  letterSpacing: ".12em",
  textTransform: "uppercase",
};

const title = (featured: boolean): SxProps<Theme> => ({
  mt: 1.5,
  color: "text.primary",
  fontSize: featured ? { xs: 22, md: 28 } : { xs: 19, md: 21 },
  fontWeight: 900,
  lineHeight: 1.3,
});

const details: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1,
  mt: 2,
};

const location: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: 14,
};

const time: SxProps<Theme> = {
  color: "text.primary",
  fontSize: 14,
  fontWeight: 800,
};

export default {
  card,
  media,
  content,
  meta,
  date,
  category,
  title,
  details,
  location,
  time,
};