import { Box } from "@mui/material";

import useHero from "./hooks/use_hero";

import HeroBackground from "./sub_components/hero_background";
import HeroContent from "./sub_components/hero_content";
import HeroOverlay from "./sub_components/hero_overlay";
import HeroStatistics from "./sub_components/hero_statistics";

import styles from "./styles";

export default function Hero() {
  const hero = useHero();

  return (
    <Box component="section" sx={styles.root}>
      <HeroBackground />

      <HeroOverlay />

      <Box sx={styles.contentWrapper}>
        <Box sx={styles.contentInner}>
          <HeroContent {...hero.content} />

          {hero.showStatistics && (
            <HeroStatistics statistics={hero.statistics} />
          )}
        </Box>
      </Box>
    </Box>
  );
}