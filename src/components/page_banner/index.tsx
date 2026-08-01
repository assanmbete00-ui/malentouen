import { Box, Typography } from "@mui/material";

import Breadcrumb from "../breadcrumb";
import Container from "../container";

import styles from "./styles";
import type { PageBannerProps } from "./types";

export default function PageBanner({
  background,
  breadcrumb,
  eyebrow,
  title,
  description,
  children,
  sx,
}: PageBannerProps) {
  const hasBreadcrumb = Boolean(breadcrumb?.length);

  return (
    <Box
      component="header"
      sx={[
        styles.root,
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Box
        component="img"
        src={background.image}
        alt={background.alt ?? ""}
        aria-hidden={background.alt ? undefined : true}
        draggable={false}
        sx={styles.background(background.position ?? "center")}
      />

      <Box
        aria-hidden="true"
        sx={styles.overlay}
      />

      <Box
        aria-hidden="true"
        sx={styles.depthOverlay}
      />

      <Container>
        <Box sx={styles.container}>
          <Box sx={styles.content}>
            {hasBreadcrumb && (
              <Breadcrumb
                items={breadcrumb!}
                sx={styles.breadcrumb}
              />
            )}

            {eyebrow && (
              <Typography
                component="span"
                sx={styles.eyebrow}
              >
                {eyebrow}
              </Typography>
            )}

            <Typography
              component="h1"
              variant="h1"
              sx={styles.title}
            >
              {title}
            </Typography>

            {description && (
              <Typography
                component="p"
                variant="body1"
                sx={styles.description}
              >
                {description}
              </Typography>
            )}

            {children && (
              <Box sx={styles.children}>
                {children}
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}