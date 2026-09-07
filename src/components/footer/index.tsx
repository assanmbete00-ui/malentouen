import { Box } from "@mui/material";

import FooterBrand from "./sub_components/footer_brand";
import FooterNavigation from "./sub_components/footer_navigation";
import FooterPatrimony from "./sub_components/footer_patrimony";
import FooterContact from "./sub_components/footer_contact";
import FooterBottom from "./sub_components/footer_bottom";

import styles from "./styles";
import useFooter from "./hooks/use_footer";
import { FOOTER_CONFIG } from "./config/footer_config";

export default function Footer() {
  const data = useFooter();

  return (
    <Box component="footer" sx={styles.root}>
      <Box sx={styles.inner}>
        <Box sx={styles.main}>
          <FooterBrand
            slogan={data.brand.slogan}
            description={data.brand.description}
            showSocials={FOOTER_CONFIG.SHOW_SOCIALS}
            socials={data.socials}
          />
          <FooterNavigation
            items={data.navigation}
            title={data.navigationTitle}
          />
          {FOOTER_CONFIG.SHOW_PATRIMONY && (
            <FooterPatrimony {...data.patrimony} />
          )}
          {FOOTER_CONFIG.SHOW_CONTACT && <FooterContact {...data.contact} />}
        </Box>

        <FooterBottom {...data.bottom} />
      </Box>
    </Box>
  );
}
