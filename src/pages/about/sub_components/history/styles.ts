import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    lg: "0.95fr 1.05fr",
  },
  alignItems: "start",
  gap: {
    xs: 5,
    md: 7,
    lg: 9,
  },
};

const editorial: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

const descriptions: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2.5,
};

const description: SxProps<Theme> = {
  color: "text.secondary",
};

const media: SxProps<Theme> = {
  width: "100%",
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
    xs: "4 / 3",
    md: "16 / 11",
  },
  objectFit: "cover",
};

const timeline: SxProps<Theme> = {
  position: "relative",
  display: "grid",
  gap: {
    xs: 3,
    md: 4,
  },
  mt: {
    xs: 5,
    md: 7,
  },
  pl: {
    xs: 3,
    md: 4,
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 8,
    bottom: 8,
    left: {
      xs: 5,
      md: 7,
    },
    width: 2,
    bgcolor: "divider",
  },
};

const timelineItem: SxProps<Theme> = {
  position: "relative",
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "180px 1fr",
  },
  gap: {
    xs: 1,
    md: 4,
  },
  pb: {
    xs: 2,
    md: 3,
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 6,
    left: {
      xs: -24,
      md: -33,
    },
    width: 12,
    height: 12,
    borderRadius: "50%",
    bgcolor: "secondary.main",
    border: "3px solid",
    borderColor: "background.paper",
  },
};

const period: SxProps<Theme> = {
  color: "secondary.main",
  fontSize: 13,
  fontWeight: 800,
  lineHeight: 1.5,
  letterSpacing: ".12em",
  textTransform: "uppercase",
};

const timelineContent: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

const timelineTitle: SxProps<Theme> = {
  color: "text.primary",
};

const timelineDescription: SxProps<Theme> = {
  color: "text.secondary",
};

export default {
  content,
  editorial,
  descriptions,
  description,
  media,
  image,
  timeline,
  timelineItem,
  period,
  timelineContent,
  timelineTitle,
  timelineDescription,
};