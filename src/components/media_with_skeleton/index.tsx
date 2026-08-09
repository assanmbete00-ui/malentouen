import {
  useEffect,
  useState,
  type ReactElement,
} from "react";

import {
  Box,
  Skeleton,
  Typography,
} from "@mui/material";

import BrokenImageRoundedIcon from
  "@mui/icons-material/BrokenImageRounded";
import ImageRoundedIcon from
  "@mui/icons-material/ImageRounded";
import PlayCircleRoundedIcon from
  "@mui/icons-material/PlayCircleRounded";

import styles from "./styles";
import type {
  MediaWithSkeletonProps,
} from "./types";

export default function MediaWithSkeleton({
  src,
  alt,
  type = "image",
  poster,
  objectFit = "cover",
  objectPosition = "center",
  controls = true,
  autoPlay = false,
  muted = true,
  loop = false,
  errorContent,
  sx,
  onLoad,
  onError,
  onClick,
}: MediaWithSkeletonProps): ReactElement {
  const [isLoading, setIsLoading] =
    useState(Boolean(src));

  const [hasError, setHasError] =
    useState(!src);

  useEffect(() => {
    setIsLoading(Boolean(src));
    setHasError(!src);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  const rootSx = [
    styles.root,
    ...(Array.isArray(sx)
      ? sx
      : sx
        ? [sx]
        : []),
  ];

  const mediaSx = styles.media(
    objectFit,
    objectPosition,
    isLoading,
    Boolean(onClick),
  );

  if (hasError) {
    return (
      <Box sx={rootSx}>
        <Box
          role="img"
          aria-label={alt}
          onClick={onClick}
          sx={styles.errorBox(
            Boolean(onClick),
          )}
        >
          <BrokenImageRoundedIcon
            sx={styles.errorIcon}
          />

          {errorContent && (
            <Typography
              component="div"
              variant="body2"
              sx={styles.errorContent}
            >
              {errorContent}
            </Typography>
          )}
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={rootSx}>
      {isLoading && (
        <Box sx={styles.loadingBox}>
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={styles.skeleton}
          />

          <Box sx={styles.iconWrapper}>
            {type === "video" ? (
              <PlayCircleRoundedIcon
                sx={styles.loadingIcon}
              />
            ) : (
              <ImageRoundedIcon
                sx={styles.loadingIcon}
              />
            )}
          </Box>
        </Box>
      )}

      {type === "video" ? (
        <Box
          component="video"
          src={src}
          poster={poster}
          aria-label={alt}
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          onLoadedData={handleLoad}
          onError={handleError}
          onClick={onClick}
          sx={mediaSx}
        />
      ) : (
        <Box
          component="img"
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          onClick={onClick}
          sx={mediaSx}
        />
      )}
    </Box>
  );
}