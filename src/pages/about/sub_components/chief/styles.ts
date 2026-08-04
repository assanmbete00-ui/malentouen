import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "1.15fr 0.85fr",
  },

  alignItems: "center",

  gap: {
    xs: 5,
    md: 7,
  },
};

const body: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

const descriptions: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  gap: 3,
};

const signature: SxProps<Theme> = {
  mt: {
    xs: 4,
    md: 5,
  },

  pt: 3,

  borderTop: "2px solid",
  borderColor: "secondary.main",
  width: "fit-content",
};

const signatureName: SxProps<Theme> = {
  fontWeight: 700,
  color: "text.primary",
};

const signatureTitle: SxProps<Theme> = {
  mt: 0.5,
  color: "secondary.main",
};

const imageWrapper: SxProps<Theme> = {
  overflow: "hidden",
  borderRadius: 4,
  border: "1px solid",
  borderColor: "divider",
  bgcolor: "background.paper",
};

const image: SxProps<Theme> = {
  display: "block",
  width: "100%",

  aspectRatio: {
    xs: "4 / 5",
    md: "3 / 4",
  },

  objectFit: "cover",
};

export default {
  content,
  body,
  descriptions,
  signature,
  signatureName,
  signatureTitle,
  imageWrapper,
  image,
};