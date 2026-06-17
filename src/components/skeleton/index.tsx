import { useEffect, useState, type ReactNode } from "react";
import { Box, Skeleton, Typography, type SxProps, type Theme } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ImageIcon from "@mui/icons-material/Image";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

import styles from "./styles";

type MediaType = "image" | "video";

type MediaWithSkeletonProps = {
  src: string;
  type: MediaType;
  alt?: string;
  poster?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  objectFit?: React.CSSProperties["objectFit"];
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  sx?: SxProps<Theme>;
  onLoad?: () => void;
  onClick?: () => void;
};

export default function MediaWithSkeleton({
  src,
  type,
  alt = "",
  poster,
  width = "100%",
  height = 200,
  borderRadius = 2,
  objectFit = "cover",
  controls = true,
  autoPlay = false,
  muted = true,
  sx,
  onLoad,
  onClick,
}: MediaWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(Boolean(src));
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(Boolean(src));
    setHasError(false);
  }, [src]);

  const handleMediaLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleMediaError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const skeletonIcon: ReactNode =
    type === "video" ? (
      <PlayCircleIcon sx={styles.loadingIcon} />
    ) : (
      <ImageIcon sx={styles.loadingIcon} />
    );

  if (!src || hasError) {
    return (
      <Box sx={[styles.container(width, height, borderRadius), ...(Array.isArray(sx) ? sx : [sx])]}>
        <Box sx={styles.errorBox(borderRadius)} onClick={onClick}>
          <BrokenImageIcon sx={styles.errorIcon} />
          <Typography variant="caption" color="text.secondary" sx={styles.errorText}>
            {type === "video" ? "Impossible de charger la vidéo" : "Impossible de charger l’image"}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={[styles.container(width, height, borderRadius), ...(Array.isArray(sx) ? sx : [sx])]}>
      {isLoading && (
        <Box sx={styles.loadingBox}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
            sx={styles.skeleton}
          />
          <Box sx={styles.iconWrapper}>{skeletonIcon}</Box>
        </Box>
      )}

      {type === "video" ? (
        <Box
          component="video"
          src={src}
          poster={poster}
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          onLoadedData={handleMediaLoad}
          onError={handleMediaError}
          onClick={onClick}
          sx={styles.media(objectFit, borderRadius, isLoading, Boolean(onClick))}
        />
      ) : (
        <Box
          component="img"
          src={src}
          alt={alt}
          onLoad={handleMediaLoad}
          onError={handleMediaError}
          onClick={onClick}
          sx={styles.media(objectFit, borderRadius, isLoading, Boolean(onClick))}
        />
      )}
    </Box>
  );
}