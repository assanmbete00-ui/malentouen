import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  position: "relative",
  mt: { xs: 5, md: 7 },
  borderRadius: 4,
  overflow: "hidden",
  minHeight: { xs: 360, md: 460 },
  border: "1px solid",
  borderColor: "divider",
};

const image: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const overlay: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  background: (theme) =>
    `linear-gradient(90deg, 
        ${theme.palette.primary.main}E6 0%, 
        ${theme.palette.primary.main}99 50%, 
        ${theme.palette.primary.main}33 100%)` ,
};

const content: SxProps<Theme> = {
  position: "relative",
  zIndex: 1,
  minHeight: { xs: 360, md: 460 },
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  p: { xs: 3, md: 5 },
  maxWidth: 680,
};

const title: SxProps<Theme> = {
  color: "primary.contrastText",
  fontWeight: 900,
  fontSize: { xs: 28, md: 42 },
  lineHeight: 1.15,
};

const description: SxProps<Theme> = {
  mt: 2,
  color: "primary.contrastText",
  opacity: 0.9,
  fontSize: { xs: 15, md: 17 },
  lineHeight: 1.8,
};

const actionWrapper: SxProps<Theme> = {
  mt: 3,
};

export default {
  container,
  image,
  overlay,
  content,
  title,
  description,
  actionWrapper,
};