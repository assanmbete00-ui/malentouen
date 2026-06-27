import { Box } from "@mui/material";

import FooterBrand from "./sub_components/footer_brand";
import FooterNavigation from "./sub_components/footer_navigation";
import FooterPatrimony from "./sub_components/footer_patrimony";
import FooterContact from "./sub_components/footer_contact";
import FooterBottom from "./sub_components/footer_bottom";

import styles from "./styles";

export default function Footer() {
  return (
    <Box component="footer" sx={styles.root}>
      <Box sx={styles.inner}>
        <Box sx={styles.main}>
          <FooterBrand />
          <FooterNavigation />
          <FooterPatrimony />
          <FooterContact />
        </Box>

        <FooterBottom />
      </Box>
    </Box>
  );
}