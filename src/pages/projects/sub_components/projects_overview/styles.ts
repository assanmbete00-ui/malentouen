import type { SxProps, Theme } from "@mui/material";

const title: SxProps<Theme> = {
  maxWidth: 720,
};

const layout: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
  },
  alignItems: "center",
  gap: {
    xs: 4,
    md: 6,
    lg: 8,
  },
};

const media: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "4 / 3",
  borderRadius: 1.5,
  overflow: "hidden",
};

const image: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  display: "block",
};

export default { layout, media, image, title };
