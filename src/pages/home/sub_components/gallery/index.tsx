import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Button from "@components/button";
import Section from "@components/section";

import useGallery from "./hooks/use_gallery";

import GalleryContent from "./sub_components/gallery_content";
import GalleryGrid from "./sub_components/gallery_grid";

import styles from "./styles";

export default function Gallery() {
  const gallery = useGallery();

  return (
    <Section
      id="gallery"
      variant="paper"
      containerSize="wide"
    >
      <Box sx={styles.container}>
        <GalleryContent
          {...gallery.content}
        />

        {gallery.options.showItems && (
          <GalleryGrid
            items={gallery.items}
          />
        )}

        {gallery.options.showAction && (
          <Box sx={styles.action}>
            <RouterLink
              to={gallery.action.href}
              style={{ textDecoration: "none" }}
            >
              <Button>
                {gallery.action.label}
              </Button>
            </RouterLink>
          </Box>
        )}
      </Box>
    </Section>
  );
}