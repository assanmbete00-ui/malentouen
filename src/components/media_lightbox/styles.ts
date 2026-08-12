import { alpha } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material";

const dialog: SxProps<Theme> = {
  "& .MuiDialog-paper": {
    width: "100%",
    maxWidth: "none",
    height: "100%",
    maxHeight: "none",
    m: 0,
    bgcolor: "transparent",
    backgroundImage: "none",
    boxShadow: "none",
  },
};

const backdrop: SxProps<Theme> = {
  bgcolor: (theme) => alpha(theme.palette.primary.dark, 0.97),
};

const root: SxProps<Theme> = {
  position: "relative",
  display: "grid",
  gridTemplateRows: "auto minmax(0, 1fr) auto",
  width: "100%",
  height: "100%",
  px: { xs: 1.5, sm: 3, md: 5 },
  py: { xs: 1.5, sm: 2, md: 3 },
};

const header: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
  minHeight: 48,
  mb: { xs: 1, md: 2 },
};

const counter: SxProps<Theme> = {
  color: (theme) => alpha(theme.palette.primary.contrastText, 0.72),
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: ".08em",
};

const iconButton: SxProps<Theme> = {
  color: "primary.contrastText",
  bgcolor: (theme) => alpha(theme.palette.background.paper, 0.1),
  border: "1px solid",
  borderColor: (theme) => alpha(theme.palette.secondary.main, 0.35),
  backdropFilter: "blur(10px)",
  transition: "background-color .2s ease, border-color .2s ease, transform .2s ease",

  "&:hover": {
    bgcolor: (theme) => alpha(theme.palette.secondary.main, 0.18),
    borderColor: "secondary.main",
  },

  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "secondary.main",
    outlineOffset: 3,
  },
};

const stage: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 0,
  minHeight: 0,
  overflow: "hidden",
};

const mediaWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  minWidth: 0,
  minHeight: 0,
  px: { xs: 0, sm: 6, md: 8 },
};

const media: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  maxWidth: 1440,
  maxHeight: "100%",
  objectFit: "contain",
};

const navigationButton: SxProps<Theme> = {
  ...iconButton,
  position: "absolute",
  top: "50%",
  zIndex: 2,
  transform: "translateY(-50%)",
  width: { xs: 40, sm: 48 },
  height: { xs: 40, sm: 48 },
};

const previousButton: SxProps<Theme> = {
  ...navigationButton,
  left: { xs: 0, sm: 4 },
};

const nextButton: SxProps<Theme> = {
  ...navigationButton,
  right: { xs: 0, sm: 4 },
};

const footer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: { xs: 52, md: 64 },
  pt: { xs: 1.5, md: 2 },
};

const title: SxProps<Theme> = {
  maxWidth: 900,
  color: "primary.contrastText",
  textAlign: "center",
  fontSize: { xs: 14, sm: 15, md: 17 },
  fontWeight: 700,
  lineHeight: 1.5,
};

export default {
  dialog,
  backdrop,
  root,
  header,
  counter,
  iconButton,
  stage,
  mediaWrapper,
  media,
  previousButton,
  nextButton,
  footer,
  title,
};