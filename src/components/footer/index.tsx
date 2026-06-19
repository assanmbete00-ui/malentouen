import { Box } from "@mui/material";

import FooterBrand from "./sub_components/footer_brand";
import FooterNavigation from "./sub_components/footer_navigation";
import FooterContact from "./sub_components/footer_contact";
import FooterSocials from "./sub_components/footer_socials";
import FooterBottom from "./sub_components/footer_bottom";

import styles from "./styles";

export default function Footer() {
  return (
    <Box component="footer" sx={styles.root}>
      <Box sx={styles.inner}>
        <Box sx={styles.grid}>
          <FooterBrand />

          <FooterNavigation />

          <FooterContact />

          <FooterSocials />
        </Box>

        <FooterBottom />
      </Box>
    </Box>
  );
}