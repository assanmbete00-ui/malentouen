import { useCallback, useEffect, type ReactElement } from "react";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import MediaWithSkeleton from "@components/media_with_skeleton";

import styles from "./styles";
import type { MediaLightboxProps } from "./types";

export default function MediaLightbox({
  open,
  items,
  activeIndex,
  labels,
  onClose,
  onChange,
}: MediaLightboxProps): ReactElement | null {
  const total = items.length;
  const activeItem = items[activeIndex];
  const hasMultipleItems = total > 1;

  const showPrevious = useCallback(() => {
    if (!hasMultipleItems) return;
    onChange(activeIndex === 0 ? total - 1 : activeIndex - 1);
  }, [activeIndex, hasMultipleItems, onChange, total]);

  const showNext = useCallback(() => {
    if (!hasMultipleItems) return;
    onChange(activeIndex === total - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, hasMultipleItems, onChange, total]);

  useEffect(() => {
    if (!open || !hasMultipleItems) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, hasMultipleItems, showPrevious, showNext]);

  if (!activeItem) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      maxWidth={false}
      sx={styles.dialog}
      slotProps={{ backdrop: { sx: styles.backdrop } }}
    >
      <Box sx={styles.root}>
        <Box sx={styles.header}>
          <Typography sx={styles.counter}>
            {activeIndex + 1} / {total}
          </Typography>

          <IconButton aria-label={labels.close} onClick={onClose} sx={styles.iconButton}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Box sx={styles.stage}>
          {hasMultipleItems && (
            <IconButton
              aria-label={labels.previous}
              onClick={showPrevious}
              sx={styles.previousButton}
            >
              <NavigateBeforeRoundedIcon />
            </IconButton>
          )}

          <Box sx={styles.mediaWrapper}>
            <MediaWithSkeleton
              src={activeItem.src}
              alt={activeItem.alt}
              type={activeItem.type ?? "image"}
              poster={activeItem.poster}
              objectFit="contain"
              objectPosition="center"
              sx={styles.media}
            />
          </Box>

          {hasMultipleItems && (
            <IconButton aria-label={labels.next} onClick={showNext} sx={styles.nextButton}>
              <NavigateNextRoundedIcon />
            </IconButton>
          )}
        </Box>

        <Box sx={styles.footer}>
          {activeItem.title && (
            <Typography component="p" sx={styles.title}>
              {activeItem.title}
            </Typography>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}